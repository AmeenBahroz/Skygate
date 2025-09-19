# Skygate Group Corporate Website

A complete React.js corporate group website for Skygate Group with two subsidiaries: **Skygate Logistics** and **Skygate Travel**. Founded in 2018, Skygate Group connects people, opportunities, and businesses across borders through innovative travel and logistics solutions. The company serves 750+ clients worldwide, offering comprehensive healthcare coordination, international education guidance, freight forwarding from the United States and China, and seamless travel experiences.

## 🚀 Features

- **Modern React.js Architecture**: Built with React 18 and modern hooks
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Professional Styling**: Tailwind CSS with custom brand colors and animations
- **Dynamic Navigation**: Smart routing with category-based contact forms
- **Brand-Adaptive UI**: Header and footer automatically adapt to page context
- **Breadcrumb Navigation**: Smart breadcrumb system with dynamic branding
- **Dynamic Footers**: Category-specific footers with brand-appropriate styling
- **Premium FAQ Section**: Interactive accordion-style FAQ with search functionality
- **Smooth Animations**: Premium glassmorphism effects and cinematic backgrounds
- **Interactive Hover Effects**: Brand-specific hover animations across all cards
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🎨 Brand Colors

- **Primary**: #5e716a (Professional Green-Gray)
- **Secondary**: #64748B (Slate Gray)
- **Logistics**: #bf2530 (Red accent for logistics division)
- **Travel**: #1eba55 (Green accent for travel division)

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header with dropdown
│   │   ├── Footer.jsx          # Site footer with company info
│   │   └── Layout.jsx          # Main layout wrapper with conditional footers
│   ├── common/
│   │   ├── Button.jsx           # Reusable button component
│   │   ├── ServiceCard.jsx     # Service display cards
│   │   ├── HeroSection.jsx     # Hero banner component
│   │   ├── StatsCounter.jsx    # Animated counter component
│   │   ├── Breadcrumb.jsx      # Dynamic breadcrumb navigation
│   │   ├── FAQSection.jsx      # Interactive FAQ accordion component
│   │   ├── PageTransition.jsx  # Smooth page transitions
│   │   └── ScrollToTop.jsx      # Floating scroll-to-top button
│   ├── logos/
│   │   ├── SkygateLogo.jsx     # Main corporate logo
│   │   ├── SkygateLogisticsLogo.jsx  # Logistics division logo
│   │   └── SkygateTravelLogo.jsx     # Travel division logo
│   └── pages/
│       ├── HomePage.jsx        # Corporate homepage with FAQ section
│       ├── AboutPage.jsx       # Company information
│       ├── LogisticsPage.jsx   # Logistics services with custom footer
│       ├── TravelPage.jsx     # Travel services with custom footer
│       └── ContactPage.jsx    # Contact forms with dynamic footers
├── assets/
│   ├── images/                 # Image assets
│   └── videos/                 # Video assets
└── styles/
    └── index.css              # Global styles and Tailwind
