import { FC, ReactNode } from "react"
import { NavLink } from "../nav_link"

interface MobileMenuItemProps {
  children: ReactNode;
  href: string;
  isActive: boolean;
}

export const MobileMenuItem: FC<MobileMenuItemProps> = ({ children, href, isActive }) => {
  return (
    <li className='group'>
      <NavLink.Anchor href={href} isActive={isActive}>{children}</NavLink.Anchor>
      <NavLink.BgText>{children}</NavLink.BgText>
    </li>
  )
}