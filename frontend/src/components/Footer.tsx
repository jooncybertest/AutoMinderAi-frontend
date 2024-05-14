import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-5 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4">
        <div>
          <h5 className="text-lg font-semibold mb-3">Features</h5>
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
        <div className="lg:col-span-2">
          <div className="lg:flex lg:justify-between gap-10">
            <div className="mb-8 lg:mb-0">
              <h5 className="text-lg font-semibold mb-3">Resources</h5>
              <ul className="text-gray-600 space-y-2">
                <li>Car Maintenance Tips</li>
                <li>Repair Guides</li>
                <li>Service Recommendations</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-3">
                Subscribe to our newsletter
              </h5>
              <p className="mb-3 text-gray-600">
                Get the latest car maintenance tips, news, and updates delivered
                to your inbox.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 w-full md:w-40 border border-gray-300 rounded-l-lg"
                />
                <button
                  type="submit"
                  className="bg-purple-700 text-white px-2 rounded-r-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:row-span-2">
          <h5 className="text-lg font-semibold mb-3">Contact Information</h5>
          <ul className="text-gray-600 space-y-2">
            <li>Email: info@autominder.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 1234 Main St, Anytown, USA</li>
          </ul>
        </div>
        <div className="lg:col-span-2 lg:row-span-2">
          <h5 className="text-lg font-semibold mb-3">Our Partners</h5>
          <ul className="text-gray-600 space-y-2">
            <li>Transistor</li>
            <li>Reform</li>
            <li>Tuple</li>
          </ul>
        </div>
        <div className="lg:col-span-6 mt-8 flex justify-center">
          <h5 className="text-lg font-semibold mb-3">Follow Us</h5>
          <div className="flex space-x-3 ml-4">
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
      </div>
      <div className="text-center text-gray-600 mt-8">
        © 2024 AutoMinder, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
