export enum ESelectedPage {
	Home = 'home',
	Benefits = 'benefits',
	OurClasses = 'ourclasses',
	ContactUs = 'contactus',
}

export type TSetSelectedPage = {
	setSelectedPage: (value: ESelectedPage) => void
}

export type TFormData = {
	name: string
	email: string
	message: string
}

export interface IBenefit {
	icon: JSX.Element
	title: string
	description: string
}

export interface IClass {
	name: string
	description?: string
	image: string
}

export type TChildren = {
	children: React.ReactNode
}
