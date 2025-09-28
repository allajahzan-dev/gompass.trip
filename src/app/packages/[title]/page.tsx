import { fetchPackages } from "@/app/utils/fetchPackages";
import MainSection from "./components/MainSection";

// Interface for Props
interface Props {
    params: Promise<{ title: string }>;
}

// Generate static parmas
export async function generateStaticParams() {
    const { packages } = await fetchPackages();

    return packages.map((pkg: { title: string }) => {
        return {
            title: pkg.title.split(" ").join("-").toLowerCase(),
        };
    });
}

// Generate Metadata
export async function generateMetadata({ params }: Props) {
    const data = await params;
    const { packages } = await fetchPackages();

    const pkg = packages.find(
        (p: { title: string }) =>
            p.title.split(" ").join("-").toLowerCase() === data.title
    );

    if (!pkg) {
        return {
            title: "Package not found",
            description: "This package does not exist.",
        };
    }

    return {
        title: `${pkg.title} | Gompass.trip`,
        description: pkg.description1,
    };
}

// Package
export default async function Package({ params }: Props) {
    const data = await params;
    return <MainSection title={data.title} />;
}
