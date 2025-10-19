import TitleSection from "@/components/common/TitleSection";
import PackageSection from "./PackageSection";
import ConnectSection from "@/components/common/ConnectSection";
import FooterSection from "@/components/common/FooterSection";

// Main section
export default function MainSection() {
    return (
        <main className="overflow-hidden">
            <TitleSection
                bgImage="/images/packages/trip.jpg"
                text={["Tour", "Packages"]}
            />
            <PackageSection />
            <ConnectSection />
            <FooterSection />
        </main>
    );
}
