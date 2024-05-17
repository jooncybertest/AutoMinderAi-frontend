import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  useEffect(() => {
    toast.success('Payment successful! Thank you for your purchase.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful</h1>
        <p className="text-lg text-gray-700 mb-8">Thank you for your purchase. Your payment was successful.</p>
        <Link
          to="/ai-predictor"
          className="mt-4 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition duration-300"
        >
          Go to AI Page
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
