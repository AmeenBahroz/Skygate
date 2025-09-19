import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  
  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [
      { name: 'Home', path: '/', isActive: location.pathname === '/' }
    ];

    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Convert segment to readable name
      let name = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Special cases for better naming
      if (segment === 'logistics') {
        name = 'Skygate Logistics';
      } else if (segment === 'travel') {
        name = 'Skygate Travel';
      } else if (segment === 'about') {
        name = 'About Us';
      } else if (segment === 'contact') {
        name = 'Contact';
      }
      
      breadcrumbs.push({
        name,
        path: currentPath,
        isActive: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  // Get current page brand styling
  const getCurrentBrand = () => {
    const path = location.pathname;
    if (path.startsWith('/logistics')) {
      return {
        separatorColor: 'text-logistics-400',
        activeColor: 'text-logistics-600',
        hoverColor: 'hover:text-logistics-600',
        bgColor: 'bg-logistics-50/80',
        borderColor: 'border-logistics-200'
      };
    } else if (path.startsWith('/travel')) {
      return {
        separatorColor: 'text-travel-400',
        activeColor: 'text-travel-600',
        hoverColor: 'hover:text-travel-600',
        bgColor: 'bg-travel-50/80',
        borderColor: 'border-travel-200'
      };
    } else {
      return {
        separatorColor: 'text-primary-400',
        activeColor: 'text-primary-600',
        hoverColor: 'hover:text-primary-600',
        bgColor: 'bg-primary-50/80',
        borderColor: 'border-primary-200'
      };
    }
  };

  const brandStyles = getCurrentBrand();

  // Don't show breadcrumb on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav 
      className={`${brandStyles.bgColor} backdrop-blur-sm border-b ${brandStyles.borderColor} sticky top-16 z-40`}
      aria-label="Breadcrumb"
    >
      <div className="container-premium">
        <div className="py-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.path} className="flex items-center">
                {index > 0 && (
                  <svg 
                    className={`w-4 h-4 mx-2 ${brandStyles.separatorColor}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
                
                {breadcrumb.isActive ? (
                  <span 
                    className={`font-semibold ${brandStyles.activeColor}`}
                    aria-current="page"
                  >
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link
                    to={breadcrumb.path}
                    className={`font-medium text-gray-600 ${brandStyles.hoverColor} transition-colors duration-200 hover:underline`}
                  >
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
