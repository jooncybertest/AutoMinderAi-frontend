import { useEffect, useState } from "react";
import { useGetMyUser, useUpdateMyUser } from "../api/MyUserApi";
import { Spinner } from "../components/Spinner";
import { ProfileCard } from "../components/ProfileCard";
import { ProfileEditForm } from "../components/ProfileEditForm";

export const ProfilePage = () => {
  const { currentUser, isLoading } = useGetMyUser();
  const { updateUser } = useUpdateMyUser();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    addressLine1: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name,
        addressLine1: currentUser.addressLine1,
        city: currentUser.city,
        country: currentUser.country,
      });
    }
  }, [currentUser]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-gray-100 min-h-screen p-4">
      <ProfileCard
        formData={formData}
        currentUser={currentUser}
        handleEditClick={handleEditClick}
      />
      {isEditing && (
        <ProfileEditForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleEditClick={handleEditClick}
        />
      )}
    </div>
  );
};