```

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📄 Pages Overview

### Homepage (`/`)
- Hero section with company introduction
- Our Services section showcasing both divisions
- About overview with key statistics (750+ clients served, 99.9% data protection, 7+ years experience, 96% satisfaction rate)
- Why Choose Skygate benefits section
- **Premium FAQ Section**: Interactive accordion with 8-10 frequently asked questions covering:
  - General Company Questions
  - Logistics Questions
  - Travel Questions
  - Process Questions
- Clean, streamlined design without overwhelming call-to-action sections

### About Page (`/about`)
- **Company Story**: Founded in 2018 with experience since 2009, connecting people and businesses across borders
- **Mission**: "To empower people and businesses by delivering seamless travel and logistics solutions. We are committed to opening doors to world-class healthcare, global education, and reliable trade, driven by trust, innovation, and excellence."
- **Vision**: "To be a global leader in travel and logistics, bridging continents, creating opportunities, and shaping a future where connections have no limits."
- **Company Values**: Excellence, Innovation, Integrity, Customer Focus
- **Global Impact Statistics**: 390+ satisfied clients, 99.5% quality assurance, 7+ years experience, 94% on-time delivery, 24/7 support, 1000+ successful projects
- **What Makes Us Different**: Advanced tracking technology, fast processing times, white-glove service, dedicated account managers, industry expertise, secure data handling, multilingual team, emergency response team
- **Subsidiaries Overview**: Interactive cards showcasing Skygate Group, Skygate Logistics, and Skygate Travel with dynamic branding
- **Ready to Partner with Us?**: Clean call-to-action section with unified styling

### Logistics Page (`/logistics`)
- **Custom Red Branding**: Complete red color scheme throughout the page
- **Hero Section**: Single "Our Logistics Services" button with glassmorphism styling
- **Comprehensive Services**:
  - Freight Forwarding: Air, sea, and land transportation with USA-China expertise
  - Warehousing & Distribution: Advanced inventory management and storage solutions
  - Supply Chain Management: End-to-end optimization with real-time tracking
  - Last-Mile Delivery: Reliable final delivery solutions
  - Custom Logistics Solutions: Tailored solutions for specific business needs
  - International Shipping: Global shipping with competitive rates
- **Our Logistics Process**: Dual-timeline showing "From USA & China" and "To Global Markets" processes
- **Industries We Serve**: Manufacturing, Technology, Healthcare, Retail & E-commerce, Automotive, Food & Beverage
- **Why Choose Skygate**: USA-China Expertise, Advanced Technology, 24/7 Support, Global Network, Cost-Effective Solutions, Reliable Delivery
- **Import/Export Resources**: Trade Guides, Tools & Calculators, Industry Reports
- **Contact Section**: "Ready to Get Started?" with logistics-specific contact information
- **Custom Logistics Footer**: Red-themed footer with logistics branding and contact details

### Travel Page (`/travel`)
- **Custom Green Branding**: Complete green color scheme throughout the page
- **Hero Section**: Single "Our Travel Services" button with glassmorphism styling
- **Comprehensive Travel Services**:
  - Corporate Travel Management: Cost optimization and policy compliance
  - Leisure Travel Planning: Personalized experiences with expert planning
  - Group Travel Coordination: Corporate retreats and special events
  - Travel Booking Services: Complete booking with exclusive rates
  - 24/7 Travel Support: Round-the-clock assistance
  - Travel Insurance: Comprehensive coverage options
- **Our Travel Process**: Dual-timeline showing "Consultation & Planning" and "Travel & Support" processes
- **Popular Destinations**: Dubai, Istanbul, Paris, Tokyo, New York, London with detailed descriptions
- **Why Choose Skygate Travel**: Global Network, Expert Planning, 24/7 Support, Exclusive Deals, Personalized Service, Emergency Assistance
- **Travel Resources**: Travel Guides, Travel Tools, Travel Reports
- **Contact Section**: "Ready to Plan Your Next Adventure?" with travel-specific contact information
- **Custom Travel Footer**: Green-themed footer with travel branding and contact details

### Contact Page (`/contact`)
- **Smart Category System**: URL parameters automatically select appropriate contact form
  - `/contact?category=general` - General inquiries with regular footer
  - `/contact?category=logistics` - Logistics services with custom red footer
  - `/contact?category=travel` - Travel services with custom green footer
- **Dynamic Branding**: Colors and content adapt based on selected category
- **Multi-division Contact Forms**: Category-specific forms with appropriate branding
- **Office Locations**: Interactive office cards with Google Maps integration
- **Social Media Connection Hub**: Category-specific social media links
- **Dynamic Footers**: 
  - General: Regular site footer
  - Logistics: Custom red Logistics footer
  - Travel: Custom green Travel footer

## 🎯 Key Components

### Logo Components
- **SkygateLogo**: Main corporate logo with professional green-gray branding (`#5e716a`)
- **SkygateLogisticsLogo**: Logistics division with red accent (`#bf2530`) and fallback text logo
- **SkygateTravelLogo**: Travel division with green accent (`#1eba55`) and fallback text logo
- **Error Handling**: All logos include fallback text versions with brand-appropriate colors

