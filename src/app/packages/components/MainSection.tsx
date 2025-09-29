import TitleSection from "@/components/common/TitleSection";
import PackageSectionGraphQL from "./PackageSectionGraphQL";
import ContactSection from "@/components/common/ContactSection";
import FooterSection from "@/components/common/FooterSection";

// Main section
export default function MainSection() {
    return (
        <main className="overflow-hidden">
            <TitleSection
                bgImage="/images/packages/trip.jpg"
                text={["Tour", "Packages"]}
            />
            <PackageSectionGraphQL />
            <ContactSection />
            <FooterSection />
        </main>
    );
}
