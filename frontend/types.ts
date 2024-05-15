export type User = {
  _id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export type VehicleData = {
  make: string;
  manufacturer: string;
  model: string;
  modelYear: string;
  plantCountry: string;
  plantState: string;
  plantCity: string;
  plantCompanyName: string;
  vehicleType: string;
  engineCylinders: number;
  engineConfiguration: string;
  fuelTypePrimary: string;
  transmissionStyle: string;
  vinNumber: string;
}

export type CreateMaintenancePrediction = {
  Vehicle_Model: string;
  Mileage: number;
  Maintenance_History: string;
  Reported_Issues: number;
  Vehicle_Age: number;
  Fuel_Type: string;
  Transmission_Type: string;
  Engine_Size: number;
  Odometer_Reading: number;
  Last_Service_Date: string;
  Warranty_Expiry_Date: string;
  Owner_Type: string;
  Insurance_Premium: number;
  Service_History: number;
  Accident_History: number;
  Fuel_Efficiency: number;
  Tire_Condition: string;
  Brake_Condition: string;
  Battery_Status: string;
};