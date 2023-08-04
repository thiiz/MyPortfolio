import { usePathname, useRouter } from "next/navigation"

export const useLangSwitcher = ({ lang }: { lang: string }) => {
  const path = usePathname()
  const { push } = useRouter()
  const redirectPathname = ({ locale }: { locale: string }) => {
    if (!path)
      return '/'
    const segments = path.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  const handleChangeLocale = (locale: string) => {
    if (lang === locale)
      return
    const newLocale = redirectPathname({ locale })
    push(newLocale)
  }
  return {
    handleChangeLocale
  }
}