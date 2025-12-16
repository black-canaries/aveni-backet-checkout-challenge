import React, { useState, type ChangeEvent } from 'react';
import { validateCard, getCardValidationErrors } from '../../services/validators';

interface CreditCardInputProps {
  value: string;
  onChange: (value: string) => void;
  onValidityChange?: (isValid: boolean) => void;
}

/**
 * Credit card input with validation feedback
 */
export const CreditCardInput: React.FC<CreditCardInputProps> = ({
  value,
  onChange,
  onValidityChange,
}) => {
  const [touched, setTouched] = useState(false);

  const isValid = validateCard(value);
  const errors = touched ? getCardValidationErrors(value) : [];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    onValidityChange?.(validateCard(newValue));
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const inputStyles = `
    w-full p-3 border rounded
    ${touched && !isValid ? 'border-red-500 bg-red-50' : 'border-gray-300'}
  `;

  return (
    <div className="space-y-2">
      <label className="block text-gray-700">
        Please enter your 16 digit credit/debit card number:
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={16}
        placeholder="1234567890123456"
        className={inputStyles}
      />
      {touched && errors.length > 0 && (
        <div className="text-red-500 text-sm">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};