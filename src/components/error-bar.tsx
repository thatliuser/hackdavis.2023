// Login error bar
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import Icon from './icon'

export default function ErrorBar(props: { msg: string }): JSX.Element {
	return (<>
		<div className='flex justify-center pt-8'>
			<div className='alert alert-error shadow-lg w-11/12'>
				<div className='text-center'><Icon icon={faWarning} />{props.msg}</div>
			</div>
		</div>
	</>)
}
