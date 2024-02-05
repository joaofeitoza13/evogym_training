type Props = {
	error: string
}

const errorStyles = 'mt-1 text-red-600 text-sm/4'

export const ErrorMessage = ({ error }: Props) => {
	return <p className={errorStyles}>{error}</p>
}
