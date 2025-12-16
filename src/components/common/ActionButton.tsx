import React, { ButtonHTMLAttributes } from 'react';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
}

/**
 * Blue action button for state-changing operations
 * Single Responsibility: only handles button styling/behavior
 */
export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = 'primary',
  disabled,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded text-white font-medium transition-colors';

  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300',
    danger: 'bg-red-500 hover:bg-red-600 disabled:bg-red-300',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};