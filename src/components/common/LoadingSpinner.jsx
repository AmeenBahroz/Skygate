import React from 'react';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizes[size]} relative`}>
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-primary-200 rounded-full animate-spin"></div>
        
        {/* Inner ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full animate-spin" style={{animationDuration: '0.8s'}}></div>
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
