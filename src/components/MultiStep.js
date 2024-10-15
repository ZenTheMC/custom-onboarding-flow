"use client";
import React, { useState } from "react";

const MultiStep = ({ components, onNext, currentStep }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (dataKey, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [dataKey]: value,
    }));
  };

  const handleNext = async () => {
    try {
      const response = await fetch("/api/save-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, currentStep }),
      });

      if (response.ok) {
        onNext();
      }
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  };

  return (
    <div>
      {components.map((compObj, index) => {
        const { component: Component, dataKey } = compObj;

        return (
          <div key={index}>
            <Component
              value={formData[dataKey]}
              onChange={(value) => handleChange(dataKey, value)}
            />
          </div>
        );
      })}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default MultiStep;
