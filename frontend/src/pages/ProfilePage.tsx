export const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-gray-100 min-h-screen p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Profile Page</h1>
        <p className="text-lg text-gray-600">
          Manage your profile and settings
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};
