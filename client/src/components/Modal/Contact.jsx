import React, { useState, useEffect } from 'react';
import formatPhoneNumber from '../helper/formatPhoneNumber';
import { Input } from "@material-tailwind/react";

const Contact = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e) => {
    // Remove all non-numeric characters
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
    <div className='w-1'>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className="focus:ring-transparent"
        label="Contact"
        error={error}
        autoComplete= "tel"
      />
    </div>
  );
}

export default Contact;
