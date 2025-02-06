// Button.tsx
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  const baseStyles = 'transition-all duration-200 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-100',
    link: 'text-blue-500 hover:underline bg-transparent border-none',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const loadingStyles = isLoading ? 'cursor-not-allowed opacity-50' : '';

  const fullWidthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={!isLoading && !disabled ? onClick : undefined}
      disabled={isLoading || disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingStyles} ${fullWidthStyles} ${className}`}
    >
      {isLoading ? (
        <span className="flex justify-center items-center">
          <svg
            className="w-5 h-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="4" strokeLinecap="round" className="opacity-25" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12a8 8 0 118 8 8 8 0 01-8-8z"
              className="opacity-75"
            />
          </svg>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
