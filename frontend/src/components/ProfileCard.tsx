import React from "react";

interface ProfileCardProps {
  formData: {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };
  currentUser: any;
  handleEditClick: () => void;
  imageUrl: string | null;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  formData,
  currentUser,
  handleEditClick,
  imageUrl,
}) => {
  const defaultImageUrl = "https://via.placeholder.com/150"; 

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Profile Page</h1>
        <p className="text-lg text-gray-600">
          Manage your profile and settings
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mb-6">
        <img
          src={imageUrl || defaultImageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {formData.name}
          </h2>
          <p className="text-gray-600">{currentUser?.email}</p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleEditClick}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};
