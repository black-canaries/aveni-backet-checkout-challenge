import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Purple navigation button for view transitions
 * Single Responsibility: only handles navigation
 */
export const NavButton: React.FC<NavButtonProps> = ({
  to,
  children,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded text-white font-medium bg-purple-500 hover:bg-purple-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

/**
 * Clickable text that navigates (for header totals)
 */
export const NavLink: React.FC<NavButtonProps> = ({
  to,
  children,
  className = '',
}) => {
  const navigate = useNavigate();

  return (
    <span
      onClick={() => navigate(to)}
      className={`cursor-pointer text-purple-600 hover:text-purple-800 ${className}`}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(to)}
    >
      {children}
    </span>
  );
};