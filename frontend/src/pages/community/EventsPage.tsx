import { useState } from "react";
import { Header } from "@/components/community/Header";
import Sidebar from "@/components/community/Sidebar";

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const events = [
    {
      id: 1,
      title: "Car Maintenance Workshop",
      description: "Learn how to perform basic car maintenance.",
      date: "2024-08-01",
      organizer: "John Doe",
    },
    {
      id: 2,
      title: "Community Car Show",
      description: "Showcase your car at our annual community car show.",
      date: "2024-09-15",
      organizer: "Jane Smith",
    },
    {
      id: 3,
      title: "Road Trip Meetup",
      description: "Join us for a fun road trip to the mountains.",
      date: "2024-07-25",
      organizer: "Alice Johnson",
    },
    // Add more events as needed
  ];

  const normalizedSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, "");

  const filteredEvents = events.filter(
    (event) =>
      event.title
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(normalizedSearchQuery) ||
      event.description
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(normalizedSearchQuery) ||
      event.organizer
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(normalizedSearchQuery)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Events"/>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex">
        <Sidebar />
        <div className="flex-grow bg-white p-6 rounded-lg shadow ml-6">
          <h2 className="text-xl font-semibold mb-4">Community Events</h2>
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full"
          />
          <div className="space-y-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div key={event.id} className="p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="mt-2 text-gray-700">{event.description}</p>
                  <p className="mt-2 text-gray-500">Date: {event.date}</p>
                  <p className="mt-2 text-gray-500">
                    Organizer: {event.organizer}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No events found.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
