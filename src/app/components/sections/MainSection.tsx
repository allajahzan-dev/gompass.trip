import HeroSection from "./HeroSection";
import PackageSection from "./PackageSection";
import ServiceSection from "./ServiceSection";
import ProcessSection from "./ProcessSection";
import StoriesSection from "./StoriesSection";
import ContactSection from "./ContactSection";
import FooterSection from "@/components/common/FooterSection";

// Main section
export default function MainSection() {
    return (
        <main className="overflow-hidden">
            <HeroSection />
            <PackageSection />
            <ServiceSection />
            <ProcessSection />
            <StoriesSection />
            <ContactSection />
            <FooterSection />
        </main>
    );
}
