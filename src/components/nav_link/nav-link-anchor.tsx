import Link from "next/link";
import { FC, ReactNode } from "react";
import { twMerge } from 'tailwind-merge';
interface NavLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  isActive: boolean;
}

export const NavLinkAnchor: FC<NavLinkProps> = ({ isActive, children, ...rest }) => {
  return (
    <Link {...rest} href={rest.href} className={twMerge(" z-10 block font-normal text-3xl text-gray-50 hover:text-white data-[isActive]:text-white", rest.className, isActive ? 'text-white' : '')}>
      <span className="text-primary">#</span>
      <span>
        {children}
      </span>
    </Link>
  )
}