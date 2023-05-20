import Image from 'next/image'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
	return (<>
		<div className='bg-gradient-to-r from-slate-950 to-violet-950'>
			<div className='flex flex-col h-screen justify-center items-center gap-y-5'>
				<h1 className='text-8xl font-semibold text-yellow-300'>Drowsy <FontAwesomeIcon icon={faStar} /></h1>
				<h2 className='text-2xl'>Make sleeping a habit.</h2>
				<button className='btn btn-lg mt-10'>Get started</button>

			</div>
		</div>
	</>
	)
}
