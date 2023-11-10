'use client'

import { LangProps } from "@/@types/LangProps";
import { RoutesProps } from "@/@types/RoutesProps";
import { LangSwitcher } from "../lang_switcher";
import { NavLink } from "@/components/nav_link";
import { useSelectedLayoutSegment } from "next/navigation";

interface DesktopKLinksProps {
  lang: LangProps;
  routes: RoutesProps;
}
export const DesktopKLinks = ({ lang, routes }: DesktopKLinksProps) => {
  const segment = useSelectedLayoutSegment()
  return (
    <nav className='hidden lg:flex items-center gap-x-8'>
      {routes.map((route) => (
        <NavLink.Anchor className="text-lg" key={route.text} href={`/${lang}${route.href}`} isActive={segment === route.targetSegment}>
          {route.text}
        </NavLink.Anchor>
      ))}
      <LangSwitcher lang={lang} />
    </nav>
  );
}
