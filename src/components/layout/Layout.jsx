import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import GeneralFooter from './GeneralFooter';
import LogisticsFooter from './LogisticsFooter';
import TravelFooter from './TravelFooter';
import Breadcrumb from '../common/Breadcrumb';
import ScrollToTop from '../common/ScrollToTop';
import { useFooter } from '../../contexts/FooterContext';

const Layout = ({ children }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { footerType } = useFooter();
  const isLogisticsPage = location.pathname === '/logistics';
  const isTravelPage = location.pathname === '/travel';
  const isContactPage = location.pathname === '/contact';
  // Debug logging
  console.log('Layout Debug:', {
    pathname: location.pathname,
    category: searchParams.get('category'),
    footerType,
    isContactPage
  });

  // Determine which footer to show - prioritize footerType context for immediate updates
  let FooterComponent = null;
  
  if (isLogisticsPage || (isContactPage && footerType === 'logistics')) {
    FooterComponent = LogisticsFooter;
    console.log('Showing LogisticsFooter - footerType:', footerType);
  } else if (isTravelPage || (isContactPage && footerType === 'travel')) {
    FooterComponent = TravelFooter;
    console.log('Showing TravelFooter - footerType:', footerType);
  } else {
    FooterComponent = GeneralFooter;
    console.log('Showing GeneralFooter - footerType:', footerType);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-grow">
        {children}
      </main>
      {/* Single Footer Rendering */}
      {FooterComponent && <FooterComponent />}
      <ScrollToTop />
    </div>
  );
};

export default Layout;


