import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Benefit } from './Benefit'
import { Cossack } from '@/assets'
import { ActionButton, HText } from '@/shared/components'
import { ESelectedPage, IBenefit } from '@/shared/types'

const benefits: Array<IBenefit> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: 'State of Art Facilities',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum in modi suscipit magni.',
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100's of Diverse Facilities",
		description:
			'Veritatis fuga voluptatum hic animi placeat eum modi, dicta asperiores ipsum! Eum in modi suscipit magni.',
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: 'Expert and Pro Trainers',
		description:
			'Veritatis fuga voluptatum hic animi placeat eum modi, dicta asperiores ipsum! Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
	},
]

type Props = {
	setSelectedPage: (value: ESelectedPage) => void
}

export const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
			<motion.div onViewportEnter={() => setSelectedPage(ESelectedPage.Benefits)}>
				<motion.div
					className="md:my-5 md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HText> MORE THAN JUST A GYM </HText>
					<p className="my-5 text-justify text-sm">
						We provide world class fitness equipment, trainers and classes to get you to your
						ultimate fitness goals with ease. We provide true care into each and every member.
					</p>
				</motion.div>
				<motion.div
					className="mt-5 items-center justify-between gap-8 md:flex"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={{
						visible: {
							transition: { staggerChildren: 0.2 },
						},
					}}
				>
					{benefits.map(({ title, icon, description }: IBenefit) => (
						<Benefit
							key={title}
							icon={icon}
							title={title}
							description={description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>
				<div className="mt-14 items-center justify-between gap-2 md:-ml-24 md:mt-28 md:flex">
					<img
						className="mx-auto mb-5 pt-7"
						src={Cossack}
						alt="benefits-page-graphic"
						width="650px"
					/>
					<div>
						<div className="relative">
							<div className="before:absolute before:-left-20 before:-top-20 before:z-[1]">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: 50 },
										visible: { opacity: 1, x: 0 },
									}}
								>
									<HText>
										MILLIONS OF HAPPY MEMBERS GETTING{' '}
										<span className="text-secondary-400">FIT</span>
									</HText>
								</motion.div>
							</div>
						</div>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: -50 },
								visible: { opacity: 1, x: 0 },
							}}
						>
							<p className="my-5 text-justify">
								Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices
								consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet
								vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas
								ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
								diam odio.
							</p>
							<p className="mb-5 text-justify">
								Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam
								porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor
								facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
							</p>
						</motion.div>
						<div className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z-[1]">
								<ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}
