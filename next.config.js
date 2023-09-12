/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'mars.nasa.gov',
			},
			{
				protocol: 'https',
				hostname: 'api.nasa.gov',
			},
			{
				protocol: 'https',
				hostname: '**.*',
			},
			{
				protocol: 'http',
				hostname: '**.*',
			},
			{
				protocol: 'http',
				hostname: 'mars.jpl.nasa.gov',
			},
		],
	},
};

module.exports = nextConfig;
