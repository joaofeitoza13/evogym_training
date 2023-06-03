import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from './Link'
import { ESelectedPage } from '@/shared/types'
import { ActionButton } from '@/shared/components'
import useMediaQuery from '@/hooks/useMediaQuery'
import { EvoGymLogo } from '@/assets'

type Props = {
	isTopOfPage: boolean
	selectedPage: ESelectedPage
	setSelectedPage: (value: ESelectedPage) => void
}

export const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
	const flexBetween = 'flex items-center justify-between'
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
	const [hidden, setHidden] = useState(false)

	const updateNavBar = useCallback(() => {
		if (isTopOfPage) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	}, [isTopOfPage])

	const moveToTopOfPage = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		updateNavBar()
	}, [updateNavBar])

	return (
		<nav>
			<AnimatePresence>
				{!hidden && (
					<motion.div
						key="navbg"
						className="fixed top-0 z-40 h-16 w-full bg-primary-700 drop-shadow"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					></motion.div>
				)}
			</AnimatePresence>
			<motion.div
				className={`${flexBetween} fixed top-0 z-50 w-full py-3`}
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.1 }}
				variants={{
					hidden: { opacity: 0, y: -2 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						<img
							className="hover:cursor-pointer"
							src={EvoGymLogo}
							alt="evo-gym-logo-2"
							onClick={moveToTopOfPage}
						/>
						{isAboveMediumScreens ? (
							<div className={`${flexBetween} w-full`}>
								<div className={`${flexBetween} gap-8 text-sm`}>
									<Link
										page="Home"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page="Benefits"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page="Our Classes"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page="Contact Us"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								</div>
								<div className={`${flexBetween} gap-8 text-sm`}>
									<p>Sign In</p>
									<ActionButton setSelectedPage={setSelectedPage}>
										Become a Member
									</ActionButton>
								</div>
							</div>
						) : (
							<button
								className="-mr-5 rounded-full bg-secondary-400 p-2"
								onClick={() => setIsMenuToggled(!isMenuToggled)}
							>
								{!isMenuToggled ? (
									<Bars3Icon className="h-6 w-6 text-primary-700" />
								) : (
									<XMarkIcon className="h-6 w-6 text-primary-700" />
								)}
							</button>
						)}
					</div>
				</div>
			</motion.div>
			<AnimatePresence>
				<motion.div
					id="toast"
					className="fixed top-20 z-30 -mt-4"
					initial={{ y: '-4rem' }}
					animate={{ y: 0 }}
					exit={{ y: '-4rem' }}
					transition={{ duration: 0.5 }}
				></motion.div>
			</AnimatePresence>
			<AnimatePresence>
				{!isAboveMediumScreens && isMenuToggled && (
					<motion.div
						className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-secondary-400 drop-shadow-xl"
						initial="hidden"
						whileInView="visible"
						transition={{ duration: 0.2 }}
						variants={{
							hidden: { x: 300 },
							visible: { x: 0 },
						}}
						exit={{ x: 300 }}
					>
						<div className="ml-[25%] flex flex-col gap-10 pt-[25%] text-2xl">
							<Link
								page="Home"
								selectedPage={selectedPage}
								isMenuToggled={isMenuToggled}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Benefits"
								selectedPage={selectedPage}
								isMenuToggled={isMenuToggled}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Our Classes"
								selectedPage={selectedPage}
								isMenuToggled={isMenuToggled}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page="Contact Us"
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
								isMenuToggled={isMenuToggled}
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}
