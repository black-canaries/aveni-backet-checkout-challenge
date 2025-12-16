import React, { type ChangeEvent } from 'react';

interface QuantitySelectProps {
  value: number;
  max: number;
  onChange: (quantity: number) => void;
}

/**
 * Dropdown for selecting quantity
 * Options range from 1 to basketLimit
 */
export const QuantitySelect: React.FC<QuantitySelectProps> = ({
  value,
  max,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(parseInt(e.target.value, 10));
  };

  // Generate options from 1 to max
  const options = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <select
      value={value}
      onChange={handleChange}
      className="border border-gray-300 rounded px-2 py-1"
    >
      {options.map(num => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  );
};