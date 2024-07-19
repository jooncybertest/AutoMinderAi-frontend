import { useMutation } from "react-query";
import { CreateCommunityPost } from "../../types";
import { useAuth0 } from "@auth0/auth0-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreatePost = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createPost = async (post: CreateCommunityPost) => {
    try {
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(`${API_BASE_URL}/api/posts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error(`Failed to create contact: ${await response.text()}`);
      }
      return await response.json();
    } catch (error: any) {
      console.error("Error creating contact info:", error.message);
      throw new Error(error.message || "Something went wrong");
    }
  };

  return useMutation(createPost);
};
