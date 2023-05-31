import { motion } from 'framer-motion'

type Props = {
	handleToast: boolean
	submitStatus: boolean
}

export const Toast = ({ handleToast, submitStatus }: Props) => {
	const status = submitStatus ? 'bg-green-300' : 'bg-red-300'

	return (
		<motion.div>
			{handleToast ? (
				<div className={`w-screen py-5 pl-10 text-primary-700 ${status}`}>
					{submitStatus
						? "Thanks for making contact with us! We'll contact you as soon as possible!"
						: 'Sorry, but it seems that you submition had a problem, try again latter, please.'}
				</div>
			) : null}
		</motion.div>
	)
}
