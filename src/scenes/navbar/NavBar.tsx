import { useCallback, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { ESelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ActionButton } from "@/shared";
import { motion, AnimatePresence } from "framer-motion";
import { EvoGymLogo } from "@/assets";

type Props = {
  isTopOfPage: boolean;
  selectedPage: ESelectedPage;
  setSelectedPage: (value: ESelectedPage) => void;
};

export const NavBar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [hidden, setHidden] = useState(false);

  const updateNavBar = useCallback(() => {
    if (isTopOfPage) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [isTopOfPage]);

  useEffect(() => {
    updateNavBar();
  }, [updateNavBar]);

  return (
    <nav>
      <AnimatePresence>
        {!hidden && (
          <motion.div
            key="navbg"
            className="fixed top-0 z-40 h-16 w-full bg-terciary-700 drop-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className={`${flexBetween} fixed top-0 z-40 w-full py-3`}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.1 }}
        variants={{
          hidden: { opacity: 0, y: -2 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={EvoGymLogo} alt="evo-gym-logo-2" />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-400 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-terciary-700" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {!isAboveMediumScreens && isMenuToggled && (
          <motion.div
            className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-secondary-400 drop-shadow-xl"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { x: 300 },
              visible: { x: 0 },
            }}
            exit={{ x: 300 }}
          >
            <div className="-mr-2 -mt-9 flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-9 w-9 text-terciary-700" />
              </button>
            </div>
            <div className="ml-[25%] flex flex-col gap-10 text-2xl">
              <Link
                page="Home"
                selectedPage={selectedPage}
                isMenuToggled={isMenuToggled}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                isMenuToggled={isMenuToggled}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                isMenuToggled={isMenuToggled}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
