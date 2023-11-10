import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  title: string;
  children: ReactNode;
  titleCenter?: boolean;
  titleBorder?: boolean;
}

export const Box: FC<BoxProps> = ({ title, titleBorder = false, titleCenter = false, children }) => {
  return (
    <div className="border border-gray-50 flex flex-col space-y-4 max-w-xs md:max-w-[12rem] w-full flex-auto">
      <p className={twMerge("p-2", titleBorder ? 'border-b border-gray-50' : '', titleCenter ? 'text-center' : '')}>{title}</p>
      <span className="p-2 text-gray-50 flex gap-x-4 gap-y-2 flex-wrap">{children}</span>
    </div>
  );
}
