import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';
import { CORPORATE_CONFIG } from '../../config/corporate';

export default function Footer({ onOpenTalkModal }) {
  const location = useLocation();

  // Show footer strictly on the About page
  if (location.pathname !== '/about') {
    return null;
  }

  return (
    <footer className="crafzio-clean-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo" aria-label="CrafZio Home">
              <div className="brand-logo-icon">
                <Zap size={22} className="brand-bolt-icon" fill="currentColor" />
              </div>
              <span className="brand-title-text">CrafZio</span>
            </Link>
            <p className="brand-pitch-desc">
              Crafting digital experiences for the future. We transform ideas into innovative solutions that drive business growth.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h4 className="footer-section-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Portfolio</Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-nav-col">
            <h4 className="footer-section-heading">Services</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services/website-development">Web Development</Link>
              </li>
              <li>
                <Link to="/services/web-application-development">Application Development</Link>
              </li>
              <li>
                <Link to="/services/crm-business-software">CRM Development</Link>
              </li>
              <li>
                <Link to="/solutions#e-commerce">E-Commerce Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="footer-nav-col footer-contact-col">
            <h4 className="footer-section-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <a href={`mailto:${CORPORATE_CONFIG.contact.officialEmail}`} className="contact-link">
                  <Mail size={18} className="contact-icon" />
                  <span>{CORPORATE_CONFIG.contact.officialEmail}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CORPORATE_CONFIG.contact.phoneRaw}`} className="contact-link">
                  <Phone size={18} className="contact-icon" />
                  <span>{CORPORATE_CONFIG.contact.displayPhone}</span>
                </a>
              </li>
              <li className="contact-item-static">
                <MapPin size={18} className="contact-icon" />
                <span>{CORPORATE_CONFIG.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-info">
            <p className="copyright-primary">
              © {CORPORATE_CONFIG.incorporationDate} {CORPORATE_CONFIG.brandName}. All rights reserved.
            </p>
            <p className="msme-registration-note">
              {CORPORATE_CONFIG.msmeRegistration}
            </p>
          </div>

          <div className="footer-legal-nav">
            <Link to="/privacy-policy" className="legal-nav-item">
              Privacy Policy
            </Link>
            <Link to="/terms" className="legal-nav-item">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .crafzio-clean-footer {
          background-color: #ffffff;
          border-top: 1px solid #f1f5f9;
          padding-top: 4.5rem;
          padding-bottom: 3.5rem;
          color: #64748b;
          font-family: var(--font-body, system-ui, -apple-system, sans-serif);
          position: relative;
          z-index: 10;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.25fr 1.15fr;
          gap: 3.5rem;
          align-items: flex-start;
        }

        /* Brand Column */
        .footer-brand-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          margin-bottom: 1.15rem;
        }

        .brand-logo-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.28);
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .footer-brand-logo:hover .brand-logo-icon {
          transform: scale(1.05);
        }

        .brand-bolt-icon {
          color: #ffffff;
        }

        .brand-title-text {
          font-size: 1.55rem;
          font-weight: 750;
          letter-spacing: -0.02em;
          color: #0284c7;
          font-family: var(--font-heading, inherit);
        }

        .brand-pitch-desc {
          font-size: 0.925rem;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
          max-width: 320px;
        }

        /* Nav Columns */
        .footer-section-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
          font-family: var(--font-heading, inherit);
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links-list a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.935rem;
          font-weight: 450;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-links-list a:hover {
          color: #0284c7;
          transform: translateX(3px);
        }

        /* Contact Column */
        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: #64748b;
          text-decoration: none;
          font-size: 0.935rem;
          font-weight: 450;
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: #0284c7;
        }

        .contact-item-static {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: #64748b;
          font-size: 0.935rem;
          font-weight: 450;
        }

        .contact-icon {
          color: #0284c7;
          flex-shrink: 0;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          margin-top: 3.5rem;
          padding-top: 1.75rem;
          border-top: 1px solid #f1f5f9;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          padding-right: 170px; /* Safe clearance for floating WhatsApp button */
        }

        .footer-copyright-info {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .copyright-primary {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
          font-weight: 450;
        }

        .msme-registration-note {
          font-size: 0.8125rem;
          color: #94a3b8;
          margin: 0;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        .footer-legal-nav {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          flex-wrap: wrap;
        }

        .legal-nav-item {
          color: #64748b;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          white-space: nowrap;
          transition: color 0.2s ease, text-decoration 0.2s ease;
        }

        .legal-nav-item:hover {
          color: #0284c7;
          text-decoration: underline;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.75rem;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
            max-width: 480px;
          }
        }

        @media (max-width: 640px) {
          .crafzio-clean-footer {
            padding-top: 2.25rem;
            padding-bottom: 3.5rem;
          }
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .brand-logo-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
          .brand-title-text {
            font-size: 1.35rem;
          }
          .brand-pitch-desc {
            font-size: 0.835rem;
            line-height: 1.5;
            margin-top: 0.35rem;
          }
          .footer-section-heading {
            font-size: 0.95rem;
            margin-bottom: 0.65rem;
          }
          .footer-links-list {
            gap: 0.5rem;
          }
          .footer-links-list a {
            font-size: 0.85rem;
          }
          .footer-contact-list {
            gap: 0.55rem;
          }
          .contact-link, .contact-item-static {
            font-size: 0.85rem;
            gap: 0.55rem;
          }
          .footer-bottom-bar {
            margin-top: 1.75rem;
            padding-top: 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
            padding-right: 70px;
          }
          .copyright-primary {
            font-size: 0.8rem;
          }
          .msme-registration-note {
            font-size: 0.75rem;
          }
          .footer-legal-nav {
            gap: 1.15rem;
          }
          .legal-nav-item {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
}
