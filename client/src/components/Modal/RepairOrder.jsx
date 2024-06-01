import React, { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";

const RepairOrder = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInput = (e) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    setInputValue(newValue);
    onChange('repairOrder', newValue);
    setError(newValue === '');
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setError(true);
    }
  };

  return (
    <div className="w-1">
      <Input
        type="text"
        className="focus:ring-transparent"
        label="Repair Order"
        pattern="\d{6}"
        maxLength="6"
        value={inputValue}
        error={error}
        onInput={handleInput}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default RepairOrder;
