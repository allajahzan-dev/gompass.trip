import AnimatePackages from "@/components/animation/AnimatePackages";
import { fetchPackages } from "@/app/utils/fetchPackages";

// Package section
export default async function PackageSection() {
    // Packages
    const { packages } = await fetchPackages();

    return (
        <section
            className="h-auto px-5 py-16 bg-white flex flex-col gap-16
            md:px-10 xl:px-24 md:py-24"
        >
            {/* Packages */}
            {packages.length > 0 && (
                <div
                    className="grid grid-cols-1 gap-5
                md:grid-cols-2 xl:grid-cols-3"
                >
                    {packages.reverse().map((pkg) => (
                        <AnimatePackages key={pkg.documentId} pkg={pkg} />
                    ))}
                </div>
            )}

            {/* No packages */}
            {packages.length === 0 && (
                <div className="h-[60vh] flex items-center justify-center">
                    <h1 className="text-3xl font-semibold">Packages not found!</h1>
                </div>
            )}
        </section>
    );
}
