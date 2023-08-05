import { FC, ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-x-8">
      <h2 className='text-2xl font-bold'>{children}</h2>
      <span className="w-full h-1 bg-primary" />
    </div>
  )
}