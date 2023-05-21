import { Account } from 'appwrite'
import { faFire, faUser } from '@fortawesome/free-solid-svg-icons'
import Api from '@/lib/api'
import Icon from '@/components/icon'
import Navbar from '@/components/navbar'

export default function Home(): JSX.Element {
	return (
		<>
			<Navbar />
			<div className='flex flex-col justify-center items-center'>

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

			</div>


		</>
	)
}
