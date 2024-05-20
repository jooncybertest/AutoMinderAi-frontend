import { useEffect, useState } from "react";
import { useGetMyUser, useUpdateMyUser } from "../api/MyUserApi";
import { Spinner } from "../components/Spinner";

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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Profile Page</h1>
        <p className="text-lg text-gray-600">
          Manage your profile and settings
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mb-6">
        <img
          src="https://via.placeholder.com/150"
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
      {isEditing && (
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
      )}
    </div>
  );
};
