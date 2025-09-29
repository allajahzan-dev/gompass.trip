import HeroSection from "./HeroSection";
import PackageSectionGraphQL from "./PackageSectionGraphQL";
import ServiceSectionGraphQL from "@/components/common/ServiceSectionGraphQL";
import ProcessSection from "./ProcessSection";
import StoriesSectionGraphQL from "./StoriesSectionGraphQL";
import ContactSection from "@/components/common/ContactSection";
import FooterSection from "@/components/common/FooterSection";

// Main section
export default function MainSection() {
    return (
        <main className="overflow-hidden">
            <HeroSection />
            <PackageSectionGraphQL />
            <ServiceSectionGraphQL />
            <ProcessSection />
            <StoriesSectionGraphQL />
            <ContactSection />
            <FooterSection />
        </main>
    );
}
