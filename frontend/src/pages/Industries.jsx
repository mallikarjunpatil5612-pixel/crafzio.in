import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Rocket, 
  Building, 
  GraduationCap, 
  HeartPulse, 
  ShoppingBag, 
  Briefcase, 
  Factory,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { fetchIndustries } from '../services/api';
import { FALLBACK_INDUSTRIES } from '../services/fallbackData';

const industryIcons = {
  startups: Rocket,
  smb: Building,
  education: GraduationCap,
  healthcare: HeartPulse,
  'retail-ecommerce': ShoppingBag,
  'professional-services': Briefcase,
  manufacturing: Factory,
};

const industryImages = {
  startups: '/industries/startups.jpg',
  smb: '/industries/smb.jpg',
  education: '/industries/education.jpg',
  healthcare: '/industries/healthcare.jpg',
  'retail-ecommerce': '/industries/retail-ecommerce.jpg',
  'professional-services': '/industries/professional-services.jpg',
  manufacturing: '/industries/manufacturing.jpg',
};

export default function Industries({ onOpenTalkModal }) {
  const [industries, setIndustries] = useState(FALLBACK_INDUSTRIES);

  useEffect(() => {
    async function load() {
      const res = await fetchIndustries();
      if (res && res.data && res.data.length > 0) setIndustries(res.data);
    }
    load();
  }, []);

  return (
    <div className="industries-page">
      {/* Hero */}
      <section className="industries-hero">
        <div className="container">
          <div className="industries-hero-content animate-fade-in">
            <span className="eyebrow"><Sparkles size={14} /> Domain Specialization</span>
            <h1>Technology for businesses across industries.</h1>
            <p className="industries-hero-copy">
              We create digital experiences and technology solutions for organizations with different goals, workflows and customers.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section industries-grid-section">
        <div className="container">
          <div className="grid-3 industries-cards-grid">
            {industries.map((ind) => {
              const Icon = industryIcons[ind.id] || Building;
              const imageSrc = ind.image || industryImages[ind.id] || '/industries/startups.jpg';
              return (
                <div key={ind.id} className="glass-card industry-detail-card">
                  {/* Proper Top Image Banner */}
                  <div className="ind-card-image-wrap">
                    <img 
                      src={imageSrc} 
                      alt={ind.name} 
                      className="ind-card-img" 
                      loading="lazy" 
                    />
                    <div className="ind-card-img-overlay"></div>
                    <div className="ind-card-badge-wrap">
                      <span className="ind-badge">Domain Focus</span>
                    </div>
                    <div className="ind-icon-floating">
                      <Icon size={22} className="ind-icon" />
                    </div>
                  </div>

                  <div className="ind-card-body">
                    <h3>{ind.name}</h3>
                    <p className="ind-tagline">{ind.tagline}</p>
                    <p className="ind-desc">{ind.desc}</p>
                    <button onClick={onOpenTalkModal} className="btn btn-outline btn-sm ind-btn">
                      <span>Discuss Industry Solution</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section industries-cta-section">
        <div className="container">
          <div className="glass-card industries-cta-card">
            <h2>Operating in a specialized domain?</h2>
            <p>Our engineering methodology begins by understanding your business, compliance requirements, and specific user cohorts.</p>
            <button onClick={onOpenTalkModal} className="btn btn-primary btn-lg">
              <MessageSquare size={18} />
              <span>Consult Our Solutions Team</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .industries-hero {
          padding-top: calc(var(--header-height) + 4.5rem);
          padding-bottom: 3.5rem;
          text-align: center;
        }

        .industries-hero h1 {
          margin: 1rem 0;
          font-size: clamp(2.4rem, 5vw, 4rem);
        }

        .industries-hero-copy {
          max-width: 760px;
          margin: 0 auto;
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .industry-detail-card {
          padding: 0 !important;
          overflow: hidden;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .industry-detail-card:hover {
          border-color: var(--brand-primary);
          box-shadow: 0 16px 36px -4px rgba(37, 99, 235, 0.12);
          transform: translateY(-5px);
        }

        /* Top Image Wrap */
        .ind-card-image-wrap {
          position: relative;
          width: 100%;
          height: 190px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .ind-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .industry-detail-card:hover .ind-card-img {
          transform: scale(1.08);
        }

        .ind-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.45) 100%);
          pointer-events: none;
          transition: background 0.3s ease;
        }

        .industry-detail-card:hover .ind-card-img-overlay {
          background: linear-gradient(180deg, rgba(37, 99, 235, 0.15) 0%, rgba(15, 23, 42, 0.55) 100%);
        }

        .ind-card-badge-wrap {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          z-index: 2;
        }

        .ind-badge {
          font-size: 0.725rem;
          font-weight: 600;
          color: #ffffff;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 0.28rem 0.7rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          letter-spacing: 0.02em;
        }

        .ind-icon-floating {
          position: absolute;
          bottom: 0.85rem;
          left: 1.15rem;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-primary);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
          transition: all var(--transition-normal);
          z-index: 2;
        }

        .industry-detail-card:hover .ind-icon-floating {
          background: var(--brand-primary);
          color: #ffffff;
          border-color: var(--brand-primary);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
        }

        /* Card Body */
        .ind-card-body {
          padding: 1.35rem 1.6rem 1.6rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          background: #ffffff;
        }

        .industry-detail-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.35rem;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .industry-detail-card:hover h3 {
          color: var(--brand-primary);
        }

        .ind-tagline {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--brand-primary);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .ind-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .ind-btn {
          margin-top: auto;
          width: 100%;
          justify-content: center;
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .ind-btn:hover {
          background: var(--brand-primary);
          border-color: var(--brand-primary);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
        }

        .industries-cta-card {
          text-align: center;
          padding: 2.25rem 1.75rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .industries-cta-card h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .industries-cta-card p {
          color: var(--text-muted);
          font-size: 1.02rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 640px) {
          .industries-hero {
            padding-top: calc(var(--header-height) + 1.25rem);
            padding-bottom: 2rem;
          }
          .industries-hero h1 {
            font-size: 2rem;
          }
          .industries-hero-copy {
            font-size: 1rem;
          }
          .ind-card-image-wrap {
            height: 165px;
          }
          .ind-card-body {
            padding: 1.15rem 1.15rem 1.35rem;
          }
          .industries-cta-card {
            padding: 2rem 1.15rem;
          }
          .industries-cta-card h2 {
            font-size: 1.75rem;
          }
          .industries-cta-card .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
