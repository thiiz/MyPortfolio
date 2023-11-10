'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

interface LinkButtonProps {
  href: string;
  text: string;
  axis: "x" | "y";
  duration?: number;
  distance: number;
}

export const LinkButton: FC<LinkButtonProps> = ({ href, text, axis, distance, duration = 0.5 }) => {
  const initialAnimation = {
    opacity: 0,
    [axis]: distance,
  };

  const animationProps = {
    initial: initialAnimation,
    exit: initialAnimation,
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { duration },
  };

  return (
    <motion.div
      {...animationProps}
      className="flex">
      <Link href={href} className="mb-6 px-4 py-2 border border-primary text-white leading-4">{text}</Link>
    </motion.div>
  );
}
