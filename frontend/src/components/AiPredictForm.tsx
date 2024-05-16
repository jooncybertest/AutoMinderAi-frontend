import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { CreateMaintenancePrediction } from "../../types";
import { useCreateMaintenancePrediction } from "../api/AiPredictorApi";
import { steps } from "../AIQuestionaireSteps/steps";
import { useNavigate } from "react-router-dom";

export const AiPredictForm = () => {
  const navigate = useNavigate();
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
  const { mutate, isLoading, isError } =
    useCreateMaintenancePrediction();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let parsedValue: string | number = value;
    if (type === "number") {
      parsedValue = parseFloat(value);
      if (isNaN(parsedValue)) {
        parsedValue = "";
      } else if (parsedValue < 0) {
        parsedValue = 0;
      }
    }
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

  const isNextDisabled = () => {
    const currentValue =
      formData[steps[currentStep].name as keyof CreateMaintenancePrediction];
    if (
      currentValue === "" ||
      currentValue === null ||
      currentValue === undefined
    )
      return true;
    if (steps[currentStep].type === "number" && isNaN(Number(currentValue)))
      return true;
    return false;
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {prediction.length === 0 ? (
        <>
          <animated.div style={props}>
            <h2 className="text-2xl font-bold mb-4">
              {steps[currentStep].label}
            </h2>
            {steps[currentStep].type === "select" ? (
              <select
                name={steps[currentStep].name}
                value={
                  formData[
                    steps[currentStep].name as keyof CreateMaintenancePrediction
                  ] || ""
                }
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2 mb-4"
              >
                <option value="">Select an option</option>
                {steps[currentStep].options!.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={steps[currentStep].type}
                name={steps[currentStep].name}
                value={
                  formData[
                    steps[currentStep].name as keyof CreateMaintenancePrediction
                  ] || ""
                }
                onChange={handleChange}
                placeholder={steps[currentStep].type === "number" ? "0" : ""}
                className="block w-full border border-gray-300 rounded-md p-2 mb-4"
              />
            )}
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
                className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
                  isNextDisabled() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isNextDisabled()}
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
        </>
      ) : (
        <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Prediction Results
          </h2>
          <p className="text-lg mb-6 text-center text-gray-600">
            The results below are generated by our AI:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
            {prediction.map((result, index) => (
              <li
                key={index}
                className={
                  result === 1
                    ? "text-red-500 font-semibold"
                    : "text-green-500 font-semibold"
                }
              >
                {result === 1
                  ? "Needs Maintenance"
                  : "Does Not Need Maintenance For Now"}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-6">
            {prediction.includes(1) ? (
              <button
                onClick={() => navigate("/autoshops-nearby")}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md shadow-md font-semibold transition-all duration-300 ease-in-out"
              >
                See Autoshops Nearby
              </button>
            ) : (
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/results?search_query=maintaining+your+car",
                    "_blank"
                  )
                }
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow-md font-semibold transition-all duration-300 ease-in-out"
              >
                Watch Video of How to Maintain a Car!
              </button>
            )}
          </div>
          <button
            onClick={() => setPrediction([])}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md font-semibold transition-all duration-300 ease-in-out"
          >
            Back to Form
          </button>
        </div>
      )}
    </div>
  );
};
