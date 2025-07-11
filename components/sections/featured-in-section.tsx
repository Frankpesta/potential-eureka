"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function FeaturedInSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".featured-item", {
						opacity: [0, 1],
						scale: [0.9, 1],
						delay: 100,
						easing: "easeOutQuad",
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const logos = [
		"Forbes",
		"Bloomberg",
		"CNBC",
		"Wall Street Journal",
		"Financial Times",
		"Reuters",
		"MarketWatch",
		"Yahoo Finance",
		"Investopedia",
		"The Motley Fool",
		"Barron's",
		"Business Insider",
	];

	return (
		<section ref={sectionRef} className="py-12 border-y">
			<div className="container px-4">
				<p className="text-center text-sm text-muted-foreground mb-8">
					FEATURED IN
				</p>
				<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
					{logos.map((logo, index) => (
						<div
							key={index}
							className="featured-item opacity-0 text-xl font-semibold text-muted-foreground">
							{logo}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
