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
    <header className='container mx-auto relative pb-12'>
      <div className='flex justify-between px-4 py-2 fixed bg-gray-950 z-10 top-0 left-0 w-full'>
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