import React from 'react';
import { Checkbox } from "@material-tailwind/react";

const Priority = ({ value, onChange }) => {
  const isChecked = value === 'Waiter';

  const handleChange = (e) => {
    const newValue = e.target.checked ? 'Waiter' : 'Drop Off';
    onChange('priority', newValue);
  };

  return (
    <div className='w-1'>
      <Checkbox 
        label="Waiter" 
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
}

export default Priority;
