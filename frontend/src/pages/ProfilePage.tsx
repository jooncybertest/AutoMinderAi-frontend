import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import {
  useGetMyUserPhoto,
  useUpdateMyUserPhoto,
  useCreateMyUserPhoto,
} from "../api/myUserPhotoApi";
import { useGetMyUser, useUpdateMyUser } from "../api/MyUserApi";
import { ProfileCard } from "../components/ProfileCard";
import { ProfileEditForm } from "../components/ProfileEditForm";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ProfilePage = () => {
  const queryClient = useQueryClient();
  const { currentUserPhoto } = useGetMyUserPhoto();
  const { updateUserPhoto } = useUpdateMyUserPhoto();
  const { createUserPhoto } = useCreateMyUserPhoto();
  const { currentUser } = useGetMyUser();
  const { updateUser } = useUpdateMyUser();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    addressLine1: "",
    city: "",
    country: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name,
        addressLine1: currentUser.addressLine1,
        city: currentUser.city,
        country: currentUser.country,
      });
    }
    if (
      currentUserPhoto &&
      typeof currentUserPhoto === "object" &&
      "imageUrl" in currentUserPhoto
    ) {
      setImageUrl(currentUserPhoto.imageUrl);
    } else if (typeof currentUserPhoto === "string") {
      setImageUrl(currentUserPhoto);
    } else {
      setImageUrl(`${API_BASE_URL}/api/my/user/photo/default`);
    }
  }, [currentUserPhoto, currentUser]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (currentUser) {
        await updateUser({
          name: formData.name,
          addressLine1: formData.addressLine1,
          city: formData.city,
          country: formData.country,
        });
      }

      if (selectedFile) {
        const auth0Id = currentUser?._id || "";
        let updatedPhoto;
        if (currentUserPhoto && typeof currentUserPhoto !== "string") {
          updatedPhoto = await updateUserPhoto({
            auth0Id,
            imageName: formData.name,
            file: selectedFile,
          });
        } else {
          updatedPhoto = await createUserPhoto({
            auth0Id,
            imageName: formData.name,
            file: selectedFile,
          });
        }
        if (updatedPhoto && typeof updatedPhoto.data.imageUrl === "string") {
          setImageUrl(updatedPhoto.data.imageUrl);
        }
      }

      queryClient.invalidateQueries("fetchCurrentUserPhoto");

      setIsEditing(false);
      toast.success("Profile is successfully updated!");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-gray-100 min-h-screen p-4">
      <ProfileCard
        formData={formData}
        currentUser={currentUser}
        handleEditClick={handleEditClick}
        imageUrl={previewUrl || imageUrl}
      />
      {isEditing && (
        <ProfileEditForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleEditClick={handleEditClick}
          handleFileChange={handleFileChange}
        />
      )}
    </div>
  );
};
