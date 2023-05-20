/** @type {import('next').NextConfig} */
const config = {
	async rewrites() {
		return [
			{
				source: '/v1',
				destination: 'https://cloud.appwrite.io/'
			}
		]
	}
}

export default config
