"use client";
import { useState } from "react";

const AboutMe = ({ onNext, currentStep }) => {
  const [about, setAbout] = useState("");

  const handleNext = async () => {
    try {
      const response = await fetch("/api/save-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ aboutMe: about, currentStep }),
      });

      if (response.ok) onNext();
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  };

  return (
    <div>
      <textarea
        placeholder="Tell us about yourself"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AboutMe;
