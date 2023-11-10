'use client'

import Image from "next/image";
import image from '@/../public/seated.png';
import Ellipses from "../ellipses";
import { FC } from "react";
import { motion } from "framer-motion";

export const SeatedImage: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl">
      <Ellipses number={40} className="rotate-90 hidden lg:grid" />
      <Image
        src={image} alt="vítor"
        width={0}
        height={0}
        className="w-full object-cover" />
    </motion.div>
  );
}