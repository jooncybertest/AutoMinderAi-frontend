import { Header } from "@/components/community/Header";
import Sidebar from "@/components/community/Sidebar";

const guidelines = [
  "Respect other members and their opinions.",
  "No spam or advertising.",
  "Use appropriate language at all times.",
  "Stay on topic in threads and discussions.",
  "Report any suspicious or inappropriate content to the moderators.",
  // Add more guidelines as needed
];

const GuidelinesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Guidelines" />
      <main className="flex max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <div className="flex-grow bg-white p-6 rounded-lg shadow ml-6">
          <h2 className="text-xl font-semibold mb-4">Community Guidelines</h2>
          <ul className="list-disc list-inside space-y-2">
            {guidelines.map((guideline, index) => (
              <li key={index} className="text-gray-700">
                {guideline}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default GuidelinesPage;
