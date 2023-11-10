import { FC } from "react";
import { SectionTitle } from "@/components/section_title";
import { Boxes } from "@/components/boxes";
import { ArtAbstract } from "@/components/art_abstract";

interface SkillsProps {
  title: string;
}

export const SectionSkills: FC<SkillsProps> = ({ title }) => {
  const boxes = [
    { title: "Languages", items: ["TypeScript", "Lua", "Python", "JavaScript"] },
    { title: "Databases", items: ["SQLite", "PostgreSQL", "Mongo"] },
    { title: "Tools", items: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font", "Awesome"] },
    { title: "Other", items: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"] },
    { title: "Frameworks", items: ["React", "Vue", "Discord.js", "Flask", "Express.js"] },
  ]

  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <div className="relative my-12 grid lg:grid-cols-2 items-center justify-items-center w-full">
        <ArtAbstract />
        <div className="grid gap-4 grid-cols-2 lg:gap-0 lg:flex lg:flex-row lg:flex-wrap lg:space-x-4 lg:space-y-4 items-end place-content-end">
          <Boxes boxes={boxes} />
        </div>
      </div>
    </section>
  );
}
