import { SectionTitle } from "@/components/section_title";
import { FC } from "react";
import Link from "next/link";
import projectImage from '@/../public/project.png';
import { Cards } from "@/components/cards";

interface ProjectsProps {
  title: string;
  view_all: string;
}

export const SectionProjects: FC<ProjectsProps> = ({ title, view_all }) => {
  const cards = [
    { title: 'Sunset in the mountains', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', image: projectImage, alt: 'Sunset in the mountains' },
    { title: 'Sunset in the mountains', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', image: projectImage, alt: 'Sunset in the mountains' },
    { title: 'Sunset in the mountains', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', image: projectImage, alt: 'Sunset in the mountains' },
    { title: 'Sunset in the mountains', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', image: projectImage, alt: 'Sunset in the mountains' },
    { title: 'Sunset in the mountains', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', image: projectImage, alt: 'Sunset in the mountains' },
  ]
  return (
    <>
      <div className="flex items-center justify-between">
        <SectionTitle>{title}</SectionTitle>
        <Link href='/works' className="flex md:text-lg leading-4 whitespace-nowrap">{view_all} ~~&gt;</Link>
      </div>
      <div className="my-12 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        <Cards cards={cards} />
      </div>
    </>
  );
}
