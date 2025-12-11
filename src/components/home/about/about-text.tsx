'use client'

import { motion } from "framer-motion";
import { FC } from "react";

interface AboutTextProps {

}

export const AboutText: FC<AboutTextProps> = () => {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1 }}
      >Hello, i’m Vítor!</motion.span>
      <motion.span
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.3 }}
      >
        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
      >
        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
      </motion.span>
    </>
  );
}