'use client'

import Icon from './icon'
import { faFire, faPeopleArrows, faDollarSign, faStar, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import Api from '@/lib/api'

async function logout() {
	try {
		await Api.account.deleteSession('current')
		location.replace('/')
	}
	catch (err) {
		console.log('Couldn\'t log out!', err)
	}
}

export default function Navbar(): JSX.Element {
	return (<>
		<div className='flex flex-col justify-center items-center'>
			<div className='flex justify-center navbar bg-base-100 space-x-20 w-full'>
				<a href='/home' className='btn btn-ghost text-xl text-yellow-300 normal-case'>
					<div className='space-x-10'>Drowsy <Icon icon={faStar} /></div>
				</a>
				<a href='/me' className='btn btn-ghost'>
					<div className='space-x-15'><Icon icon={faUser} /> Profile</div>
				</a>
				<a href='/friends' className='btn btn-ghost'>
					<div className='space-x-15'><Icon icon={faPeopleArrows} /> Friends</div>
				</a>
				<a href='/store' className='btn btn-ghost'>
					<div className='space-x-15'><Icon icon={faDollarSign} /> Store</div>
				</a>
				<button className='btn btn-ghost text-red-600' onClick={logout}>
					<div className='space-x-15'><Icon icon={faRightFromBracket} /> Logout</div>
				</button>
			</div>
		</div>
	</>)
}
