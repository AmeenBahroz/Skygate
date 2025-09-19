import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../common/HeroSection';
import ServiceCard from '../common/ServiceCard';
import Button from '../common/Button';
import SkygateTravelLogo from '../logos/SkygateTravelLogo';

const TravelPage = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Corporate Travel Management",
      description: "Comprehensive corporate travel solutions with cost optimization, policy compliance, and detailed reporting for business travel."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Leisure Travel Planning",
      description: "Personalized leisure travel experiences with expert planning, exclusive deals, and unforgettable destinations worldwide."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Group Travel Coordination",
      description: "Expert coordination for group travel including corporate retreats, family reunions, and special events with seamless logistics."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Travel Booking Services",
      description: "Complete booking services for flights, hotels, car rentals, and activities with access to exclusive rates and promotions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Travel Support",
      description: "Round-the-clock travel support and assistance for emergencies, changes, and travel-related inquiries."
    }
  ];

  const features = [
    "Access to exclusive travel deals and promotions",
    "Personalized travel recommendations and planning",
    "Real-time flight and hotel availability",
    "Emergency travel assistance and support",
    "Travel insurance and protection options",
    "Mobile app for easy booking and management",
    "Corporate travel policy compliance",
    "Detailed travel reporting and analytics"
  ];

  const destinations = [
    { name: "Europe", image: "🏛️", description: "Historic cities and cultural experiences" },
    { name: "Asia", image: "🏮", description: "Exotic destinations and ancient traditions" },
    { name: "Americas", image: "🗽", description: "Diverse landscapes and vibrant cultures" },
    { name: "Africa", image: "🦁", description: "Wildlife safaris and natural wonders" },
    { name: "Oceania", image: "🏝️", description: "Island paradises and adventure" },
    { name: "Middle East", image: "🕌", description: "Rich history and modern luxury" }
  ];

  return (
    <div>
      {/* Premium Hero Section */}
      <HeroSection
        title="Skygate Travel"
        subtitle="Professional travel management services that make every journey seamless, memorable, and cost-effective"
        background="travel"
        fullScreen={true}
        ctaButtons={[
          { 
            text: "Our Travel Services", 
            variant: "outline", 
            className: "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-700 focus:outline-none focus:ring-4 focus:ring-white/40 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group border-2 border-white/90 text-white hover:bg-white hover:text-travel-600 bg-white/15 backdrop-blur-2xl px-12 py-6 text-xl shadow-2xl hover:shadow-white/30 shadow-white/15 hover:shadow-white/50 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:via-white/15 before:to-white/30 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000",
            onClick: () => {
              const element = document.getElementById('travel-services');
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 100,
                  behavior: 'smooth'
                });
              }
            }
          }
        ]}
      />

      {/* Premium Services Section */}
      <section id="travel-services" className="section-premium bg-gradient-to-br from-travel-50 via-travel-100/30 to-travel-50 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-travel-100/20 via-transparent to-travel-200/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-travel-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-travel-300/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Our <span className="text-gradient-travel">Travel Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              Comprehensive travel solutions designed to make your journey seamless, memorable, and cost-effective
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <span className="flex items-center"><span className="w-2 h-2 bg-travel-500 rounded-full mr-2"></span>Global Reach</span>
              <span className="flex items-center"><span className="w-2 h-2 bg-travel-500 rounded-full mr-2"></span>Expert Planning</span>
              <span className="flex items-center"><span className="w-2 h-2 bg-travel-500 rounded-full mr-2"></span>24/7 Support</span>
              <span className="flex items-center"><span className="w-2 h-2 bg-travel-500 rounded-full mr-2"></span>Best Prices</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-travel-200 shadow-elevated hover:shadow-floating hover:border-travel-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-travel-50 to-travel-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-travel-500 to-travel-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-travel-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                      Professional travel consultants
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                      Competitive pricing
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                      Round-the-clock support
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                      Personalized experiences
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Travel Process */}
      <section className="section-premium bg-gradient-to-br from-travel-100/40 via-travel-50 to-travel-100/30 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-travel-200/25 via-transparent to-travel-300/20"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-travel-300/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-travel-400/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Our <span className="text-gradient-travel">Travel Process</span>
              </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              From consultation to departure, we ensure every step of your journey is perfectly planned and executed
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Consultation & Planning */}
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-travel-200 shadow-elevated hover:shadow-floating hover:border-travel-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-travel-50 to-travel-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  <span className="text-gradient-travel">Consultation & Planning</span>
                </h3>
                <div className="space-y-6">
                  {[
                    { step: "Initial Consultation", desc: "Understanding your travel preferences, budget, and requirements" },
                    { step: "Destination Research", desc: "Comprehensive research on destinations, attractions, and local insights" },
                    { step: "Itinerary Creation", desc: "Custom itinerary tailored to your interests and schedule" },
                    { step: "Booking Management", desc: "Handling all reservations, tickets, and accommodation bookings" },
                    { step: "Pre-Travel Briefing", desc: "Final preparations, documents, and travel tips" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-travel-500 to-travel-600 rounded-2xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.step}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                ))}
                </div>
              </div>
            </div>
            
            {/* Travel & Support */}
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-travel-200 shadow-elevated hover:shadow-floating hover:border-travel-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-travel-50 to-travel-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  <span className="text-gradient-travel">Travel & Support</span>
                </h3>
                <div className="space-y-6">
                  {[
                    { step: "Departure Support", desc: "Assistance with check-in, airport transfers, and departure logistics" },
                    { step: "In-Destination Service", desc: "Local support, guides, and 24/7 assistance during your trip" },
                    { step: "Experience Management", desc: "Ensuring all activities, tours, and experiences run smoothly" },
                    { step: "Emergency Support", desc: "Round-the-clock assistance for any travel emergencies or changes" },
                    { step: "Return & Follow-up", desc: "Post-travel support and feedback collection for future improvements" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-travel-500 to-travel-600 rounded-2xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.step}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section-premium bg-gradient-to-br from-travel-50 via-travel-100/20 to-travel-50 relative overflow-hidden">
        {/* Premium background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-travel-100/25 via-transparent to-travel-200/15"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-travel-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-travel-300/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Popular <span className="text-gradient-travel">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              Discover our most sought-after travel destinations around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dubai, UAE",
                icon: "🏙️",
                description: "Modern metropolis with luxury shopping, world-class dining, and iconic landmarks",
                highlights: ["Burj Khalifa", "Dubai Mall", "Desert Safari", "Palm Jumeirah"]
              },
              {
                name: "Istanbul, Turkey",
                icon: "🕌",
                description: "Historic city bridging Europe and Asia with rich culture and stunning architecture",
                highlights: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Bosphorus Cruise"]
              },
              {
                name: "Paris, France",
                icon: "🗼",
                description: "City of lights offering romance, art, fashion, and culinary excellence",
                highlights: ["Eiffel Tower", "Louvre Museum", "Champs-Élysées", "Seine River"]
              },
              {
                name: "Tokyo, Japan",
                icon: "🏯",
                description: "Futuristic city blending traditional culture with cutting-edge technology",
                highlights: ["Tokyo Skytree", "Senso-ji Temple", "Shibuya Crossing", "Tsukiji Market"]
              },
              {
                name: "New York, USA",
                icon: "🗽",
                description: "The city that never sleeps with endless entertainment and iconic landmarks",
                highlights: ["Statue of Liberty", "Central Park", "Times Square", "Broadway"]
              },
              {
                name: "London, UK",
                icon: "🏰",
                description: "Historic capital with royal heritage, world-class museums, and vibrant culture",
                highlights: ["Big Ben", "Tower Bridge", "British Museum", "Buckingham Palace"]
              }
            ].map((destination, index) => (
              <div key={index} className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-travel-200 shadow-elevated hover:shadow-floating hover:border-travel-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-travel-50 to-travel-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-travel-500 to-travel-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">{destination.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-travel-700 transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {destination.description}
                  </p>
                  <div className="space-y-2">
                    {destination.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Skygate Travel */}
      <section className="section-premium bg-gradient-to-br from-travel-100/30 via-travel-50 to-travel-100/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-travel-200/20 via-transparent to-travel-300/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-travel-200/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-travel-300/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Why Choose <span className="text-gradient-travel">Skygate Travel?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              Our travel expertise and industry connections ensure you get the best value, service, and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Network",
                icon: "🌍",
                description: "Extensive partnerships with airlines, hotels, and local service providers worldwide"
              },
              {
                title: "Expert Planning",
                icon: "📋",
                description: "Professional travel consultants with deep destination knowledge and experience"
              },
              {
                title: "24/7 Support",
                icon: "🛟",
                description: "Round-the-clock assistance for emergencies and travel changes"
              },
              {
                title: "Best Prices",
                icon: "💰",
                description: "Competitive rates and exclusive deals through our industry partnerships"
              },
              {
                title: "Personalized Service",
                icon: "🎯",
                description: "Tailored itineraries designed specifically for your preferences and budget"
              },
              {
                title: "Quality Assurance",
                icon: "⭐",
                description: "Verified accommodations and services to ensure exceptional travel experiences"
              }
            ].map((advantage, index) => (
              <div key={index} className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-travel-200 shadow-elevated hover:shadow-floating hover:border-travel-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-travel-50 to-travel-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-travel-500 to-travel-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">{advantage.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-travel-700 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Travel Resources */}
      <section className="section-premium bg-gradient-to-br from-travel-50 via-travel-100/20 to-travel-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-travel-100/25 via-transparent to-travel-200/15"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-travel-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-travel-300/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
              Travel <span className="text-gradient-travel">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
              Essential travel guides and tools to enhance your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-travel-200 shadow-elevated hover:shadow-floating hover:border-travel-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-travel-50 to-travel-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-travel-500 to-travel-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-travel-700 transition-colors duration-300">Travel Guides</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Destination guides
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Cultural etiquette tips
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Local customs & traditions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Best time to visit
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-travel-200 shadow-elevated hover:shadow-floating hover:border-travel-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-travel-50 to-travel-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-travel-500 to-travel-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-travel-700 transition-colors duration-300">Travel Tools</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Currency converter
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Weather forecast
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Flight tracker
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Packing checklist
              </div>
                </div>
              </div>
            </div>
            
            <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-travel-200 shadow-elevated hover:shadow-floating hover:border-travel-400 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-travel-50 to-travel-100 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-travel-500 to-travel-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-travel-700 transition-colors duration-300">Travel Reports</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Market insights
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Travel trends
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Safety updates
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-travel-500 rounded-full mr-3"></div>
                    Industry news
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Get Started */}
      <section className="py-16 bg-gradient-to-br from-travel-100/40 via-travel-50 to-travel-100/30 relative overflow-hidden">
        {/* Clean background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-travel-200/25 via-transparent to-travel-300/15"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-travel-200/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-travel-300/25 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        
        <div className="container-premium text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 animate-fade-in-up tracking-tight" style={{color: '#1eba55'}}>
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s', color: '#15803d'}}>
            Get expert help with your travel planning and booking needs.
          </p>
          <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link to="/contact?category=travel">
              <button className="inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-700 focus:outline-none focus:ring-4 focus:ring-green-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-2 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group border-2 bg-white px-8 py-4 text-lg shadow-2xl hover:shadow-green-300 shadow-green-200" style={{borderColor: '#1eba55', color: '#1eba55'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#1eba55'; e.target.style.color = 'white';}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#1eba55';}}>
                Contact Travel Team
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TravelPage;


