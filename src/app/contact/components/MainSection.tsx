import TitleSection from "@/components/common/TitleSection";
import FooterSection from "@/components/common/FooterSection";
import ContactSection from "./ContactSection";
import MapSection from "./MapSection";

// Main section
export default function MainSection() {
    return (
        <main className="overflow-hidden">
            <TitleSection
                bgImage="/images/contact/contact.jpg"
                text={["Contact", "Us"]}
            />
            <ContactSection/>
            <MapSection />
            <FooterSection />
        </main>
    );
}
