const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="text-lg font-semibold mb-4">Solutions</h5>
          <ul className="text-gray-600">
            <li className="mb-2">Marketing</li>
            <li className="mb-2">Analytics</li>
            <li className="mb-2">Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4">Support</h5>
          <ul className="text-gray-600">
            <li className="mb-2">Pricing</li>
            <li className="mb-2">Documentation</li>
            <li className="mb-2">Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4">Company</h5>
          <ul className="text-gray-600">
            <li className="mb-2">About</li>
            <li className="mb-2">Blog</li>
            <li className="mb-2">Jobs</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4">Legal</h5>
          <ul className="text-gray-600">
            <li className="mb-2">Claim</li>
            <li className="mb-2">Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="text-lg font-semibold mb-4">
            Subscribe to our newsletter
          </h5>
          <p className="mb-4 text-gray-600">
            The  latest news, articles, and resources, sent to your inbox
            weekly.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-grow border border-gray-300 rounded-l-lg"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-10">
        © 2024 AutoMiner, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
