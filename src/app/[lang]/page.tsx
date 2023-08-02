import { getDictionary } from "@/utils/getDictionary";


export default async function Home({ params }: { params: { lang: string } }) {
  const lang = await getDictionary(params.lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{lang.title}</h1>
    </main>
  )
}
