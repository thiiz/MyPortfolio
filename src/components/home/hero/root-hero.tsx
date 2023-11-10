import { FC, ReactNode } from "react";

interface RootHeroProps {
  children: ReactNode;
}

export const RootHero: FC<RootHeroProps> = ({ children }) => {
  return (
    <div className="mt-4 lg:mt-2.5 lg:flex w-full lg:items-center lg:justify-around flex-row-reverse">
      {children}
    </div>
  );
}