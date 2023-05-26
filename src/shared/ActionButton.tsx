import AnchorLink from "react-anchor-link-smooth-scroll";
import { ESelectedPage, TChildren } from "./types";

type Props = TChildren & {
  setSelectedPage: (value: ESelectedPage) => void;
};

export const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="border-[1px] rounded-md bg-black px-10 py-2 hover:bg-terciary-700"
      onClick={() => setSelectedPage(ESelectedPage.ContactUs)}
      href={`#${ESelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
