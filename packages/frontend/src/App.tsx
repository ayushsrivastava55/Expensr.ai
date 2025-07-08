"use client"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';
import ApiDemo from './components/ApiDemo';

const appStyle: React.CSSProperties = {
  fontFamily: "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  backgroundColor: '#0B0E13',
  color: '#F3F4F6',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

function App() {
  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <ApiDemo />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
