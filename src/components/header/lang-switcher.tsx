'use client'

import Link from 'next/link'
import { i18n } from '@/../i18n'
import { usePathname, useRouter } from 'next/navigation';

interface HeaderProps {
  lang: string;
}

export const LangSwitcher = ({ lang }: HeaderProps) => {
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
  return (
    <select onChange={(e) => handleChangeLocale(e.target.value)} defaultValue={lang} className='font-bold uppercase px-1 bg-gray-950 rounded-xl text-gray-50'>
      {i18n.locales.map((locale) => {
        return (
          <option key={locale} value={locale}>
            {locale}
          </option>
        )
      })}
    </select>
  )
}