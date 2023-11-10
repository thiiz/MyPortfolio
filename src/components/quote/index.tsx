'use client'

import { FC } from "react";
import { QuotationMarks } from "../quotation_marks";
import { motion } from "framer-motion";

interface QuoteProps {
  text: string;
  author: string;
}

export const Quote: FC<QuoteProps> = ({ text, author }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 180 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 180 }}
      transition={{ duration: .4 }}
      className="relative lg:mb-24 max-w-full lg:max-w-2xl mx-auto">
      <div className="border border-gray-50 relative">
        <div className="absolute left-1 -top-2">
          <QuotationMarks />
        </div>
        <p className="p-4 break-words lg:text-lg">{text}</p>
      </div>
      <div className="flex w-full justify-end relative">
        <div className="absolute right-1 -top-2">
          <QuotationMarks />
        </div>
        <p className="p-2 border-gray-50 border-b border-r border-l">- {author}</p>
      </div>
    </motion.div>
  );
}