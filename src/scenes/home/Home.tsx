import useMediaQuery from '@/hooks/useMediaQuery'
import { ActionButton } from '@/shared'
import { ESelectedPage } from '@/shared/types'
import {
	SponsorRedBull,
	SponsorForbes,
	SponsorFortune,
  EvoGym2,
  Functional,
} from '@/assets'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
	setSelectedPage: (value: ESelectedPage) => void
}

export const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

	return (
		<section id="home" className="gap-10 bg-black py-10 md:h-full md:pb-0">
			<motion.div
				className="mx-auto mt-10 w-5/6 items-center justify-center md:flex md:h-5/6"
				onViewportEnter={() => setSelectedPage(ESelectedPage.Home)}
			>
				<div className="z-10 mt-16 md:basis-3/5">
					<motion.div
						className="md:-mt-32"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<div className="relative">
							<img src={EvoGym2} alt="home-page-text" />
							<div className="before:absolute before:-left-12 before:-top-20  before:z-[-1] md:before:content-evolveText"></div>
						</div>
						<p className="ml-2 mt-3 text-sm">
							Unrivaled Gym
							<br />
							Unparalleled training fitness classes
							<br />
							World Class studios to help you get the body you dream of...
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
							className="text-sm font-bold text-secondary-500 underline hover:text-terciary-100"
							onClick={() => setSelectedPage(ESelectedPage.ContactUs)}
							href={`#${ESelectedPage.ContactUs}`}
						>
							<p>Learn More</p>
						</AnchorLink>
					</motion.div>
				</div>
				<div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
					<img src={Functional} alt="home-page-graphic" />
				</div>
			</motion.div>
			{isAboveMediumScreens && (
				<div className="h-[150px] w-full bg-primary-100 py-10">
					<div className="mx-auto w-5/6">
						<div className="flex w-3/5 items-center justify-between gap-8">
							<img src={SponsorRedBull} alt="sponsor-redbull" />
							<img src={SponsorForbes} alt="sponsor-forbes" />
							<img src={SponsorFortune} alt="sponsor-fortune" />
						</div>
					</div>
				</div>
			)}
		</section>
	)
}

