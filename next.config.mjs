import * as dotenv from 'dotenv'
dotenv.config()

const backend = process.env["BACKEND_URL"] ?? "localhost"

/** @type {import('next').NextConfig} */
const config = {
	async rewrites() {
		return [
			{
				source: '/api',
				destination: backend
			}
		]
	}
}

export default config
