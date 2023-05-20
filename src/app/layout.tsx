
import './globals.css'

import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Drowsy',
	description: 'Make sleeping fun.',
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' data-theme='night'>
			<body className={inter.className}>
				<div className='h-screen bg-gradient-to-r from-slate-950 to-violet-950'>
					{children}
				</div>
			</body>
		</html >
	)
}
