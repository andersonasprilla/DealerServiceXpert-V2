import { useState, useEffect } from "react";
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
    <div className="w-full">
      <Input
        type="text"
        className={`custom-input ${error ? 'border-red-500' : 'border-gray-300'}`}
        label="Repair Order"
        pattern="\d{6}"
        maxLength="6"
        value={inputValue}
        error={error}
        onInput={handleInput}
        onBlur={handleBlur}
      />
      {error && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
    </div>
  );
};

export default RepairOrder;
