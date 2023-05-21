'use client'

import Api from '@/lib/api'
import Icon from '@/components/icon'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import {
	Chart,
	PointElement,
	LinearScale,
	CategoryScale,
	LineElement,
	Tooltip,
	ChartOptions,
	ChartData
} from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Tooltip
)

const inter = Inter({ subsets: ['latin'] })
Chart.defaults.backgroundColor = 'rgba(0, 0, 0, 0)'
Chart.defaults.borderColor = 'rgba(255, 255, 255, 255)'
Chart.defaults.font.size = 20
Chart.defaults.color = '#748aad'

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

	const opts: ChartOptions<'line'> = {
		maintainAspectRatio: false,
		responsive: false,
		scales: {
			x: {
				grid: {
					display: false
				},
				border: {
					display: false
				},
				ticks: {
					padding: 20,
					font: {
						size: 25
					}
				}
			},
			y: {
				grid: {
					color: '#273449',
					lineWidth: 3,
				},
				border: {
					display: false
				},
				ticks: {
					padding: 20,
					maxTicksLimit: 3,
					font: {
						size: 25
					}
				},
			}
		}
	}

	const data: ChartData<'line'> = {
		labels: [0, 1, 2, 3],
		datasets: [
			{
				label: 'my data',
				data: [1, 3, 5, 6],
				pointBackgroundColor: '#b5cdf5',
				pointBorderColor: '#b5cdf5',
				pointRadius: 8,
				borderWidth: 7,
				borderColor: '#b5cdf5'
			}
		]
	}

	initUser()
	return (<>
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
				<div className='flex justify-center'>
					<Line options={opts} data={data} width={1000 /* This is SO hacky ew */} height={600 /* Same with this */} />
				</div>
			</div>
		</div>
	</>)
}
