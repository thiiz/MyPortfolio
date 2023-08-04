import { ChangeEvent, ChangeEventHandler, FC, ReactNode } from "react"

interface LangSwitcherRootProps {
  children: ReactNode;
  onChange: (e: any) => void;
  defaultValue: string;
}

export const LangSwitcherRoot: FC<LangSwitcherRootProps> = ({ onChange, children, ...rest }) => {
  return (
    <select
      {...rest}
      onChange={onChange}
      defaultValue={rest.defaultValue}
      className='font-bold uppercase px-1 bg-gray-950 rounded-xl text-gray-50'>
      {children}
    </select>
  )
}