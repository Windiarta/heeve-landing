export const locales = ["id", "en"] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = "en"

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}


