import { Logo } from "@/assets";
import { UserIcon } from "@heroicons/react/24/outline";
import { SelectedPage } from "../../shared";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-1 md:py-12">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-8 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <div className="px-2">
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              assumenda harum laudantium earum veniam porro, dolorem sunt
              provident. Amet, deleniti.
            </p>
            <p>© Evogym All Rights Reserved.</p>
          </div>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <div className="px-2">
            <p className="my-3">
              <a href="_blank">Massa orci senectus</a>
            </p>
            <p className="my-3">Et gravida id et etiam</p>
            <p>Ullamcorper vivamus</p>
          </div>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <div className="px-2">
            <p className="flex justify-start items-center gap-2 my-3"><UserIcon className="w-5 h-5" />(11)4135-9700</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
