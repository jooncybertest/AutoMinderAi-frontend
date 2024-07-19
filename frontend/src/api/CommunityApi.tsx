// api/CommunityApi.ts
import { useMutation, useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { CreateCommunityPost } from "types";

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

export const useGetMyPosts = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyPosts = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(`${API_BASE_URL}/api/posts/mine`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to get my post: ${await response.text()}`);
      }
      return await response.json();
    } catch (error: any) {
      console.error("Error fetching my posts data:", error.message);
      throw new Error(error.message || "Something went wrong");
    }
  };

  return useQuery("myPosts", getMyPosts);
};

export const useGetAllPosts = () => {
  const getAllPosts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/posts/all`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Failed to get posts: ${await response.text()}`);
      }
      return await response.json();
    } catch (error: any) {
      console.error("Error fetching posts data:", error.message);
      throw new Error(error.message || "Something went wrong");
    }
  };

  return useQuery("allPosts", getAllPosts);
};
