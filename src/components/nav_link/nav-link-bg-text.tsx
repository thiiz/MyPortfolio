import { FC, ReactNode } from "react"

interface BgTextProps {
  children: ReactNode;
}

export const BgText: FC<BgTextProps> = ({ children }) => {
  return (
    <p
      className='
      transition-all duration-500
      pointer-events-none
      font-bold
      text-xs group-hover:text-7xl
      tracking-[50em] group-hover:tracking-normal
      opacity-0 group-hover:opacity-10
      break-keep absolute z-0
      left-1/2 -translate-x-1/2
      top-1/2 -translate-y-1/2
      truncate
      uppercase
      '>
      {children}
    </p>
  )
}