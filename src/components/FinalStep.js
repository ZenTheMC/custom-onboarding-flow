"use client";

const FinalStep = ({ onFinish }) => {
  const handleFinish = async () => {
    try {
      const response = await fetch("/api/complete-registration", {
        method: "POST",
      });

      if (response.ok) onFinish();
    } catch (error) {
      console.error("Failed to complete registration:", error);
    }
  };

  return <button onClick={handleFinish}>Finish</button>;
};

export default FinalStep;
