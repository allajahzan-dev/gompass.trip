import { SERVER_URL } from "@/constants/url";

// Interface for IPackage
export interface IPackage {
    documentId: number;
    title: string;
    location: string;
    days: string;
    images: { url: string; alternativeText?: string }[];
    description1: string;
    description2: string;
    price: string;
    includes: { value: string }[];
    excludes: { value: string }[];
    plans: { day: string; title: string; activities: { activity: string }[] }[];
}

// Fetch packages
export const fetchPackages = async (): Promise<{
    packages: IPackage[];
}> => {
    const query = `
    query {
      packages {
        documentId
        title
        location
        days
        images {
         url
         alternativeText
        }
        description1
        description2
        price
        includes {
          value
        }
        excludes {
          value
        }
        plans {
          day
          title
          activities {
            activity
          }
        }  
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
            return  { packages: [] };
        }

        return result.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return  { packages: [] };
    }
};
