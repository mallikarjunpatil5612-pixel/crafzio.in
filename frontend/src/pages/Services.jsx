import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Code2, 
  Cloud, 
  Workflow, 
  Smartphone, 
  Globe, 
  Palette, 
  UsersRound 
} from 'lucide-react';
import ServiceCard from '../components/cards/ServiceCard';
import { fetchServices } from '../services/api';
import { FALLBACK_SERVICES } from '../services/fallbackData';

const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'web', label: 'Web & Cloud' },
  { id: 'mobile', label: 'Mobile Engineering' },
  { id: 'enterprise', label: 'Enterprise Software' },
  { id: 'design', label: 'UI / UX Design' }
];

const categoryMapping = {
  'website-development': 'web',
  'web-application-development': 'web',
  'mobile-app-development': 'mobile',
  'ui-ux-design': 'design',
  'crm-business-software': 'enterprise',
  'custom-software': 'enterprise'
};

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Requirement Mapping',
    desc: 'We analyze your workflows, user personas, and technical constraints to formulate precise specifications.'
  },
  {
    step: '02',
    title: 'Architecture & System Design',
    desc: 'Database schemas, component hierarchies, and API contracts are structured for high concurrency and speed.'
  },
  {
    step: '03',
    title: 'Agile Sprint Execution',
    desc: 'Clean code built in transparent iterations with continuous integration, unit testing, and peer reviews.'
  },
  {
    step: '04',
    title: 'Security & Usability Testing',
    desc: 'Strict QA verification covering performance benchmarks, vulnerability scans, and cross-device ergonomics.'
  },
  {
    step: '05',
    title: 'Deployment & SLA Continuity',
    desc: 'Zero-downtime cloud release accompanied by detailed documentation, monitoring hooks, and support.'
  }
];

const processThemes = ['blue', 'purple', 'teal', 'amber', 'indigo'];

