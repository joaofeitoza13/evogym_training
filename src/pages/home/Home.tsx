import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { EvoGym, Functional } from '@/assets'
import { ESelectedPage, TSetSelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { ActionButton } from '@/shared/components'
import { Adidas, Nike, Puma, Reebok, UnderArmour } from '@/assets/gym/brands'

export const Home = ({ setSelectedPage }: TSetSelectedPage) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

	return (
		<section
			id="home"
			className="gap-10 bg-black py-10 md:h-full md:pb-0"
		>
			<motion.div
				className="mx-auto mt-10 w-5/6 items-center justify-center md:flex md:h-5/6"
				onViewportEnter={() => setSelectedPage(ESelectedPage.Home)}
			>
				<div className="z-10 mt-16 md:basis-3/5">
					<motion.div
						className="md:-mt-32"
						// initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<div className="relative">
							<img
								src={EvoGym}
								alt="home-page-text"
							/>
							<div className="before:absolute before:-left-12 before:-top-20  before:z-[-1] md:before:content-evolveText"></div>
						</div>
						<p className="ml-1 mt-3 text-sm">
							Unrivaled Gym
							<br />
							Unlock Your True Potential
							<br />
						</p>
					</motion.div>
					<motion.div
						className="mt-3 flex items-center gap-8 md:justify-start"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
						<AnchorLink
							className="text-sm font-bold text-primary-500 underline hover:text-primary-100"
							onClick={() => setSelectedPage(ESelectedPage.ContactUs)}
							href={`#${ESelectedPage.ContactUs}`}
						>
							<p>Learn More</p>
						</AnchorLink>
					</motion.div>
				</div>
				<div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
					<img
						src={Functional}
						alt="home-page-graphic"
					/>
				</div>
			</motion.div>
			{isAboveMediumScreens && (
				<div className="h-[150px] w-full bg-secondary-400 pb-10 pt-2">
					<div className="mx-auto w-5/6">
						<div className="flex items-center justify-between gap-8">
							<img
								className="-mr-8"
								src={Nike}
								alt="sponsor-redbull"
								width="180px"
							/>
							<img
								className="-mt-5"
								src={Puma}
								alt="sponsor-redbull"
								width="150px"
							/>
							<img
								src={UnderArmour}
								alt="sponsor-redbull"
								width="150px"
							/>
							<img
								src={Reebok}
								alt="sponsor-redbull"
								width="150px"
							/>
							<img
								src={Adidas}
								alt="sponsor-redbull"
								width="125px"
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
