import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionRootProps {
  children: ReactNode;
  className?: string;
}

export const SectionRoot: FC<SectionRootProps> = ({ children, ...rest }) => {
  return (
    <section className={twMerge("mt-16 w-full", rest.className)}>
      {children}
    </section>
  );
}
