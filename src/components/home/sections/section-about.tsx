import { FC } from "react";
import { SectionTitle } from "@/components/section_title";
import { Buttons } from "@/components/buttons";
import { LangProps } from "@/@types/LangProps";

import Ellipses from "@/components/ellipses";
import { SeatedImage } from "@/components/seated_image";
import { About } from "@/components/home/about";
import { Cube } from "@/components/cube";

interface AboutProps {
  title: string;
  lang: LangProps;
}

export const SectionAbout: FC<AboutProps> = ({ title, lang }) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <div className="relative flex flex-col-reverse lg:grid lg:grid-cols-2 my-12">
        <div className="flex flex-wrap flex-col space-y-5 text-gray-50 mt-16 lg:mb-10 max-w-2xl">
          <About.Text />
          <Buttons.Link axis="x" distance={-200} duration={0.7} text="Read more ->" href={`${lang}/about`} />
        </div>
        <SeatedImage />
        <Ellipses number={75} className="right-0 hidden lg:grid" />
        <div className="hidden xl:block absolute w-32 h-32 lg:-left-[12.5%] bottom-16">
          <Cube />
        </div>
      </div>
    </>
  );
}
