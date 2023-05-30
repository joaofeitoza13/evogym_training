import * as zod from 'zod'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Yoga } from '@/assets'
import * as Errors from '@/shared/helpers'
import { Toast, HText, Modal, ErrorMessage } from '@/shared/components'
import { TFormData, TSetSelectedPage, ESelectedPage } from '@/shared/types'

const inputStyles =
	'input mt-2 w-full rounded-lg bg-secondary-400 px-5 py-4 placeholder-terciary-500 z-10'

const formSchema = zod.object({
	name: zod
		.string()
		.min(1, { message: Errors.nameRequiredError })
		.max(100, { message: Errors.nameLongError }),
	email: zod
		.string()
		.min(5, { message: Errors.emailRequiredError })
		.max(100, { message: Errors.emailLongError })
		.email({ message: Errors.emailInvalidError }),
	message: zod
		.string()
		.min(1, { message: Errors.messageRequiredError })
		.max(2000, { message: Errors.messageLongError }),
})

export const ContactUs = ({ setSelectedPage }: TSetSelectedPage) => {
	const [showModal, setShowModal] = useState<boolean>(false)
	const [submitStatus, setSubmitStatus] = useState<boolean>(false)

	const initialFormData: TFormData = {
		name: '',
		email: '',
		message: '',
	}

	const {
		reset,
		trigger,
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm<TFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: initialFormData,
	})

	const resetForm = () => {
		reset((formValues) => ({
			...formValues,
			...initialFormData,
		}))
	}

	const showToast = (status: boolean) => {
		console.log(status)
		setShowModal(true)
		setSubmitStatus(status)
		setTimeout(() => {
			setShowModal(false)
		}, 3000)
	}

	const sendFormData = async (formData: TFormData): Promise<void> => {
		fetch('https://formsubmit.co/ajax/795d405474dbfbf51a6b245a8fe12315', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json, text-plain, */*',
			},
			method: 'POST',
			body: JSON.stringify(formData),
		}).then((response) => {
			if (response.ok) {
				showToast(true)
			} else {
				showToast(false)
			}
		})
	}

	const onSubmit = async () => {
		const isValid = await trigger()
		if (!isValid) {
			return
		}
		const values = getValues(['name', 'email', 'message'])
		const formValues = {
			name: values[0],
			email: values[1],
			message: values[2],
		}
		await sendFormData(formValues)
		resetForm()
	}

	return (
		<section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
			<Modal>
				<Toast submitStatus={submitStatus} showToast={showModal} />
			</Modal>
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
						Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel
						rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit
						risus sit. Nunc cursus sagittis.
					</p>
				</motion.div>
				<div className="mt-10 justify-between gap-8 text-terciary-700 md:flex">
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
						<form target="_blank" onSubmit={handleSubmit(onSubmit)} method="POST">
							<div className="input">
								<input className={inputStyles} type="text" {...register('name')}/>
								<div className="placeholder relative -mt-10 mb-5 w-0 pl-5 text-terciary-400">
									Name
								</div>
							</div>
							{errors.message?.message && <ErrorMessage error={errors.message.message} />}
							<div className="input">
								<input
									className={inputStyles}
									type="email"
									{...register('email', {
										required: true,
										pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									})}
								/>
								<div className="placeholder relative -mt-10 mb-5 w-0 pl-5 text-terciary-400">
									Email
								</div>
							</div>
							{errors.message?.message && <ErrorMessage error={errors.message.message} />}
							<div className="input">
								<textarea
									className={`${inputStyles}`}
									rows={4}
									cols={50}
									{...register('message', {
										required: true,
										maxLength: 2000,
									})}
								/>
								<div className="message-placeholder relative w-0 -mt-28 pl-5 pb-[5.5rem] text-terciary-400">
									Message
								</div>
							</div>
							{errors.message?.message && <ErrorMessage error={errors.message.message} />}
							<button
								className="mt-5 rounded-lg bg-secondary-400 px-16 py-3 text-lg tracking-widest text-black transition duration-500 active:translate-y-1 active:bg-terciary-400"
								type="submit"
							>
								Submit
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
								className="ml-30 -mt-6 w-full rounded-xl hover:opacity-50"
								src={Yoga}
								// src={Sprinting}
								alt="contact-us-page-graphic"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}
