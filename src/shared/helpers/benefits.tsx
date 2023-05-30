import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { IBenefit } from '@/shared/types'

export const benefits: Array<IBenefit> = [
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
