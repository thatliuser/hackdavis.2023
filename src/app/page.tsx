'use client'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import Icon from '@/components/icon'
import Api from '@/lib/api'

async function start() {
	try {
		await Api.account.get()
		location.replace('/home')
	}
	catch (err) {
		location.replace('/login')
	}
}

export default function Index() {
	return (<>
		<div className='flex flex-col justify-center items-center gap-y-5 h-screen'>
			<h1 className='text-8xl font-semibold text-yellow-300'>Drowsy <Icon icon={faStar} /></h1>
			<h2 className='text-2xl'>Make sleeping a habit.</h2>
			<button className='btn btn-lg mt-10' onClick={start}>Get started</button>
		</div>
	</>
	)
}
