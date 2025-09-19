import React from 'react';
import { Link } from 'react-router-dom';
import SkygateLogo from '../logos/SkygateLogo';

const Footer = () => {
  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2d3e37 0%, #1f2a23 100%)',
        borderTop: '1px solid rgba(94, 113, 106, 0.2)'
      }}
    >
      {/* Glassmorphism overlay */}
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          background: 'rgba(45, 62, 55, 0.8)'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Section 1 - Brand Identity */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <SkygateLogo width={180} height={50} />
            </div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ color: '#f9fafb' }}
            >
              YOUR SERVICE. OUR PROMISE.
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: '#e5e7eb' }}
            >
              Empowering global connections through seamless travel and logistics solutions since 2018.
            </p>
          </div>

          {/* Section 2 - Quick Contact */}
          <div className="lg:col-span-1">
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: '#f9fafb' }}
            >
              Quick Contact
            </h4>
            <div className="space-y-4">
              <div>
                <a 
                  href="tel:+9647509992720"
                  className="text-sm transition-colors duration-300 hover:text-primary-500"
                  style={{ color: '#d1d5db' }}
                >
                  +964 750 999 2720
                </a>
              </div>
              <div>
                <a 
                  href="mailto:Skygateiq@gmail.com"
                  className="text-sm transition-colors duration-300 hover:text-primary-500"
                  style={{ color: '#d1d5db' }}
                >
                  Skygateiq@gmail.com
                </a>
              </div>
              <div>
                <a 
                  href="https://maps.app.goo.gl/JUBs9yEjsWs2d7329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300 hover:text-primary-500"
                  style={{ color: '#e5e7eb' }}
                >
                  Villa No. 297, 1 Italian Village Rd<br />
                  Erbil, Erbil Governorate
                </a>
              </div>
            </div>
          </div>
          
          {/* Section 3 - Essential Links */}
          <div className="lg:col-span-1">
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: '#f9fafb' }}
            >
              Essential Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about"
                  className="text-sm transition-colors duration-300 hover:text-primary-500"
                  style={{ color: '#d1d5db' }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/logistics" 
                  className="text-sm transition-colors duration-300 hover:text-logistics-500"
                  style={{ color: '#d1d5db' }}
                >
                  Skygate Logistics
                </Link>
              </li>
              <li>
                <Link 
                  to="/travel" 
                  className="text-sm transition-colors duration-300 hover:text-travel-500"
                  style={{ color: '#d1d5db' }}
                >
                  Skygate Travel
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-sm transition-colors duration-300 hover:text-primary-500"
                  style={{ color: '#d1d5db' }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Section 4 - Connect */}
          <div className="lg:col-span-1">
            <h4 
              className="text-lg font-semibold mb-6"
              style={{ color: '#f9fafb' }}
            >
              Connect
            </h4>
            <p 
              className="text-sm mb-4"
              style={{ color: '#e5e7eb' }}
            >
              Follow Us
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/skygate_iraq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
                style={{ color: '#d1d5db' }}
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/SkygateGroupOfficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
                style={{ color: '#d1d5db' }}
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <span 
                className="transition-transform duration-300 cursor-not-allowed opacity-60"
                style={{ color: '#d1d5db' }}
                title="Coming Soon"
              >
                <span className="sr-only">TikTok - Coming Soon</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </span>
              <span 
                className="transition-transform duration-300 cursor-not-allowed opacity-60"
                style={{ color: '#d1d5db' }}
                title="Coming Soon"
              >
                <span className="sr-only">LinkedIn - Coming Soon</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.023-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div 
          className="border-t pt-8"
          style={{ borderColor: 'rgba(94, 113, 106, 0.2)' }}
        >
          <div className="text-center space-y-4">
            {/* Copyright */}
            <p 
              className="text-sm"
              style={{ color: '#e5e7eb' }}
            >
              © 2025 Skygate Group. All rights reserved.
            </p>
            
            {/* Separator */}
            <div 
              className="w-24 h-px mx-auto"
              style={{ backgroundColor: 'rgba(94, 113, 106, 0.3)' }}
            ></div>
            
            {/* Quick Stats */}
            <p 
              className="text-sm"
              style={{ color: '#e5e7eb' }}
            >
              Serving 750+ clients worldwide | 7+ Years Experience
            </p>
            
            {/* Developer Credit */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
              <p style={{ color: '#9ca3af' }}>
                Developed by{' '}
                <a 
                  href="mailto:Ameen.bahroz310@gmail.com"
                  className="transition-colors duration-300 hover:text-primary-500"
                  style={{ color: '#9ca3af' }}
                >
                  Ameen Bahroz Musa
                </a>
              </p>
              
              {/* Legal Links */}
              <div className="flex items-center gap-4">
                <span style={{ color: '#6b7280' }}>|</span>
                <Link 
                  to="/privacy"
                  className="transition-colors duration-300 hover:text-primary-500"
                  style={{ color: '#9ca3af' }}
                >
                  Privacy Policy
              </Link>
                <span style={{ color: '#6b7280' }}>|</span>
                <Link 
                  to="/terms"
                  className="transition-colors duration-300 hover:text-primary-500"
                  style={{ color: '#9ca3af' }}
                >
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

export default Footer;


