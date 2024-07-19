import NewPostForm from "@/components/community/PostForm";
import MyPosts from "@/components/community/MyPosts";
import Sidebar from "@/components/community/Sidebar";
import { Header } from "@/components/community/Header";

export const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Welcome to Car Community!" />
      <main className="flex max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <section className="w-3/4 ml-6">
          <NewPostForm />
          <MyPosts />
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
