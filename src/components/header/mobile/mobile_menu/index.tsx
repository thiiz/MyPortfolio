'use client'

import { LangProps } from "@/@types/LangProps"
import { ButtonHamburguer } from "@/components/hamburguer";
import { useEffect, useState } from "react";
import { MobileLinks } from "./mobile-links";
import { RoutesProps } from "@/@types/RoutesProps";
import { usePathname } from "next/navigation";
import { AnimatePresence } from 'framer-motion';
interface MobileMenuProps {
  lang: LangProps;
  routes: RoutesProps;
}

export const MobileMenu = ({ lang, routes }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()
  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "unset";
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [path])

  return (
    <>
      <ButtonHamburguer isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)} />
      <AnimatePresence>
        {isOpen && <MobileLinks lang={lang} setIsOpen={setIsOpen} routes={routes} />}
      </AnimatePresence>
    </>
  )
}