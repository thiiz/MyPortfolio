import { FC, ReactNode } from "react"

interface MobileMenuUlProps {
  children: ReactNode;
}

export const MobileMenuUl: FC<MobileMenuUlProps> = ({ children }) => {
  return (
    <ul className='group/ul flex flex-col gap-y-8 py-12 relative px-4'>
      {children}
    </ul>
  )
}