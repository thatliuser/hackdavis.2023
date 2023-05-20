import { config } from 'dotenv'

console.log(process.env.BACKEND_URL)

/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api',
			}
		]
	}
}

export default nextConfig
