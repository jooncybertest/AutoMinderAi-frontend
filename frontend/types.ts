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