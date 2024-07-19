const MyPosts = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">My Posts</h2>
      <div className="space-y-4">
        {/* My Uploaded Posts */}
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Post Title</h3>
          <p className="mt-2 text-gray-700">
            This is a sample post content. Community members can share their
            experiences, tips, and more here.
          </p>
          <div className="mt-4 flex items-center">
            <span className="text-sm text-gray-500">Posted by John Doe</span>
            <button className="ml-auto text-indigo-600 hover:underline text-sm">
              Read more
            </button>
          </div>
        </div>
        {/* Repeat similar blocks for other posts */}
      </div>
    </div>
  );
};

export default MyPosts;
