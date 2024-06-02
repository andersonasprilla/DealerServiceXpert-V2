import { useState, useEffect } from "react";
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
    <div className="w-full">
      <Input
        type="text"
        className={`custom-input ${error ? 'border-red-500' : 'border-gray-300'}`}
        label="Customer Name"
        pattern="[A-Za-z\s]*"
        title="Please enter only letters"
        value={inputValue}
        error={error}
        onInput={handleInput}
        onBlur={handleBlur}
        autoComplete="name"
      />
      {error && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
    </div>
  );
};

export default CustomerName;