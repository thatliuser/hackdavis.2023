'use client'

import { Account } from 'appwrite'
import { faClock, faFire, faUser, faMoon, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Api from '@/lib/api'
import Icon from '@/components/icon'
import Navbar from '@/components/navbar'
import LineChart from '@/components/line-chart'

export default function Home(): JSX.Element {
	const hour = new Date(Date.now()).getHours()
	console.log(hour)
	let greeting: String
	if (hour > 21 || hour < 5) {
		greeting = 'Good night'
	}
	else if (hour >= 5 && hour < 10) {
		greeting = 'Good morning'
	}
	else if (hour >= 10 && hour < 13) {
		greeting = 'Good day'
	}
	else {
		greeting = 'Good evening'
	}

	async function getUser() {
		try {
			const user = await Api.account.get()
			setUser(user.name)
		}
		catch (err) {
			console.log(err)
		}
	}

	const [user, setUser] = useState('')
	getUser()

	return (
		<>
			<Navbar />
			<div className='flex justify-center items-center h-full space-x-10'>
				<div className='flex card bg-base-100 content-center w-7/12 h-5/6 space-y-3 py-8 text-center'>
					{user === '' ?
						<>
							<div className='animate-pulse flex flex-col justify-center space-y-6 select-none'>
								<div className='flex flex-col items-center justify-center space-y-6'>
									<span className='rounded-full bg-neutral-focus text-neutral-focus text-6xl'>aaaa aaaaaa, username.</span>
									<span className='rounded-full bg-neutral-focus text-neutral-focus text-3xl'>iou siept so weii iast niiht!</span>
									<span className='rounded-full bg-neutral-focus text-neutral-focus text-2xl'>icon iours</span>
								</div>
							</div>
						</>
						:
						<>
							<h1 className='text-6xl'>{greeting}, {user}!</h1>
							<h2 className='text-slate-300 text-3xl'>You slept <span className='text-yellow-400'>so well</span> last night!</h2>
							<h3 className='text-neutral-content text-2xl'><Icon icon={faClock} /> 9.5 hrs</h3>
						</>
					}
					<LineChart yAxis='Hours' data={[[1, 6], [2, 50], [3, 10], [4, 8], [5, 10]]} />
				</div>
				<div className='flex card bg-base-100 content-center text-center px-8 h-10/12 py-8 w-4/12 h-5/6 space-y-5'>
					<h1 className='text-6xl'><div className='space-x-15'><Icon icon={faBell} /> Notifications</div></h1>
					<div className='flex card text-left bg-neutral-focus'>
						<div className='card-body'>
							<h2 className='text-xl'><div className='space-x-15'><Icon icon={faMoon} /> Congratulations on <span className='text-lime-500'>100 hours</span> of sleep on record!</div></h2>
						</div>
					</div>
					<div className='flex card text-left bg-neutral-focus'>
						<div className='card-body'>
							<h2 className='text-xl'><div className='space-x-15'><Icon icon={faMoon} /> Keep your 8 day streak going: sleep by <span className='text-lime-500'>11:30 PM</span>!</div></h2>
						</div>
					</div>
					<div className='flex card text-left bg-neutral-focus'>
						<div className='card-body'>
							<h2 className='text-xl'><div className='space-x-15'><Icon icon={faDollarSign} /> Cash in on rewards at the <span className='text-lime-500'>shop!</span></div></h2>
						</div>
					</div>
				</div>
			</div >

			{/* <div className='flex flex-col justify-center items-center'>

				<div className='toast toast-end toast-middle'>
					<div className='alert alert-info'>
						<div>
							<span>New Achievements<br /> Total 100 Hours Slept</span>

						</div>
					</div>
					<div className='stack'>
						<div className='card shadow-md bg-primary text-primary-content'>
							<div className='card-body'>
								<h2 className='card-title'>Suggested Goals</h2>
								<p>Sleep More</p>
							</div>
						</div>
						<div className='card shadow bg-primary text-primary-content'>
							<div className='card-body'>
								<h2 className='card-title'>Suggested Goals</h2>
								<p>Sleep More</p>
							</div>
						</div>
						<div className='card shadow-sm bg-primary text-primary-content'>
							<div className='card-body'>
								<h2 className='card-title'>Suggested Goals</h2>
								<p>Sleep More</p>
							</div>
						</div>
					</div>
				</div>

			</div> */}


		</>
	)
}
