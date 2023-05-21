'use client'

import Api, { uuid } from '@/lib/api'
import LoginErr from '@/components/error-bar'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type SignupParams = {
	email: string,
	name: string,
	pass: string
}

export default function Signup(): JSX.Element {
	const router = useRouter()
	async function submit(event: React.FormEvent) {
		event.preventDefault()
		const form = new FormData(event.target as HTMLFormElement)
		let login: SignupParams = { name: '', email: '', pass: '' }
		for (const [key, val] of form) {
			if (key === 'name') {
				login.name = val.toString()
			}
			else if (key === 'email') {
				login.email = val.toString()
			}
			else if (key === 'pass') {
				login.pass = val.toString()
			}
		}

		if (login.name === '' || login.email === '' || login.pass === '') {
			console.log(login)
			setMsg('Please enter a valid uername, email, and password!')
			setValid(false)
			return false
		}

		if (login.pass.length < 8) {
			setMsg('Password must be at least 8 characters long!')
			setValid(false)
			return false
		}

		try {
			const user = await Api.account.create(uuid(), login.email, login.pass, login.name)
			console.log(user)
			setValid(true)
			router.push('/home')
			return true
		}
		catch (err) {
			console.log(err)
			setMsg('Something went wrong! Please try again.')
			setValid(false)
			return false
		}
	}

	const [valid, setValid] = useState(true)
	const [msg, setMsg] = useState('')

	return (<>
		<div className='flex items-center justify-center h-screen'>
			<div className='card bg-base-100 content-center w-5/12'>
				{valid ? <></> : <LoginErr msg={msg} />}
				<div className='card-body space-y-3'>
					<h1 className='card-title'>Sign up</h1>
					<form className='flex flex-col space-y-4' onSubmit={submit}>
						<input type='text' name='name' placeholder='Username' className='input input-bordered w-full' />
						<input type='email' name='email' placeholder='Email' className='input input-bordered w-full' />
						<input type='password' name='pass' placeholder='Password' className='input input-bordered' />
						<input type='submit' className='btn btn-secondary' value='Go!' />
					</form>
					<Link href='/login' className='btn'>Have an account already?</Link>
				</div>
			</div>
		</div>
	</>)
}
