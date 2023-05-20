import { config } from 'dotenv'

const backend = process.env["BACKEND_URL"] ?? "localhost"

/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api',
				destination: backend
			}
		]
	}
}

export default nextConfig
