import BASE_URL from "@/constants/baseUrl";
import client from "@/lib/apollo-client";
import { GET_SERVICES } from "@/lib/graphql/queries";
import { ServicesResponse } from "@/lib/graphql/types";

// Interface for IService (keeping original for backward compatibility)
export interface IService {
    id: number;
    title: string;
    description: string;
    icon: string;
}

// Fetch services using GraphQL (with fallback to JSON)
export const fetchServices = async (): Promise<{
    services: IService[];
}> => {
    try {
        // First try GraphQL (Strapi)
        const { data } = await client.query<ServicesResponse>({
            query: GET_SERVICES,
            errorPolicy: 'all',
        });

        if (data?.services?.data) {
            // Transform Strapi data to legacy format
            const services: IService[] = data.services.data.map((service) => ({
                id: parseInt(service.id),
                title: service.attributes.title,
                description: service.attributes.description,
                icon: service.attributes.icon,
            }));

            return { services };
        }
    } catch (graphqlError) {
        console.warn("GraphQL fetch failed, falling back to JSON:", graphqlError);
    }

    // Fallback to original JSON method
    try {
        const resp = await fetch(`${BASE_URL}/data/services.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read services:", err);
        return { services: [] };
    }
};
