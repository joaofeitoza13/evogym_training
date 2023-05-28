import { RefObject } from "react"
import { IClass } from "./types"

type Props = {
  activeIndex: number
	carousel: RefObject<HTMLDivElement>
  children: Array<IClass>
  updateIndex: (value: number) => void
}

export const Indicators = ({ activeIndex, children, carousel, updateIndex }: Props) => {
	const moveToItem = (index: number) => {
		if(carousel.current) {
			carousel.current.scrollLeft = 480 * index;
		}
	}

	return (
		<div id="indicators" className="flex justify-center">
			{children?.map((item, index) => (
				<span
					key={index}
					className={`material-symbols-outlined flex justify-center w-7 ${
						index === activeIndex ? 'text-secondary-400' : 'text-terciary-400'
					}`}
					onClick={() => {
						updateIndex(index)
						moveToItem(index)
					}}
				>
					circle
				</span>
			))}
		</div>
	)
}

