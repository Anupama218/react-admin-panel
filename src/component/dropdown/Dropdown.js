import React, { useState } from 'react';
import './dropdown.css';
function Dropdown({ options}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    
        <select value={selectedOption} onChange={handleSelectChange} className='dropdown'>
        <option value="">Select an option</option>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
            {option.label}
            </option>
        ))}
        </select>
    
  );
}

export default Dropdown;
