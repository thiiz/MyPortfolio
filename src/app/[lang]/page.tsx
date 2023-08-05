import { LangProps } from "@/@types/LangProps";
import Ellipses from "@/components/ellipses";
import { getDictionary } from "@/utils/getDictionary";
import Image from "next/image";
import image from '@/../public/person.png'
import { Logo } from "@/components/logo/logo";
import { QuotationMarks } from "@/components/quotation_marks";
import { Cube } from "@/components/cube";
import { Projects } from "@/components/projects";
import { SectionTitle } from "@/components/section_title";
import Link from "next/link";


export default async function Home({ params }: { params: { lang: LangProps } }) {
  const dictionary = await getDictionary(params.lang);
  const title = dictionary.Vítor_is_a_web_designer_and_frontend_developer
  const subtitle = dictionary.he_crafts_responsive_websites_where_technologies_meet_creativity

  return (
    <>
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
      <h2 className="text-gray-50 my-6">{subtitle}</h2>
      <div className="relative w-full h-full max-w-[20rem] max-h-[16rem] mx-auto">
        <div className="absolute left-0 top-[4.5rem] -z-10">
          <Logo />
        </div>
        <Image
          src={image}
          alt="vítor"
          width={0}
          height={0}
          className="w-full object-cover" />
        <Ellipses number={5} />
      </div>
      <div className="relative -top-1 flex items-center gap-x-2 w-full py-2 px-2 border border-gray-50 bg-gray-950">
        <div className="w-3.5 h-3.5 bg-primary" />
        <span className="leading-5 tex-base text-gray-50">{dictionary.currently_working_on}
          {' '}
          <strong className="capitalize text-white">{dictionary.portfolio}</strong>
        </span>
      </div>
      <div className="mt-16 relative">
        <div className="border border-gray-50 relative">
          <div className="absolute left-1 -top-2">
            <QuotationMarks />
          </div>
          <p className="p-4 break-words">With great power comes great electricity bill</p>
        </div>
        <div className="flex w-full justify-end relative">
          <div className="absolute right-1 -top-2">
            <QuotationMarks />
          </div>
          <p className="p-2 border-gray-50 border-b border-r border-l">- Dr. Who</p>
        </div>

      </div>
      <div className="hidden lg:block absolute w-10 h-16 right-0 ">
          <Cube />
        </div>
      <section>
        <div className="grid items-center grid-cols-2">
          <SectionTitle.Title>Projects</SectionTitle.Title>
          <Link href='/works'>View all {'~~>'}</Link>
        </div>
        <Projects.Card />
      </section>
    </>
  )
}
