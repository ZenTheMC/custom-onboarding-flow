"use client";
import React from "react";

const Birthdate = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="birthdate">Birthdate</label>
      <input
        id="birthdate"
        type="date"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Birthdate;
