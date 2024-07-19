const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-white shadow p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Car Community</h2>
      <ul className="space-y-4">
        <li>
          <a href="/community" className="text-indigo-600 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a
            href="/community/posts"
            className="text-indigo-600 hover:underline"
          >
            Posts
          </a>
        </li>
        <li>
          <a
            href="/community/members"
            className="text-indigo-600 hover:underline"
          >
            Members
          </a>
        </li>
        <li>
          <a
            href="/community/events"
            className="text-indigo-600 hover:underline"
          >
            Events
          </a>
        </li>
        <li>
          <a
            href="/community/guidelines"
            className="text-indigo-600 hover:underline"
          >
            Guidelines
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
