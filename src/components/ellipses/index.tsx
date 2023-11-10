'use client'

import { motion } from "framer-motion";
import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

interface EllipsesProps extends ComponentProps<"div"> {
  number: number;
  repeat?: number;
  repeatDelay?: number;
}

const Ellipses: FC<EllipsesProps> = ({ number, repeat = 0, repeatDelay = 0, ...rest }) => {
  const ellipseQty = Array.from({ length: number }, (_, index) => index + 1);
  return (
    <div
      className={twMerge("absolute grid grid-cols-5 items-center w-20", rest.className)}>
      {ellipseQty.map((_, index) => {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: .1, delay: .1 + index * 0.015, repeat, repeatDelay, repeatType: "reverse" } }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0, delay: 0 } }}
          >
            <svg className="h-4 w-3">
              <circle cx="4" cy="4" r="2.5" className="fill-gray-50" />
              Sorry, your browser does not support inline SVG.
            </svg>
          </motion.span>
        )
      })
      }
    </div>
  );
}

export default Ellipses;