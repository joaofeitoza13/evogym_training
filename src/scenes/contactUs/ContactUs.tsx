import * as zod from 'zod'
import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TFormData, HText, ESelectedPage, TSetSelectedPage } from '@/shared'
import { ContactUsPageGraphic2, Yoga1 } from '@/assets'
import {
	nameRequiredError,
	nameLongError,
	emailInvalidError,
	emailRequiredError,
	emailLongError,
	messageRequiredError,
	messageLongError,
} from '../../shared/error-messages'
import { ErrorMessage } from '@/shared/ErrorMessage'

const inputStyles = 'mt-2 w-full rounded-lg bg-secondary-400 px-5 py-3 placeholder-terciary-500'

const initialFormData = {
	name: 'Your Name',
	email: 'your-email@email.com',
	message: 'Please, write your message.',
}

const formSchema = zod.object({
	name: zod.string().min(1, { message: nameRequiredError }).max(100, { message: nameLongError }),
	email: zod
		.string()
		.min(5, { message: emailRequiredError })
		.max(100, { message: emailLongError })
		.email({ message: emailInvalidError }),
	message: zod
		.string()
		.min(1, { message: messageRequiredError })
		.max(2000, { message: messageLongError }),
})

const sendFormData = (formData: TFormData): void => {
	fetch('https://formsubmit.co/ajax/795d405474dbfbf51a6b245a8fe12315', {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json, text-plain, */*',
		},
		method: 'POST',
		body: JSON.stringify(formData),
	})
}

export const ContactUs = ({ setSelectedPage }: TSetSelectedPage) => {
	const [formData, setFormData] = useState<TFormData>(initialFormData)

	const {
		register,
		trigger,
		formState: { errors, isSubmitting },
		getValues,
	} = useForm<TFormData>({
		resolver: zodResolver(formSchema),
	})

	const submitButton = () => {
		const formData = getValues(['name', 'email', 'message'])
		setFormData({
			name: formData[0],
			email: formData[1],
			message: formData[2],
		})
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const isValid = await trigger()
		if (!isValid) {
			return
		}
		sendFormData(formData)
		setFormData(initialFormData)
	}

	console.log(isSubmitting)

	return (
		<section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
			<motion.div onViewportEnter={() => setSelectedPage(ESelectedPage.ContactUs)}>
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HText>
						<span className="text-secondary-400">JOIN NOW!</span>
					</HText>
					<p className="my-5 text-justify">
						Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus.
						Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc
						cursus sagittis.
					</p>
				</motion.div>
				<div className="mt-10 justify-between gap-8 md:flex text-terciary-700">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
            viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<form target="_blank" onSubmit={handleSubmit} method="POST">
							<input className={inputStyles} type="text" placeholder="NAME" {...register('name')} />
							{errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
							<input
								className={inputStyles}
								type="email"
								placeholder="EMAIL"
								{...register('email', {
									required: true,
									pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
							<textarea
								className={inputStyles}
								rows={4}
								cols={50}
								placeholder="MESSAGE"
								{...register('message', {
									required: true,
									maxLength: 2000,
								})}
							/>
							{errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
							<button
								className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
								disabled={isSubmitting}
								type="submit"
								onClick={submitButton}
							>
								{isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
							</button>
						</form>
					</motion.div>
					<motion.div
						className="relative z-10 mt-12 basis-2/5 md:mt-2"
						initial="hidden"
						whileInView="visible"
            viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<div className="w-full before:absolute before:-bottom-20 before:-right-20 before:z-[-1] md:before:content-evolveText">
							<img
								className="w-full rounded-xl -mt-24 ml-30"
								src={Yoga1}
								alt="contact-us-page-graphic"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}