### Navigation
- **Dynamic Branding**: Header and footer automatically adapt based on current page
- **Breadcrumb Navigation**: Smart breadcrumb system with brand-adaptive colors
- **Conditional Footer Display**: Regular footer hidden on Logistics, Travel, and Contact pages
- Responsive header with mobile hamburger menu
- Active state indicators with smooth transitions
- Sticky header with shadow and backdrop blur effects
- Smart navigation that preserves brand context

### Reusable Components
- **Button**: Multiple variants (primary, secondary, logistics, travel, outline, ghost)
- **ServiceCard**: Flexible cards for services with hover effects and accent colors
- **HeroSection**: Reusable hero banners with cinematic backgrounds and animations
- **StatsCounter**: Animated counting numbers for statistics display
- **Breadcrumb**: Dynamic breadcrumb navigation with brand-adaptive styling
- **FAQSection**: Interactive accordion-style FAQ with search functionality
- **PageTransition**: Smooth page transitions between routes
- **ScrollToTop**: Floating scroll-to-top button with smooth animation

## 🎨 Design Features

- **Professional Corporate Aesthetic**: Clean, modern design suitable for B2B and B2C
- **Dynamic Brand System**: Automatic branding adaptation based on page context
- **Premium Glassmorphism**: Advanced backdrop blur effects and transparency
- **Cinematic Animations**: Floating elements, gradient animations, and smooth transitions
- **Brand Hierarchy**: Clear distinction between parent company and subsidiaries
- **Consistent Color Scheme**: Brand colors used consistently throughout all pages
- **Interactive Hover Effects**: Brand-specific hover animations on all cards and elements
- **Responsive Grid Layouts**: Flexible layouts that work on all devices
- **Background Intensity Matching**: Consistent background opacity levels across Logistics and Travel pages

## 🔧 Technical Features

- **React Router**: Client-side routing with browser history and URL parameters
- **Smart Navigation**: Category-based routing system for contact forms
- **Breadcrumb System**: Dynamic breadcrumb navigation with brand-adaptive colors
- **Dynamic Footer System**: Conditional footer display based on page context
- **Tailwind CSS**: Utility-first CSS framework with extensive custom configuration
- **Responsive Design**: Mobile-first approach with comprehensive breakpoints
- **Performance Optimized**: Efficient component structure and smooth animations
- **SEO Friendly**: Proper meta tags, semantic HTML, and Open Graph integration
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Modern React Patterns**: Hooks, functional components, and best practices

## 🧭 Breadcrumb Navigation System

The website features a sophisticated breadcrumb navigation system that enhances user experience and orientation:

### Features
- **Dynamic Branding**: Colors automatically adapt to match the current page's branding
  - Primary pages: Green-gray (`#5e716a`)
  - Logistics pages: Red accent (`#bf2530`)
  - Travel pages: Green accent (`#1eba55`)
- **Smart Path Generation**: Automatically generates breadcrumbs from URL structure
- **Sticky Positioning**: Remains visible when scrolling for easy navigation
- **Glassmorphism Design**: Consistent with the site's premium aesthetic
- **Accessibility**: Proper ARIA labels and semantic HTML structure

### Breadcrumb Examples
- **Homepage**: No breadcrumb (not needed)
- **About Page**: `Home > About Us`
- **Logistics Page**: `Home > Skygate Logistics`
- **Travel Page**: `Home > Skygate Travel`
- **Contact Page**: `Home > Contact`

### Technical Implementation
- Component: `Breadcrumb.jsx` in `/src/components/common/`
- Integration: Seamlessly integrated into the main layout
- Positioning: Sticky at `top-16` (below the header)
- Styling: Uses existing Tailwind classes and brand color system

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## 📦 Dependencies

- **React**: ^18.2.0
- **React Router DOM**: ^6.8.0
- **Tailwind CSS**: ^3.2.0
- **React Scripts**: 5.0.1

## 🌟 Company Services

### Healthcare & Education
- Patient care coordination to world-class hospitals abroad
- International scholarship guidance for students
- Medical travel assistance and support
- Educational consultation and visa assistance

