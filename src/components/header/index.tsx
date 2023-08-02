import ButtonHamburguer from '../hamburguer'
import { Logo } from '../logo'
import { LangSwitcher } from './lang-switcher'

interface HeaderProps {
  lang: string
}

export const Header = ({ lang }: HeaderProps) => {
  return (
    <header>
      <div className='flex items-center gap-1.5'>
        <Logo.Icon />
        <Logo.Text />
      </div>
      <LangSwitcher lang={lang} />
      <ButtonHamburguer />
    </header>
  )
}