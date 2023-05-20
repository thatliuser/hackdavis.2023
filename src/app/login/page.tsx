import Api from '@/lib/api'

export default function Login() {
	return (<>
		<div className='flex items-center justify-center h-screen'>
			<div className='card bg-base-100 content-center w-5/12'>
				<div className='card-body space-y-3'>
					<h1 className='card-title'>Login</h1>
					<input type='text' placeholder='Username' className='input input-bordered w-full' />
					<input type='password' placeholder='Password' className='input input-bordered' />
					<button className='btn btn-secondary'>Go!</button>
					<button className='btn'>Sign up</button>
				</div>
			</div>
		</div>
	</>)
}
