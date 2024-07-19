const MyPosts = () => {
  const posts = [
    {
      _id: "1",
      title: "Post Title 1",
      content:
        "This is the content for post 1. Community members can share their experiences, tips, and more here.",
      author: { name: "John Doe" },
    },
    {
      _id: "2",
      title: "Post Title 2",
      content:
        "This is the content for post 2. Community members can share their experiences, tips, and more here.",
      author: { name: "John Doe" },
    },
    {
      _id: "3",
      title: "Post Title 3",
      content:
        "This is the content for post 3. Community members can share their experiences, tips, and more here.",
      author: { name: "John Doe" },
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">My Posts</h2>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-gray-700">{post.content}</p>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-gray-500">
                  Posted by {post.author.name}
                </span>
                <button className="ml-auto text-indigo-600 hover:underline text-sm">
                  Read more
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
