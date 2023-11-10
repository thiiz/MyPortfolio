import { FC, ReactNode } from "react";

interface ContactsRootProps {
  children: ReactNode;
}

export const ContactsRoot: FC<ContactsRootProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap items-end justify-around mb-6 lg:my-16">
      {children}
    </div>
  );
}
