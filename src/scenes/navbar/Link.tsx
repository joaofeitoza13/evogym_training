import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ESelectedPage } from '@/shared/types'

type Props = {
	page: string
	selectedPage: ESelectedPage
	setSelectedPage: (value: ESelectedPage) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
	const lowerCasePage = page.toLowerCase().replace(/ /g, '') as ESelectedPage

	return (
		<div className={`transition duration-500 hover:bg-terciary-700 rounded-sm p-2`}>
			<AnchorLink
				className={`${selectedPage === lowerCasePage ? 'font-extrabold text-[.825rem]' : ' text-terciary-100'}`}
				href={`#${lowerCasePage}`}
				onClick={() => setSelectedPage(lowerCasePage)}
			>
				{page}
			</AnchorLink>
		</div>
	)
}

export default Link
