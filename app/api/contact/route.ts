import { NextResponse } from 'next/server'
import { getDictionary } from '../../i18n/dictionaries'
import { isLocale, Locale } from '../../i18n/config'

export async function POST(req: Request) {
  const { name, phone, email, message, locale } = await req.json()
  const effectiveLocale: Locale = isLocale(locale) ? locale : 'id'
  const dict = await getDictionary(effectiveLocale)
  const recipient = process.env.CONTACT_EMAIL || dict.contactEmail
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const userAgent = req.headers.get('user-agent') || 'unknown'

  console.log('Contact request received', {
    name,
    phone,
    email, // optional, kept for backward compatibility
    locale: effectiveLocale,
    ip,
    userAgent,
  })

  // Notification fanout: email-like services without passwords (Slack webhook, Telegram, Google Forms)
  const promises: Promise<unknown>[] = []

  // Discord Webhook (set env DISCORD_WEBHOOK_URL) — easiest, no bot needed
  if (process.env.DISCORD_WEBHOOK_URL) {
    const discordPayload = {
      content: `[New contact message]\n\nTime: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}\nFrom: **${name}**\nPhone: ${phone ?? '-'}\nLocale: ${effectiveLocale}\n\nMessage: ${message}`,
    }
    promises.push(
      fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordPayload),
      })
        .then((res) => {
          console.log('Discord webhook status', res.status)
        })
        .catch((err) => {
          console.error('Discord webhook error', err)
        })
    )
  }

  // Discord Bot API (set env DISCORD_BOT_TOKEN and DISCORD_CHANNEL_ID)
  if (process.env.DISCORD_BOT_TOKEN && process.env.DISCORD_CHANNEL_ID) {
    const botUrl = `https://discord.com/api/v10/channels/${process.env.DISCORD_CHANNEL_ID}/messages`
    const botPayload = {
      content: `[New contact message]\n\nTime: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })}\nFrom: **${name}**\nPhone: ${phone ?? '-'}\nLocale: ${effectiveLocale}\nTo: ${recipient}\nMessage: ${message}`,
      allowed_mentions: { parse: [] as string[] },
    }
    promises.push(
      fetch(botUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
        body: JSON.stringify(botPayload),
      })
        .then((res) => {
          console.log('Discord bot status', res)
        })
        .catch((err) => {
          console.error('Discord bot error', err)
        })
    )
  }

  // Slack Incoming Webhook (set env SLACK_WEBHOOK_URL)
  if (process.env.SLACK_WEBHOOK_URL) {
    promises.push(
      fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New contact message\nFrom: ${name}\nPhone: ${phone ?? '-'}\nLocale: ${effectiveLocale}\nTo: ${recipient}\nMessage: ${message}`,
        }),
      })
        .then((res) => {
          console.log('Slack webhook status', res.status)
        })
        .catch((err) => {
          console.error('Slack webhook error', err)
        })
    )
  }

  // Telegram bot (set env TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID)
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`
    const telegramBody = {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `New contact message\nFrom: ${name}\nPhone: ${phone ?? '-'}\nLocale: ${effectiveLocale}\nTo: ${recipient}\nMessage: ${message}`,
      parse_mode: 'HTML',
    }
    promises.push(
      fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(telegramBody),
      })
        .then((res) => {
          console.log('Telegram sendMessage status', res.status)
        })
        .catch((err) => {
          console.error('Telegram sendMessage error', err)
        })
    )
  }

  // Google Forms submit (set env GOOGLE_FORMS_ACTION_URL with formResponse endpoint and field IDs below)
  if (
    process.env.GOOGLE_FORMS_ACTION_URL &&
    process.env.GFORM_FIELD_NAME &&
    process.env.GFORM_FIELD_MESSAGE &&
    (process.env.GFORM_FIELD_PHONE || process.env.GFORM_FIELD_EMAIL)
  ) {
    const formData = new URLSearchParams()
    formData.append(process.env.GFORM_FIELD_NAME, name)
    if (process.env.GFORM_FIELD_PHONE && phone) {
      formData.append(process.env.GFORM_FIELD_PHONE, phone)
    } else if (process.env.GFORM_FIELD_EMAIL && email) {
      formData.append(process.env.GFORM_FIELD_EMAIL, email)
    }
    formData.append(process.env.GFORM_FIELD_MESSAGE, message)
    formData.append('locale', effectiveLocale)
    formData.append('recipient', recipient)
    // Some Google Forms expect a submit field
    formData.append('submit', 'Submit')
    promises.push(
      fetch(process.env.GOOGLE_FORMS_ACTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          ...(process.env.GOOGLE_FORMS_REFERER ? { 'Referer': process.env.GOOGLE_FORMS_REFERER } : {}),
        },
        body: formData.toString(),
        // Google Forms usually allows CORS-less posting server-side
      })
        .then(async (res) => {
          console.log('Google Forms status', res.status)
          if (!res.ok) {
            try {
              const text = await res.text()
              console.error('Google Forms response body (truncated)', text.slice(0, 500))
            } catch (e) {
              // ignore
            }
          }
        })
        .catch((err) => {
          console.error('Google Forms error', err)
        })
    )
  }

  // Fallback: log to server console
  console.log('Contact message', { to: recipient, effectiveLocale, name, email, message })

  // Wait up to 2s for notifications (do not block response indefinitely)
  await Promise.race([
    Promise.all(promises),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ])

  console.log('Contact notifications dispatched', { name, email, locale: effectiveLocale })

  return NextResponse.json({ success: true })
}