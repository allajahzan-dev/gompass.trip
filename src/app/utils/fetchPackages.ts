import BASE_URL from "@/constants/baseUrl";
import client from "@/lib/apollo-client";
import { GET_PACKAGES } from "@/lib/graphql/queries";
import { PackagesResponse } from "@/lib/graphql/types";

// Interface for IPackage (keeping original for backward compatibility)
export interface IPackage {
    id: number;
    title: string;
    location: string;
    days: string;
    images: string[];
    description1: string;
    description2: string;
    price: string;
    includes: string[];
    excludes: string[];
    plans: {day: string, title: string, activities: string[]}[]
}

// Fetch packages using GraphQL (with fallback to JSON)
export const fetchPackages = async (): Promise<{
    packages: IPackage[];
}> => {
    try {
        // First try GraphQL (Strapi)
        const { data } = await client.query<PackagesResponse>({
            query: GET_PACKAGES,
            errorPolicy: 'all',
        });

        if (data?.packages?.data) {
            // Transform Strapi data to legacy format
            const packages: IPackage[] = data.packages.data.map((pkg) => ({
                id: parseInt(pkg.id),
                title: pkg.attributes.title,
                location: pkg.attributes.location,
                days: pkg.attributes.days,
                images: pkg.attributes.images?.data?.map((img) => img.attributes.url) || [],
                description1: pkg.attributes.description1,
                description2: pkg.attributes.description2,
                price: pkg.attributes.price,
                includes: pkg.attributes.includes || [],
                excludes: [], // Add default value
                plans: [], // Add default value
            }));

            return { packages };
        }
    } catch (graphqlError) {
        console.warn("GraphQL fetch failed, falling back to JSON:", graphqlError);
    }

    // Fallback to original JSON method
    try {
        const resp = await fetch(`${BASE_URL}/data/packages.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read packages:", err);
        return { packages: [] };
    }
};
