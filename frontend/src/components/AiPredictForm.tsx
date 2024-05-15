import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { CreateMaintenancePrediction } from "../../types";
import { useCreateMaintenancePrediction } from "../api/AiPredictorApi";

const steps = [
  { label: "Vehicle Model", name: "Vehicle_Model", type: "text" },
  { label: "Mileage", name: "Mileage", type: "number" },
  { label: "Maintenance History", name: "Maintenance_History", type: "text" },
  { label: "Reported Issues", name: "Reported_Issues", type: "number" },
  { label: "Vehicle Age", name: "Vehicle_Age", type: "number" },
  { label: "Fuel Type", name: "Fuel_Type", type: "text" },
  { label: "Transmission Type", name: "Transmission_Type", type: "text" },
  { label: "Engine Size", name: "Engine_Size", type: "number" },
  { label: "Odometer Reading", name: "Odometer_Reading", type: "number" },
  { label: "Last Service Date", name: "Last_Service_Date", type: "date" },
  { label: "Warranty Expiry Date", name: "Warranty_Expiry_Date", type: "date" },
  { label: "Owner Type", name: "Owner_Type", type: "text" },
  { label: "Insurance Premium", name: "Insurance_Premium", type: "number" },
  { label: "Service History", name: "Service_History", type: "number" },
  { label: "Accident History", name: "Accident_History", type: "number" },
  { label: "Fuel Efficiency", name: "Fuel_Efficiency", type: "number" },
  { label: "Tire Condition", name: "Tire_Condition", type: "text" },
  { label: "Brake Condition", name: "Brake_Condition", type: "text" },
  { label: "Battery Status", name: "Battery_Status", type: "text" },
];

export const AiPredictForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<CreateMaintenancePrediction>({
    Vehicle_Model: "",
    Mileage: 0,
    Maintenance_History: "",
    Reported_Issues: 0,
    Vehicle_Age: 0,
    Fuel_Type: "",
    Transmission_Type: "",
    Engine_Size: 0,
    Odometer_Reading: 0,
    Last_Service_Date: "",
    Warranty_Expiry_Date: "",
    Owner_Type: "",
    Insurance_Premium: 0,
    Service_History: 0,
    Accident_History: 0,
    Fuel_Efficiency: 0,
    Tire_Condition: "",
    Brake_Condition: "",
    Battery_Status: "",
  });
  const [prediction, setPrediction] = useState<number[]>([]);
  const { mutate, isLoading, isError, isSuccess } =
    useCreateMaintenancePrediction();

  const handleNext = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const parsedValue = type === "number" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = () => {
    const payload: CreateMaintenancePrediction = {
      ...formData,
      Mileage: Number(formData.Mileage),
      Reported_Issues: Number(formData.Reported_Issues),
      Vehicle_Age: Number(formData.Vehicle_Age),
      Engine_Size: Number(formData.Engine_Size),
      Odometer_Reading: Number(formData.Odometer_Reading),
      Insurance_Premium: Number(formData.Insurance_Premium),
      Service_History: Number(formData.Service_History),
      Accident_History: Number(formData.Accident_History),
      Fuel_Efficiency: Number(formData.Fuel_Efficiency),
    };

    console.log("Form data being sent:", payload); 
    mutate([payload], {
      onSuccess: (data) => {
        console.log("Prediction response from server:", data); 
        setPrediction(data.prediction);
      },
    });
  };

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <div className="max-w-md mx-auto mt-10">
      {prediction.length === 0 ? (
        <>
          <animated.div style={props}>
            <h2 className="text-2xl font-bold mb-4">
              {steps[currentStep].label}
            </h2>
            <input
              type={steps[currentStep].type}
              name={steps[currentStep].name}
              value={
                formData[
                  steps[currentStep].name as keyof CreateMaintenancePrediction
                ] || ""
              }
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2 mb-4"
            />
          </animated.div>

          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              disabled={currentStep === 0}
            >
              Back
            </button>
            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                disabled={isLoading}
              >
                Submit
              </button>
            )}
          </div>

          {isError && (
            <p className="text-red-500 mt-4">Error submitting the form.</p>
          )}
          {isSuccess && (
            <p className="text-green-500 mt-4">Form submitted successfully!</p>
          )}
        </>
      ) : (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Prediction Results</h2>
          <ul className="list-disc pl-5">
            {prediction.map((result, index) => (
              <li
                key={index}
                className={result === 1 ? "text-red-500" : "text-green-500"}
              >
                {result === 1
                  ? "Needs Maintenance"
                  : "Does Not Need Maintenance"}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setPrediction([])}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Back to Form
          </button>
        </div>
      )}
    </div>
  );
};
