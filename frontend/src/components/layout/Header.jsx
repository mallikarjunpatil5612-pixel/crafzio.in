import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageSquare 
} from 'lucide-react';
import { CORPORATE_CONFIG } from '../../config/corporate';

export default function Header({ onOpenTalkModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & prevent body scroll when open
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          {/* Brand Logo with Icon */}
          <Link to="/" className="brand-logo" aria-label="CrafZio Home" onClick={closeMenu}>
            <div className="logo-symbol">
              <img src="/crafzio-logo.jpg" alt="CrafZio Logo" className="logo-image" />
            </div>
            <div className="logo-text-group">
              <span className="brand-title">
                Craf<span className="brand-accent-text">Z</span>io
              </span>
              <span className="brand-suffix">Pvt Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation - All Pages Restored */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>Home</span>
                  {location.pathname === '/' && <span className="active-pill-bar"></span>}
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>About</span>
                  {location.pathname === '/about' && <span className="active-pill-bar"></span>}
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/services" 
                  className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>Services</span>
                  {location.pathname.startsWith('/services') && <span className="active-pill-bar"></span>}
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/solutions" 
                  className={`nav-link ${location.pathname === '/solutions' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>Solutions</span>
                  {location.pathname === '/solutions' && <span className="active-pill-bar"></span>}
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/products" 
                  className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>Products</span>
                  {location.pathname === '/products' && <span className="active-pill-bar"></span>}
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/projects" 
                  className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>Projects</span>
                  {location.pathname === '/projects' && <span className="active-pill-bar"></span>}
                </Link>
              </li>

              <li className="nav-item">
                <Link 
                  to="/industries" 
                  className={`nav-link ${location.pathname === '/industries' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>Industries</span>
                  {location.pathname === '/industries' && <span className="active-pill-bar"></span>}
                </Link>
              </li>


              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>Contact</span>
                  {location.pathname === '/contact' && <span className="active-pill-bar"></span>}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <div className="header-actions">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`mobile-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Rendered outside header to prevent backdrop-filter containing block bugs) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-wrapper">
          <div className="mobile-backdrop" onClick={closeMenu} aria-hidden="true"></div>
          <div className="mobile-drawer animate-fade-in" role="dialog" aria-modal="true" aria-label="Mobile Navigation Drawer">
            <div className="container mobile-drawer-inner">
              <nav className="mobile-nav" aria-label="Mobile Menu">
                <ul className="mobile-nav-list">
                  <li className="mobile-nav-item">
                    <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>
                      <span>Home</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/about" className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>
                      <span>About Us</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/services" className={`mobile-nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`} onClick={closeMenu}>
                      <span>Services</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/solutions" className={`mobile-nav-link ${location.pathname === '/solutions' ? 'active' : ''}`} onClick={closeMenu}>
                      <span>Solutions</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/products" className={`mobile-nav-link ${location.pathname === '/products' ? 'active' : ''}`} onClick={closeMenu}>
                      <span>Products</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/projects" className={`mobile-nav-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={closeMenu}>
                      <span>Projects</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/industries" className={`mobile-nav-link ${location.pathname === '/industries' ? 'active' : ''}`} onClick={closeMenu}>
                      <span>Industries</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </li>


                  <li className="mobile-nav-item">
                    <Link to="/contact" className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>
                      <span>Contact</span>
                      <ArrowUpRight size={18} />
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="mobile-drawer-cta">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    onOpenTalkModal();
                  }}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageSquare size={18} />
                  <span>Let's Talk</span>
                </button>
                <p className="mobile-corporate-email">{CORPORATE_CONFIG.contact.officialEmail}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .site-header {
          position: fixed;
          top: 14px;
          left: 0;
          right: 0;
          z-index: 990;
          display: flex;
          justify-content: center;
          padding: 0 1.25rem;
          pointer-events: none;
          transition: transform 0.3s ease;
        }

        .header-inner {
          pointer-events: auto;
          width: 100%;
          max-width: 1220px;
          height: 66px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0.85rem 0 1.75rem;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.09), 0 2px 6px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(226, 232, 240, 0.9);
          transition: all 0.3s ease;
        }

        .site-header.scrolled .header-inner {
          box-shadow: 0 16px 42px rgba(0, 0, 0, 0.14), 0 3px 8px rgba(0, 0, 0, 0.06);
          border-color: rgba(203, 213, 225, 0.95);
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
        }

        .logo-symbol {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .logo-text-group {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.55rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #0b0f19;
          display: flex;
          align-items: center;
        }

        .brand-suffix {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: #2563eb;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .brand-accent-text {
          color: #0b0f19;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          font-family: var(--font-body);
          font-size: 0.925rem;
          font-weight: 500;
          color: #475569;
          padding: 0.45rem 0.85rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          transition: color 0.2s ease;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #0b0f19;
        }

        .nav-link.active {
          color: #0b0f19;
          font-weight: 600;
        }

        .active-pill-bar {
          position: absolute;
          bottom: -2px;
          width: 22px;
          height: 3px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .header-pill-cta {
          background: #0b0f19;
          color: #ffffff;
          border: none;
          border-radius: 9999px;
          padding: 0.65rem 1.45rem;
          font-size: 0.925rem;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(11, 15, 25, 0.16);
        }

        .header-pill-cta:hover {
          background: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(11, 15, 25, 0.28);
        }

        .cta-arrow {
          font-size: 1.1rem;
          transition: transform 0.2s ease;
          line-height: 1;
        }

        .header-pill-cta:hover .cta-arrow {
          transform: translateX(3px);
        }

        .mobile-toggle {
          display: none;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #0b0f19;
          cursor: pointer;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
          touch-action: manipulation;
        }

        .mobile-toggle:hover, 
        .mobile-toggle:active,
        .mobile-toggle.is-active {
          background: #e2e8f0;
          color: #0b0f19;
        }

        .mobile-drawer-wrapper {
          position: fixed;
          top: var(--header-height, 80px);
          left: 0;
          right: 0;
          bottom: 0;
          height: calc(100dvh - var(--header-height, 80px));
          z-index: 980;
          display: flex;
          flex-direction: column;
        }

        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1;
        }

        .mobile-drawer {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          background: #ffffff;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          padding: 1.25rem 0 3.5rem;
          border-top: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
        }

        .mobile-drawer-inner {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-bottom: 2rem;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: #334155;
          border-radius: var(--radius-md);
          border: 1px solid transparent;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .mobile-nav-link.active {
          color: #2563eb;
          background: #eff6ff;
          border-color: rgba(191, 219, 254, 0.8);
        }

        @media (hover: hover) {
          .mobile-nav-link:hover {
            color: #2563eb;
            background: #f8fafc;
          }
        }

        .mobile-drawer-cta {
          margin-top: 0.5rem;
          text-align: center;
        }

        .mobile-corporate-email {
          margin-top: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 1240px) {
          .nav-list {
            gap: 0.1rem;
          }
          .nav-link {
            padding: 0.45rem 0.55rem;
            font-size: 0.835rem;
          }
          .brand-name {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .header-cta {
            display: none !important; /* Only show menu toggle on mobile, not two buttons */
          }
          .mobile-toggle {
            display: flex;
          }
        }

        @media (max-width: 640px) {
          .site-header {
            top: 10px;
            padding: 0 0.65rem;
            height: auto;
          }
          .header-inner {
            height: 56px;
            padding: 0 0.65rem 0 0.85rem;
          }
          .mobile-drawer-wrapper {
            top: 66px;
            height: calc(100dvh - 66px);
          }
          .brand-title {
            font-size: 1.25rem;
          }
          .brand-suffix {
            font-size: 0.72rem;
          }
          .logo-symbol {
            width: 32px;
            height: 32px;
            border-radius: 8px;
          }
          .mobile-toggle {
            width: 38px;
            height: 38px;
          }
          .mobile-drawer {
            padding: 0.75rem 0 2.5rem;
          }
          .mobile-nav-link {
            padding: 0.65rem 0.85rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 380px) {
          .site-header {
            padding: 0 0.35rem;
          }
          .header-inner {
            padding: 0 0.45rem 0 0.65rem;
          }
          .brand-title {
            font-size: 1.15rem;
          }
          .brand-suffix {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
