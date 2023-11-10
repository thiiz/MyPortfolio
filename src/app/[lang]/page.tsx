import { LangProps } from "@/@types/LangProps";
import { getDictionary } from "@/utils/getDictionary";
import { Cube } from "@/components/cube";
import { HomeSections } from "@/components/home/sections";
import { HomeHero } from "@/components/home/hero";
import { Quote } from "@/components/quote";
import { Buttons } from "@/components/buttons";

export default async function Home({ params: { lang } }: { params: { lang: LangProps } }) {
  const dictionary = (await getDictionary(lang)).homePage;
  return (
    <>
      <HomeHero.Root>
        <div className="lg:max-w-[36.46rem;] flex flex-col items-center">
          <HomeHero.Title dictionary={dictionary.Vítor_is_a_web_designer_and_frontend_developer} />
          <HomeHero.Subtitle dictionary={dictionary.he_crafts_responsive_websites_where_technologies_meet_creativity} />
          <Buttons.Link axis="x" distance={200} text={`${dictionary.contact_me} !!`} href={`${lang}/contact`} />
        </div>
        <HomeHero.Picture dictionary={{ currently_working_on: dictionary.currently_working_on, portfolio: dictionary.portfolio }} />
      </HomeHero.Root >
      <Quote text={dictionary.with_great_power_comes_great_electricity_bill} author='Dr. Who' />
      <div className="hidden lg:block absolute w-14 h-14 right-0">
        <Cube />
      </div>
      <HomeSections.Root>
        <HomeSections.Projects title={dictionary.projects} view_all={dictionary.View_all} />
      </HomeSections.Root>

      <HomeSections.Root>
        <HomeSections.Skills title={dictionary.skills} />
      </HomeSections.Root>

      <HomeSections.Root>
        <HomeSections.About title={dictionary.about_me} lang={lang} />
      </HomeSections.Root>

      <HomeSections.Root>
        <HomeSections.Contacts title={dictionary.contacts} />
      </HomeSections.Root >
    </>
  )
}
