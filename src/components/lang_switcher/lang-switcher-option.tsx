import { FC, ReactNode } from "react"

interface LangSwitcherOptionProps {
  children: ReactNode;
  value: string;
}

export const LangSwitcherOption: FC<LangSwitcherOptionProps> = ({ children, ...rest }) => {
  return (
    <option {...rest} value={rest.value} translate="no">
      {children}
    </option>
  )
}