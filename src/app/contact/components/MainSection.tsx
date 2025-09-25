import TitleSection from "@/components/common/TitleSection";
import FooterSection from "@/components/common/FooterSection";
import ContactFormSection from "./ContactFormSection";
import MapSection from "./MapSection";

// Main section
export default function MainSection() {
    return (
        <main className="overflow-hidden">
            <TitleSection
                bgImage="/images/contact/contact.jpg"
                text={["Contact", "Us"]}
            />
            <ContactFormSection/>
            <MapSection />
            <FooterSection />
        </main>
    );
}
