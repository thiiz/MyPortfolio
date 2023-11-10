import '@/styles/globals.css'
import { dir } from 'i18next'
import { i18n } from '@/../i18n'
import { Header } from '@/components/header'
import { firaCode } from '@/fonts'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { getDictionary } from '@/utils/getDictionary'
import { LangProps } from '@/@types/LangProps'
import { Footer } from '@/components/footer'

export async function generateStaticParams() {
  return i18n.locales.map((lang: string) => ({ lang }))
}


export async function generateMetadata({
  params: { lang }
}: {
  params: { lang: LangProps }
}) {
  const dictionary = (await getDictionary(lang)).title;
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
       p-4 md:py-0 md:px-4
       selection:bg-primary
       selection:text-gray-950
       overflow-x-hidden
       `}>
        {/* @ts-ignore Async Component*/}
        <Header lang={lang} />
        <main className="container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
