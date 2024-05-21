import React from "react";

interface ProfileEditFormProps {
  formData: {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleEditClick: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileEditForm: React.FC<ProfileEditFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  handleEditClick,
  handleFileChange,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Edit Profile
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="addressLine1"
          >
            Address Line 1
          </label>
          <input
            type="text"
            id="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            value={formData.country}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            type="submit"
          >
            Save
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            type="button"
            onClick={handleEditClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
