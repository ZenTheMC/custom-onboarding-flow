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

  const finish = () => {
    console.log("Wizard completed");
    setCurrentStep(0);
  };

  const StepComponent = steps[currentStep];

  const isFinalStep = currentStep === steps.length - 1;
  const stepProps = {
    onPrev: prev,
    currentStep,
  };

  if (isFinalStep) {
    stepProps.onFinish = finish;
  } else {
    stepProps.onNext = next;
  }

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="container">
      <h2>
        Step {currentStep + 1} of {steps.length}
      </h2>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      {React.cloneElement(StepComponent, stepProps)}
    </div>
  );
};

export default Wizard;
