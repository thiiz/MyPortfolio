'use client'
import { i18n } from '@/../i18n'
import { LangSwitcher as Switcher } from '@/components/lang_switcher'
import { useLangSwitcher } from './useLangSwitcher';

interface HeaderProps {
  lang: string;
}

export const LangSwitcher = ({ lang }: HeaderProps) => {
  const { handleChangeLocale } = useLangSwitcher({ lang })
  return (
    <Switcher.Root onChange={(e) => handleChangeLocale(e.target.value)} defaultValue={lang}>
      {i18n.locales.map((locale) => {
        return (
          <Switcher.Option key={locale} value={locale}>
            {locale}
          </Switcher.Option>
        )
      })}
    </Switcher.Root >
  )
}