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
    <div className="container mx-auto p-4 relative">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Get Your Car Information
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-md mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="vin"
            className="block text-sm font-medium text-gray-700"
          >
            VIN Number
          </label>
          <input
            type="text"
            id="vin"
            value={vin}
            onChange={handleVinChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="modelYear"
            className="block text-sm font-medium text-gray-700"
          >
            Model Year
          </label>
          <input
            type="text"
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
      {isLoading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <Spinner className="text-white" />
        </div>
      )}
      {vehicleInfo && (
        <div className="mt-6 bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Vehicle Information
          </h2>
          <div className="grid grid-cols-1 gap-4">
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
