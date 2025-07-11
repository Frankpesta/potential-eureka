import { FaqHeader } from "@/components/faq/faq-header";
import { FaqSearch } from "@/components/faq/faq-search";
import { FaqCategories } from "@/components/faq/faq-categories";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { FaqCta } from "@/components/faq/faq-cta";

export const metadata = {
	title: "Frequently Asked Questions | Merilledge Advisory Management",
	description:
		"Find answers to common questions about Merilledge Advisory Management's investment services and platform",
};

export default function FaqPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<FaqHeader />
			<FaqSearch />
			<FaqCategories />
			<FaqAccordion />
			<FaqCta />
		</div>
	);
}
