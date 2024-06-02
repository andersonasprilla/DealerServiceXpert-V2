import { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";

const Hat = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInput = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
    setInputValue(inputValue);
    setError(inputValue === '');
    onChange('hatNumber', inputValue);
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setError(true);
    }
  };

  return (
    <div className="w-full">
      <Input
        className={`custom-input ${error ? 'border-red-500' : 'border-gray-300'}`}
        label="Hat"
        type="text"
        pattern="\d{4}"
        maxLength="4"
        value={inputValue}
        error={error}
        onInput={handleInput}
        onBlur={handleBlur}
        autoComplete="off"
      />
      {error && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
    </div>
  );
};

export default Hat;