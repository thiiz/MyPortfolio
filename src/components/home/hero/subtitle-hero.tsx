'use client'

import { motion } from "framer-motion";
import { FC } from "react";

interface SubtitleProps {
  dictionary: string;
}

export const SubtitleHero: FC<SubtitleProps> = ({ dictionary }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: 250 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 250 }}
      transition={{ duration: 0.4 }}
      className="text-gray-50 my-6">{dictionary}</motion.h2>
  );
}