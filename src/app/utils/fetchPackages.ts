import BASE_URL from "@/constants/baseUrl";

// Interface for IPackage
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

// Fetch packages
export const fetchPackages = async (): Promise<{
    packages: IPackage[];
}> => {
    try {
        const resp = await fetch(`${BASE_URL}/data/packages.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read packages:", err);
        return { packages: [] };
    }
};
