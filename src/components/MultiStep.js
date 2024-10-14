"use client";
import React from "react";

const MultiStep = ({ components, onNext }) => {
  return (
    <div>
      {components.map((Component, index) => (
        <Component key={index} onNext={onNext} />
      ))}
    </div>
  );
};

export default MultiStep;
