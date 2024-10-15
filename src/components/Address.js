"use client";
import React from "react";

const Address = ({ value = {}, onChange }) => {
  const { street = "", city = "", state = "", zip = "" } = value;

  const handleChange = (field) => (e) => {
    onChange({ ...value, [field]: e.target.value });
  };

  return (
    <div>
      <input
        placeholder="Street Address"
        value={street}
        onChange={handleChange("street")}
      />
      <input placeholder="City" value={city} onChange={handleChange("city")} />
      <input
        placeholder="State"
        value={state}
        onChange={handleChange("state")}
      />
      <input placeholder="Zip" value={zip} onChange={handleChange("zip")} />
    </div>
  );
};

export default Address;
