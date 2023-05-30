import { motion } from 'framer-motion'
import { classes } from '@/shared/helpers'
import { HText, Carousel } from '@/shared/components'
import { ESelectedPage, TSetSelectedPage } from '@/shared/types'

export const OurClasses = ({ setSelectedPage }: TSetSelectedPage) => {
	return (
		<section
			id="ourclasses"
			className="w-full bg-terciary-700 py-16"
		>
			<motion.div onViewportEnter={() => setSelectedPage(ESelectedPage.OurClasses)}>
				<motion.div
					className="mx-auto w-5/6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<div className="md:w-3/5">
						<HText>OUR CLASSES</HText>
						<p className="py-5">
							Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam
							porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor
							facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
						</p>
					</div>
				</motion.div>
				<Carousel classes={classes} />
			</motion.div>
		</section>
	)
}
