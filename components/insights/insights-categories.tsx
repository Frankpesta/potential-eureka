"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { animate, stagger } from "animejs";

interface InsightsCategoriesProps {
	activeCategory: string;
	onCategoryChange: (categoryId: string) => void;
}

export function InsightsCategories({
	activeCategory,
	onCategoryChange,
}: InsightsCategoriesProps) {
	const categoriesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".category-button", {
						opacity: [0, 1],
						translateY: [20, 0],
						delay: 50,
						easing: "easeOutQuad",
						stagger: stagger(100, { start: 0 }),
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (categoriesRef.current) {
			observer.observe(categoriesRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const categories = [
		{ id: "all", name: "All Insights" },
		{ id: "market-analysis", name: "Market Analysis" },
		{ id: "investment-strategies", name: "Investment Strategies" },
		{ id: "crypto", name: "Cryptocurrency" },
		{ id: "real-estate", name: "Real Estate" },
		{ id: "retirement", name: "Retirement" },
	];

	// Debug: Log category change
	const handleCategoryChange = (categoryId: string) => {
		console.log("Category changed to:", categoryId);
		onCategoryChange(categoryId);
	};

	return (
		<div ref={categoriesRef} className="mb-12">
			<div className="flex flex-wrap gap-3">
				{categories.map((category) => (
					<Button
						key={category.id}
						variant={activeCategory === category.id ? "default" : "outline"}
						size="sm"
						className="category-button opacity-0"
						onClick={() => handleCategoryChange(category.id)}>
						{category.name}
					</Button>
				))}
			</div>
		</div>
	);
}
