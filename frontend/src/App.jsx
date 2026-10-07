import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LetsTalkModal from './components/common/LetsTalkModal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Contact from './pages/Contact';
import LegalPage from './pages/legal/LegalPage';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

// Ensure browser history scroll restoration does not retain scroll across routes
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Scroll to top or hash anchor on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      const root = document.getElementById('root');
      if (root) root.scrollTop = 0;
    };

    // Instant reset immediately
    resetScroll();

    // Re-assert on animation frame and short delay to handle React 19 layout renders
    const frameId = requestAnimationFrame(resetScroll);
    const timer = setTimeout(resetScroll, 50);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [talkModalOpen, setTalkModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Website Development');

  const handleOpenTalkModal = (serviceName) => {
    if (serviceName && typeof serviceName === 'string') {
      setModalService(serviceName);
    } else {
      setModalService('Website Development');
    }
    setTalkModalOpen(true);
  };

  const handleCloseTalkModal = () => {
    setTalkModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="site-wrapper">
        <Header onOpenTalkModal={handleOpenTalkModal} />

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home onOpenTalkModal={handleOpenTalkModal} />} />
            <Route path="/about" element={<About onOpenTalkModal={handleOpenTalkModal} />} />
            <Route path="/services" element={<Services onOpenTalkModal={handleOpenTalkModal} />} />
            <Route path="/services/:slug" element={<ServiceDetail onOpenTalkModal={handleOpenTalkModal} />} />
            <Route path="/solutions" element={<Solutions onOpenTalkModal={handleOpenTalkModal} />} />
            <Route path="/products" element={<Products onOpenTalkModal={handleOpenTalkModal} />} />
            <Route path="/projects" element={<Projects onOpenTalkModal={handleOpenTalkModal} />} />
            <Route path="/industries" element={<Industries onOpenTalkModal={handleOpenTalkModal} />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail onOpenTalkModal={handleOpenTalkModal} />} />
            <Route path="/careers" element={<Navigate to="/contact" replace />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/refund-policy" element={<LegalPage />} />
            <Route path="/disclaimer" element={<LegalPage />} />

            {/* Fallback route */}
            <Route path="*" element={<Home onOpenTalkModal={handleOpenTalkModal} />} />
          </Routes>
        </main>

        <Footer onOpenTalkModal={handleOpenTalkModal} />

        {/* Global Let's Talk Quick Inquiry Modal */}
        <LetsTalkModal
          isOpen={talkModalOpen}
          onClose={handleCloseTalkModal}
          initialService={modalService}
        />

        {/* Global Floating WhatsApp Quick Action */}
        <FloatingWhatsApp />
      </div>

      <style>{`
        .site-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f8fafc;
        }

        .site-main {
          flex: 1;
          background-color: #f8fafc;
        }
      `}</style>
    </Router>
  );
}
