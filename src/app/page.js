"use client";
import { useEffect, useState } from "react";
import Wizard from "@/components/Wizard";
import SignupForm from "@/components/SignupForm";
import AboutMe from "@/components/AboutMe";
import Address from "@/components/Address";
import Birthdate from "@/components/Birthdate";
import MultiStep from "@/components/MultiStep";
import FinalStep from "@/components/FinalStep";

const Onboarding = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, []);

  if (!config) return <div>Loading...</div>;

  const componentsMap = {
    aboutMe: AboutMe,
    address: Address,
    birthdate: Birthdate,
  };

  const steps = [
    <SignupForm key="step1" />,
    <MultiStep
      key="step2"
      components={config.page2.components.map((comp) => componentsMap[comp])}
    />,
    <MultiStep
      key="step3"
      components={config.page3.components.map((comp) => componentsMap[comp])}
    />,
    <FinalStep key="finalStep" />,
  ];

  return <Wizard steps={steps} />;
};

export default Onboarding;
