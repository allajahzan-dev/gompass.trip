import { SERVER_URL } from "@/constants/url";

// Interface for IContacts
export interface IContacts {
  phone?: string;
  address?: string;
}

// Fetch contacts
export const fetchContacts = async (): Promise<{
  contact: IContacts;
}> => {
  const query = `
    {
      contact {
        phone
        address
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
      return { contact: {} };
    }

    return result.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return { contact: {} };
  }
};
