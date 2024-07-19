import { Spinner } from "@/components/Spinner";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetailPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
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

  const post = postId ? posts.find((p) => p.id === parseInt(postId, 10)) : null;

  useEffect(() => {
    if (!postId || !post) {
      navigate("/community/posts");
      alert("post not found. Sorry for inconvenience!");
    }
  }, [postId, post, navigate]);

  if (!post) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">Posted by {post.author}</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-700">{post.content}</p>
        </div>
      </main>
    </div>
  );
};

export default PostDetailPage;
