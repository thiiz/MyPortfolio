import { FC } from "react";
import { SectionTitle } from "@/components/section_title";
import Ellipses from "@/components/ellipses";
import { Box } from "@/components/box";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Contacts } from "../contacts";

interface ContactsProps {
  title: string;
}

export const SectionContacts: FC<ContactsProps> = ({ title }) => {

  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <Contacts.Root>
        <Ellipses number={75} className="right-0 hidden lg:grid" />
        <Contacts.Text />
        <Box title="Message me here" titleCenter>
          <div className="flex w-full items-center gap-x-2 justify-center lg:justify-start">
            <FaDiscord size={26} />
            <span>!Vitor#3519</span>
          </div>
          <div className="flex w-full items-center gap-x-2 justify-center lg:justify-start">
            <MdEmail size={26} />
            <span>elias@elias.me</span>
          </div>
        </Box>
      </Contacts.Root>
    </>
  );
}
