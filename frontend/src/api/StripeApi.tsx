import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const handleStripeCheckout = async () => {
  const stripe = await stripePromise;

  try {
    const response = await fetch(`${API_BASE_URL}/api/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const session = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      toast.error(result.error.message);
    } else {
      toast.success(
        "Redirecting to Stripe for payment... "
      );
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(`Error: ${error.message}`);
    } else {
      toast.error("An unknown error occurred");
    }
  }
};
