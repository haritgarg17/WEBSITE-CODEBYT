
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AIChatBot from './components/AIChatBot';

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's no hash, scroll to the top of the page on route change
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If there's a hash, find the element and scroll to it smoothly
      // The timeout ensures the DOM is fully rendered before searching
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white antialiased">
        <ScrollHandler />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <AIChatBot />
      </div>
    </Router>
  );
};

export default App;
