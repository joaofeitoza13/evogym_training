import { IClass } from '../types'
import {
	AbsWorkout,
	CrossTraining,
	InstructorGym,
	Squat,
	Treadmill,
	YogaClass,
} from '@/assets/gym/carousel'

export const classes: Array<IClass> = [
	{
		name: 'Weight Training Classes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: Squat,
	},
	{
		name: 'Yoga Classes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: YogaClass,
	},
	{
		name: 'Ab Core Classes',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: AbsWorkout,
	},
	{
		name: 'Cardio Sections',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: Treadmill,
	},
	{
		name: 'Crosstraining Classes',
		image: CrossTraining,
	},
	{
		name: 'High-level Instructors',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: InstructorGym,
	},
]
