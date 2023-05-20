import { faStar } from '@fortawesome/free-solid-svg-icons'
import Icon from '@/components/icon'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Index() {
	return (<>
		<div className='flex flex-col justify-center items-center gap-y-5 h-screen'>
			<h1 className='text-8xl font-semibold text-yellow-300'>Drowsy <Icon icon={faStar} /></h1>
			<h2 className='text-2xl'>Make sleeping a habit.</h2>
			<a className='btn btn-lg mt-10' href='/home'>Get started</a>
		</div>
		<Footer />
	</>
	)
}
