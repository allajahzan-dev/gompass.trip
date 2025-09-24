import BASE_URL from "@/constants/baseUrl";

// Interface for IStories
export interface IStories {
    id: number;
    name: string;
    location: string;
    image: string;
    description: string;
}

// Fetch stories
export const fetchStories = async (): Promise<{
    stories: IStories[];
}> => {
    try {
        const resp = await fetch(`${BASE_URL}/data/stories.json`);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error("Failed to read stories:", err);
        return { stories: [] };
    }
};
