import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../common/HeroSection';
import ServiceCard from '../common/ServiceCard';
import StatsCounter from '../common/StatsCounter';
import Button from '../common/Button';
import FAQSection from '../common/FAQSection';

const HomePage = () => {
  const logisticsIcon = (
    <img 
      src="/logos/logistics-icon.svg" 
      alt="Logistics Icon" 
      className="w-16 h-16"
      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
    />
  );

  const travelIcon = (
    <img 
      src="/logos/travel-icon.svg" 
      alt="Travel Icon" 
      className="w-16 h-16"
      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
    />
  );

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Network",
      description: "Extensive worldwide network ensuring reliable service delivery"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your business needs"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Delivery",
      description: "Optimized processes for quick and efficient service delivery"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Advanced Technology",
      description: "Cutting-edge technology solutions for modern business challenges"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure Solutions",
      description: "Enterprise-grade security for all your business operations"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success"
    }
  ];

  return (
    <div>
      {/* Premium Hero Section */}
      <HeroSection
        title="Skygate Group"
        subtitle="YOUR SERVICE. OUR PROMISE."
        background="cinematic"
        fullScreen={true}
          ctaButtons={[
            { 
              text: "Explore Our Services", 
              className: "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-700 focus:outline-none focus:ring-4 focus:ring-primary-500/40 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 px-12 py-6 text-xl shadow-glow-xl hover:shadow-glow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/25 before:via-white/10 before:to-white/25 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000", 
              onClick: () => window.scrollTo({ top: document.getElementById('companies').offsetTop, behavior: 'smooth' }) 
            },
            { 
              text: "Get In Touch", 
              className: "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-700 focus:outline-none focus:ring-4 focus:ring-white/40 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group border-2 border-white/90 text-white hover:bg-white hover:text-gray-900 bg-white/15 backdrop-blur-2xl px-12 py-6 text-xl shadow-2xl hover:shadow-white/30 shadow-white/15 hover:shadow-white/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:via-white/15 before:to-white/30 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000", 
              onClick: () => window.location.href = '/contact#get-in-touch' 
            }
          ]}
      />

      {/* Premium Companies Section */}
      <section id="companies" className="section-premium bg-gradient-to-br from-primary-50 via-primary-100/30 to-primary-50 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-primary-200/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-300/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.3s'}}>
              From logistics to travel, we move your world forward together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <ServiceCard
                icon={logisticsIcon}
                title="Skygate Logistics"
                  description="Comprehensive logistics solutions specializing in shipping goods from the <strong>United States</strong> and <strong>China</strong>. Our services include freight forwarding, supply chain management, and reliable delivery for businesses and individuals. We ensure your products reach their destination safely, quickly, and efficiently."
                link="/logistics"
                accentColor="logistics"
              />
            </div>
            <div className="animate-slide-in-right">
              <ServiceCard
                icon={travelIcon}
                title="Skygate Travel"
                description="Comprehensive travel solutions that go beyond tourism. We assist clients with medical travel to world-class hospitals, help students secure scholarships abroad, and create seamless, stress-free travel experiences. Our goal is to make every journey safe, comfortable, and tailored to each client's needs."
                link="/travel"
                accentColor="travel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium About Overview */}
      <section className="section-premium bg-gradient-to-br from-primary-100/40 via-primary-50 to-primary-100/30 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200/25 via-transparent to-primary-300/15"></div>
        <div className="absolute top-20 right-20 w-128 h-128 bg-primary-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-400/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-144 h-144 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container-premium relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-12 tracking-tight">
                About <span className="text-gradient">Skygate Group</span>
              </h2>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                Founded with a vision to connect people, opportunities, and businesses across borders, Skygate Group has grown into a trusted partner 
                for clients seeking reliable travel and logistics solutions. Our integrated approach ensures smooth experiences and efficient operations at every step.
              </p>
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                With experience dating back to 2018, our team delivers professional solutions that help patients access world-class hospitals, 
                guide students toward international scholarships, and provide seamless travel experiences. In logistics, we specialize in bringing goods from the United States and China, 
                ensuring fast, safe, and dependable delivery for businesses and individuals.
              </p>
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
                At Skygate Group, we combine care, innovation, and professionalism to deliver services that move people and businesses forward.
              </p>
              <Link to="/about">
                <Button variant="primary" size="xl" className="shadow-glow-xl hover:shadow-glow-xl interactive-hover">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-center p-8 bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 group">
                <StatsCounter value={750} suffix="+" />
                <p className="text-gray-600 font-bold mt-4 text-lg group-hover:text-gray-800 transition-colors duration-300">Clients Served</p>
              </div>
              <div className="text-center p-8 bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 group">
                <StatsCounter value={99.9} suffix="%" />
                <p className="text-gray-600 font-bold mt-4 text-lg group-hover:text-gray-800 transition-colors duration-300">Data Protection</p>
              </div>
              <div className="text-center p-8 bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 group">
                <StatsCounter value={7} suffix="+" />
                <p className="text-gray-600 font-bold mt-4 text-lg group-hover:text-gray-800 transition-colors duration-300">Years Experience</p>
              </div>
              <div className="text-center p-8 bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 group">
                <StatsCounter value={96} suffix="%" />
                <p className="text-gray-600 font-bold mt-4 text-lg group-hover:text-gray-800 transition-colors duration-300">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Skygate */}
      <section className="section-premium bg-gradient-to-br from-primary-50 via-primary-100/30 to-primary-50 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-primary-200/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-300/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Why Choose <span className="text-gradient">Skygate Group</span>?
            </h2>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.3s'}}>
              We combine industry expertise with innovative solutions to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative p-8 bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-primary-200 shadow-elevated hover:shadow-floating hover:border-primary-400 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2 hover:scale-105">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-premium">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default HomePage;


