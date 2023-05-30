import { useState, useRef, useEffect } from 'react'
import { IClass } from '@/shared/types'
import { Class } from '@/pages/ourClasses'
import { Indicators } from './Indicators'

type Props = {
	classes: IClass[]
}

type KeyUpHandler = (e: KeyboardEvent) => void

export const Carousel = ({ classes }: Props) => {
	const [activeIndex, setActiveIndex] = useState(1)
	const carousel = useRef<HTMLDivElement>(null)

	const updateIndex = (newIndex: number) => {
		if (newIndex < 0) {
			newIndex = 0
		} else if (newIndex >= classes.length) {
			newIndex = classes.length - 1
		}
		setActiveIndex(newIndex)
	}

	const prevItem = () => {
		updateIndex(activeIndex - 1)
		if (carousel.current) {
			carousel.current.scrollLeft -= 480
		}
	}

	const nextItem = () => {
		updateIndex(activeIndex + 1)
		if (carousel.current) {
			carousel.current.scrollLeft += 480
		}
	}

	const mountKeyUpListener = (handler: KeyUpHandler) =>
		document.addEventListener('keyup', handler)

	const unmountKeyUpListener = (handler: KeyUpHandler) =>
		document.removeEventListener('keyup', handler)

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			e.preventDefault()
			if (e.ctrlKey && e.key === 'ArrowLeft') {
				prevItem()
			} else if (e.ctrlKey && e.key === 'ArrowRight') {
				nextItem()
			}
		}
		mountKeyUpListener(handleKeyUp)
		return () => {
			unmountKeyUpListener(handleKeyUp)
		}
	}, [activeIndex])

	return (
		<>
			<div className="flex items-center justify-center">
				<button
					className="p-10"
					onClick={prevItem}
				>
					<span className="material-symbols-outlined">arrow_back_ios</span>
				</button>
				<div
					className="carousel flex gap-8 overflow-x-auto scroll-smooth"
					ref={carousel}
				>
					{classes.map(({ name, description, image }: IClass, index: number) => (
						<Class
							key={`${name}-${index}`}
							name={name}
							description={description}
							image={image}
							itemIndex={index}
							activeIndex={activeIndex}
						/>
					))}
				</div>
				<button
					className="p-10"
					onClick={nextItem}
				>
					<span className="material-symbols-outlined">arrow_forward_ios</span>
				</button>
			</div>
			<Indicators
				activeIndex={activeIndex}
				updateIndex={updateIndex}
				carousel={carousel}
			>
				{classes}
			</Indicators>
		</>
	)
}
