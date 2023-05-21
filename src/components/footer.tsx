import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Icon from './icon'

export default function Footer(): JSX.Element {
	return (
		<h6 className='text-sm text-center py-1'>Made with <Icon icon={faHeart} /> at HackDavis 2023</h6>
	)
}
