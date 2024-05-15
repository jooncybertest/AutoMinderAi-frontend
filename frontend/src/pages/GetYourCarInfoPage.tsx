import React, { useState } from "react";
import { useGetMyVehicle } from "../api/VehicleVinDecoderapi";
import { Spinner } from "@nextui-org/spinner";

export const GetYourCarInfoPage: React.FC = () => {
  const [vin, setVin] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [fetchVehicle, setFetchVehicle] = useState(false);

  const { vehicleInfo, isLoading } = useGetMyVehicle({
    vin,
    modelYear,
    fetchVehicle,
  });

  const handleVinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVin(e.target.value);
  };

  const handleModelYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelYear(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFetchVehicle(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Get Your Car Information
        </h1>
        <p className="text-lg mb-6 text-center text-gray-600">
          Enter your Vehicle Identification Number (VIN) and the model year to
          retrieve detailed information about your car. Our AI will analyze the
          data to provide insights and recommendations.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="vin" className="block text-gray-700">
              VIN Number
            </label>
            <input
              type="text"
              id="vin"
              placeholder="Enter VIN Number"
              value={vin}
              onChange={handleVinChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="modelYear" className="block text-gray-700">
              Model Year
            </label>
            <input
              type="text"
              placeholder="Enter Model Year"
              id="modelYear"
              value={modelYear}
              onChange={handleModelYearChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Check Your Car Info
          </button>
        </form>
      </div>
      {isLoading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <Spinner className="text-white" />
        </div>
      )}
      {vehicleInfo && (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Vehicle Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
            <p>
              <strong>Make:</strong> {vehicleInfo.make}
            </p>
            <p>
              <strong>Model:</strong> {vehicleInfo.model}
            </p>
            <p>
              <strong>Model Year:</strong> {vehicleInfo.modelYear}
            </p>
            <p>
              <strong>Plant Country:</strong> {vehicleInfo.plantCountry}
            </p>
            <p>
              <strong>Plant State:</strong> {vehicleInfo.plantState}
            </p>
            <p>
              <strong>Plant City:</strong> {vehicleInfo.plantCity}
            </p>
            <p>
              <strong>Plant Company Name:</strong>{" "}
              {vehicleInfo.plantCompanyName}
            </p>
            <p>
              <strong>Vehicle Type:</strong> {vehicleInfo.vehicleType}
            </p>
            <p>
              <strong>Engine Cylinders:</strong> {vehicleInfo.engineCylinders}
            </p>
            <p>
              <strong>Engine Configuration:</strong>{" "}
              {vehicleInfo.engineConfiguration}
            </p>
            <p>
              <strong>Fuel Type Primary:</strong> {vehicleInfo.fuelTypePrimary}
            </p>
            <p>
              <strong>Transmission Style:</strong>{" "}
              {vehicleInfo.transmissionStyle}
            </p>
            <p>
              <strong>VIN Number:</strong> {vehicleInfo.vinNumber}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetYourCarInfoPage;
