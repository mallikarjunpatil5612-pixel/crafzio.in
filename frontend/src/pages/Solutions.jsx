import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { fetchSolutions } from '../services/api';
import { FALLBACK_SOLUTIONS } from '../services/fallbackData';

const solutionImages = {
  'business-digitalization': '/solutions/business-digitalization.jpg',
  'customer-lead-management': '/solutions/customer-lead-management.jpg',
  'business-automation': '/solutions/business-automation.jpg',
  'e-commerce': '/solutions/e-commerce.jpg',
  'custom-business-systems': '/solutions/custom-business-systems.jpg',
};

const solThemes = [
  'blue',
  'purple',
  'teal',
  'amber',
  'indigo'
];

export default function Solutions({ onOpenTalkModal }) {
  const [solutions, setSolutions] = useState(FALLBACK_SOLUTIONS);

  useEffect(() => {
    async function load() {
      const res = await fetchSolutions();
      if (res && res.data && res.data.length > 0) setSolutions(res.data);
    }
    load();
  }, []);

  return (
    <div className="solutions-page">
      {/* Hero */}
      <section className="solutions-hero">
        <div className="container">
          <div className="solutions-hero-content animate-fade-in">
            <span className="eyebrow"><Sparkles size={13} /> Transformation Frameworks</span>
            <h1>Technology built around your business.</h1>
            <p className="solutions-hero-copy">
              We combine design, development and business understanding to create solutions around real operational and customer needs.
            </p>
            <button onClick={onOpenTalkModal} className="btn btn-primary btn-md" style={{ marginTop: '1rem' }}>
              <MessageSquare size={16} />
              <span>Discuss Your Business Challenge</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Jump Bar */}
      <section className="solutions-nav-bar">
        <div className="container">
          <div className="sol-nav-pills">
            {solutions.map((sol, idx) => (
              <a key={sol.id} href={`#${sol.id}`} className="sol-nav-pill">
                <span className="sol-pill-num">0{idx + 1}</span>
                <span>{sol.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Detailed List */}
      <section className="section solutions-list-section">
        <div className="container">
          <div className="solutions-stack">
            {solutions.map((sol, idx) => {
              const theme = solThemes[idx % solThemes.length];
              const imgSrc = sol.image || solutionImages[sol.id] || `/solutions/${sol.id}.jpg`;
              const isReversed = idx % 2 !== 0;

              return (
                <div 
                  key={sol.id} 
                  id={sol.id} 
                  className={`sol-custom-card sol-theme-${theme} ${isReversed ? 'sol-layout-reversed' : ''}`}
                >
                  <div className="sol-left-stripe"></div>
                  <div className="sol-card-wave" aria-hidden="true"></div>

                  <div className="sol-card-grid">
                    {/* Content Column */}
                    <div className="sol-info-col">
                      <div className="solution-card-header">
                        <div className="sol-title-wrap">
                          <span className="sol-step-tag">Solution 0{idx + 1}</span>
                          <h2>{sol.title}</h2>
                        </div>
                      </div>

                      <p className="sol-tagline">{sol.tagline}</p>
                      <p className="sol-description">{sol.description}</p>

                      <div className="sol-points-grid">
                        {sol.points && sol.points.map((pt, pIdx) => (
                          <div key={pIdx} className="sol-point-item">
                            <CheckCircle2 size={15} className="sol-check" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      <div className="sol-card-footer">
                        <button onClick={onOpenTalkModal} className="btn btn-outline btn-sm">
                          <span>Inquire About This Solution</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Visual Column */}
                    <div className="sol-visual-col">
                      <div className="sol-visual-frame">
                        <img 
                          src={imgSrc} 
                          alt={`${sol.title} Visual`} 
                          className="sol-visual-img"
                          loading="lazy" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      <style>{`
        .solutions-hero {
          padding-top: calc(var(--header-height) + 2.25rem);
          padding-bottom: 1.5rem;
          text-align: center;
        }

        .solutions-hero h1 {
          margin: 0.75rem 0;
          font-size: clamp(2rem, 3.6vw, 2.85rem);
          letter-spacing: -0.02em;
        }

        .solutions-hero-copy {
          max-width: 680px;
          margin: 0 auto;
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Compact Quick Jump Bar */
        .solutions-nav-bar {
          padding: 0.25rem 0 1.5rem;
        }

        .sol-nav-pills {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .sol-nav-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.95);
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .sol-nav-pill:hover {
          border-color: var(--brand-primary);
          color: var(--brand-primary);
          transform: translateY(-1px);
          box-shadow: 0 6px 14px rgba(37, 99, 235, 0.12);
        }

        .sol-pill-num {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        .solutions-list-section {
          padding: 0.5rem 0 3.5rem;
        }

        .solutions-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Compressed Card Layout */
        .sol-custom-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          padding: 1.75rem 2rem;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 6px 22px -6px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          scroll-margin-top: calc(var(--header-height) + 1.25rem);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .sol-custom-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.08);
          border-color: rgba(203, 213, 225, 1);
        }

        .sol-card-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2rem;
          align-items: center;
          width: 100%;
        }

        .sol-layout-reversed .sol-card-grid {
          grid-template-columns: 0.85fr 1.15fr;
        }

        .sol-layout-reversed .sol-info-col {
          order: 2;
        }

        .sol-layout-reversed .sol-visual-col {
          order: 1;
        }

        .sol-info-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        .sol-visual-col {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sol-visual-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          max-height: 250px;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 12px 28px -6px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(226, 232, 240, 0.8);
          background: #0f172a;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
        }

        .sol-custom-card:hover .sol-visual-frame {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 18px 38px -8px rgba(15, 23, 42, 0.22);
        }

        .sol-visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sol-custom-card:hover .sol-visual-img {
          transform: scale(1.04);
        }


        .sol-left-stripe {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        .sol-card-wave {
          position: absolute;
          right: -20px;
          bottom: -20px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          filter: blur(36px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        .solution-card-header {
          position: relative;
          z-index: 1;
          margin-bottom: 0.75rem;
          width: 100%;
        }

        .sol-step-tag {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: inline-block;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          margin-bottom: 0.35rem;
        }

        .sol-title-wrap h2 {
          font-size: 1.5rem;
          font-weight: 750;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.015em;
          line-height: 1.25;
        }

        .sol-tagline {
          position: relative;
          z-index: 1;
          font-size: 1.02rem;
          font-weight: 650;
          color: #1e293b;
          margin-bottom: 0.4rem;
          line-height: 1.4;
        }

        .sol-description {
          position: relative;
          z-index: 1;
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.55;
          margin-bottom: 1.15rem;
        }

        .sol-points-grid {
          position: relative;
          z-index: 1;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 1rem;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(226, 232, 240, 0.9);
          margin-bottom: 1.25rem;
        }

        .sol-point-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.86rem;
          color: #334155;
          font-weight: 480;
        }

        .sol-point-item span {
          line-height: 1.45;
        }

        .sol-card-footer {
          position: relative;
          z-index: 1;
        }

        /* Themes */
        .sol-theme-blue .sol-left-stripe { background: linear-gradient(180deg, #2563eb, #38bdf8); }
        .sol-theme-blue .sol-step-tag { background: #e0f2fe; color: #0284c7; border: 1px solid rgba(186, 230, 253, 0.8); }
        .sol-theme-blue .sol-check { color: #2563eb; }
        .sol-theme-blue .sol-card-wave { background: rgba(186, 230, 253, 0.55); }

        .sol-theme-purple .sol-left-stripe { background: linear-gradient(180deg, #c026d3, #ec4899); }
        .sol-theme-purple .sol-step-tag { background: #f3e8ff; color: #a855f7; border: 1px solid rgba(233, 213, 255, 0.8); }
        .sol-theme-purple .sol-check { color: #c026d3; }
        .sol-theme-purple .sol-card-wave { background: rgba(243, 232, 255, 0.55); }

        .sol-theme-teal .sol-left-stripe { background: linear-gradient(180deg, #0d9488, #14b8a6); }
        .sol-theme-teal .sol-step-tag { background: #ccfbf1; color: #0d9488; border: 1px solid rgba(153, 246, 228, 0.8); }
        .sol-theme-teal .sol-check { color: #0d9488; }
        .sol-theme-teal .sol-card-wave { background: rgba(204, 251, 241, 0.55); }

        .sol-theme-amber .sol-left-stripe { background: linear-gradient(180deg, #f59e0b, #fbbf24); }
        .sol-theme-amber .sol-step-tag { background: #fef3c7; color: #d97706; border: 1px solid rgba(253, 230, 138, 0.8); }
        .sol-theme-amber .sol-check { color: #d97706; }
        .sol-theme-amber .sol-card-wave { background: rgba(254, 243, 199, 0.55); }

        .sol-theme-indigo .sol-left-stripe { background: linear-gradient(180deg, #4f46e5, #2563eb); }
        .sol-theme-indigo .sol-step-tag { background: #e0e7ff; color: #4f46e5; border: 1px solid rgba(199, 210, 254, 0.8); }
        .sol-theme-indigo .sol-check { color: #4f46e5; }
        .sol-theme-indigo .sol-card-wave { background: rgba(224, 231, 255, 0.55); }

        @media (max-width: 992px) {
          .sol-card-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .sol-layout-reversed .sol-info-col {
            order: 1;
          }
          .sol-layout-reversed .sol-visual-col {
            order: 2;
          }
          .sol-visual-frame {
            aspect-ratio: 16 / 9;
            max-height: 320px;
          }
        }

        @media (max-width: 768px) {
          .sol-custom-card {
            padding: 1.5rem 1.25rem;
          }
          .sol-points-grid {
            grid-template-columns: 1fr;
            gap: 0.45rem;
          }
          .solution-card-header {
            flex-direction: row;
            align-items: center;
            gap: 0.75rem;
          }
          .sol-nav-pills {
            gap: 0.4rem;
          }
          .sol-nav-pill {
            font-size: 0.75rem;
            padding: 0.28rem 0.65rem;
          }
        }

        @media (max-width: 640px) {
          .solutions-hero {
            padding-top: calc(var(--header-height) + 1.25rem);
            padding-bottom: 1.25rem;
          }
          .solutions-hero h1 {
            font-size: 1.85rem;
          }
          .solutions-hero-copy {
            font-size: 0.95rem;
          }
          .sol-custom-card {
            padding: 1.25rem 1rem;
            border-radius: 16px;
          }
          .sol-title-wrap h2 {
            font-size: 1.25rem;
          }
          .sol-tagline {
            font-size: 0.95rem;
          }
          .sol-description {
            font-size: 0.875rem;
            margin-bottom: 0.85rem;
          }
          .sol-card-footer .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
