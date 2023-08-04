import { LangProps } from "@/@types/LangProps";
import Ellipses from "@/components/ellipses";
import { getDictionary } from "@/utils/getDictionary";
import Image from "next/image";
import image from '@/../public/person.png'


export default async function Home({ params }: { params: { lang: LangProps } }) {
  const dictionary = await getDictionary(params.lang);
  const title = dictionary.Vítor_is_a_web_designer_and_frontend_developer
  const subtitle = dictionary.he_crafts_responsive_websites_where_technologies_meet_creativity

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-semibold break-words">
        <span className="text-white">
          {title.Vítor_is_a}
          {' '}
        </span>
        <span className="text-primary">
          {title.web_designer}
          {' '}
        </span>
        <span className="text-white">
          {title.and}
          {' '}
        </span>
        <span className="text-primary">
          {title.frontend_developer}
        </span>
      </h1>
      <h2 className="text-gray-50 mt-6  ">{subtitle}</h2>
      <div className="relative max-w-xl w-full h-full">
        <Image
          src={image}
          alt="vítor"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full object-cover" />
          <Ellipses number={5} />
      </div>
    </div>
  )
}
