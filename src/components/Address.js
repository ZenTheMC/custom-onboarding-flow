"use client";
import { useState } from "react";

const Address = ({ onNext, currentStep }) => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleNext = async () => {
    try {
      const response = await fetch("/api/save-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: { street, city, state, zip },
          currentStep,
        }),
      });

      if (response.ok) onNext();
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  };

  return (
    <div>
      <input
        placeholder="Street Address"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        placeholder="Zip"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Address;
