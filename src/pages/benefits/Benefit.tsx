import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IBenefit, ESelectedPage } from "@/shared/types";

interface Props extends IBenefit {
  setSelectedPage: (value: ESelectedPage) => void;
}

const childVariant = {
  hidden: { opcaity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const Benefit = ({
  icon,
  title,
  description,
  setSelectedPage,
}: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-10 text-center basis-1/3 min-h-[350px]"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-[1px] p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3 px-10 md:px-1 text-center">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-secondary-500 underline hover:text-terciary-100"
        onClick={() => setSelectedPage(ESelectedPage.ContactUs)}
        href={`#${ESelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};
