
// newsletter subscription
export const handleEmailSubmit = async (email: string) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      alert("Subscription successful!");
    } else {
      alert("Subscription failed. Please try again.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("An error occurred. Please try again.");
  }
};
