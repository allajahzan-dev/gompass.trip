import { SERVER_URL } from "@/constants/url";

// Interface for IStories
export interface IStories {
    documentId: number;
    userName: string;
    userImage: { url: string; alternativeText?: string };
    location: string;
    review: string;
}

// Fetch stories
export const fetchStories = async (): Promise<{
    stories: IStories[];
}> => {
    const query = `
    query {
      stories {
      documentId
      userName
      userImage {
        url
        alternativeText
      }
      location
      review
    }
    }
  `;

    try {
        const response = await fetch(`${SERVER_URL}/graphql`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
            cache: "no-cache",
        });

        const result = await response.json();

        if (result.errors) {
            console.error("GraphQL errors:", result.errors);
            return { stories: [] };
        }

        return result.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return { stories: [] };
    }
};
