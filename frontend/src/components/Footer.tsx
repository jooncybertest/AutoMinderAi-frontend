import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h5 className="text-lg font-semibold mb-3">Solutions</h5>
          <ul className="text-gray-600 space-y-2">
            <li>AI Maintenance Predictions</li>
            <li>Service Reminders</li>
            <li>Maintenance History</li>
            <li>Repair Shop Locator</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-3">Support</h5>
          <ul className="text-gray-600 space-y-2">
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-3">Company</h5>
          <ul className="text-gray-600 space-y-2">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-3">Legal</h5>
          <ul className="text-gray-600 space-y-2">
            <li>Claim</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-3">
            Subscribe to our newsletter
          </h5>
          <p className="mb-3 text-gray-600">
            Get the latest car maintenance tips, news, and updates delivered to
            your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full border border-gray-300 rounded-l-lg"
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-4 rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex justify-between items-center border-t border-gray-200 pt-8">
        <div className="text-gray-600">
          © 2024 AutoMinder, Inc. All rights reserved.
        </div>
        <div className="flex space-x-3">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
