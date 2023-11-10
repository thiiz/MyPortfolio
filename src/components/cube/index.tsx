'use client'

import { Variants, motion } from "framer-motion"
import { ComponentProps, FC } from "react"
import { twMerge } from "tailwind-merge"

interface CubeProps extends ComponentProps<"div"> {
  duration?: number;
  customDelay?: number;
  rx?: number;
  repeat?: number;

}

export const Cube: FC<CubeProps> = ({ rx = 0, duration = 1, customDelay = 0, repeat = 0, ...rest }) => {
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration, bounce: 0, repeat, repeatDelay: 2.5, repeatType: "reverse" },
          opacity: { delay, duration: 0.01 },
        }
      };
    }
  };
  return (
    <motion.svg
      viewBox="0 0 140 140"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      className={twMerge("h-full w-full absolute", rest.className)}
    >
      <motion.rect
        width="140"
        height="140"
        x="0"
        y="0"
        strokeWidth={4}
        rx={rx}
        variants={draw}
        custom={customDelay}
        className="stroke-gray-50 fill-transparent"
      />
    </motion.svg>
  )
}