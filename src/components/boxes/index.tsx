'use client'

import { FC } from "react";
import { Box } from "../box";
import { motion } from "framer-motion";


interface BoxesProps {
  boxes: { title: string; items: string[] }[]
}

export const Boxes: FC<BoxesProps> = ({ boxes }) => {
  return (
    <>
      {boxes.map((box, index) => (
        <motion.div
          key={box.title}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.2, delay: 0.1 + index * 0.1 } }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.09 }}
        >
          <Box title={box.title} titleBorder>
            {box.items.map((item) => (
              <span
                key={item}
              >
                {item}
              </span>
            ))}
          </Box>
        </motion.div >
      ))}
    </>
  );
}