### Logistics & Trade (Skygate Logistics)
- **Freight Forwarding**: Comprehensive freight forwarding services for air, sea, and land transportation with USA-China expertise
- **Warehousing & Distribution**: State-of-the-art warehousing facilities with advanced inventory management
- **Supply Chain Management**: End-to-end supply chain optimization with real-time tracking and analytics
- **Last-Mile Delivery**: Reliable last-mile delivery solutions ensuring quick and safe product delivery
- **Custom Logistics Solutions**: Tailored logistics solutions designed to meet specific business requirements
- **International Shipping**: Global shipping services with competitive rates and reliable delivery
- **Industries Served**: Manufacturing & Industrial, Technology & Electronics, Healthcare & Pharmaceuticals, Retail & E-commerce, Automotive & Aerospace, Food & Beverage

### Travel Services (Skygate Travel)
- **Corporate Travel Management**: Comprehensive corporate travel solutions with cost optimization and policy compliance
- **Leisure Travel Planning**: Personalized leisure travel experiences with expert planning and exclusive deals
- **Group Travel Coordination**: Expert coordination for corporate retreats, family reunions, and special events
- **Travel Booking Services**: Complete booking services for flights, hotels, car rentals with exclusive rates
- **24/7 Travel Support**: Round-the-clock travel support and assistance for emergencies and changes
- **Travel Insurance**: Comprehensive travel insurance coverage options
- **Featured Destinations**: Dubai, Istanbul, Paris, Tokyo, New York, London with detailed travel packages

## 🏢 Company Information

- **Founded**: 2018
- **Headquarters**: Villa No. 297, 1 Italian Village Rd, Erbil, Erbil Governorate
- **Main Contact**: +964 750 999 2720 | Skygateiq@gmail.com
- **Logistics Contact**: +964 750 555 2720, +964 785 555 2720 | Skygate.logistic.iq@gmail.com
- **Travel Contact**: +964 750 666 2720, +90 538 498 2720 | Skygate.travel.iq@gmail.com
- **Divisions**: Skygate Logistics | Skygate Travel
- **Clients**: 750+ clients served worldwide
- **Experience**: 7+ years of professional service (since 2009)
- **Quality Assurance**: 99.5% quality assurance rate
- **On-Time Delivery**: 94% on-time delivery rate
- **Support**: 24/7 customer support availability
- **Projects**: 1000+ successful projects completed

## 🎯 Recent Updates & Features

### Interactive Elements
- **Premium FAQ Section**: Added interactive accordion-style FAQ with search functionality on homepage
- **Dynamic Hover Effects**: Implemented brand-specific hover animations across all cards and sections
- **Background Intensity Matching**: Ensured consistent background opacity levels between Logistics and Travel pages
- **Hero Button Consistency**: Standardized hero button sizing and typography across all pages

### Footer System
- **Dynamic Footers**: Implemented category-specific footers for Contact page
- **Custom Brand Footers**: Logistics and Travel pages have dedicated branded footers
- **Conditional Display**: Regular footer automatically hidden on pages with custom footers
- **Brand Consistency**: Each footer matches its respective brand colors and contact information

### Contact System
- **Smart Category Routing**: URL parameters automatically select appropriate contact form
- **Dynamic Branding**: Contact page adapts colors and content based on selected category
- **Updated Contact Information**: All contact details updated to current phone numbers and email addresses
- **Social Media Integration**: Direct links to actual social media pages with tracking parameters

### Visual Consistency
- **Brand-Specific Styling**: Each division (Logistics/Travel) has complete brand-specific styling
- **Hover Effect Standardization**: All interactive elements have consistent hover animations
- **Background Gradient Matching**: Logistics and Travel pages have matching background intensity levels
- **Typography Consistency**: Standardized font sizes and button styling across all pages

## 🎯 Future Enhancements

- Backend integration for contact forms
- Real-time shipment tracking system
- Customer portal and account management
- Blog/news section for industry insights
- Multi-language support
- Advanced analytics dashboard
- Mobile app development
- Live chat integration
- Advanced search functionality
- User testimonials and reviews system

## 📄 License

This project is proprietary to Skygate Group. All rights reserved.

---

**Skygate Group** - YOUR SERVICE. OUR PROMISE.  
*"To empower people and businesses by delivering seamless travel and logistics solutions"*

**Developed by**: Ameen Bahroz Musa  
**Contact**: Ameen.bahroz310@gmail.com