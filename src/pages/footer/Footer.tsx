import { EvoGymFooter } from '@/assets'
import { UserIcon } from '@heroicons/react/24/outline'

export const Footer = () => {
	return (
		<footer className="bg-secondary-500 py-1 md:py-12">
			<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
				<div className="mt-8 basis-1/2 md:mt-0">
					<img src={EvoGymFooter} alt="logo" />
					<div className="px-2">
						<p className="my-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda harum
							laudantium earum veniam porro, dolorem sunt provident. Amet, deleniti.
						</p>
						<p>© Evogym All Rights Reserved.</p>
					</div>
				</div>
				<div className="flex flex-row basis-1/2">
					<div className="mt-8 basis-1/2 md:mt-0">
						<h4 className="font-bold">Links</h4>
						<div className="px-2">
							<p className="my-3">
								<a href="_blank">Massa orci senectus</a>
							</p>
							<p className="my-3">Et gravida id et etiam</p>
							<p>Ullamcorper vivamus</p>
						</div>
					</div>
					<div className="mt-8 basis-1/2 md:mt-0">
						<h4 className="font-bold">Contact Us</h4>
						<div className="px-2">
							<p className="my-3 flex items-center justify-start gap-2">
								<UserIcon className="h-5 w-5" />
								(xx) 342x-1x0x
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

