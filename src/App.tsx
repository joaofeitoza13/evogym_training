import { useEffect, useState } from 'react'
import { NavBar, Home, Benefits, ContactUs, Footer, OurClasses } from '@/pages'
import { ESelectedPage } from '@/shared/types'

function App() {
	const [selectedPage, setSelectedPage] = useState<ESelectedPage>(ESelectedPage.Home)
	const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true)
				setSelectedPage(ESelectedPage.Home)
			}
			if (window.scrollY !== 0) setIsTopOfPage(false)
		}
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className="app bg-black">
			<NavBar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Benefits setSelectedPage={setSelectedPage} />
			<OurClasses setSelectedPage={setSelectedPage} />
			<ContactUs setSelectedPage={setSelectedPage} />
			<Footer />
		</div>
	)
}

export default App
