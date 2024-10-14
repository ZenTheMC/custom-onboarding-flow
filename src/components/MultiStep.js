"use client";
import React from "react";

const MultiStep = ({ components, onNext, currentStep }) => {
  return (
    <div>
      {components.map((Component, index) => (
        <Component key={index} onNext={onNext} currentStep={currentStep} />
      ))}
    </div>
  );
};

export default MultiStep;
