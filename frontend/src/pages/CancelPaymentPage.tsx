import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CancelPage = () => {
  useEffect(() => {
    toast.error("Payment was canceled. Please try again.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Payment Canceled
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your payment was canceled. Please try again.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-500 transition duration-300"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default CancelPage;
