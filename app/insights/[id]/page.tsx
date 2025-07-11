"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

type InsightKey =
	| "crypto-portfolio-diversification"
	| "retirement-planning-millennials"
	| "real-estate-market-trends"
	| "hedge-fund-strategies"
	| "market-volatility-opportunities"
	| "children-investment-education";

interface Insight {
	title: string;
	category: string;
	date: string;
	author: string;
	authorTitle: string;
	image: string;
	content: string;
}

const insightsData: Record<InsightKey, Insight> = {
	"crypto-portfolio-diversification": {
		title: "How to Diversify Your Crypto Portfolio in a Volatile Market",
		category: "Cryptocurrency",
		date: "June 10, 2024",
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
	"retirement-planning-millennials": {
		title: "Retirement Planning for Millennials: Start Now, Retire Rich",
		category: "Retirement",
		date: "June 8, 2024",
		author: "Sarah Johnson",
		authorTitle: "Retirement Planning Advisor",
		image:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
		content: `
      Retirement may seem far off for millennials, but starting early can make a huge difference. 
      This article covers the benefits of early investment, compound interest, and practical steps to start saving.
    `,
	},
	"real-estate-market-trends": {
		title: "Real Estate Market Trends: Where to Invest in 2024",
		category: "Real Estate",
		date: "June 5, 2024",
		author: "Marcus Chen",
		authorTitle: "Real Estate Investment Analyst",
		image:
			"https://images.unsplash.com/photo-1560448070-1b9a0f7ccf1d?auto=format&fit=crop&w=800&q=80",
		content: `
      The real estate market is evolving rapidly. This article analyzes top markets for 2024, 
      including residential, commercial, and REIT opportunities, with data-driven insights.
    `,
	},
	"hedge-fund-strategies": {
		title: "Hedge Fund Strategies for Retail Investors",
		category: "Investment Strategies",
		date: "June 3, 2024",
		author: "David Wilson",
		authorTitle: "Investment Strategist",
		image:
			"https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
		content: `
      Hedge fund strategies are no longer just for the elite. Learn how retail investors can use 
      techniques like hedging and diversification to protect and grow their portfolios.
    `,
	},
	"market-volatility-opportunities": {
		title: "Finding Opportunities in Market Volatility",
		category: "Market Analysis",
		date: "May 30, 2024",
		author: "Emma Rodriguez",
		authorTitle: "Market Analyst",
		image:
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
		content: `
      Market volatility can be a challenge, but it also presents opportunities. This article discusses 
      how to identify undervalued assets and make informed investment decisions.
    `,
	},
	"children-investment-education": {
		title: "Teaching Children About Investing: A Guide for Parents",
		category: "Investment Strategies",
		date: "May 28, 2024",
		author: "James Thompson",
		authorTitle: "Family Financial Advisor",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
		content: `
      Teaching kids about investing early sets them up for financial independence. This guide provides 
      practical steps for parents to introduce concepts like saving, investing, and compound interest.
    `,
	},
};

export default function InsightDetail() {
	const router = useRouter();
	const params = useParams();
	const id = params?.id;

	// Debug: Log the ID being accessed
	useEffect(() => {
		console.log("InsightDetail ID:", id);
	}, [id]);

	// Type guard to ensure id is a valid InsightKey
	if (!id || typeof id !== "string" || !(id in insightsData)) {
		return (
			<div className="max-w-4xl mx-auto p-6">
				<p>Insight not found.</p>
				<Link href="/insights">
					<Button variant="outline">Back to Insights</Button>
				</Link>
			</div>
		);
	}

	const insight = insightsData[id as InsightKey];

	return (
		<article className="max-w-4xl mx-auto p-6">
			<Button
				variant="ghost"
				onClick={() => router.back()}
				className="mb-6 flex items-center gap-2">
				<ArrowLeft className="h-4 w-4" /> Back
			</Button>
			<h1 className="text-4xl font-bold mb-2">{insight.title}</h1>
			<div className="mb-4 text-sm text-muted-foreground">
				<span className="font-medium">{insight.category}</span> | {insight.date}
			</div>
			<div className="relative h-80 w-full mb-6">
				<Image
					src={insight.image}
					alt={insight.title}
					fill
					className="object-cover rounded-lg"
				/>
			</div>
			<div className="mb-6">
				<p className="font-semibold">{insight.author}</p>
				<p className="text-muted-foreground">{insight.authorTitle}</p>
			</div>
			<section className="prose max-w-none whitespace-pre-line">
				{insight.content}
			</section>
			<div className="mt-12">
				<Link href="/insights">
					<Button variant="outline">Back to Insights</Button>
				</Link>
			</div>
		</article>
	);
}
