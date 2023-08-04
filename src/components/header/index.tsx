import { Logo } from '../logo'
import { MobileMenu } from './mobile/mobile_menu'
import { LangSwitcher } from './lang_switcher'
import { LangProps } from '@/@types/LangProps'
import { getDictionary } from '@/utils/getDictionary'
import { navRoutes } from '@/routes'

interface HeaderProps {
  lang: LangProps
}

export const Header = async ({ lang }: HeaderProps) => {
  const dictionary = await getDictionary(lang)
  const { routes } = navRoutes({ dictionary })
  return (
    <header className='bg-gray-950 container mx-auto px-4 py-2 z-50 absolute top-0 left-0'>
      <div className='flex justify-between '>
        <div className='flex items-center gap-1.5'>
          <Logo.Icon />
          <Logo.Text />
        </div>
        <div className='hidden lg:block'>
          <LangSwitcher lang={lang} />
        </div>
        <MobileMenu lang={lang} routes={routes} />
      </div>
    </header >
  )
}