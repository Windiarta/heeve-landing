"use client"
import { useState } from 'react'

interface ContactCopy {
  title?: string
  name?: string
  phone?: string
  message?: string
  send?: string
  sending?: string
  success?: string
}

export default function ContactForm({ copy = {} as ContactCopy, locale }: { copy?: ContactCopy, locale?: string }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      })
      if (!res.ok) throw new Error('Gagal mengirim pesan.')
      setSuccess(true)
      setForm({ name: '', phone: '', message: '' })
  } catch (err) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan.'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-transparent px-4 md:px-16 scroll-mt-24" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{copy.title ?? 'Hubungi Kami'}</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/5 rounded-xl shadow-lg p-8 flex flex-col gap-6 text-gray-100 border border-white/10">
        <input
          type="text"
          name="name"
          placeholder={copy.name ?? 'Nama'}
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder={copy.phone ?? 'No. HP'}
          value={form.phone}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <textarea
          name="message"
          placeholder={copy.message ?? 'Pesan'}
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg disabled:opacity-60"
        >
          {loading ? (copy.sending ?? 'Mengirim...') : (copy.send ?? 'Kirim Pesan')}
        </button>
        {success && <p className="text-green-700 dark:text-green-400 text-center">{copy.success ?? 'Pesan berhasil dikirim!'}</p>}
        {error && <p className="text-red-700 dark:text-red-400 text-center">{error}</p>}
      </form>
    </section>
  )
} 