type Props = {
	error: string
}

const errorStyles = 'mt-1 text-primary-700 text-sm/4'

export const ErrorMessage = ({ error }: Props) => {
	return <p className={errorStyles}>{error}</p>
}
