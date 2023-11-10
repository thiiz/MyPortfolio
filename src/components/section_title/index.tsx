'use client'

import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="flex items-center relative w-full">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: -100 }}

        className='text-2xl md:text-3xl lg:text-4xl font-bold'>
        <span className="text-primary">#</span>
        <span className="text-white whitespace-nowrap">{children}</span>
      </motion.h2>
      <div className="relative ml-6 w-1/3 md:w-1/2 md:ml-8 lg:w-full lg:mx-10 h-0.5">
        <motion.span initial={{ width: "0%" }} whileInView={{ width: "100%", transition: { duration: 1 } }} className="absolute block w-full h-full bg-primary" />
      </div>
    </div>
  )
}