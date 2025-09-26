import { fetchPackages } from "@/app/utils/fetchPackages";
import FooterSection from "@/components/common/FooterSection";
import TitleSection from "./TitleSection";
import DetailsSection from "./DetailsSection";

// Interface for Props
interface Props {
    title: string;
}

// Main section
export default async function MainSection({ title }: Props) {
    const { packages } = await fetchPackages();

    const pkg = packages.find(
        (pkg) => pkg.title.toLocaleLowerCase() === title.split("-").join(" ")
    );

    return (
        <main>
            {pkg ? (
                <>
                    <TitleSection pkg={pkg} />
                    <DetailsSection pkg={pkg} />
                </>
            ) : (
                <div className="h-screen flex items-center justify-center">
                    <h1 className="text-3xl font-semibold">Package not found!</h1>
                </div>
            )}
            <FooterSection />
        </main>
    );
}
