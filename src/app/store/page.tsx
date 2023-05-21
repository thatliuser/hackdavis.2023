import { Account } from 'appwrite'
import { faFire, faIceCream } from '@fortawesome/free-solid-svg-icons'
import Api from '@/lib/api'
import Icon from '@/components/icon'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import bg from './night.jpg'

export default function Home(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className='flex flex-col items-center justify-center h-max pt-10 space-y-10'>
				<div className='card card-side bg-base-100 shadow-xl items-center w-5/12'>
					<figure><Image src={bg} alt='Night' width='130' height='130' /></figure>
					<div className='card-body'>
						<h2 className='card-title'>Streaky Sleep</h2>
						<p>Add 2 to your current Streak and keep the sleep going (only valid once).</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-primary'>Buy</button>
						</div>
					</div>
				</div>

				<div className='card card-side bg-base-100 shadow-xl w-5/12'>
					<figure><Image src={bg} alt='Night' width='130' height='130' /></figure>
					<div className='card-body'>
						<h2 className='card-title'>Streaky Sleep</h2>
						<p>Add 2 to your current Streak and keep the sleep going (only valid once).</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-primary'>Buy</button>
						</div>
					</div>
				</div>

				<div className='card card-side bg-base-100 shadow-xl w-5/12'>
					<figure><Image src={bg} alt='Night' width='130' height='130' /></figure>
					<div className='card-body'>
						<h2 className='card-title'>Double Or Nothing</h2>
						<p>Wager your points, but make double if you meet your 3 next daily goals.</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-primary'>Buy</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


