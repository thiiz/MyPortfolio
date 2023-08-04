import { ComponentProps, FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface MobileMenuRootProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export const MobileMenuRoot: FC<MobileMenuRootProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} className={twMerge('transition-all duration-500 ease-out lg:hidden flex flex-col justify-between h-[0vh] inset-0 top-0 left-0 absolute bg-gray-950 mt-14 overflow-hidden', rest.className)}>
      {children}
    </div>
  )
}