import { useState } from "react";
import { Header } from "@/components/community/Header";
import Sidebar from "@/components/community/Sidebar";

const MembersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const members = [
    { id: 1, name: "John Doe", role: "Administrator" },
    { id: 2, name: "Jane Smith", role: "Moderator" },
    { id: 3, name: "Alice Johnson", role: "Member" },
    { id: 4, name: "Bob Brown", role: "Member" },
    // Add more members as needed
  ];

  const normalizedSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, "");

  const filteredMembers = members.filter(
    (member) =>
      member.name
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(normalizedSearchQuery) ||
      member.role
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(normalizedSearchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Members"/>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex">
        <Sidebar />
        <div className="flex-grow bg-white p-6 rounded-lg shadow ml-6">
          <h2 className="text-xl font-semibold mb-4">Car Community Members</h2>
          <input
            type="text"
            placeholder="Search members by name or authority..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
          />
          <div className="space-y-4">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <div key={member.id} className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="mt-2 text-gray-700">{member.role}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No members found.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MembersPage;
