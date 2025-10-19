import TitleSection from "@/components/common/TitleSection";
import AboutSection from "./AboutSection";
import ServiceSection from "@/components/common/ServiceSection";
import ConnectSection from "@/components/common/ConnectSection";
import FooterSection from "@/components/common/FooterSection";

// Main section
export default function MainSection() {
    return (
        <main className="overflow-hidden">
            <TitleSection
                bgImage="/images/about/about.jpg"
                text={["About", "Company"]}
            />
            <AboutSection />
            <ServiceSection />
            <ConnectSection />
            <FooterSection />
        </main>
    );
}
