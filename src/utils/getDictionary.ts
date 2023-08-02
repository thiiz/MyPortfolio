const dictionaries: any = {
  en: () => import("@/dictionaries/en.json").then(r => r.default),
  pt: () => import("@/dictionaries/pt.json").then(r => r.default),
  es: () => import("@/dictionaries/es.json").then(r => r.default),
}

export const getDictionary = (lang: string) => {
  return dictionaries[lang]()
}