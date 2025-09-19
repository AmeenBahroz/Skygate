import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import HeroSection from '../common/HeroSection';
import Button from '../common/Button';
import SkygateLogisticsLogo from '../logos/SkygateLogisticsLogo';
import SkygateTravelLogo from '../logos/SkygateTravelLogo';
import { useFooter } from '../../contexts/FooterContext';
import emailjs from '@emailjs/browser';

// Social Media Card Component
const SocialMediaCard = ({ platform, icon, href, isAvailable, contactInfo, onModalOpen }) => {
    if (!isAvailable) {
    // Render as non-clickable div for "Coming Soon" items
    return (
      <div className="group">
        <div className="relative p-6 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/40 shadow-elevated transition-all duration-500 cursor-not-allowed overflow-hidden opacity-75">
          {/* Dynamic Gradient Overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${contactInfo.primaryColor}, ${contactInfo.primaryColor}dd)`
            }}
          ></div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <div 
              className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300"
              style={{
                background: `linear-gradient(135deg, ${contactInfo.primaryColor}, ${contactInfo.primaryColor}dd)`
              }}
            >
              {icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300">
              {platform}
            </h3>
            <p className="text-sm text-gray-500 mt-2">Coming Soon</p>
          </div>
        </div>
      </div>
    );
  }

  // Render as clickable link for available items
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="relative p-6 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/40 shadow-elevated hover:shadow-floating transition-all duration-500 cursor-pointer overflow-hidden">
        {/* Dynamic Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${contactInfo.primaryColor}, ${contactInfo.primaryColor}dd)`
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <div 
            className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{
              background: `linear-gradient(135deg, ${contactInfo.primaryColor}, ${contactInfo.primaryColor}dd)`
            }}
          >
            {icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
            {platform}
          </h3>
        </div>
      </div>
    </a>
  );
};

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { setLogisticsFooter, setTravelFooter, setGeneralFooter } = useFooter();
  const [activeForm, setActiveForm] = useState('general');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  // Handle URL parameters to set the active form
  useEffect(() => {
    const category = searchParams.get('category');
    if (category === 'logistics' || category === 'travel') {
      setActiveForm(category);
      // Set footer context based on URL parameter
      if (category === 'logistics') {
        setLogisticsFooter();
      } else if (category === 'travel') {
        setTravelFooter();
      }
    } else {
      // Default to general category when no category parameter or on refresh
      setActiveForm('general');
      setGeneralFooter();
      // Update URL to include general category
      if (!category) {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('category', 'general');
        const newUrl = `/contact?${newSearchParams.toString()}`;
        window.history.replaceState(null, '', newUrl);
      }
    }
  }, [searchParams]);

  // Clear form data whenever activeForm changes with a small delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 50); // Small delay to ensure clean transition
    
    return () => clearTimeout(timer);
  }, [activeForm]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCategoryChange = (category) => {
    console.log('Changing category to:', category);
    
    // Store current scroll position
    const currentScrollY = window.scrollY;
    
    // Set transitioning state
    setIsTransitioning(true);
    
    // Clear form data immediately
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    
    // Update active form after a brief delay
    setTimeout(() => {
      setActiveForm(category);
      setIsTransitioning(false);
      
      // Restore scroll position
      window.scrollTo(0, currentScrollY);
    }, 100);
    
    // Update URL parameters without scrolling
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('category', category);
    const newUrl = `/contact?${newSearchParams.toString()}`;
    window.history.replaceState(null, '', newUrl);
    
    // Update footer context immediately for real-time updates
    if (category === 'logistics') {
      console.log('Setting logistics footer');
      setLogisticsFooter();
    } else if (category === 'travel') {
      console.log('Setting travel footer');
      setTravelFooter();
    } else {
      console.log('Setting general footer');
      setGeneralFooter();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // EmailJS configuration - you'll need to replace these with your actual IDs
    const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
    
    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_type: activeForm === 'general' ? 'Skygate Group' : activeForm === 'logistics' ? 'Logistics Services' : 'Travel Services',
        message: formData.message,
        to_email: contactInfo.contact.gmail, // Send to the appropriate email based on selected category
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Success message
      alert('We apologize, but our online contact form is currently not available. Please contact us directly via phone or email using the contact information provided below. Thank you for your understanding!');
      
      // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('We apologize, but our online contact form is currently not available. Please contact us directly via phone or email using the contact information provided below. Thank you for your understanding!');
    }
  };

  // Dynamic contact information based on selected category
  const getContactInfo = () => {
    switch(activeForm) {
      case 'logistics':
        return {
          brandColor: 'logistics',
          primaryColor: '#bf2530',
          lightColor: '#fee2e2',
          contact: {
            gmail: "Skygate.logistic.iq@gmail.com",
            phone1: "+964 750 555 2720",
            phone2: "+964 785 555 2720",
            instagram: "@skygate_logistic.iq",
            facebook: "SkygateLogisticsOfficial"
          },
          socialMedia: {
            facebook: "SkygateLogisticsOfficial",
            instagram: "skygate_logistic.iq",
            tiktok: "skygatelogistics",
            linkedin: "skygate-logistics"
          },
          offices: [
            {
              city: "Erbil",
              address: "Villa No. 297, 1 Italian Village Rd",
              location: "Erbil, Erbil Governorate",
              phone1: "+964 750 555 2720",
              phone2: "+964 785 555 2720",
              email: "Skygate.logistic.iq@gmail.com",
              type: "Logistics Headquarters",
              coordinates: "5XQ9+R4 Erbil"
            }
          ]
        };
      case 'travel':
        return {
          brandColor: 'travel',
          primaryColor: '#1eba55',
          lightColor: '#dcfce7',
          contact: {
            gmail: "Skygate.travel.iq@gmail.com",
            phone1: "+964 750 666 2720",
            phone2: "+90 538 498 2720",
            instagram: "@skygate_travel.iq",
            facebook: "SkygateTravelOfficial"
          },
          socialMedia: {
            facebook: "SkygateTravelOfficial",
            instagram: "skygate_travel.iq",
            tiktok: "skygatetravel",
            linkedin: "skygate-travel"
          },
          offices: [
            {
              city: "Erbil",
              address: "Villa No. 297, 1 Italian Village Rd",
              location: "Erbil, Erbil Governorate",
              phone1: "+964 750 666 2720",
              phone2: "+90 538 498 2720",
              email: "Skygate.travel.iq@gmail.com",
              type: "Travel Headquarters",
              coordinates: "5XQ9+R4 Erbil"
            }
          ]
        };
      default: // general
        return {
          brandColor: 'primary',
          primaryColor: '#5e716a',
          lightColor: '#f0f3f2',
          contact: {
            gmail: "Skygateiq@gmail.com",
            phone1: "+964 750 999 2720",
            phone2: "+964 750 999 2720",
            instagram: "@skygate_iraq",
            facebook: "SkygateGroupOfficial"
          },
          socialMedia: {
            facebook: "SkygateGroupOfficial",
            instagram: "skygategroup",
            tiktok: "skygategroup",
            linkedin: "skygate-group"
          },
          offices: [
            {
              city: "Erbil",
              address: "Villa No. 297, 1 Italian Village Rd",
              location: "Erbil, Erbil Governorate",
              phone: "+964 750 999 2720",
              email: "Skygateiq@gmail.com",
              type: "Headquarters",
              coordinates: "5XQ9+R4 Erbil"
            }
          ]
        };
    }
  };

  const contactInfo = getContactInfo();

  return (
    <div>
      {/* Premium Hero Section */}
      <HeroSection
        title={`Contact Skygate ${activeForm === 'logistics' ? 'Logistics' : activeForm === 'travel' ? 'Travel' : 'Group'}`}
        subtitle={
          activeForm === 'logistics' 
            ? "Connect with our logistics experts for all your shipping and supply chain needs"
            : activeForm === 'travel'
            ? "Reach out to our travel specialists for your next journey and adventure"
            : "Get in touch with our team to discuss your business needs and discover how we can help you succeed"
        }
        background={activeForm === 'logistics' ? 'logistics' : activeForm === 'travel' ? 'travel' : 'cinematic'}
        fullScreen={true}
      />

      {/* Premium Contact Forms Section */}
      <section className={`section-premium relative overflow-hidden ${
        activeForm === 'logistics' 
          ? 'bg-gradient-to-br from-logistics-50 via-logistics-100/30 to-logistics-50'
          : activeForm === 'travel'
          ? 'bg-gradient-to-br from-travel-50 via-travel-100/30 to-travel-50'
          : 'bg-gradient-to-br from-primary-50 via-primary-100/30 to-primary-50'
      }`}>
        {/* Dynamic background elements based on selected category */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          activeForm === 'logistics' 
            ? 'from-logistics-100/20 via-transparent to-logistics-200/10'
              : activeForm === 'travel'
            ? 'from-travel-100/20 via-transparent to-travel-200/10'
            : 'from-primary-100/20 via-transparent to-primary-200/10'
        }`}></div>
        <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl animate-float-slow ${
          activeForm === 'logistics' 
            ? 'bg-logistics-200/20'
              : activeForm === 'travel'
            ? 'bg-travel-200/20'
            : 'bg-primary-200/20'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl animate-float-slow ${
          activeForm === 'logistics' 
            ? 'bg-logistics-300/15'
              : activeForm === 'travel'
            ? 'bg-travel-300/15'
            : 'bg-primary-300/15'
        }`} style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24" id="get-in-touch">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              Choose the appropriate contact form based on your needs
            </p>
          </div>

          {/* Premium Form Selection Tabs */}
          <div className="flex flex-col sm:flex-row justify-center mb-16 gap-4">
            <button
              onClick={() => {
                setActiveForm('general');
                setGeneralFooter();
              }}
              className={`px-8 py-4 font-bold rounded-2xl transition-all duration-500 shadow-premium hover:shadow-premium-lg ${
                activeForm === 'general'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white transform -translate-y-1'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              Skygate Group
            </button>
            <button
              onClick={() => {
                setActiveForm('logistics');
                setLogisticsFooter();
              }}
              className={`px-8 py-4 font-bold rounded-2xl transition-all duration-500 shadow-premium hover:shadow-premium-lg ${
                activeForm === 'logistics'
                  ? 'bg-gradient-to-r from-logistics-500 to-logistics-600 text-white transform -translate-y-1'
                  : 'bg-white text-gray-700 hover:bg-logistics-50 hover:text-logistics-600'
              }`}
            >
              Logistics Services
            </button>
            <button
              onClick={() => {
                setActiveForm('travel');
                setTravelFooter();
              }}
              className={`px-8 py-4 font-bold rounded-2xl transition-all duration-500 shadow-premium hover:shadow-premium-lg ${
                activeForm === 'travel'
                  ? 'bg-gradient-to-r from-travel-500 to-travel-600 text-white transform -translate-y-1'
                  : 'bg-white text-gray-700 hover:bg-travel-50 hover:text-travel-600'
              }`}
            >
              Travel Services
            </button>
          </div>

          {/* Premium Contact Form */}
          <div className="max-w-5xl mx-auto">
            {isTransitioning && (
              <div className="card-premium p-12 animate-fade-in-up flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Switching form...</p>
                </div>
              </div>
            )}
            {!isTransitioning && activeForm === 'general' && (
              <div key="general-form" className="card-premium p-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">Skygate Group Inquiry</h3>
                    <p className="text-gray-600">Send us a general message and we'll direct you to the right team</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>


                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
                )}
            
                {!isTransitioning && activeForm === 'logistics' && (
              <div key="logistics-form" className="card-premium p-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-logistics-100 rounded-lg flex items-center justify-center mr-4">
                    <SkygateLogisticsLogo width={30} height={30} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Logistics Services Inquiry</h3>
                    <p className="text-gray-600">Get in touch with our logistics experts</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="freight-forwarding">Freight Forwarding</option>
                    <option value="customs-clearance">Customs Clearance</option>
                    <option value="warehousing">Warehousing</option>
                    <option value="last-mile-delivery">Last Mile Delivery</option>
                    <option value="supply-chain">Supply Chain Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your logistics requirements..."
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="logistics"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
                  </div>
                )}
            
                {!isTransitioning && activeForm === 'travel' && (
              <div key="travel-form" className="card-premium p-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-travel-100 rounded-lg flex items-center justify-center mr-4">
                    <SkygateTravelLogo width={30} height={30} />
                  </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">Travel Services Inquiry</h3>
                    <p className="text-gray-600">Contact our travel specialists</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="business-travel">Business Travel</option>
                    <option value="leisure-travel">Leisure Travel</option>
                    <option value="group-tours">Group Tours</option>
                    <option value="visa-assistance">Visa Assistance</option>
                    <option value="hotel-booking">Hotel Booking</option>
                    <option value="flight-booking">Flight Booking</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your travel requirements..."
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="travel"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Premium Office Locations */}
      <section className={`section-premium relative overflow-hidden ${
        activeForm === 'logistics' 
          ? 'bg-gradient-to-br from-logistics-100/40 via-logistics-50 to-logistics-100/30'
          : activeForm === 'travel'
          ? 'bg-gradient-to-br from-travel-100/40 via-travel-50 to-travel-100/30'
          : 'bg-gradient-to-br from-primary-100/40 via-primary-50 to-primary-100/30'
      }`}>
        {/* Dynamic Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          activeForm === 'logistics' 
            ? 'from-logistics-200/25 via-transparent to-logistics-300/20'
            : activeForm === 'travel'
            ? 'from-travel-200/25 via-transparent to-travel-300/20'
            : 'from-primary-200/25 via-transparent to-primary-300/15'
        }`}></div>
        
        {/* Floating Elements */}
        <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-float-slow ${
          activeForm === 'logistics' 
            ? 'bg-logistics-200/20'
            : activeForm === 'travel'
            ? 'bg-travel-200/20'
            : 'bg-primary-200/20'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl animate-float-slow ${
          activeForm === 'logistics' 
            ? 'bg-logistics-300/15'
            : activeForm === 'travel'
            ? 'bg-travel-300/15'
            : 'bg-primary-300/15'
        }`} style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-fade-in-up tracking-tight">
              Our <span className="text-gradient">Offices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              Visit us at our headquarters and experience our world-class facilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {contactInfo.offices.map((office, index) => (
              <div key={index} className="group relative animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Premium Card */}
                <div className="relative p-10 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/40 shadow-elevated hover:shadow-floating transition-all duration-700 cursor-pointer overflow-hidden">
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(135deg, ${contactInfo.primaryColor}, ${contactInfo.primaryColor}dd)`
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center mb-10">
                      <div 
                        className="w-20 h-20 rounded-3xl flex items-center justify-center mr-8 shadow-premium group-hover:scale-110 transition-transform duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${contactInfo.primaryColor}, ${contactInfo.primaryColor}dd)`
                        }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">{office.city}</h3>
                        <p className="text-xl text-gray-600 font-semibold group-hover:text-gray-700 transition-colors duration-300">{office.type}</p>
                      </div>
                    </div>

                    {/* Office Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Address Section */}
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                            style={{ backgroundColor: contactInfo.lightColor }}
                          >
                            <svg className="w-6 h-6" style={{ color: contactInfo.primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Address</h4>
                            <p className="text-gray-600 font-medium">{office.address}</p>
                            <p className="text-gray-600 font-medium">{office.location}</p>
                          </div>
                        </div>

                        {/* Contact Section */}
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                            style={{ backgroundColor: contactInfo.lightColor }}
                          >
                            <svg className="w-6 h-6" style={{ color: contactInfo.primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Contact</h4>
                            {office.phone1 && office.phone2 ? (
                              <>
                                <a href={`tel:${office.phone1.replace(/\s/g, '')}`} className="text-lg font-bold mb-2 block hover:underline transition-all duration-300" style={{ color: contactInfo.primaryColor }}>
                                  {office.phone1}
                                </a>
                                <a href={`tel:${office.phone2.replace(/\s/g, '')}`} className="text-lg font-bold mb-2 block hover:underline transition-all duration-300" style={{ color: contactInfo.primaryColor }}>
                                  {office.phone2}
                                </a>
                              </>
                            ) : (
                              <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-lg font-bold mb-2 block hover:underline transition-all duration-300" style={{ color: contactInfo.primaryColor }}>
                                {office.phone}
                              </a>
                            )}
                            <a href={`mailto:${office.email}`} className="text-lg font-bold block hover:underline transition-all duration-300" style={{ color: contactInfo.primaryColor }}>
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Map Section */}
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                            style={{ backgroundColor: contactInfo.lightColor }}
                          >
                            <svg className="w-6 h-6" style={{ color: contactInfo.primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </div>
                          <div className="w-full">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">Location</h4>
                            <a 
                              href="https://maps.app.goo.gl/z53CGpbJRiuKAG6z9" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                              style={{ 
                                backgroundColor: contactInfo.lightColor,
                                color: contactInfo.primaryColor,
                                border: `2px solid ${contactInfo.primaryColor}`
                              }}
                            >
                              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="font-bold text-lg">View on Google Maps</span>
                              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Connection Hub */}
      <section className={`section-premium relative overflow-hidden ${
        activeForm === 'logistics' 
          ? 'bg-gradient-to-br from-logistics-50 via-logistics-100/30 to-logistics-50'
          : activeForm === 'travel'
          ? 'bg-gradient-to-br from-travel-50 via-travel-100/30 to-travel-50'
          : 'bg-gradient-to-br from-primary-50 via-primary-100/30 to-primary-50'
      }`}>
        {/* Dynamic Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          activeForm === 'logistics' 
            ? 'from-logistics-100/20 via-transparent to-logistics-200/10'
            : activeForm === 'travel'
            ? 'from-travel-100/20 via-transparent to-travel-200/10'
            : 'from-primary-100/20 via-transparent to-primary-200/10'
        }`}></div>
        
        {/* Floating Elements */}
        <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl animate-float-slow ${
          activeForm === 'logistics' 
            ? 'bg-logistics-200/20'
            : activeForm === 'travel'
            ? 'bg-travel-200/20'
            : 'bg-primary-200/20'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl animate-float-slow ${
          activeForm === 'logistics' 
            ? 'bg-logistics-300/15'
            : activeForm === 'travel'
            ? 'bg-travel-300/15'
            : 'bg-primary-300/15'
        }`} style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 animate-fade-in-up tracking-tight">
              {activeForm === 'logistics' 
                ? "Follow Skygate Logistic Online"
                : activeForm === 'travel'
                ? "Stay Connected With Skygate Travel"
                : "Connect With Skygate Group"
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              {activeForm === 'logistics' 
                ? "Join our logistics community for industry insights, shipping updates, and supply chain innovations"
                : activeForm === 'travel'
                ? "Follow our travel adventures, destination guides, and exclusive travel deals"
                : "Stay updated with our latest news, services, and company updates"
              }
            </p>
          </div>

          {/* Social Media Icons Grid */}
          <div className={`grid max-w-4xl mx-auto ${
            activeForm === 'general' 
              ? 'grid-cols-2 md:grid-cols-4 gap-6' 
              : 'grid-cols-3 gap-6'
          }`}>
            {/* Facebook */}
            <SocialMediaCard
              platform="Facebook"
              icon={
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              }
              href={activeForm === 'logistics' 
                ? "https://www.facebook.com/share/19u4XFWaks/?mibextid=wwXIfr"
                : activeForm === 'travel'
                ? "https://www.facebook.com/share/1FitFeFvC6/?mibextid=wwXIfr"
                : `https://facebook.com/${contactInfo.socialMedia.facebook}`
              }
              isAvailable={true}
              contactInfo={contactInfo}
              onModalOpen={() => {}}
            />

            {/* Instagram */}
            <SocialMediaCard
              platform="Instagram"
              icon={
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"/>
                </svg>
              }
              href={activeForm === 'logistics' 
                ? "https://www.instagram.com/skygate_logistic.iq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                : activeForm === 'travel'
                ? "https://www.instagram.com/skygate_travel.iq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                : "https://www.instagram.com/skygate_iraq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
              isAvailable={true}
              contactInfo={contactInfo}
              onModalOpen={() => {}}
            />

            {/* TikTok */}
            <SocialMediaCard
              platform="TikTok"
              icon={
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              }
              href={`https://tiktok.com/@${contactInfo.socialMedia.tiktok}`}
              isAvailable={false}
              contactInfo={contactInfo}
              onModalOpen={() => {}}
            />

            {/* LinkedIn - Only show for General category */}
            {!isTransitioning && activeForm === 'general' && (
            <SocialMediaCard
              platform="LinkedIn"
              icon={
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.023-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              }
              href={`https://linkedin.com/company/${contactInfo.socialMedia.linkedin}`}
              isAvailable={false}
              contactInfo={contactInfo}
                onModalOpen={() => {}}
            />
            )}
        </div>

          {/* Category Switcher Circles */}
          <div className="flex justify-center items-center space-x-6 mt-16">
            {/* General Circle */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCategoryChange('general');
              }}
              className={`w-6 h-6 rounded-full transition-all duration-500 backdrop-blur-sm border-2 ${
                activeForm === 'general'
                  ? 'scale-125 shadow-2xl border-primary-400'
                  : 'hover:scale-110 border-primary-200/50'
              }`}
              style={{
                background: activeForm === 'general' 
                  ? 'linear-gradient(135deg, rgba(94, 113, 106, 0.9) 0%, rgba(94, 113, 106, 0.7) 100%)'
                  : 'linear-gradient(135deg, rgba(94, 113, 106, 0.6) 0%, rgba(94, 113, 106, 0.4) 100%)',
                boxShadow: activeForm === 'general'
                  ? '0 0 20px rgba(94, 113, 106, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  : '0 0 10px rgba(94, 113, 106, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              title="General Inquiry"
            />
            
            {/* Logistics Circle */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCategoryChange('logistics');
              }}
              className={`w-6 h-6 rounded-full transition-all duration-500 backdrop-blur-sm border-2 ${
                activeForm === 'logistics'
                  ? 'scale-125 shadow-2xl border-logistics-400'
                  : 'hover:scale-110 border-logistics-200/50'
              }`}
                  style={{
                background: activeForm === 'logistics'
                  ? 'linear-gradient(135deg, rgba(191, 37, 48, 0.9) 0%, rgba(191, 37, 48, 0.7) 100%)'
                  : 'linear-gradient(135deg, rgba(191, 37, 48, 0.6) 0%, rgba(191, 37, 48, 0.4) 100%)',
                boxShadow: activeForm === 'logistics'
                  ? '0 0 20px rgba(191, 37, 48, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  : '0 0 10px rgba(191, 37, 48, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              title="Logistics Services"
            />
            
            {/* Travel Circle */}
                <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCategoryChange('travel');
              }}
              className={`w-6 h-6 rounded-full transition-all duration-500 backdrop-blur-sm border-2 ${
                activeForm === 'travel'
                  ? 'scale-125 shadow-2xl border-travel-400'
                  : 'hover:scale-110 border-travel-200/50'
              }`}
                  style={{
                background: activeForm === 'travel'
                  ? 'linear-gradient(135deg, rgba(30, 186, 85, 0.9) 0%, rgba(30, 186, 85, 0.7) 100%)'
                  : 'linear-gradient(135deg, rgba(30, 186, 85, 0.6) 0%, rgba(30, 186, 85, 0.4) 100%)',
                boxShadow: activeForm === 'travel'
                  ? '0 0 20px rgba(30, 186, 85, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  : '0 0 10px rgba(30, 186, 85, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              title="Travel Services"
            />
              </div>
            </div>

      </section>



                </div>
  );
};

export default ContactPage;






