const isGhPages = process.env["GITHUB_ACTION"] ? true : false

// Vercel I hope you know you suck for this and I will never use your services again
/** @type {import('next').NextConfig} */
const deployConfig = {
	output: 'export',
	basePath: '/hackdavis.2023',
	assetPrefix: '/hackdavis.2023',
	images: {
		loader: 'akamai',
		path: ''
	}
}

/** @type {import('next').NextConfig} */
const config = (isGhPages ? deployConfig : {})

export default config
