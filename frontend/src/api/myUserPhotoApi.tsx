import { UserPhoto } from "../../types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUserPhoto = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserPhotoRequest = async (): Promise<UserPhoto | string> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/user/photo`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.headers.get("Content-Type")?.includes("image/jpeg")) {
        const blob = await response.blob();
        return URL.createObjectURL(blob);
      }
      throw new Error("Failed to fetch user photo");
    }

    return response.json();
  };

  const { data: currentUserPhoto, error } = useQuery<UserPhoto | string>(
    "fetchCurrentUserPhoto",
    getMyUserPhotoRequest
  );

  if (error) {
    toast.error(error.toString());
  }

  return { currentUserPhoto };
};

type CreateUserPhotoRequest = {
  auth0Id: string;
  imageName: string;
  file: File;
};

export const useCreateMyUserPhoto = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserPhotoRequest = async (
    userPhoto: CreateUserPhotoRequest
  ) => {
    const accessToken = await getAccessTokenSilently();
    const formData = new FormData();
    formData.append("auth0Id", userPhoto.auth0Id);
    formData.append("imageName", userPhoto.imageName);
    formData.append("image", userPhoto.file);

    const response = await fetch(`${API_BASE_URL}/api/my/user/photo`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Failed to create user photo: ${errorBody}`);
    }

    return response.json();
  };

  const {
    mutateAsync: createUserPhoto,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserPhotoRequest);

  if (isError) {
    toast.error("Failed to create user photo");
  }

  if (isSuccess) {
    toast.success("User photo created successfully!");
  }

  return {
    createUserPhoto,
    isLoading,
    isError,
    isSuccess,
  };
};

type UpdateMyUserPhotoRequest = {
  auth0Id: string;
  imageName: string;
  file?: File;
};

export const useUpdateMyUserPhoto = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyUserPhotoRequest = async (
    formData: UpdateMyUserPhotoRequest
  ) => {
    const accessToken = await getAccessTokenSilently();
    const formDataToSend = new FormData();
    formDataToSend.append("auth0Id", formData.auth0Id);
    formDataToSend.append("imageName", formData.imageName);
    if (formData.file) {
      formDataToSend.append("image", formData.file);
    }

    const response = await fetch(`${API_BASE_URL}/api/my/user/photo`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error("Failed to update user photo");
    }

    return response.json();
  };

  const {
    mutateAsync: updateUserPhoto,
    isSuccess,
    error,
    reset,
  } = useMutation(updateMyUserPhotoRequest);

  if (isSuccess) {
    toast.success("User profile updated!");
  }

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { updateUserPhoto };
};
