import BASE_URL from "@/constants/baseUrl";
import client from "@/lib/apollo-client";
import { GET_STORIES } from "@/lib/graphql/queries";
import { StoriesResponse } from "@/lib/graphql/types";

// Interface for IStories (keeping original for backward compatibility)
export interface IStories {
    id: number;
    name: string;
    location: string;
    image: string;
    description: string;
}

// Fetch stories using GraphQL (with fallback to JSON)
export const fetchStories = async (): Promise<{
    stories: IStories[];
}> => {
    try {
        // First try GraphQL (Strapi)
        const { data } = await client.query<StoriesResponse>({
            query: GET_STORIES,
            errorPolicy: 'all',
        });

        if (data?.stories?.data) {
            // Transform Strapi data to legacy format
            const stories: IStories[] = data.stories.data.map((story) => ({
                id: parseInt(story.id),
                name: story.attributes.name,
                location: story.attributes.location,
                image: story.attributes.image?.data?.attributes?.url || '',
                description: story.attributes.review, // Map review to description
            }));

            return { stories };
        }
    } catch (graphqlError) {
        console.warn("GraphQL fetch failed, falling back to JSON:", graphqlError);
    }

    // Fallback to original JSON method
    try {
        const resp = await fetch(`${BASE_URL}/data/stories.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read stories:", err);
        return { stories: [] };
    }
};
