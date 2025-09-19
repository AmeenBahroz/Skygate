import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  link, 
  accentColor = 'primary',
  className = '',
  onClick 
}) => {
  const accentColors = {
    primary: 'border-primary-200/50 hover:border-primary-400 hover:shadow-glow',
    logistics: 'border-logistics-200/50 hover:border-logistics-400 hover:shadow-glow',
    travel: 'border-travel-200/50 hover:border-travel-400 hover:shadow-glow'
  };
  
  const iconColors = {
    primary: 'text-primary-600',
    logistics: 'text-logistics-600',
    travel: 'text-travel-600'
  };
  
  const gradientColors = {
    primary: 'from-primary-50 to-primary-100',
    logistics: 'from-logistics-50 to-logistics-100',
    travel: 'from-travel-50 to-travel-100'
  };
  
  const CardContent = () => (
    <div className={`group relative p-8 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/40 shadow-elevated hover:shadow-floating transition-all duration-500 cursor-pointer overflow-hidden ${accentColors[accentColor]} ${className}`}>
      {/* Simplified gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[accentColor]} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`w-16 h-16 mb-6 ${iconColors[accentColor]} flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl group-hover:scale-105 transition-all duration-300 shadow-premium`}>
          {icon}
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300 tracking-tight">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
  
  if (link) {
    return (
      <Link to={link} className="block">
        <CardContent />
      </Link>
    );
  }
  
  return (
    <div onClick={onClick}>
      <CardContent />
    </div>
  );
};

export default ServiceCard;

