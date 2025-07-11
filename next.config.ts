import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "", // Leave empty for default HTTPS port
				pathname: "/**", // Allow all paths under this hostname
			},
		],
	},
};

export default nextConfig;
