import { FC, ReactNode } from "react"

interface MobileMenuUlProps {
  children: ReactNode;
}

export const MobileMenuUl: FC<MobileMenuUlProps> = ({ children }) => {
  return (
    <ul className='group/ul flex flex-col space-y-4 py-20 relative px-4'>
      {children}
    </ul>
  )
}