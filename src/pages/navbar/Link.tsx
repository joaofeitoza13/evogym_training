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
	const isSeletedPage =
		selectedPage === lowerCasePage
			? 'font-extrabold text-[1rem] md:text-secondary-400 text-primary-900'
			: 'text-primary-400'
	const isSelectedPageInMenu = isMenuToggled ? 'font-extrabold text-[2rem]' : ''

	return (
		<div className={`transition duration-500 `}>
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
