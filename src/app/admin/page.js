"use client";
import { useState, useEffect } from "react";

const Admin = () => {
  const [config, setConfig] = useState({
    page2: { components: [] },
    page3: { components: [] },
  });

  const componentsList = ["aboutMe", "address", "birthdate"];

  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, []);

  const handleSave = () => {
    fetch("/api/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
  };

  const toggleComponent = (page, component) => {
    setConfig((prevConfig) => {
      const components = prevConfig[page].components.includes(component)
        ? prevConfig[page].components.filter((c) => c !== component)
        : [...prevConfig[page].components, component];

      return {
        ...prevConfig,
        [page]: { components },
      };
    });
  };

  return (
    <div className="container">
      <h1>Admin Configuration</h1>
      {["page2", "page3"].map((page) => (
        <div key={page}>
          <h2>{`Configure ${page.toUpperCase()}`}</h2>
          {componentsList.map((component) => (
            <div key={component}>
              <label>
                <input
                  type="checkbox"
                  checked={config[page].components.includes(component)}
                  onChange={() => toggleComponent(page, component)}
                />
                {component.charAt(0).toUpperCase() + component.slice(1)}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSave}>Save Configuration</button>
    </div>
  );
};

export default Admin;
