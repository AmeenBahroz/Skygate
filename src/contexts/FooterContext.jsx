import React, { createContext, useContext, useState } from 'react';

const FooterContext = createContext();

export const useFooter = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error('useFooter must be used within a FooterProvider');
  }
  return context;
};

export const FooterProvider = ({ children }) => {
  const [footerType, setFooterType] = useState('general'); // 'general', 'logistics', 'travel'

  const setLogisticsFooter = () => setFooterType('logistics');
  const setTravelFooter = () => setFooterType('travel');
  const setGeneralFooter = () => setFooterType('general');

  const value = {
    footerType,
    setLogisticsFooter,
    setTravelFooter,
    setGeneralFooter
  };

  return (
    <FooterContext.Provider value={value}>
      {children}
    </FooterContext.Provider>
  );
};
