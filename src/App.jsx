import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import LogisticsPage from './components/pages/LogisticsPage';
import TravelPage from './components/pages/TravelPage';
import ContactPage from './components/pages/ContactPage';
import PageTransition from './components/common/PageTransition';
import { FooterProvider } from './contexts/FooterContext';
import './styles/index.css';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <FooterProvider>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              } />
              <Route path="/logistics" element={
                <PageTransition>
                  <LogisticsPage />
                </PageTransition>
              } />
              <Route path="/travel" element={
                <PageTransition>
                  <TravelPage />
                </PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              } />
            </Routes>
          </Layout>
        </div>
      </FooterProvider>
    </Router>
  );
}

export default App;


