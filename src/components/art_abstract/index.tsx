
import { FC } from "react";
import { Cube } from "../cube";
import Ellipses from "../ellipses";
import { Logo } from "@/components/logo/logo";

export const ArtAbstract: FC = () => {

  return (
    <div className="hidden lg:block lg:relative w-4/6 h-full">
      <Ellipses number={25} className="left-0 top-0" />
      <div className="absolute w-24 h-24 right-5">
        <Cube customDelay={0.1} />

      </div>
      <div className="absolute w-14 h-14 right-0 bottom-24">
        <Cube customDelay={0.8} />
      </div>
      <div className="absolute bottom-8">
        <Logo />
      </div>
      <Ellipses number={25} className="right-32 bottom-28" />
    </div>
  );
}