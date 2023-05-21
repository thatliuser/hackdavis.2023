'use client'

import { faCog, faDollarSign, faFire, faPeopleArrows, faRightFromBracket, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Icon from './icon'
import StoreIcon from './store-icon'
import Api from '@/lib/api'



export default function Navbar(): JSX.Element {
	const router = useRouter()
	async function logout() {
		try {
			await Api.account.deleteSession('current')
			router.push('/')
		}
		catch (err) {
			console.log('Couldn\'t log out!', err)
		}
	}
	return (<>
		<div className='flex justify-center items-center navbar bg-base-100 space-x-20 w-full'>
			<Link href='/home' className='btn btn-ghost text-xl text-yellow-300 normal-case'>
				<div className='space-x-10'>Drowsy <Icon icon={faStar} /></div>
			</Link>
			<Link href='/me' className='btn btn-ghost'>
				<div className='space-x-15'><Icon icon={faUser} /> Profile</div>
			</Link>
			<Link href='/friends' className='btn btn-ghost'>
				<div className='space-x-15'><Icon icon={faPeopleArrows} /> Friends</div>
			</Link>
			<Link href='/store' className='btn btn-ghost'>
				<div className='space-x-15'><Icon icon={faDollarSign} /> Store</div>
			</Link>
			<button className='btn btn-ghost text-red-600' onClick={logout}>
				<div className='space-x-15'><Icon icon={faRightFromBracket} /> Logout</div>
			</button>
			<div className='absolute right-1'>
				<button className='btn btn-ghost btn-circle'>
					<div className='space-x-15 text-lime-500'>5 <Icon icon={faDollarSign}></Icon></div>
				</button>
				<button className='btn btn-ghost btn-circle'>
					<div className='space-x-15 text-orange-400'>8 <Icon icon={faFire} /></div>
				</button>
				<button className='btn btn-ghost btn-circle'>
					<div className='space-x-15'><Icon icon={faCog} /></div>
				</button>
				<StoreIcon />
			</div>
		</div>
	</>)
}
