import { RefObject } from 'react'
import { IClass } from '@/shared/types'

type Props = {
	activeIndex: number
	carousel: RefObject<HTMLDivElement>
	children: Array<IClass>
	updateIndex: (value: number) => void
}

export const Indicators = ({ activeIndex, children, carousel, updateIndex }: Props) => {
	const handleClick = (index: number): void => {
		updateIndex(index)
		if (carousel.current) {
			carousel.current.scrollLeft = 480 * index
		}
	}

	const activeIndicator = (index: number) => index === activeIndex ? 'text-secondary-400' : 'text-terciary-400'

	return (
		<div id="indicators" className="flex justify-center">
			{children?.map((item, index) => (
				<span
					key={index}
					className={`material-symbols-outlined flex w-7 justify-center ${activeIndicator(index)}`}
					onClick={() => handleClick(index)}
				>
					circle
				</span>
			))}
		</div>
	)
}
