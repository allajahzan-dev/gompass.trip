import AnimatePackages from "@/components/animation/AnimatePackages";
import { fetchPackages } from "@/app/utils/fetchPackages";

// Package section
export default async function PackageSection() {
    // Packages
    const { packages } = await fetchPackages();

    return (
        <section
            className="min-h-screen px-5 py-16 bg-white flex flex-col gap-16
            md:px-10 xl:px-24 md:py-24"
        >
            {/* Packages */}
            <div
                className="grid grid-cols-1 gap-5
                md:grid-cols-2 xl:grid-cols-3"
            >
                {packages.map((pkg) => (
                    <AnimatePackages key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </section>
    );
}
