import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon,
  fullWidth = false,
  type = 'button',
  disabled = false,
  onClick
}) => {
  const baseClasses = "relative group flex items-center justify-center gap-2 rounded-lg py-2 px-4 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/20",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    outline: "bg-transparent border border-gray-700 text-white hover:border-cyan-500/50"
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {variant === 'primary' && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
      )}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;