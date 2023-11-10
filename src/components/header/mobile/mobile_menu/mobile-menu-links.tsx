'use client'

import { LangProps } from "@/@types/LangProps";
import { MobileMenu } from "@/components/mobile_menu"
import { useSelectedLayoutSegment } from "next/navigation";
import { MobileMenuActiveBgText } from "./mobile-menu.active-bg-text";
import { RoutesProps } from "@/@types/RoutesProps";
import { Dispatch, SetStateAction } from "react";

interface MobileMenuLinksProps {
  lang: LangProps;
  routes: RoutesProps;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenuLinks = ({ lang, routes }: MobileMenuLinksProps) => {
  const segment = useSelectedLayoutSegment()

  return (
    <>
      {routes.map((route) => (
        <MobileMenu.Item key={route.text} href={`/${lang}${route.href}`} isActive={segment === route.targetSegment}>
          {route.text}
        </MobileMenu.Item>
      ))
      }
      <MobileMenuActiveBgText lang={lang} segment={segment} />
    </>
  )
}