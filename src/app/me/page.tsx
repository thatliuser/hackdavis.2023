'use client'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Icon from '@/components/icon'
import LineChart from '@/components/line-chart'
import Navbar from '@/components/navbar'
import Api from '@/lib/api'

export default function Me(): JSX.Element {
	async function initUser() {
		try {
			const user = await Api.account.get()
			setName(user.name)
			setEmail(user.email)
		}
		catch (err) {
			console.log(err)
		}
	}
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	initUser()
	return (<>
		<Navbar />
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='flex flex-col card bg-base-100 content-center w-9/12 space-y-3 py-8 text-center'>

				{ // User info is behind suspense when not loaded
					name === '' || email === '' ?
						<>
							<div className='animate-pulse flex flex-col justify-center space-y-6'>
								<div className='flex items-center justify-center space-x-4'>
									<div className='h-11 w-11 rounded-full bg-neutral-focus' />
									<div className='h-8 w-72 rounded-full bg-neutral-focus' />
								</div>
								<div className='flex items-center justify-center'>
									<div className='h-5 w-80 rounded-full bg-neutral-focus' />
								</div>
							</div>
						</>
						: <>
							<h1 className='text-6xl'><Icon icon={faUser} /> {name}</h1>
							<h2 className='text-3xl text-neutral-content'>{email}</h2>
						</>
				}
				<LineChart data={[[1, 1], [2, 4], [3, 8], [4, 0]]} />
			</div>
		</div>
	</>)
}