export default function Services({ onOpenTalkModal }) {
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    async function load() {
      const res = await fetchServices();
      if (res && res.data && res.data.length > 0) {
        setServices(res.data);
      }
    }
    load();
  }, []);

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'all') return true;
    return categoryMapping[s.slug] === activeCategory;
  });

  return (
    <div className="services-page">
      {/* Hero Header */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content animate-fade-in">
            <span className="eyebrow"><Sparkles size={14} /> Technology Offerings</span>
            <h1>Engineered for scale. Built with purpose.</h1>
            <p className="services-hero-copy">
              From mission-critical web applications to custom enterprise software, CrafZio provides end-to-end technology services designed directly around operational reality.
            </p>
            <div className="services-hero-actions">
              <button onClick={onOpenTalkModal} className="btn btn-primary btn-lg">
                <MessageSquare size={18} />
                <span>Request a Solution Discovery</span>
              </button>
              <a href="#services-catalog" className="btn btn-secondary btn-lg">
                <span>Browse Offerings</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs & Catalog */}
      <section id="services-catalog" className="section services-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Service Catalog</span>
            <h2>Complete Technology Capabilities</h2>
            <p className="lead">Select a technical domain to explore our architectural frameworks and deliverables.</p>
          </div>

          {/* Filter Bar */}
          <div className="category-filter-bar">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3 services-cards-grid">
            {filteredServices.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>
        </div>
      </section>



      {/* 5-Step Delivery Lifecycle */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Methodology</span>
            <h2>How We Deliver Solutions</h2>
            <p className="lead">A rigorous 5-stage engineering lifecycle providing absolute clarity from day one to launch.</p>
          </div>

          <div className="process-pipeline">
            {PROCESS_STEPS.map((step, idx) => {
              const theme = processThemes[idx % processThemes.length];
              return (
                <div key={step.step} className={`process-step-item proc-theme-${theme}`}>
                  <div className="proc-left-stripe"></div>
                  <div className="proc-card-wave" aria-hidden="true"></div>
                  <div className="process-num-wrap">
                    <span className="process-step-pill">Stage {step.step}</span>
                    <div className="proc-num-box">
                      <span className="process-num">{step.step}</span>
                      <div className="proc-num-line"></div>
                    </div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="section services-cta-section">
        <div className="container">
          <div className="glass-card services-cta-card">
            <span className="eyebrow"><Sparkles size={14} /> Technical Consultation</span>
            <h2>Have a specific technical requirement?</h2>
            <p>Every business operates with unique constraints. Discuss your architectural requirement directly with our senior engineering team.</p>
            <div className="cta-actions-row">
              <button onClick={onOpenTalkModal} className="btn btn-primary btn-lg">
                <MessageSquare size={18} />
                <span>Discuss Your Requirement</span>
              </button>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>View Contact Channels</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .services-hero {
          padding-top: calc(var(--header-height) + 5rem);
          padding-bottom: 4rem;
          text-align: center;
          position: relative;
        }

        .services-hero h1 {
          margin: 1.25rem 0;
          font-size: clamp(2.5rem, 5vw, 4.2rem);
        }

        .services-hero-copy {
          max-width: 760px;
          margin: 0 auto 2.5rem;
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .services-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .services-grid-section {
          scroll-margin-top: calc(var(--header-height) + 1.5rem);
        }

        .category-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .cat-btn {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #475569;
          padding: 0.6rem 1.35rem;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .cat-btn:hover {
          color: #0f172a;
          background: #f8fafc;
          border-color: #94a3b8;
        }

        .cat-btn.active {
          background: #0b0f19;
          color: #ffffff;
          border-color: #0b0f19;
          box-shadow: 0 4px 14px rgba(11, 15, 25, 0.2);
        }

        .services-cards-grid {
          margin-bottom: 2rem;
        }

        .standards-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .standards-eyebrow-pill {
          display: inline-block;
          padding: 0.35rem 1.1rem;
          border-radius: 9999px;
          background: #e0f2fe;
          color: #2563eb;
          border: 1px solid rgba(186, 230, 253, 0.8);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.85rem;
        }

        .standards-title {
          font-size: clamp(2rem, 4vw, 2.65rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 0.65rem;
          letter-spacing: -0.02em;
        }

        .standards-lead {
          font-size: 1.05rem;
          color: #64748b;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 450;
        }

        .standards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .standard-card {
          padding: 2.35rem 2rem;
          text-align: left;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .standard-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 38px -8px rgba(0, 0, 0, 0.08);
          border-color: rgba(203, 213, 225, 1);
        }

        .standard-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #eff6ff;
          border: 1px solid rgba(191, 219, 254, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          margin-bottom: 1.35rem;
          transition: transform 0.25s ease;
        }

        .standard-card:hover .standard-icon {
          transform: scale(1.08);
        }

        .standard-card h3 {
          font-size: 1.25rem;
          font-weight: 750;
          margin-bottom: 0.65rem;
          color: #0f172a;
          letter-spacing: -0.01em;
        }

        .standard-card p {
          color: #64748b;
          font-size: 0.925rem;
          line-height: 1.62;
          margin: 0;
          font-weight: 450;
        }

        @media (max-width: 1024px) {
          .standards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .standards-grid {
            grid-template-columns: 1fr;
          }
          .standard-card {
            padding: 1.75rem 1.5rem;
          }
        }

        .process-pipeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .process-step-item {
          padding: 2.25rem 1.75rem;
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .process-step-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 38px -8px rgba(0, 0, 0, 0.08);
          border-color: rgba(203, 213, 225, 1);
        }

        .proc-left-stripe {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5.5px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        .proc-card-wave {
          position: absolute;
          right: -10px;
          bottom: -10px;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          filter: blur(26px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.65;
        }

        .process-num-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.35rem;
        }

        .process-step-pill {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .proc-num-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .process-num {
          font-size: 2.1rem;
          font-weight: 850;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .proc-num-line {
          width: 28px;
          height: 3px;
          border-radius: 99px;
          margin-top: 4px;
        }

        .process-step-item h3 {
          position: relative;
          z-index: 1;
          font-size: 1.18rem;
          font-weight: 750;
          color: #0f172a;
          margin-bottom: 0.65rem;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }

        .process-step-item p {
          position: relative;
          z-index: 1;
          color: #64748b;
          font-size: 0.915rem;
          line-height: 1.62;
          margin: 0;
          font-weight: 450;
        }

        /* Process Themes */
        .proc-theme-blue .proc-left-stripe { background: linear-gradient(180deg, #2563eb, #38bdf8); }
        .proc-theme-blue .process-step-pill { background: #e0f2fe; color: #0284c7; border: 1px solid rgba(186, 230, 253, 0.8); }
        .proc-theme-blue .process-num { background: linear-gradient(135deg, #2563eb, #38bdf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .proc-theme-blue .proc-num-line { background: #2563eb; }
        .proc-theme-blue .proc-card-wave { background: rgba(186, 230, 253, 0.65); }

        .proc-theme-purple .proc-left-stripe { background: linear-gradient(180deg, #c026d3, #ec4899); }
        .proc-theme-purple .process-step-pill { background: #f3e8ff; color: #a855f7; border: 1px solid rgba(233, 213, 255, 0.8); }
        .proc-theme-purple .process-num { background: linear-gradient(135deg, #a855f7, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .proc-theme-purple .proc-num-line { background: #c026d3; }
        .proc-theme-purple .proc-card-wave { background: rgba(243, 232, 255, 0.65); }

        .proc-theme-teal .proc-left-stripe { background: linear-gradient(180deg, #0d9488, #14b8a6); }
        .proc-theme-teal .process-step-pill { background: #ccfbf1; color: #0d9488; border: 1px solid rgba(153, 246, 228, 0.8); }
        .proc-theme-teal .process-num { background: linear-gradient(135deg, #0d9488, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .proc-theme-teal .proc-num-line { background: #0d9488; }
        .proc-theme-teal .proc-card-wave { background: rgba(204, 251, 241, 0.65); }

        .proc-theme-amber .proc-left-stripe { background: linear-gradient(180deg, #f59e0b, #fbbf24); }
        .proc-theme-amber .process-step-pill { background: #fef3c7; color: #d97706; border: 1px solid rgba(253, 230, 138, 0.8); }
        .proc-theme-amber .process-num { background: linear-gradient(135deg, #f59e0b, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .proc-theme-amber .proc-num-line { background: #f59e0b; }
        .proc-theme-amber .proc-card-wave { background: rgba(254, 243, 199, 0.65); }

        .proc-theme-indigo .proc-left-stripe { background: linear-gradient(180deg, #4f46e5, #7c3aed); }
        .proc-theme-indigo .process-step-pill { background: #e0e7ff; color: #4f46e5; border: 1px solid rgba(199, 210, 254, 0.8); }
        .proc-theme-indigo .process-num { background: linear-gradient(135deg, #4f46e5, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .proc-theme-indigo .proc-num-line { background: #4f46e5; }
        .proc-theme-indigo .proc-card-wave { background: rgba(224, 231, 255, 0.65); }

        @media (max-width: 640px) {
          .process-step-item {
            padding: 1.75rem 1.4rem;
          }
        }

        .services-cta-card {
          text-align: center;
          padding: 2.5rem 1.85rem;
          max-width: 860px;
          margin: 0 auto;
        }

        .services-cta-card h2 {
          font-size: 2.1rem;
          margin-top: 0.35rem;
          margin-bottom: 0.65rem;
        }

        .services-cta-card p {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 1.65rem;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .process-step-item {
            padding: 1.15rem 0.95rem;
            border-radius: 16px;
          }
          .category-filter-bar {
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.35rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .category-filter-bar::-webkit-scrollbar {
            display: none;
          }
          .cat-btn {
            white-space: nowrap;
            flex-shrink: 0;
            padding: 0.35rem 0.75rem;
            font-size: 0.78rem;
          }
          .services-cta-card {
            padding: 1.35rem 0.95rem;
            border-radius: 16px;
          }
          .services-cta-card h2 {
            font-size: 1.35rem;
            margin-bottom: 0.35rem;
          }
          .services-cta-card p {
            font-size: 0.825rem;
            margin-bottom: 1rem;
          }
          .cta-actions-row {
            flex-direction: column;
            width: 100%;
            gap: 0.55rem;
          }
          .cta-actions-row .btn {
            width: 100%;
            justify-content: center;
            min-height: 42px;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
}
