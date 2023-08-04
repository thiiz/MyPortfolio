import { LangProps } from "@/@types/LangProps";
import { getDictionary } from "@/utils/getDictionary";

export default async function Home({ params }: { params: { lang: LangProps } }) {
  const dictionary = await getDictionary(params.lang);
  const {
    Vítor_is_a,
    web_designer,
    and,
    frontend_developer
  } = dictionary.Vítor_is_a_web_designer_and_frontend_developer

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-semibold break-words">
        <span className="text-white">
          {Vítor_is_a}
          {' '}
        </span>
        <span className="text-primary">
          {web_designer}
          {' '}
        </span>
        <span className="text-white">
          {and}
          {' '}
        </span>
        <span className="text-primary">
          {frontend_developer}
        </span>
      </h1>
    </div>
  )
}
