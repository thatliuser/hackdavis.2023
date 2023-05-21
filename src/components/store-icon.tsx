import Icon from './icon'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function StoreIcon() {
	return (<>
		<div className='dropdown dropdown-end'>
			<button tabIndex={0} className='btn btn-ghost btn-circle'>
				<Icon icon={faCartShopping} />
			</button>
			<div tabIndex={0} className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
				<div className='card-body'>
					<span className='font-bold text-lg'>2 Items</span>
					<span className='text-info'>Total: 200 points</span>
					<div className='card-actions'>
						<button className='btn btn-primary btn-block'>View cart</button>
					</div>
				</div>
			</div>
		</div>
	</>)
}
