import { IClass } from "@/shared/types";

type Props = IClass & {
  itemIndex: number
  activeIndex: number
}

export const Class = ({ name, description, image, itemIndex, activeIndex }: Props) => {

  const activeItem = 'active mx-25'
  const inactiveItem = 'opacity-20'

  const isActiveItem = () => itemIndex === activeIndex ? activeItem : inactiveItem

  return (
    <section className={`relative my-5 inline-block w-[450px] flex-none ${isActiveItem()} hover:opacity-100`}>
      <div className="rounded-md absolute z-10 flex h-[100%] w-[450px] flex-col items-center justify-center whitespace-normal bg-secondary-400 p-5 text-center text-black opacity-0 transition duration-500 hover:opacity-90">
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="rounded-md" src={image} alt={`${image}`} width="450px"/>
    </section>
  );
};
