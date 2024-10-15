"use client";
import React from "react";

const AboutMe = ({ value, onChange }) => {
  return (
    <div>
      <textarea
        placeholder="Tell us about yourself"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default AboutMe;
