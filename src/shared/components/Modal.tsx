import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type Props = {
	container: string
	children: React.ReactNode
}

export const Modal = ({ container, children }: Props) => {
	const elRef = useRef<HTMLDivElement | null>(null)

	if (!elRef.current) {
		elRef.current = document.createElement('div')
	}

	useEffect(() => {
		const modalRoot = document.getElementById(container)
		if (elRef.current) {
			modalRoot?.appendChild(elRef.current)
		}
		return () => {
			if (elRef.current) {
				modalRoot?.removeChild(elRef.current)
			}
		}
	}, [container])

	if (elRef.current) {
		return createPortal(<div>{children}</div>, elRef.current)
	}
	return <div> Erro </div>
}
