import { PrivacyHeader } from "@/components/legal/privacy-header";
import { PrivacyContent } from "@/components/legal/privacy-content";

export const metadata = {
	title: "Privacy Policy | Merilledge Advisory Management",
	description:
		"Privacy policy detailing how Merilledge Advisory Management collects, uses, and protects your personal information",
};

export default function PrivacyPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<PrivacyHeader />
			<div className="max-w-4xl mx-auto">
				<PrivacyContent />
			</div>
		</div>
	);
}
