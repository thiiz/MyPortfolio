import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonHamburguerProps extends ComponentProps<'button'> {
  isOpen: boolean;
}

export const ButtonHamburguer: FC<ButtonHamburguerProps> = ({ isOpen, ...rest }) => {
  return (
    <button {...rest} className="relative group min-h[2.5rem] block lg:hidden">
      <div className={twMerge("relative flex items-center justify-center rounded-full w-10 h-10 transform transition-all bg-slate-700 ring-0 ring-gray-50 hover:ring-8 ring-opacity-30 duration-200 shadow-md", isOpen ? "ring-4" : "")}>
        <div className={twMerge("flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center", isOpen ? "-rotate-[45deg]" : "")}>
          <div className={twMerge("bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 origin-right delay-75", isOpen ? "-rotate-90 h-[1px] -translate-y-[1px]" : "")}></div>
          <div className="bg-white h-[1px] rounded"></div>
          <div className={twMerge("bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75", isOpen ? "-rotate-90 h-[1px] translate-y-[1px]" : "")}></div>
        </div>
      </div>
    </button>
  );
}