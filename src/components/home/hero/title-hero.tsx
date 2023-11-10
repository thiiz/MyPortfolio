'use client'

import { motion } from "framer-motion";
import { FC } from "react";

interface TitleHeroProps {
  dictionary: {
    Vítor_is_a: string;
    web_designer: string;
    and: string;
    frontend_developer: string;
  }
}

export const TitleHero: FC<TitleHeroProps> = ({ dictionary }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.3 }}
      className="text-4xl font-semibold break-words">
      <span className="text-white">
        {dictionary.Vítor_is_a}
        {' '}
      </span>
      <span className="text-primary">
        {dictionary.web_designer}
        {' '}
      </span>
      <span className="text-white">
        {dictionary.and}
        {' '}
      </span>
      <span className="text-primary">
        {dictionary.frontend_developer}
      </span>
    </motion.h1>
  );
}