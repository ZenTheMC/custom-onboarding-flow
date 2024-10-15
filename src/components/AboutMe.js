"use client";
import React from "react";

const AboutMe = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="aboutMe">About Me</label>
      <textarea
        id="aboutMe"
        placeholder="Tell us about yourself"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        rows="5"
      />
    </div>
  );
};

export default AboutMe;
