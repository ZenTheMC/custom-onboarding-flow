"use client";
import React from "react";

const Address = ({ value = {}, onChange }) => {
  const { street = "", city = "", state = "", zip = "" } = value;

  const handleChange = (field) => (e) => {
    onChange({ ...value, [field]: e.target.value });
  };

  return (
    <div>
      <label htmlFor="street">Street Address</label>
      <input
        id="street"
        placeholder="Street Address"
        value={street}
        onChange={handleChange("street")}
      />
      <label htmlFor="city">City</label>
      <input
        id="city"
        placeholder="City"
        value={city}
        onChange={handleChange("city")}
      />
      <label htmlFor="state">State</label>
      <input
        id="state"
        placeholder="State"
        value={state}
        onChange={handleChange("state")}
      />
      <label htmlFor="zip">Zip Code</label>
      <input
        id="zip"
        placeholder="Zip Code"
        value={zip}
        onChange={handleChange("zip")}
      />
    </div>
  );
};

export default Address;
