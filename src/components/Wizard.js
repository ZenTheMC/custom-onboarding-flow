"use client";
import React, { useState } from "react";

const Wizard = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => setCurrentStep((prev) => prev + 1);
  const prev = () => setCurrentStep((prev) => prev - 1);

  const StepComponent = steps[currentStep];

  return (
    <div>
      <h2>
        Step {currentStep + 1} of {steps.length}
      </h2>
      {React.cloneElement(StepComponent, { onNext: next, onPrev: prev })}
      <div>
        {currentStep > 0 && <button onClick={prev}>Previous</button>}
        {currentStep < steps.length - 1 && <button onClick={next}>Next</button>}
      </div>
    </div>
  );
};

export default Wizard;
