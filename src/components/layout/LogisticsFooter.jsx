import React from 'react';
import { Link } from 'react-router-dom';
import SkygateLogisticsLogo from '../logos/SkygateLogisticsLogo';

const LogisticsFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-logistics-800 via-logistics-900 to-logistics-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '3s'}}></div>
      
      <div className="container-premium relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Identity */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <SkygateLogisticsLogo className="h-12 w-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Skygate Logistics</h3>
                <p className="text-logistics-100 text-sm leading-relaxed">
                  YOUR SERVICE. OUR PROMISE.
                </p>
                <p className="text-logistics-200 text-sm mt-2">
                  Empowering global trade through seamless logistics solutions since 2018
                </p>
                <p className="text-logistics-300 text-xs mt-3 italic">
                  • Logistics Services Footer •
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-logistics-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+9647505552720" className="text-logistics-100 hover:text-white transition-colors duration-300">
                      +964 750 555 2720
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-logistics-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+9647855552720" className="text-logistics-100 hover:text-white transition-colors duration-300">
                      +964 785 555 2720
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-logistics-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:Skygate.logistic.iq@gmail.com" className="text-logistics-100 hover:text-white transition-colors duration-300">
                    Skygate.logistic.iq@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-logistics-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a href="https://maps.app.goo.gl/JUBs9yEjsWs2d7329" target="_blank" rel="noopener noreferrer" className="text-logistics-100 hover:text-white transition-colors duration-300">
                    Villa No. 297, 1 Italian Village Rd<br />Erbil, Erbil Governorate
                  </a>
                </div>
              </div>
            </div>

            {/* Essential Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Essential Links</h4>
              <div className="space-y-3">
                <Link to="/about" className="block text-logistics-100 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
                <Link to="/logistics" className="block text-logistics-100 hover:text-white transition-colors duration-300">
                  Logistics Services
                </Link>
                <Link to="/travel" className="block text-logistics-100 hover:text-white transition-colors duration-300">
                  Travel Services
                </Link>
                <Link to="/contact" className="block text-logistics-100 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Connect */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <p className="text-logistics-100 text-sm mb-4">Follow Skygate Logistics</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/skygate_logistic.iq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105" style={{color: 'rgb(209, 213, 219)'}}>
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/19u4XFWaks/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105" style={{color: 'rgb(209, 213, 219)'}}>
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <div className="relative group">
                  <div className="transition-transform duration-300 hover:scale-105 opacity-50 cursor-not-allowed" style={{color: 'rgb(209, 213, 219)'}}>
                    <span className="sr-only">TikTok - Coming Soon</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-logistics-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-logistics-200 text-sm">
                © 2025 Skygate Logistics. All rights reserved.
              </p>
              <p className="text-logistics-300 text-xs mt-1">
                Delivering 5000+ shipments worldwide | 7+ Years Experience
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-logistics-300 text-xs">
                Developed by{' '}
                <a href="mailto:Ameen.bahroz310@gmail.com" className="hover:text-white transition-colors duration-300">
                  Ameen Bahroz Musa
                </a>
              </p>
              <div className="flex space-x-4 mt-2 text-xs">
                <Link to="/privacy" className="text-logistics-300 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <span className="text-logistics-400">|</span>
                <Link to="/terms" className="text-logistics-300 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LogisticsFooter;
