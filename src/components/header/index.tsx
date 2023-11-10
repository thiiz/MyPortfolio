import { Logo } from '../logo'
import { MobileMenu } from './mobile/mobile_menu'
import { LangProps } from '@/@types/LangProps'
import { getDictionary } from '@/utils/getDictionary'
import { navRoutes } from '@/routes'
import { DesktopKLinks } from './desktop'

interface HeaderProps {
  lang: LangProps
}

export const Header = async ({ lang }: HeaderProps) => {
  const dictionary = (await getDictionary(lang)).header
  const { routes } = navRoutes({ dictionary: dictionary })

  return (
    <header className='container mx-auto relative pb-14'>
      <div className='flex justify-between lg:justify-center px-4 py-2 fixed bg-gray-950 z-10 top-0 left-0 w-full'>
        <div className='flex justify-between container'>
          <div className='flex items-center gap-1.5'>
            <Logo.Icon />
            <Logo.Text />
          </div>
          <DesktopKLinks lang={lang} routes={routes} />
        </div>
        <MobileMenu lang={lang} routes={routes} />
      </div>
    </header >
  )
}