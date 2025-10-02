// import BASE_URL from "@/constants/baseUrl";

// Interface for IStories
export interface IStories {
    documentId: number;
    name: string;
    // image: string;
    image: { url: string; alternativeText?: string };
    location: string;
    description: string;
}

// Fetch stories
export const fetchStories = async (): Promise<{
    stories: IStories[];
}> => {
    // try {
    //     const resp = await fetch(`${BASE_URL}/data/stories.json`);
    //     const data = await resp.json();
    //     return data;
    // } catch (err) {
    
    //     console.error("Failed to read stories:", err);
    //     return { stories: [] };
    // }

    const query = `
    query {
      stories {
      documentId
      name
      image {
        url
        alternativeText
      }
      location
      description
    }
    }
  `;

    try {
        const response = await fetch("http://localhost:1337/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
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
