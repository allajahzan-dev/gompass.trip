import BASE_URL from "@/constants/baseUrl";

// Interface for IService
export interface IService {
    id: number;
    title: string;
    description: string;
    icon: string;
}

// Fetch services
export const fetchServices = async (): Promise<{
    services: IService[];
}> => {
    try {
        const resp = await fetch(`${BASE_URL}/data/services.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read services:", err);
        return { services: [] };
    }
};
