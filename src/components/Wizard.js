"use client";
import React, { useState, useEffect } from "react";

const Wizard = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch("/api/get-progress");
        if (response.ok) {
          const data = await response.json();
          if (data.currentStep !== undefined) {
            setCurrentStep(data.currentStep);
          }
        }
      } catch (error) {
        console.error("Failed to fetch progress:", error);
      }
    };

    fetchProgress();
  }, []);

  const next = () => setCurrentStep((prev) => prev + 1);
  const prev = () => setCurrentStep((prev) => prev - 1);

  const StepComponent = steps[currentStep];

  return (
    <div>
      <h2>
        Step {currentStep + 1} of {steps.length}
      </h2>
      {React.cloneElement(StepComponent, {
        onNext: next,
        onPrev: prev,
        currentStep,
      })}
      <div>
        {currentStep > 0 && <button onClick={prev}>Previous</button>}
        {currentStep < steps.length - 1 && <button onClick={next}>Next</button>}
      </div>
    </div>
  );
};

export default Wizard;
