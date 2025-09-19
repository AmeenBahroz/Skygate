import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../common/HeroSection';
import Button from '../common/Button';
import StatsCounter from '../common/StatsCounter';
import SkygateLogo from '../logos/SkygateLogo';
import SkygateLogisticsLogo from '../logos/SkygateLogisticsLogo';
import SkygateTravelLogo from '../logos/SkygateTravelLogo';

const AboutPage = () => {
  const testimonials = [
    {
      text: "Skygate Group transformed our global supply chain. Their logistics expertise and real-time tracking gave us complete visibility and peace of mind.",
      company: "TechCorp Industries",
      industry: "Manufacturing"
    },
    {
      text: "The travel team at Skygate made our international expansion seamless. Their 24/7 support and local expertise are unmatched.",
      company: "Global Ventures Ltd",
      industry: "Consulting"
    },
    {
      text: "From medical travel to cargo shipping, Skygate handles everything with precision. Their multilingual team understands our diverse needs perfectly.",
      company: "HealthCare Partners",
      industry: "Healthcare"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide, continuously improving our processes and outcomes.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "We embrace innovation and technology to deliver cutting-edge solutions that meet evolving business needs.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "We conduct business with the highest ethical standards, building trust through transparency and honesty.",
      icon: "🤝"
    },
    {
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, and we're committed to exceeding their expectations.",
      icon: "❤️"
    }
  ];

  const differentiators = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Advanced Tracking Technology",
      description: "Real-time shipment monitoring with GPS tracking and automated notifications for complete visibility.",
      accent: "logistics"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Processing Times",
      description: "Streamlined operations and efficient workflows ensuring quick turnaround times for all requests.",
      accent: "travel"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2m-3 5h4m-4 4h4m-4 4h4" />
        </svg>
      ),
      title: "White-Glove Service",
      description: "Premium concierge-level service with personal attention to every detail, ensuring exceptional experiences from start to finish.",
      accent: "primary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Dedicated Account Managers",
      description: "Personalized service with dedicated account managers who understand your unique business needs.",
      accent: "logistics"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Industry Expertise",
      description: "Deep knowledge and experience across multiple industries including healthcare, education, and e-commerce.",
      accent: "travel"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure Data Handling",
      description: "Advanced security protocols and data protection measures ensuring complete confidentiality and privacy.",
      accent: "primary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Multilingual Team",
      description: "Expert professionals fluent in multiple languages ensuring seamless communication across global markets.",
      accent: "logistics"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Emergency Response Team",
      description: "24/7 emergency support team ready to handle urgent situations and provide immediate assistance.",
      accent: "travel"
    }
  ];

  return (
    <div>
      {/* Premium Hero Section */}
      <HeroSection
        title="About Skygate Group"
        subtitle="Empowering global connections through seamless travel and logistics solutions since 2018"
        background="cinematic"
        fullScreen={true}
      />

      {/* Premium Company Overview */}
      <section className="section-premium bg-gradient-to-br from-primary-100/40 via-primary-50 to-primary-100/30 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200/25 via-transparent to-primary-300/15"></div>
        <div className="absolute top-20 right-20 w-128 h-128 bg-primary-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-400/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-12 tracking-tight">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                With experience since 2018, Skygate Group was founded with one mission: to connect people, opportunities, and businesses across borders. What started as a small team with big ambitions has grown into two specialized divisions: <span className="font-bold text-gray-800">Skygate Travel</span> and <span className="font-bold text-gray-800">Skygate Logistics</span>.
              </p>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                Today, we help patients reach world-class hospitals abroad, guide students toward international scholarships, and design smooth travel experiences. At the same time, we specialize in bringing goods from the United States and China, ensuring fast, safe, and reliable logistics for businesses and individuals.
              </p>
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
                At Skygate Group, we believe success comes from trust and innovation, delivering solutions that move people and businesses forward.
              </p>
              <Button 
                variant="primary" 
                size="xl" 
                className="shadow-glow-xl hover:shadow-glow-xl interactive-hover"
                onClick={() => {
                  window.location.href = '/contact?category=general';
                  setTimeout(() => {
                    // Wait for page to load, then scroll to Get In Touch section
                    const scrollToGetInTouch = () => {
                      const headings = document.querySelectorAll('h2');
                      const getInTouchHeading = Array.from(headings).find(h2 => 
                        h2.textContent.includes('Get In Touch')
                      );
                      if (getInTouchHeading) {
                        getInTouchHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    };
                    setTimeout(scrollToGetInTouch, 300);
                  }, 100);
                }}
              >
                  Get In Touch
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  <div className="w-48 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <SkygateLogo width={180} height={60} className="max-w-full max-h-full w-auto h-auto object-contain" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-primary-700 transition-colors duration-300">Skygate Group</h3>
                  <p className="text-lg text-gray-600 font-medium group-hover:text-primary-600 transition-colors duration-300">Parent Company</p>
                </div>
                
              </div>
              
              <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-logistics-200 shadow-elevated hover:shadow-floating hover:border-logistics-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-logistics-50 to-logistics-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  <div className="w-48 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <SkygateLogisticsLogo width={180} height={60} className="max-w-full max-h-full w-auto h-auto object-contain" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-logistics-700 transition-colors duration-300">Skygate Logistics</h3>
                  <p className="text-lg text-gray-600 font-medium group-hover:text-logistics-600 transition-colors duration-300">Logistics Division</p>
                </div>
                
              </div>
              
              <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-travel-200 shadow-elevated hover:shadow-floating hover:border-travel-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-travel-50 to-travel-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  <div className="w-48 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <SkygateTravelLogo width={180} height={60} className="max-w-full max-h-full w-auto h-auto object-contain" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-travel-700 transition-colors duration-300">Skygate Travel</h3>
                  <p className="text-lg text-gray-600 font-medium group-hover:text-travel-600 transition-colors duration-300">Travel Division</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Mission & Vision */}
      <section className="section-premium bg-gradient-to-br from-primary-50/50 via-gray-50 to-primary-50/30 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-primary-200/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-200/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up">
               {/* Gradient overlay on hover */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
               
               {/* Content */}
               <div className="relative z-10 p-10 text-center">
                 <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                 </div>
                 <h3 className="text-4xl font-black text-gray-900 mb-6 tracking-tight group-hover:text-primary-700 transition-colors duration-300">Our Mission</h3>
                 <p className="text-xl text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
                   To empower people and businesses by delivering seamless travel and logistics solutions. We are committed to opening doors to world-class healthcare, global education, and reliable trade, driven by trust, innovation, and excellence.
              </p>
            </div>
            
             </div>
             
             <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
               {/* Gradient overlay on hover */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
               
               {/* Content */}
               <div className="relative z-10 p-10 text-center">
                 <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                   </svg>
                 </div>
                 <h3 className="text-4xl font-black text-gray-900 mb-6 tracking-tight group-hover:text-primary-700 transition-colors duration-300">Our Vision</h3>
                 <p className="text-xl text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
                   To be a global leader in travel and logistics, bridging continents, creating opportunities, and shaping a future where connections have no limits.
                 </p>
               </div>
               
            </div>
          </div>
        </div>
      </section>

      {/* Premium Our Values */}
      <section className="section-premium bg-white relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-primary-50/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-200/10 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              The principles that guide our decisions and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-primary-700 transition-colors duration-300">{value.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300 text-left">{value.description}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Global Impact */}
      <section className="section-premium bg-gradient-to-br from-primary-50 via-primary-100/30 to-primary-50 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-primary-200/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Our <span className="text-gradient">Global Impact</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              Connecting businesses and people worldwide through exceptional service delivery
            </p>
          </div>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <StatsCounter value={390} suffix="+" />
                <p className="text-xl text-gray-700 font-bold mt-4 group-hover:text-primary-700 transition-colors duration-300">Satisfied Clients Worldwide</p>
              </div>
              
            </div>
            
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <StatsCounter value={99.5} suffix="%" />
                <p className="text-xl text-gray-700 font-bold mt-4 group-hover:text-primary-700 transition-colors duration-300">Quality Assurance</p>
              </div>
              
            </div>
            
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <StatsCounter value={7} suffix="+" />
                <p className="text-xl text-gray-700 font-bold mt-4 group-hover:text-primary-700 transition-colors duration-300">Years Combined Experience</p>
              </div>
              
            </div>
            
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <StatsCounter value={94} suffix="%" />
                <p className="text-xl text-gray-700 font-bold mt-4 group-hover:text-primary-700 transition-colors duration-300">On-Time Delivery Rate</p>
              </div>
              
            </div>
            
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <StatsCounter value={24} suffix="/7" />
                <p className="text-xl text-gray-700 font-bold mt-4 group-hover:text-primary-700 transition-colors duration-300">Customer Support Availability</p>
              </div>
              
            </div>
            
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <StatsCounter value={1000} suffix="+" />
                <p className="text-xl text-gray-700 font-bold mt-4 group-hover:text-primary-700 transition-colors duration-300">Successful Projects Completed</p>
              </div>
              
            </div>
          </div>


        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-premium bg-gradient-to-br from-primary-50 via-primary-100/30 to-primary-50 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-primary-200/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-300/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              Discover the unique advantages that set Skygate Group apart in the global logistics and travel industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => {
              const accentColors = {
                primary: 'border-primary-200/50 hover:border-primary-400',
                logistics: 'border-logistics-200/50 hover:border-logistics-400',
                travel: 'border-travel-200/50 hover:border-travel-400'
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
              
              return (
                <div key={index} className={`group relative p-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/40 shadow-elevated hover:shadow-floating transition-all duration-500 cursor-pointer overflow-hidden ${accentColors[item.accent]} animate-fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[item.accent]} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 mb-4 ${iconColors[item.accent]} flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl group-hover:scale-105 transition-all duration-300 shadow-sm`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-black text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 tracking-tight">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-br from-primary-100/40 via-primary-50 to-primary-100/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200/25 via-transparent to-primary-300/15"></div>
        {/* Clean background elements */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-primary-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-300/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 animate-fade-in-up tracking-tight text-primary-600">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light text-primary-700" style={{animationDelay: '0.2s'}}>
            Let's work together to streamline your operations and create seamless experiences for your customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button 
              className="inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-700 focus:outline-none focus:ring-4 focus:ring-primary-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group border-2 bg-white px-8 py-4 text-lg shadow-2xl hover:shadow-primary-300 shadow-primary-200 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white"
              onClick={() => {
                window.location.href = '/contact#get-in-touch';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">Contact Us Today</span>
            </button>
            <button 
              className="inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-700 focus:outline-none focus:ring-4 focus:ring-primary-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group border-2 bg-white px-8 py-4 text-lg shadow-2xl hover:shadow-primary-300 shadow-primary-200 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  window.location.href = '/logistics';
                }, 100);
              }}
            >
              <span className="relative z-10 flex items-center gap-2">Explore Logistics</span>
            </button>
            <button 
              className="inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-700 focus:outline-none focus:ring-4 focus:ring-primary-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group border-2 bg-white px-8 py-4 text-lg shadow-2xl hover:shadow-primary-300 shadow-primary-200 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  window.location.href = '/travel';
                }, 100);
              }}
            >
              <span className="relative z-10 flex items-center gap-2">Explore Travel</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


