import BASE_URL from "@/constants/baseUrl";

// Interface for IPackages
export interface IPackages {
    id: number;
    Title: string;
    location: string;
    days: string;
    image: string;
    description: string;
    price: string;
}

// Fetch packages
export const fetchPackages = async (): Promise<{
    packages: IPackages[];
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
