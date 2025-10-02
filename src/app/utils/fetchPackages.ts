// import BASE_URL from "@/constants/baseUrl";

// Interface for IPackage
export interface IPackage {
    documentId: number;
    title: string;
    location: string;
    days: string;
    // images: string[];
    images: { url: string; alternativeText?: string }[];
    description1: string;
    description2: string;
    price: string;
    // includes: string [];
    // excludes: string [];
    includes: { value: string }[];
    excludes: { value: string }[];
    // plans: { day: string; title: string; activities: string [] } [];
    plans: { day: string; title: string; activities: { activity: string }[] }[];
}

// Fetch packages
export const fetchPackages = async (): Promise<{
    packages: IPackage[];
}> => {
    // try {
    //     const resp = await fetch(`${BASE_URL}/data/packages.json`);
    //     const data = await resp.json();
    //     return data;
    // } catch (err) {
    //     console.error("Failed to read packages:", err);
    //     return { packages: [] };
    // }

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
            return  { packages: [] };
        }

        return result.data;
    } catch (error) {
        console.error("Fetch error:", error);
        return  { packages: [] };
    }
};
