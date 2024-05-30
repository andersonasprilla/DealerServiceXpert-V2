import React, { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";

const Vehicle = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInput = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange('vehicle', newValue);
    setError(newValue === '');
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setError(true);
    }
  };

  return (
    <div>
      <Input
        type="text"
        className="focus:ring-transparent"
        label="Vehicle"
        value={inputValue}
        error={error}
        onInput={handleInput}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Vehicle;
