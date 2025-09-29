'use client';

import { usePackages } from "@/lib/graphql/hooks";
import FooterSection from "@/components/common/FooterSection";
import TitleSection from "./TitleSection";
import DetailsSection from "./DetailsSection";
import Loader from "@/app/components/animations/Loader";

// Interface for Props
interface Props {
    title: string;
}

// Main section with GraphQL
export default function MainSectionGraphQL({ title }: Props) {
    const { packages, loading, error } = usePackages();

    if (loading) {
        return (
            <main className="h-screen flex items-center justify-center">
                <Loader>Loading package details...</Loader>
            </main>
        );
    }

    if (error) {
        console.error('Error loading packages:', error);
        return (
            <main className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-600 mb-4">Error loading package</p>
                    <p className="text-gray-600">Please try again later</p>
                </div>
            </main>
        );
    }

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