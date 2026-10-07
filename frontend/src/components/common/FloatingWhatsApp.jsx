import React from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { CORPORATE_CONFIG } from '../../config/corporate';

export default function FloatingWhatsApp() {
  const whatsappUrl = CORPORATE_CONFIG.contact.whatsappUrl || ('https://wa.me/917026496890?text=' + encodeURIComponent("Hello! I'm interested in your services at CrafZio."));

  return (
    <div className="floating-whatsapp-container">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <span className="floating-whatsapp-pulse"></span>
        <div className="floating-whatsapp-icon-box">
          <WhatsAppIcon size={22} />
        </div>
        <span className="floating-whatsapp-text">Chat with us</span>
      </a>

      <style>{`
        .floating-whatsapp-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 990;
        }

        .floating-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: #25D366;
          color: #ffffff;
          padding: 0.65rem 1.15rem 0.65rem 0.85rem;
          border-radius: 9999px;
          box-shadow: 0 6px 22px rgba(37, 211, 102, 0.4), 0 2px 8px rgba(0, 0, 0, 0.15);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .floating-whatsapp-btn:hover {
          background: #20BA5C;
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 28px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(0, 0, 0, 0.2);
          color: #ffffff;
        }

        .floating-whatsapp-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          background: rgba(37, 211, 102, 0.35);
          animation: waPulse 2.5s infinite;
          z-index: -1;
          pointer-events: none;
        }

        @keyframes waPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.22);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }

        .floating-whatsapp-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .floating-whatsapp-text {
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          white-space: nowrap;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .floating-whatsapp-container {
            bottom: 20px;
            right: 18px;
          }
          .floating-whatsapp-btn {
            padding: 0.65rem;
            border-radius: 50%;
            width: 46px;
            height: 46px;
            justify-content: center;
          }
          .floating-whatsapp-text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
