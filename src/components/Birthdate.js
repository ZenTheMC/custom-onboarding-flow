"use client";
import { useState } from "react";

const Birthdate = ({ onNext, currentStep }) => {
  const [birthdate, setBirthdate] = useState("");

  const handleNext = async () => {
    try {
      const response = await fetch("/api/save-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ birthdate, currentStep }),
      });

      if (response.ok) onNext();
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  };

  return (
    <div>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Birthdate;
