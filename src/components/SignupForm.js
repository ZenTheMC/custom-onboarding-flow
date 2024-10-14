"use client";
import { useState } from "react";

const SignupForm = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/save-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, currentStep: 1 }),
      });

      if (response.ok) {
        document.cookie = `userData=${JSON.stringify({ email })}; path=/`;
        onNext();
      }
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Next</button>
    </form>
  );
};

export default SignupForm;
