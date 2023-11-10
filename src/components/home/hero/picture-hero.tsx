'use client'

import Ellipses from "@/components/ellipses";
import { Logo } from "@/components/logo/logo";
import Image from "next/image";
import { FC } from "react";
import personImage from '@/../public/me.png'
import { motion } from "framer-motion";
import { Cube } from "@/components/cube";

interface PictureHeroProps {
  dictionary: {
    currently_working_on: string;
    portfolio: string;
  }
}

export const PictureHero: FC<PictureHeroProps> = ({ dictionary }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.3 }}
      className="mb-24 relative w-full h-full max-w-[32rem] mx-auto lg:mx-0">
      <motion.div
        animate={{
          y: [-20, 20],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
        className="absolute left-0 top-[4.5rem] lg:-left-5 lg:top-36 -z-10">
        <Logo />
      </motion.div>
      <motion.div
        className="-z-10 absolute w-40 h-40 right-0 top-20 rotate-45">
        <Cube repeat={Infinity} duration={2} />
      </motion.div>
      <Image
        src={personImage}
        alt="vítor"
        width={0}
        height={0}
        className="w-full object-cover" />
      <Ellipses repeat={Infinity} repeatDelay={8} number={55} className="bottom-10 right-0 hidden lg:grid" />
      <div className="relative -top-1 flex items-center gap-x-2 w-full py-2 px-2 border border-gray-50 bg-gray-950">
        <div className="w-3.5 h-3.5 bg-primary" />
        <span className="leading-5 tex-base text-gray-50">{dictionary.currently_working_on}
          {' '}
          <strong className="capitalize text-white">{dictionary.portfolio}</strong>
        </span>
      </div>
    </motion.div >
  );
}