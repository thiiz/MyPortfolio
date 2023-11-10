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
    <Link
      {...rest}
      href={rest.href}
      className={twMerge("py-2 lg:py-0.5 lg:px-2 z-10 flex w-5/6 lg:w-auto font-normal text-gray-50 hover:text-white",
        rest.className, isActive ? 'text-white' : '')}
    >
      <span className="text-primary">#</span>
      <span>
        {children}
      </span>
    </Link>
  )
}