import { IClass } from "@/shared";

const Class = ({ name, description, image }: IClass) => {
  // const overlayStyles = `
  //   p-5 absolute z-30 flex h-[380px] w-[450px]
  //   flex-col items-center justify-center whitespace-normal
  //   bg-primary-500 text-center text-white opacity-0
  //   transition duration-500 hover:opacity-90
  // `;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[415px]">
      <div className="rounded-md absolute z-30 flex h-[73%] w-[415px] flex-col items-center justify-center whitespace-normal bg-secondary-400 p-5 text-center text-black opacity-0 transition duration-500 hover:opacity-90">
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="rounded-md" src={image} alt={`${image}`}/>
    </li>
  );
};

export default Class;
