import { Account } from 'appwrite'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import Api from '@/lib/api'
import Icon from '@/components/icon'
import Navbar from '@/components/navbar'

export default function Home(): JSX.Element {
		return (
            <>
                <Navbar />
                <div className='flex flex-col items-center justify-center h-screen'>
                <div className='card card-side bg-base-100 shadow-xl'>
                <figure><img src='/images/stock/photo-1635805737707-575885ab0820.jpg' alt='Movie'/></figure>
                <div className='card-body'>
                <h2 className='card-title'>Streak Freeze</h2>
                <p>This will freeze your streak so that it will be safe for the next 2 days. </p>
                <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Buy</button>
                </div>
                </div>
                </div> &nsdrf

                <div className='card card-side bg-base-100 shadow-xl'>
                <figure><img src='/images/stock/photo-1635805737707-575885ab0820.jpg' alt='Movie'/></figure>
                <div className='card-body'>
                <h2 className='card-title'>Streaky Sleep</h2>
                <p>Add 2 to your current Streak and keep the sleep going(Only valid once).</p>
                <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Buy</button>
                </div>
                </div>
                </div> &nsdrf

                <div className='card card-side bg-base-100 shadow-xl'>
                <figure><img src='/images/stock/photo-1635805737707-575885ab0820.jpg' alt='Movie'/></figure>
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

    
