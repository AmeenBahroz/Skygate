import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500 shadow-premium hover:shadow-premium-lg',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:from-secondary-700 hover:to-secondary-800 focus:ring-secondary-500 shadow-premium hover:shadow-premium-lg',
    logistics: 'bg-gradient-to-r from-logistics-500 to-logistics-600 text-white hover:from-logistics-600 hover:to-logistics-700 focus:ring-logistics-500 shadow-premium hover:shadow-premium-lg',
    travel: 'bg-gradient-to-r from-travel-500 to-travel-600 text-white hover:from-travel-600 hover:to-travel-700 focus:ring-travel-500 shadow-premium hover:shadow-premium-lg',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500 bg-white/90 backdrop-blur-xl hover:shadow-premium',
    ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500 hover:shadow-premium bg-white/80 backdrop-blur-sm'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;

