"use client";
import React from "react";

const Birthdate = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="date"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Birthdate;
