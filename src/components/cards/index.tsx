'use client'

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { FC } from "react";
import { Project } from "../project";

interface CardsProps {
  cards: { title: string; description: string; image: string | StaticImageData; alt: string; }[]

}

export const Cards: FC<CardsProps> = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.1 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <Project.Card title={card.title} image={card.image} alt={card.alt} description={card.description} />
        </motion.div>
      ))}
    </>
  );
}