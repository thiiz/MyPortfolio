'use client'

import { LangProps } from "@/@types/LangProps"
import { getDictionary } from "@/utils/getDictionary"
import { useEffect, useState } from "react";

interface MobileMenuActiveBgTextProps {
  lang: LangProps;
  segment: string | null;
}


export const MobileMenuActiveBgText = ({ lang, segment }: MobileMenuActiveBgTextProps) => {
  const [path, setPath] = useState<string | null>(null)

  const getPathName = async () => {
    const dictionary = await getDictionary(lang)
    const segments = [null, "about", "works", "contacts"];
    const newPaths = [
      dictionary.home.toUpperCase(),
      dictionary.about_me.toUpperCase(),
      dictionary.works.toUpperCase(),
      dictionary.contacts.toUpperCase(),
    ];

    const index = segments.indexOf(segment);
    const newPath = index !== -1 ? newPaths[index] : newPaths[0];
    setPath(newPath)
  }

  useEffect(() => {
    getPathName()
  }, [segment, lang])
  return (
    <p
      className='
    transition-all duration-500
    pointer-events-none
    font-bold
    text-7xl
    tracking-normal
    opacity-10 group-hover/ul:opacity-0
    break-keep absolute z-0
    left-1/2 -translate-x-1/2
    top-1/2 -translate-y-1/2
    truncate
    '>
      {path}
    </p>
  )
}