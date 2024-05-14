import { useQuery } from "react-query";
import { toast } from "sonner";
import { VehicleData } from "../../types";

const NHTSA_API_BASE_URL = "https://vpic.nhtsa.dot.gov/api/";

const mapToVehicleData = (data: any): VehicleData => ({
  make: data.Make,
  manufacturer: data.Manufacturer,
  model: data.Model,
  modelYear: data.ModelYear,
  plantCountry: data.PlantCountry,
  plantState: data.PlantState,
  plantCity: data.PlantCity,
  plantCompanyName: data.PlantCompanyName,
  vehicleType: data.VehicleType,
  engineCylinders: parseInt(data.EngineCylinders, 10),
  engineConfiguration: data.EngineConfiguration,
  fuelTypePrimary: data.FuelTypePrimary,
  transmissionStyle: data.TransmissionStyle,
  vinNumber: data.VIN,
});

type Props = {
  vin: string;
  modelYear: string;
  fetchVehicle: boolean;
};

export const useGetMyVehicle = ({ vin, modelYear, fetchVehicle }: Props) => {
  const getVehicleRequestFromVin = async () => {
    if (!vin || !modelYear || !fetchVehicle) return null;

    const response = await fetch(
      `${NHTSA_API_BASE_URL}/vehicles/DecodeVinValues/${vin}?format=json&modelyear=${modelYear}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch vehicle");
    }

    const data = await response.json();
    if (data.Results && data.Results.length > 0) {
      return mapToVehicleData(data.Results[0]);
    }

    throw new Error("No data found for the provided VIN and model year.");
  };

  const {
    data: vehicleInfo,
    isLoading,
    error,
  } = useQuery(["fetchVehicleInfo", vin, modelYear], getVehicleRequestFromVin, {
    enabled: fetchVehicle,
  });

  if (error) {
    toast.error(error.toString());
  }

  return { vehicleInfo, isLoading };
};
