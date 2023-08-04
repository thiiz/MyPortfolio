import '@/styles/globals.css'
import { dir } from 'i18next'
import { i18n } from '@/../i18n'
import { Header } from '@/components/header'
import { firaCode } from '@/fonts'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { getDictionary } from '@/utils/getDictionary'
import { LangProps } from '@/@types/LangProps'

export async function generateStaticParams() {
  return i18n.locales.map((lang: string) => ({ lang }))
}


export async function generateMetadata({
  params: { lang }
}: {
  params: { lang: LangProps }
}) {
  const dictionary = await getDictionary(lang);
  return {
    title: {
      default: `${dictionary.vítor_dev_poritfolio}`,
      template: `%s - ${dictionary.vítor_dev_poritfolio}`,
    },
  }
}

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: ReactNode,
  params: { lang: LangProps }
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body
        className={`
        ${firaCode.className}
        relative
       bg-red text-gray-950
       dark:bg-gray-950 dark:text-white
       `}>
        {/* @ts-ignore Async Component*/}
        <Header lang={lang} />
        <main className="p-4 lg:p-0">
          {children}
        </main>
      </body>
    </html>
  )
}
