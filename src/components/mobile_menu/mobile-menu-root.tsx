import { motion } from "framer-motion";
import { ComponentProps, FC, ReactNode } from "react"

interface MobileMenuRootProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export const MobileMenuRoot: FC<MobileMenuRootProps> = ({ children }) => {
  return (
    <motion.div initial={{ height: '0%' }} animate={{ height: '100%' }} exit={{ height: '0%' }}
      className='-z-10 lg:hidden flex flex-col justify-between inset-0 top-0 left-0 fixed bg-gray-950 overflow-hidden'>
      {children}
    </motion.div>
  )
}