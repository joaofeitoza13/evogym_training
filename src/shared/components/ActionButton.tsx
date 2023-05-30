import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ESelectedPage, TChildren } from '@/shared/types'

type Props = TChildren & {
	setSelectedPage: (value: ESelectedPage) => void
}

export const ActionButton = ({ children, setSelectedPage }: Props) => {
	return (
		<AnchorLink
			className="rounded-md border-[1px] bg-black px-10 py-2 hover:bg-terciary-700"
			onClick={() => setSelectedPage(ESelectedPage.ContactUs)}
			href={`#${ESelectedPage.ContactUs}`}
		>
			{children}
		</AnchorLink>
	)
}
