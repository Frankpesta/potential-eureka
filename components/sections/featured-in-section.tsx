"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
	{ name: "Forbes", src: "/logos/forbes.png" },
	{ name: "Bloomberg", src: "/logos/bloomberg.png" },
	{ name: "CNBC", src: "/logos/cnbc.png" },
	{ name: "Wall Street Journal", src: "/logos/wsj.png" },
	{ name: "Financial Times", src: "/logos/ft.png" },
	{ name: "Reuters", src: "/logos/reuters.png" },
	{ name: "The Economist", src: "/logos/theecon.png" },
	{ name: "BBC", src: "/logos/bbc.png" },
	{ name: "TechCrunch", src: "/logos/techcrunch.png" },
	{ name: "The Guardian", src: "/logos/theguardian.png" },
];

export function FeaturedInSection() {
	return (
		<section className="py-12 border-y overflow-hidden">
			<div className="container px-4">
				<p className="text-center text-sm text-muted-foreground mb-8">
					FEATURED IN
				</p>
				<motion.div
					className="flex gap-16 whitespace-nowrap"
					animate={{ x: [0, -1000] }} // Adjust -1000 to match your marquee's width
					transition={{
						x: {
							repeat: Infinity,
							repeatType: "loop",
							duration: 20,
							ease: "linear",
						},
					}}>
					{[...logos, ...logos].map((logo, index) => (
						<div key={index} className="inline-flex items-center">
							<Image
								src={logo.src}
								alt={logo.name}
								width={1000}
								height={1000}
								className="h-12 object-contain w-full"
								priority={index < logos.length}
							/>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
