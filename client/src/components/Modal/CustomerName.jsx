import React, { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";

const CustomerName = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInput = (e) => {
    const newValue = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setInputValue(newValue);
    onChange('customerName', newValue);
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
        label="Customer Name"
        pattern="[A-Za-z\s]*"
        title="Please enter only letters"
        value={inputValue}
        error={error}
        onInput={handleInput}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CustomerName;
