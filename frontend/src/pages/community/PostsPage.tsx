import { Header } from "@/components/community/Header";
import Sidebar from "@/components/community/Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const posts = [
    {
      id: 1,
      title: "Post Title 1",
      content:
        "This is the content for post 1. Community members can share their experiences, tips, and more here.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Post Title 2",
      content:
        "This is the content for post 2. Community members can share their experiences, tips, and more here.",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Post Title 3",
      content:
        "This is the content for post 3. Community members can share their experiences, tips, and more here.",
      author: "Alice Johnson",
    },
    // Add more posts as needed
  ];

  const normalizedSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, "");

  const filteredPosts = posts.filter(
    (post) =>
      post.title
        .toLowerCase()
        .replace(/\s+/g, "")  // ignore spaces in a seach query
        .includes(normalizedSearchQuery) ||
      post.content
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(normalizedSearchQuery) ||
      post.author
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(normalizedSearchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Posts"/>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex">
        <Sidebar />
        <div className="flex-grow bg-white p-6 rounded-lg shadow ml-6">
          <h2 className="text-xl font-semibold mb-4">All Posts</h2>
          <input
            type="text"
            placeholder="Search posts by title, content or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
          />
          <div className="space-y-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="mt-2 text-gray-700">{post.content}</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500">
                      Posted by {post.author}
                    </span>
                    <Link
                      to={`/community/posts/${post.id}`}
                      className="ml-auto text-indigo-600 hover:underline text-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No posts found.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostsPage;
