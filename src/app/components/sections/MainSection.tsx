import HeroSection from "./HeroSection";
import PackageSection from "./PackageSection";
import ProcessSection from "./ProcessSection";
import ServiceSection from "./ServiceSection";
import StoriesSection from "./StoriesSection";

// Main section
export default function MainSection() {
    return (
        <main>
            <HeroSection />
            <PackageSection />
            <ServiceSection />
            <ProcessSection />
            <StoriesSection />
        </main>
    );
}
