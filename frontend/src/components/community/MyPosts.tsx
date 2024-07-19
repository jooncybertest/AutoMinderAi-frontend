import { useGetMyPosts } from '@/api/CommunityApi';

const MyPosts = () => {
  const { data: posts, isLoading, isError } = useGetMyPosts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">My Posts</h2>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <div key={post._id} className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-gray-700">{post.content}</p>
              <div className="mt-4 flex items-center">
                <span className="text-sm text-gray-500">
                  Posted by {post.author_id.name}
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
