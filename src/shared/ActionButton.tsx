import AnchorLink from "react-anchor-link-smooth-scroll";
import { ESelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: ESelectedPage) => void;
};

export const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(ESelectedPage.ContactUs)}
      href={`#${ESelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
