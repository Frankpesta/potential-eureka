"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { animate, stagger } from "animejs";

interface Insight {
	id: string;
	title: string;
	categoryId: string;
	category: string;
	date: string;
	excerpt: string;
	author: string;
	authorTitle: string;
	image: string;
	content: string;
}

interface InsightsGridProps {
	activeCategory: string;
}

const INSIGHTS_PER_PAGE = 3;

export function InsightsGrid({ activeCategory }: InsightsGridProps) {
	const gridRef = useRef<HTMLDivElement>(null);
	const [visibleCount, setVisibleCount] = useState(INSIGHTS_PER_PAGE);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					animate(".insight-card", {
						opacity: [0, 1],
						translateY: [20, 0],
						delay: 100,
						easing: "easeOutQuad",
						stagger: stagger(100, { start: 0 }),
					});
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (gridRef.current) {
			observer.observe(gridRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const insights: Insight[] = [
		{
			id: "crypto-portfolio-diversification",
			title: "How to Diversify Your Crypto Portfolio in a Volatile Market",
			categoryId: "crypto",
			category: "Cryptocurrency",
			date: "June 10, 2024",
			excerpt:
				"Learn effective strategies for diversifying your cryptocurrency investments to minimize risk while maximizing potential returns.",
			author: "Alex Rivera",
			authorTitle: "Crypto Investment Specialist",
			image:
				"https://images.unsplash.com/photo-1612831455544-3f7d9d3a0f2f?auto=format&fit=crop&w=800&q=80",
			content: `
        Cryptocurrency markets are known for their volatility. Diversifying your portfolio can help reduce risk.
        In this article, we explore various strategies including asset allocation, stablecoins, and cross-chain investments.
        Learn how to balance risk and reward effectively.
      `,
		},
		{
			id: "retirement-planning-millennials",
			title: "Retirement Planning for Millennials: Start Now, Retire Rich",
			categoryId: "retirement",
			category: "Retirement",
			date: "June 8, 2024",
			excerpt:
				"Why millennials need to start retirement planning early and how small, consistent investments can lead to significant wealth.",
			author: "Sarah Johnson",
			authorTitle: "Retirement Planning Advisor",
			image:
				"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
			content: `
        Retirement may seem far off for millennials, but starting early can make a huge difference. 
        This article covers the benefits of early investment, compound interest, and practical steps to start saving.
      `,
		},
		{
			id: "real-estate-market-trends",
			title: "Real Estate Market Trends: Where to Invest in 2024",
			categoryId: "real-estate",
			category: "Real Estate",
			date: "June 5, 2024",
			excerpt:
				"Analysis of emerging real estate markets and investment opportunities in residential, commercial, and REITs.",
			author: "Marcus Chen",
			authorTitle: "Real Estate Investment Analyst",
			image:
				"https://images.unsplash.com/photo-1560448070-1b9a0f7ccf1d?auto=format&fit=crop&w=800&q=80",
			content: `
        The real estate market is evolving rapidly. This article analyzes top markets for 2024, 
        including residential, commercial, and REIT opportunities, with data-driven insights.
      `,
		},
		{
			id: "hedge-fund-strategies",
			title: "Hedge Fund Strategies for Retail Investors",
			categoryId: "investment-strategies",
			category: "Investment Strategies",
			date: "June 3, 2024",
			excerpt:
				"How retail investors can implement hedge fund-like strategies to protect and grow their portfolios in any market.",
			author: "David Wilson",
			authorTitle: "Investment Strategist",
			image:
				"https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
			content: `
        Hedge fund strategies are no longer just for the elite. Learn how retail investors can use 
        techniques like hedging and diversification to protect and grow their portfolios.
      `,
		},
		{
			id: "market-volatility-opportunities",
			title: "Finding Opportunities in Market Volatility",
			categoryId: "market-analysis",
			category: "Market Analysis",
			date: "May 30, 2024",
			excerpt:
				"How to identify and capitalize on investment opportunities during periods of increased market volatility.",
			author: "Emma Rodriguez",
			authorTitle: "Market Analyst",
			image:
				"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
			content: `
        Market volatility can be a challenge, but it also presents opportunities. This article discusses 
        how to identify undervalued assets and make informed investment decisions.
      `,
		},
		{
			id: "children-investment-education",
			title: "Teaching Children About Investing: A Guide for Parents",
			categoryId: "investment-strategies",
			category: "Investment Strategies",
			date: "May 28, 2024",
			excerpt:
				"Practical tips for parents to introduce investment concepts to children and set them up for financial success.",
			author: "James Thompson",
			authorTitle: "Family Financial Advisor",
			image:
				"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
			content: `
        Teaching kids about investing early sets them up for financial independence. This guide provides 
        practical steps for parents to introduce concepts like saving, investing, and compound interest.
      `,
		},
	];

	// Filter insights by active category
	const filteredInsights =
		activeCategory === "all"
			? insights
			: insights.filter((insight) => insight.categoryId === activeCategory);

	// Show only visibleCount insights
	const visibleInsights = filteredInsights.slice(0, visibleCount);

	// Load more handler
	const handleLoadMore = () => {
		setVisibleCount((prev) => prev + INSIGHTS_PER_PAGE);
	};

	// Debug: Log filtered insights to verify category filtering
	useEffect(() => {
		console.log("Active Category:", activeCategory);
		console.log(
			"Filtered Insights:",
			filteredInsights.map((i) => i.id)
		);
	}, [activeCategory, filteredInsights]);

	return (
		<div ref={gridRef} className="mb-16">
			{filteredInsights.length === 0 ? (
				<p className="text-center text-muted-foreground">
					No insights available in this category yet. Check back soon!
				</p>
			) : (
				<>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{visibleInsights.map((insight) => (
							<Card
								key={insight.id}
								className="insight-card opacity-0 overflow-hidden">
								<div className="relative h-48">
									<Image
										src={insight.image}
										alt={insight.title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									/>
								</div>
								<CardContent className="p-6">
									<div className="mb-2">
										<span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium">
											{insight.category}
										</span>
										<span className="text-sm text-muted-foreground ml-3">
											{insight.date}
										</span>
									</div>
									<h3 className="text-xl font-bold mb-3">{insight.title}</h3>
									<p className="text-muted-foreground mb-4 line-clamp-3">
										{insight.excerpt}
									</p>
									<div className="flex items-center">
										<div className="h-8 w-8 rounded-full bg-muted overflow-hidden mr-3">
											<Image
												src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=32&q=80"
												alt={insight.author}
												width={32}
												height={32}
												className="h-full w-full object-cover"
											/>
										</div>
										<div className="text-sm">
											<p className="font-medium">{insight.author}</p>
											<p className="text-muted-foreground">
												{insight.authorTitle}
											</p>
										</div>
										<Button
											variant="ghost"
											size="sm"
											className="ml-auto group"
											asChild>
											<Link href={`/insights/${insight.id}`}>
												Read
												<ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
					{visibleCount < filteredInsights.length && (
						<div className="mt-8 text-center">
							<Button variant="outline" size="lg" onClick={handleLoadMore}>
								Load more insights
							</Button>
						</div>
					)}
				</>
			)}
		</div>
	);
}
