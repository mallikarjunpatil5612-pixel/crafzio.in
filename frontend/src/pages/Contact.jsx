import React from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon, WhatsAppIcon } from '../components/common/SocialIcons';
import { CORPORATE_CONFIG } from '../config/corporate';
import ProjectEnquiryForm from '../components/forms/ProjectEnquiryForm';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content animate-fade-in">
            <span className="eyebrow"><Sparkles size={14} /> Direct Collaboration</span>
            <h1>Let's start a conversation.</h1>
            <p className="contact-hero-copy">
              Have a project, idea or business challenge? Tell us about it.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Official Contact Info */}
            <div className="contact-info-column">
              <div className="glass-card contact-details-card">
                <span className="eyebrow">Official Channels</span>
                <h2>Contact Information</h2>
                <p className="details-lead">
                  Reach out to our corporate office or schedule a direct technical discovery consultation.
                </p>

                <div className="info-items-stack">
                  <div className="info-box">
                    <div className="info-icon cyan"><Mail size={20} /></div>
                    <div>
                      <span className="info-label">Official Email</span>
                      <a href={`mailto:${CORPORATE_CONFIG.contact.officialEmail}`} className="info-val">
                        {CORPORATE_CONFIG.contact.officialEmail}
                      </a>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="info-icon emerald"><WhatsAppIcon size={22} /></div>
                    <div>
                      <span className="info-label">WhatsApp & Corporate Phone</span>
                      <a 
                        href={CORPORATE_CONFIG.contact.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="info-val whatsapp-direct-link"
                        title="Click to open WhatsApp chat with 70264 96890"
                      >
                        <span className="wa-phone-number">{CORPORATE_CONFIG.contact.displayPhone}</span>
                        <span className="wa-chip">
                          <WhatsAppIcon size={13} />
                          <span>Chat on WhatsApp</span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="info-icon emerald"><MapPin size={20} /></div>
                    <div>
                      <span className="info-label">Registered Office Address</span>
                      <span className="info-val">{CORPORATE_CONFIG.contact.address}</span>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="info-icon amber"><Clock size={20} /></div>
                    <div>
                      <span className="info-label">Operating Hours</span>
                      <span className="info-val">{CORPORATE_CONFIG.contact.businessHours}</span>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="social-links-block">
                  <span className="social-label">Official Social Presence</span>
                  <div className="social-pills">
                    <a href={CORPORATE_CONFIG.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-btn whatsapp-social-btn" aria-label="WhatsApp">
                      <WhatsAppIcon size={18} />
                      <span>Chat with us</span>
                    </a>
                    <a href={CORPORATE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                      <LinkedinIcon size={18} />
                      <span>LinkedIn</span>
                    </a>
                    <a href={CORPORATE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter">
                      <TwitterIcon size={18} />
                      <span>Twitter / X</span>
                    </a>
                    <a href={CORPORATE_CONFIG.social.github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                      <GithubIcon size={18} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Enquiry Form */}
            <div className="contact-form-column">
              <ProjectEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero {
          padding-top: calc(var(--header-height) + 4.5rem);
          padding-bottom: 3.5rem;
          text-align: center;
        }

        .contact-hero h1 {
          margin: 0.65rem 0 0.4rem;
          font-size: clamp(2rem, 4.2vw, 3.2rem);
        }

        .contact-hero-copy {
          max-width: 680px;
          margin: 0 auto;
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 2rem;
          align-items: flex-start;
        }

        .contact-details-card {
          padding: 2rem 2.25rem;
        }

        .contact-details-card h2 {
          font-size: 1.75rem;
          margin: 0.5rem 0 0.35rem;
        }

        .details-lead {
          font-size: 0.925rem;
          color: var(--text-muted);
          margin-bottom: 1.35rem;
          line-height: 1.55;
        }

        .info-items-stack {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          margin-bottom: 1.75rem;
        }

        .info-box {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-icon.cyan {
          background: rgba(29, 78, 216, 0.08);
          color: var(--brand-primary);
        }

        .info-icon.indigo {
          background: rgba(2, 132, 199, 0.08);
          color: var(--brand-accent);
        }

        .info-icon.emerald {
          background: rgba(16, 185, 129, 0.1);
          color: var(--brand-emerald);
        }

        .info-icon.amber {
          background: rgba(245, 158, 11, 0.1);
          color: var(--brand-amber);
        }

        .info-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }

        .info-val {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        a.info-val:hover {
          color: var(--brand-primary);
        }

        .whatsapp-direct-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          text-decoration: none;
        }

        .wa-phone-number {
          font-weight: 700;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .whatsapp-direct-link:hover .wa-phone-number {
          color: #25D366;
        }

        .wa-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(37, 211, 102, 0.12);
          color: #128C7E;
          border: 1px solid rgba(37, 211, 102, 0.35);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .whatsapp-direct-link:hover .wa-chip {
          background: #25D366;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35);
        }

        .whatsapp-social-btn {
          background: rgba(37, 211, 102, 0.08);
          border-color: rgba(37, 211, 102, 0.3);
          color: #128C7E;
          font-weight: 600;
        }

        .whatsapp-social-btn:hover {
          background: #25D366 !important;
          border-color: #25D366 !important;
          color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.35);
        }

        .social-links-block {
          padding-top: 1.75rem;
          border-top: 1px solid var(--border-subtle);
          margin-bottom: 0;
        }

        .social-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .social-pills {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.85rem;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.825rem;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-btn:hover {
          background: rgba(29, 78, 216, 0.08);
          border-color: var(--brand-primary);
          color: var(--brand-primary);
        }

        @media (max-width: 992px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
          }
          .contact-details-card {
            padding: 2rem;
          }
        }

        @media (max-width: 640px) {
          .contact-hero {
            padding-top: calc(var(--header-height) + 1.25rem);
            padding-bottom: 1.25rem;
          }
          .contact-hero h1 {
            font-size: 1.85rem;
            margin-bottom: 0.35rem;
          }
          .contact-hero-copy {
            font-size: 0.885rem;
            line-height: 1.5;
          }
          .contact-details-card {
            padding: 1.15rem 0.95rem;
            border-radius: 16px;
          }
          .contact-details-card h2 {
            font-size: 1.35rem;
            margin-bottom: 0.35rem;
          }
          .details-lead {
            font-size: 0.835rem;
            line-height: 1.5;
            margin-bottom: 1rem;
          }
          .info-items-stack {
            gap: 0.65rem;
          }
          .info-box {
            padding: 0.65rem 0.75rem;
            gap: 0.65rem;
            border-radius: 12px;
          }
          .info-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
          .info-label {
            font-size: 0.72rem;
          }
          .info-val {
            font-size: 0.835rem;
          }
          .social-links-block {
            margin-top: 1rem;
            padding-top: 1rem;
          }
          .social-pills {
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;
          }
          .social-btn {
            width: 100%;
            justify-content: center;
            min-height: 42px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
