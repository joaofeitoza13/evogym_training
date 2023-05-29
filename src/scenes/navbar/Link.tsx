import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ESelectedPage } from '@/shared/types'

type Props = {
	page: string
	selectedPage: ESelectedPage
	isMenuToggled?: boolean
	setSelectedPage: (value: ESelectedPage) => void
}

export const Link = ({ page, selectedPage, setSelectedPage, isMenuToggled }: Props) => {
	const lowerCasePage = page.toLowerCase().replace(/ /g, '') as ESelectedPage
	const isSeletedPage = selectedPage === lowerCasePage ? 'font-extrabold text-[1rem] text-secondary-400' : 'text-terciary-400'
	const isSelectedPageInMenu = isMenuToggled ? 'font-extrabold text-[2rem] text-terciary-700' : 'text-terciary-400'

	return (
		<div className={`transition duration-500 hover:bg-terciary-100 rounded-sm p-2`}>
			<AnchorLink
				className={`${isSeletedPage} ${isSelectedPageInMenu}`}
				href={`#${lowerCasePage}`}
				onClick={() => setSelectedPage(lowerCasePage)}
			>
				{page}
			</AnchorLink>
		</div>
	)
}
