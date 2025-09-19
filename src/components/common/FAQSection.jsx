import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 1,
      question: "What services does Skygate Group provide?",
      answer: "Skygate Group provides comprehensive logistics and travel solutions through two specialized divisions: Skygate Logistics (freight forwarding, warehousing, supply chain management) and Skygate Travel (corporate travel, leisure planning, group coordination). We also offer healthcare coordination and international education guidance.",
      category: "General",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      question: "How long has Skygate Group been in business?",
      answer: "Skygate Group was founded in 2018, but our team has been providing logistics and travel services since 2009. We have over 7 years of combined experience and have successfully completed 1000+ projects for 390+ satisfied clients worldwide.",
      category: "General",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      question: "What makes Skygate different from competitors?",
      answer: "Skygate Group stands out with our advanced tracking technology, white-glove service, dedicated account managers, multilingual team, and 24/7 emergency response. We offer 99.5% quality assurance, 94% on-time delivery rate, and secure data handling with industry expertise across healthcare, education, and e-commerce sectors.",
      category: "General",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      question: "Do you provide international shipping services?",
      answer: "Yes! Skygate Logistics specializes in freight forwarding from the United States and China to destinations worldwide. We offer air, sea, and land transportation with comprehensive supply chain management, warehousing, distribution, and last-mile delivery services.",
      category: "Logistics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: 5,
      question: "Can you handle both corporate and leisure travel?",
      answer: "Absolutely! Skygate Travel provides comprehensive solutions for both corporate and leisure travel. Our corporate services include cost optimization, policy compliance, and detailed reporting, while our leisure services offer personalized planning, exclusive deals, and unforgettable destination experiences.",
      category: "Travel",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      question: "What are your shipping timeframes?",
      answer: "Our shipping timeframes vary by service type and destination. Air freight typically takes 3-7 days, sea freight 15-30 days, and land transportation 5-10 days depending on distance. We provide real-time tracking and maintain a 94% on-time delivery rate with 24/7 customer support throughout the shipping process.",
      category: "Logistics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 7,
      question: "Do you offer 24/7 customer support?",
      answer: "Yes! Skygate Group provides round-the-clock customer support across all our services. Our 24/7 support includes emergency response teams for logistics issues, travel assistance for urgent changes, and multilingual support staff to assist clients worldwide at any time.",
      category: "General",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      )
    },
    {
      id: 8,
      question: "How do I get started with your services?",
      answer: "Getting started is easy! Simply contact us through our website, call +1 (234) 567-8900, or email skygategroup@gmail.com. Our team will schedule a consultation to understand your needs and provide a customized solution. We offer dedicated account managers to guide you through the entire process.",
      category: "Process",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      id: 9,
      question: "Which countries and regions do you serve?",
      answer: "Skygate Group serves clients worldwide with a focus on connecting businesses across borders. We have extensive experience in North America, Europe, Asia, Africa, Oceania, and the Middle East. Our global network ensures reliable service delivery to over 50 countries with local expertise in each region.",
      category: "General",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 10,
      question: "What industries do you specialize in?",
      answer: "Skygate Group serves diverse industries including Manufacturing & Industrial, Retail & E-commerce, Healthcare & Pharmaceuticals, Automotive & Aerospace, Technology & Electronics, Food & Beverage, Textiles & Fashion, and Energy & Utilities. Our specialized knowledge ensures tailored solutions for each industry's unique requirements.",
      category: "General",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  // Filter FAQs based on search term
  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleKeyPress = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <section className="section-premium bg-premium-pattern relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-travel-100/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-logistics-100/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container-premium relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 animate-fade-in-up tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.2s'}}>
            Find answers to common questions about our services, processes, and capabilities
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-elevated focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg placeholder-gray-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="group animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-white/40 shadow-elevated hover:shadow-floating transition-all duration-500 overflow-hidden">
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  onKeyDown={(e) => handleKeyPress(e, faq.id)}
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-t-2xl transition-all duration-300 hover:bg-primary-50/50"
                  aria-expanded={openFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-premium">
                        {faq.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900 group-hover:text-primary-700 transition-colors duration-300 tracking-tight">
                          {faq.question}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mt-2">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className={`w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 ${openFAQ === faq.id ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  aria-hidden={openFAQ !== faq.id}
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-primary-100 pt-6">
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All FAQs Button */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <Link to="/contact">
            <button className="inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 relative overflow-hidden group bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500 shadow-premium hover:shadow-premium-lg px-8 py-4 text-lg">
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Still Have Questions? Contact Us
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
