import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  LayoutDashboard, 
  Smartphone, 
  Palette, 
  UsersRound, 
  Cpu, 
  ArrowRight, 
  Check 
} from 'lucide-react';

const iconMap = {
  'website-development': Globe,
  'web-application-development': LayoutDashboard,
  'mobile-app-development': Smartphone,
  'ui-ux-design': Palette,
  'crm-business-software': UsersRound,
  'custom-software': Cpu,
};

const serviceImageMap = {
  'website-development': '/services/website-development.jpg',
  'web-application-development': '/services/web-application-development.jpg',
  'mobile-app-development': '/services/mobile-app-development.jpg',
  'ui-ux-design': '/services/ui-ux-design.jpg',
  'crm-business-software': '/services/crm-business-software.jpg',
  'custom-software': '/services/custom-software.jpg',
};

export default function ServiceCard({ service }) {
  const navigate = useNavigate();
  const IconComponent = iconMap[service.slug] || Cpu;
  const imageSrc = service.image || serviceImageMap[service.slug] || '/services/website-development.jpg';

  const handleClick = () => {
    navigate(`/services/${service.slug}`);
  };

  return (
    <div 
      className="service-card glass-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`View ${service.title} details`}
    >
      {/* Top Image Banner */}
      <div className="service-card-image-wrap">
        <img 
          src={imageSrc} 
          alt={service.title} 
          className="service-card-img" 
          loading="lazy" 
        />
        <div className="service-card-img-overlay"></div>
        <div className="service-card-badge-wrap">
          <span className="service-badge">Enterprise Ready</span>
        </div>
        <div className="service-icon-floating">
          <IconComponent size={20} className="service-icon" />
        </div>
      </div>

      <div className="service-card-body">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.short_desc}</p>

        {service.capabilities && (
          <ul className="service-feature-list">
            {service.capabilities.slice(0, 3).map((item, idx) => (
              <li key={idx} className="service-feature-item">
                <Check size={14} className="feature-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="service-card-footer">
          <div className="service-link">
            <span>Explore Capabilities</span>
            <ArrowRight size={16} className="link-arrow" />
          </div>
        </div>
      </div>

      <style>{`
        .service-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
          padding: 0 !important;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-lg);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .service-card:hover {
          border-color: #2563eb;
          box-shadow: 0 16px 36px -4px rgba(37, 99, 235, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04);
          transform: translateY(-5px);
        }

        /* Top Image Wrap */
        .service-card-image-wrap {
          position: relative;
          width: 100%;
          height: 190px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .service-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover .service-card-img {
          transform: scale(1.06);
        }

        .service-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.35) 100%);
          pointer-events: none;
          transition: background 0.3s ease;
        }

        .service-card:hover .service-card-img-overlay {
          background: linear-gradient(180deg, rgba(37, 99, 235, 0.1) 0%, rgba(15, 23, 42, 0.45) 100%);
        }

        .service-card-badge-wrap {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          z-index: 2;
        }

        .service-badge {
          font-size: 0.725rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(15, 23, 42, 0.82);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          letter-spacing: 0.03em;
        }

        .service-icon-floating {
          position: absolute;
          bottom: 0.85rem;
          left: 1.15rem;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
          transition: all var(--transition-normal);
          z-index: 2;
        }

        .service-card:hover .service-icon-floating {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
        }

        /* Card Body */
        .service-card-body {
          padding: 1.4rem 1.6rem 1.6rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          background: #ffffff;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 0.65rem;
          color: #0f172a;
          transition: color var(--transition-fast);
        }

        .service-card:hover .service-title {
          color: #2563eb;
        }

        .service-desc {
          font-size: 0.925rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .service-feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          margin-bottom: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
        }

        .service-feature-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: #334155;
        }

        .feature-check {
          color: #2563eb;
          flex-shrink: 0;
        }

        .service-card-footer {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid #f8fafc;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 0.925rem;
          font-weight: 700;
          color: #2563eb;
          transition: gap var(--transition-fast);
        }

        .service-card:hover .service-link {
          gap: 0.75rem;
          color: #1d4ed8;
        }

        .link-arrow {
          transition: transform var(--transition-fast);
        }

        .service-card:hover .link-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 640px) {
          .service-card-image-wrap {
            height: 165px;
          }
          .service-card-body {
            padding: 1.15rem 1.15rem 1.35rem;
          }
        }
      `}</style>
    </div>
  );
}
