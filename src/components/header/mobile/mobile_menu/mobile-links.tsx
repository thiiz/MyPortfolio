import { MobileMenu as Menu } from '@/components/mobile_menu'
import { LangSwitcher } from '../../lang_switcher'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { LangProps } from '@/@types/LangProps'
import { MobileMenuLinks } from './mobile-menu-links'
import { RoutesProps } from '@/@types/RoutesProps'
import { Dispatch, SetStateAction } from 'react'

interface MobileMenuProps {
  lang: LangProps;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  routes: RoutesProps;
}

export const MobileLinks = ({ lang, isOpen, setIsOpen, routes }: MobileMenuProps) => {
  return (
    <Menu.Root className={`${isOpen ? 'h-[calc(100vh-3.5rem)]' : ''}`}>
      <Menu.Ul>
        <MobileMenuLinks lang={lang} routes={routes} setIsOpen={setIsOpen} />
        <li className='text-2xl'>
          <LangSwitcher lang={lang} />
        </li>
      </Menu.Ul>
      <div className='flex gap-x-2 items-baseline justify-center py-2'>
        <Link href='https://github.com/thiiz' target='_blank' className='mt-auto'>
          <FaGithub className='text-5xl text-gray-50 hover:text-white' />
        </Link>
      </div>
    </Menu.Root>

  )
}