'use client'

import { LangProps } from "@/@types/LangProps"
import ButtonHamburguer from "@/components/hamburguer";
import { useState } from "react";
import { MobileLinks } from "./mobile-links";
import { RoutesProps } from "@/@types/RoutesProps";

interface MobileMenuProps {
  lang: LangProps;
  routes: RoutesProps;
}

export const MobileMenu = ({ lang, routes }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <ButtonHamburguer isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)} />
      <MobileLinks lang={lang} isOpen={isOpen} setIsOpen={setIsOpen} routes={routes} />
    </>
  )
}