import { faFire } from '@fortawesome/free-solid-svg-icons'
import { render } from 'react-dom'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Icon from '@/components/icon'
import ucd from './ucd.png'

export default function Friends() {
	return (<>
		<Navbar />
		<div className='flex flex-col items-center'>
			<div className='stats shadow'>

				<div className='stat'>
					<div className='stat-figure text-primary'>
						<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-8 h-8 stroke-current'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path></svg>
					</div>
					<div className='stat-title'>Friends</div>
					<div className='stat-value text-primary'>26</div>
					<div className='stat-desc'>+1 from Last Week</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'>
						<Icon icon={faFire} size='2xl' /> </div>
					<div className='stat-title'>Streak</div>
					<div className='stat-value text-secondary'>8</div>
					<div className='stat-desc'>Started 5/20</div>
				</div>

				<div className='stat'>
					<div className='stat-figure text-secondary'>
						<div className='avatar online'>
							<div className='w-16 rounded-full'>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='100 0 512 512'><path d='M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z' /></svg>
							</div>
						</div>
					</div>

				</div>

			</div>

		</div>

		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='flex flex-col card bg-base-100 content-center w-9/12 space-y-3 py-8 text-center'>
				<div className='overflow-x-auto w-full'>
					<table className='table w-full'>
						{/* head */}
						<thead>
							<tr>
								<th>

								</th>
								<th>Userame</th>
								<th>Relationship</th>
								<th>Streak</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							<tr>
								<th>
									<label>

									</label>
								</th>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='mask mask-squircle w-12 h-12'>
												<Image className='user-image' src={ucd} alt='User Image' />
											</div>
										</div>
										<div>
											<div className='font-bold'>J_Jon</div>

										</div>
									</div>
								</td>
								<td>
									Best Friend
									<br />

								</td>
								<td>12</td>
								<th>
									<button className='btn btn-ghost btn-xs'>details</button>
								</th>
							</tr>
							{/* row 2 */}
							<tr>
								<th>
									<label>

									</label>
								</th>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='mask mask-squircle w-12 h-12'>
												<Image className='user-image' src={ucd} alt='User Image' />              </div>
										</div>
										<div>
											<div className='font-bold'>Andrew</div>
											<div className='text-sm opacity-50'></div>
										</div>
									</div>
								</td>
								<td>
									Best Friend
									<br />
									<span className='badge badge-ghost badge-sm'></span>
								</td>
								<td>6</td>
								<th>
									<button className='btn btn-ghost btn-xs'>details</button>
								</th>
							</tr>
							{/* row 3 */}
							<tr>
								<th>
									<label>

									</label>
								</th>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='mask mask-squircle w-12 h-12'>
												<Image className='user-image' src={ucd} alt='User Image' />              </div>
										</div>
										<div>
											<div className='font-bold'>Suparn.S</div>
											<div className='text-sm opacity-50'></div>
										</div>
									</div>
								</td>
								<td>
									Best Friend
									<br />
									<span className='badge badge-ghost badge-sm'></span>
								</td>
								<td>5</td>
								<th>
									<button className='btn btn-ghost btn-xs'>details</button>
								</th>
							</tr>
							{/* row 4 */}
							<tr>
								<th>
									<label>

									</label>
								</th>
								<td>
									<div className='flex items-center space-x-3'>
										<div className='avatar'>
											<div className='mask mask-squircle w-12 h-12'>
												<Image src={ucd} alt='Avatar Tailwind CSS Component' />
											</div>
										</div>
										<div>
											<div className='font-bold'>Applesauce</div>

										</div>
									</div>
								</td>
								<td>
									Best Friend
									<br />

								</td>
								<td>32</td>
								<th>
									<button className='btn btn-ghost btn-xs'>details</button>
								</th>
							</tr>
						</tbody>


					</table>
				</div>

			</div>
		</div>
	</>)

}

