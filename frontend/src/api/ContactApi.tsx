import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateContactInfo = {
  auth0Id?: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const useCreateContactInfo = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createContactInfo = async (contact: CreateContactInfo) => {
    try {
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (!response.ok) {
        throw new Error(`Failed to create contact: ${await response.text()}`);
      }
    } catch (error: any) {
      console.error("Error creating contact info:", error.message);
      throw new Error(error.message || "Something went wrong");
    }
  };

  return useMutation(createContactInfo);
};
