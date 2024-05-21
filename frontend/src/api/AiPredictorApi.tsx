// add silly code for testing github actions 

import { useMutation } from "react-query";
import { CreateMaintenancePrediction } from "../../types";

const API_BASE_URL = import.meta.env.VITE_AI_API_BASE_URL;

export const useCreateMaintenancePrediction = () => {
  const createMaintenancePrediction = async (
    predict: CreateMaintenancePrediction[]
  ) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(predict),
      });

      if (!response.ok) {
        throw new Error(`Failed to create contact: ${await response.text()}`);
      }
      return await response.json();
    } catch (error: any) {
      console.error("Error creating contact info:", error.message);
      throw new Error(error.message || "Something went wrong");
    }
  };

  return useMutation(createMaintenancePrediction);
};
