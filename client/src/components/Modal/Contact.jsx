import { useState, useEffect } from 'react';
import formatPhoneNumber from '../helper/formatPhoneNumber';
import { Input } from "@material-tailwind/react";

const Contact = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e) => {
    const cleaned = e.target.value.replace(/\D/g, '');
    
    if (cleaned.length <= 10) {
      const formattedInput = formatPhoneNumber(cleaned);
      setInputValue(formattedInput);
      onChange('contact', formattedInput);
      setError(cleaned === '');
    }
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setError(true);
    }
  };

  return (
    <div className='w-full'>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`custom-input ${error ? 'border-red-500' : 'border-gray-300'}`}
        label="Contact"
        error={error}
        autoComplete= "tel"
      />
      {error && <p className="text-red-500 text-sm mt-1">This field is required.</p>}
    </div>
  );
};

export default Contact;
