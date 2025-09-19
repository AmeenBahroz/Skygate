import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SkygateLogo from '../logos/SkygateLogo';
import SkygateLogisticsLogo from '../logos/SkygateLogisticsLogo';
import SkygateTravelLogo from '../logos/SkygateTravelLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skygate Logistics', href: '/logistics', color: 'text-logistics-600' },
    { name: 'Skygate Travel', href: '/travel', color: 'text-travel-600' },
    { name: 'Contact', href: '/contact' }
  ];
  
  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  // Get the appropriate logo component based on current page
  const getCurrentLogo = () => {
    const path = location.pathname;
    if (path.startsWith('/logistics')) {
      return <SkygateLogisticsLogo width={180} height={50} />;
    } else if (path.startsWith('/travel')) {
      return <SkygateTravelLogo width={180} height={50} />;
    } else {
      return <SkygateLogo width={180} height={50} />;
    }
  };

  // Get current page brand styling
  const getCurrentBrand = () => {
    const path = location.pathname;
    if (path.startsWith('/logistics')) {
      return {
        headerBg: 'bg-logistics-50/80 backdrop-blur-2xl border-b-4 border-logistics-500 shadow-premium',
        activeBg: 'bg-logistics-100',
        activeText: 'text-logistics-700',
        hoverText: 'hover:text-logistics-700',
        hoverBg: 'hover:bg-logistics-100',
        mobileBg: 'bg-logistics-50 border-t-4 border-logistics-500',
        mobileActiveBg: 'bg-logistics-100',
        mobileActiveText: 'text-logistics-700',
        mobileHoverText: 'hover:text-logistics-700',
        mobileHoverBg: 'hover:bg-logistics-100'
      };
    } else if (path.startsWith('/travel')) {
      return {
        headerBg: 'bg-travel-50/80 backdrop-blur-2xl border-b-4 border-travel-500 shadow-premium',
        activeBg: 'bg-travel-100',
        activeText: 'text-travel-700',
        hoverText: 'hover:text-travel-700',
        hoverBg: 'hover:bg-travel-100',
        mobileBg: 'bg-travel-50 border-t-4 border-travel-500',
        mobileActiveBg: 'bg-travel-100',
        mobileActiveText: 'text-travel-700',
        mobileHoverText: 'hover:text-travel-700',
        mobileHoverBg: 'hover:bg-travel-100'
      };
    } else {
      // Default primary branding for Home, About, Contact
      return {
        headerBg: 'bg-primary-50/80 backdrop-blur-2xl border-b-4 border-primary-500 shadow-premium',
        activeBg: 'bg-primary-100',
        activeText: 'text-primary-700',
        hoverText: 'hover:text-primary-700',
        hoverBg: 'hover:bg-primary-100',
        mobileBg: 'bg-primary-50 border-t-4 border-primary-500',
        mobileActiveBg: 'bg-primary-100',
        mobileActiveText: 'text-primary-700',
        mobileHoverText: 'hover:text-primary-700',
        mobileHoverBg: 'hover:bg-primary-100'
      };
    }
  };

  const brandStyles = getCurrentBrand();
  
  return (
    <header 
      className={`${brandStyles.headerBg} sticky top-0 z-50`}
      style={{
        backgroundColor: location.pathname.startsWith('/logistics') ? '#fef2f2' : 
                         location.pathname.startsWith('/travel') ? '#f0fdf4' : 
                         '#f0f3f2',
        borderBottom: `4px solid ${location.pathname.startsWith('/logistics') ? '#bf2530' : 
                                      location.pathname.startsWith('/travel') ? '#1eba55' : 
                                      '#5e716a'}`
      }}
    >
      <div className="container-premium">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            {getCurrentLogo()}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-6 py-3 text-sm font-bold transition-all duration-500 rounded-2xl ${
                  isActive(item.href)
                    ? 'shadow-premium'
                    : 'hover:shadow-premium'
                }`}
                style={{
                  backgroundColor: isActive(item.href) ? 
                    (location.pathname.startsWith('/logistics') ? '#fee2e2' : 
                     location.pathname.startsWith('/travel') ? '#dcfce7' : 
                     '#d9e1de') : 'transparent',
                  color: isActive(item.href) ? 
                    (location.pathname.startsWith('/logistics') ? '#991b1b' : 
                     location.pathname.startsWith('/travel') ? '#15803d' : 
                     '#38433e') : '#374151'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              style={{
                color: location.pathname.startsWith('/logistics') ? '#991b1b' : 
                       location.pathname.startsWith('/travel') ? '#15803d' : 
                       '#38433e'
              }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              style={{
                backgroundColor: location.pathname.startsWith('/logistics') ? '#fef2f2' : 
                                 location.pathname.startsWith('/travel') ? '#f0fdf4' : 
                                 '#f0f3f2',
                borderTop: `4px solid ${location.pathname.startsWith('/logistics') ? '#bf2530' : 
                                          location.pathname.startsWith('/travel') ? '#1eba55' : 
                                          '#5e716a'}`
              }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:shadow-sm"
                  style={{
                    backgroundColor: isActive(item.href) ? 
                      (location.pathname.startsWith('/logistics') ? '#fee2e2' : 
                       location.pathname.startsWith('/travel') ? '#dcfce7' : 
                       '#d9e1de') : 'transparent',
                    color: isActive(item.href) ? 
                      (location.pathname.startsWith('/logistics') ? '#991b1b' : 
                       location.pathname.startsWith('/travel') ? '#15803d' : 
                       '#38433e') : '#374151'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
