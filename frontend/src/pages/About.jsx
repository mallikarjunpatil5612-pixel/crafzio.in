import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Eye, 
  ShieldCheck, 
  Compass, 
  Users, 
  Lightbulb, 
  BookOpen, 
  TrendingUp, 
  ArrowRight,
  Dna,
  Rocket,
  Layers,
  Settings
} from 'lucide-react';
import { LinkedinIcon } from '../components/common/SocialIcons';
import { CORPORATE_CONFIG } from '../config/corporate';

const iconMap = {
  Users: Users,
  Lightbulb: Lightbulb,
  Compass: Compass,
  BookOpen: BookOpen,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
  Dna: Dna,
  Rocket: Rocket,
  Layers: Layers,
  Settings: Settings,
};

const valueThemes = [
  { theme: 'blue' },
  { theme: 'pink' },
  { theme: 'cyan' },
  { theme: 'purple' },
  { theme: 'teal' },
  { theme: 'coral' }
];

const milestoneThemes = [
  { theme: 'blue' },
  { theme: 'purple' },
  { theme: 'teal' },
  { theme: 'amber' },
  { theme: 'magenta' },
  { theme: 'indigo' }
];

export default function About({ onOpenTalkModal }) {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content animate-fade-in">
            <h1 className="about-hero-title">We are CrafZio.</h1>
            <p className="about-hero-subheading">Technology. Design. Possibility.</p>
            <p className="about-hero-copy">
              CrafZio is a technology company focused on creating digital experiences, applications and software solutions that help businesses move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="glass-card story-card">
            <div className="story-grid">
              <div className="story-lead-col">
                <span className="eyebrow">Our Origins</span>
                <h2>Where CrafZio began.</h2>
                <div className="story-accent-bar"></div>
                <div className="story-image-wrap">
                  <img 
                    src="/about-origins.jpg" 
                    alt="CrafZio Origins - Collaborative Technology Team" 
                    className="story-image"
                    loading="lazy" 
                  />
                </div>
              </div>

              <div className="story-content-col">
                <p>
                  CrafZio began with a simple idea: technology should be useful, accessible and closely connected to the needs of the businesses using it.
                </p>
                <p>
                  What began with individual projects gradually developed into a broader technology initiative focused on websites, applications, software and digital solutions.
                </p>
                <p>
                  As our work and ambitions grew, so did CrafZio.
                </p>
                <p className="highlight-text">
                  Today, CrafZio operates as a Private Limited company with a vision to build technology products and solutions that create meaningful value for businesses and their customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-custom-card">
              <div className="vm-bg-glow vision-glow" aria-hidden="true"></div>
              <div className="vm-icon-gradient">
                <Eye size={26} color="#ffffff" strokeWidth={2.2} />
              </div>
              <div className="vm-badge vm-badge-blue">
                GUIDING HORIZON
              </div>
              <h2 className="vm-title">
                Our <span className="vm-gradient-text">Vision</span>
              </h2>
              <div className="vm-accent-line"></div>
              <p className="vm-description">
                To build a technology company that creates meaningful digital solutions for businesses and people, while continuously innovating for the future.
              </p>
            </div>

            <div className="vm-custom-card">
              <div className="vm-bg-glow mission-glow" aria-hidden="true"></div>
              <div className="vm-icon-gradient">
                <Target size={26} color="#ffffff" strokeWidth={2.2} />
              </div>
              <div className="vm-badge vm-badge-purple">
                DAILY COMMITMENT
              </div>
              <h2 className="vm-title">
                Our <span className="vm-gradient-text">Mission</span>
              </h2>
              <div className="vm-accent-line"></div>
              <p className="vm-description">
                To combine technology, design and business understanding to create digital products and solutions that solve real problems, improve experiences and enable businesses to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p className="lead">
              The foundational convictions that define how we build software, treat colleagues, and serve our business partners.
            </p>
          </div>

          <div className="grid-3 values-grid">
            {CORPORATE_CONFIG.values.map((val, idx) => {
              const Icon = iconMap[val.icon] || Compass;
              const themeObj = valueThemes[idx % valueThemes.length];
              return (
                <div key={idx} className={`val-custom-card val-theme-${themeObj.theme}`}>
                  <div className="val-left-stripe"></div>
                  <div className="val-card-wave" aria-hidden="true"></div>
                  <div className="val-card-top">
                    <div className="val-icon-box">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div className="val-arrow-circle">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="val-title">{val.title}</h3>
                  <p className="val-desc">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Journey Timeline (Section 6 & 5.8) */}
      <section id="journey" className="section journey-full-section">
        <div className="container">
          <div className="section-header">
            <h2>Our journey so far.</h2>
            <p className="lead">
              Tracing our organic evolution from early engineering work to a corporate technology company.
            </p>
          </div>

          <div className="milestones-grid">
            {CORPORATE_CONFIG.timeline.map((milestone, idx) => {
              const Icon = iconMap[milestone.icon] || Sparkles;
              const themeObj = milestoneThemes[idx % milestoneThemes.length];
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <div key={idx} className={`ms-custom-card ms-theme-${themeObj.theme}`}>
                  <div className="ms-left-stripe"></div>
                  <div className="ms-card-wave" aria-hidden="true"></div>
                  <div className="ms-card-top">
                    <div className="ms-top-left">
                      <div className="ms-icon-box">
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <span className="ms-phase-badge">{milestone.phase}</span>
                    </div>
                    <div className="ms-number-wrap">
                      <span className="ms-number">{numStr}</span>
                      <div className="ms-number-line"></div>
                    </div>
                  </div>
                  <h3 className="ms-title">{milestone.title}</h3>
                  <p className="ms-desc">{milestone.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership / Founders (Section 6 & 5.11) */}
      <section id="leadership" className="section leadership-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet the people building CrafZio.</h2>
            <p className="lead">
              Technology and business leadership dedicated to engineering excellence, operational integrity, and client success.
            </p>
          </div>

          <div className="glass-card leadership-card">
            <div className="leadership-grid">
              <div className="leader-info">
                <span className="eyebrow">Executive Directors</span>
                <h3>Founding Leadership & Technical Direction</h3>
                <p className="leader-role">Founders & Directors, {CORPORATE_CONFIG.legalCompanyName}</p>
                
                <p className="leader-bio">
                  Driven by a focus on engineering elegance and business understanding, the leadership team at CrafZio steers technology strategy, software architecture, and product development across all client engagements.
                </p>

                <blockquote className="leader-quote">
                  "Our commitment is to create digital products that are practical, scalable and built around the people who use them."
                </blockquote>

                <div className="leader-actions">
                  <a 
                    href={CORPORATE_CONFIG.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline btn-sm"
                  >
                    <LinkedinIcon size={16} />
                    <span>Connect on LinkedIn</span>
                  </a>
                  <button onClick={onOpenTalkModal} className="btn btn-primary btn-sm">
                    <span>Direct Dialogue</span>
                  </button>
                </div>
              </div>

              <div className="leadership-pillars">
                <div className="leadership-pillar-item">
                  <strong>Engineering Integrity</strong>
                  <span>We build scalable systems with clean architectures that endure long after launch.</span>
                </div>
                <div className="leadership-pillar-item">
                  <strong>Client Transparency</strong>
                  <span>Direct communication, realistic milestones, and verifiable delivery.</span>
                </div>
                <div className="leadership-pillar-item">
                  <strong>Continuous Innovation</strong>
                  <span>Always researching modern web, mobile, and automation capabilities.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section about-cta-section">
        <div className="container">
          <div className="glass-card about-cta-card">
            <h2>Ready to collaborate with CrafZio?</h2>
            <p>Tell us what you're working on and let's explore how our engineering and design capabilities can accelerate your vision.</p>
            <div className="cta-btn-wrap">
              <button onClick={onOpenTalkModal} className="btn btn-primary btn-lg">
                <span>Start a Conversation</span>
                <ArrowRight size={18} />
              </button>
              <Link to="/services" className="btn btn-secondary btn-lg">
                <span>View Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-hero {
          padding-top: calc(var(--header-height) + 4.5rem);
          padding-bottom: 4rem;
          text-align: center;
          position: relative;
        }

        .about-hero-title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          margin: 1rem 0 0.5rem;
        }

        .about-hero-subheading {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--brand-primary);
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }

        .about-hero-copy {
          max-width: 760px;
          margin: 0 auto;
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .story-card {
          padding: 2rem 2.25rem;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 2.25rem;
          align-items: flex-start;
        }

        .story-lead-col h2 {
          font-size: 2.15rem;
          margin-top: 0.35rem;
        }

        .story-accent-bar {
          width: 50px;
          height: 3.5px;
          background: var(--brand-primary);
          border-radius: 2px;
          margin-top: 1rem;
          margin-bottom: 1.25rem;
        }

        .story-image-wrap {
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          height: 200px;
          background: #f1f5f9;
        }

        .story-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .story-image-wrap:hover .story-image {
          transform: scale(1.04);
        }

        .story-content-col p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .story-content-col p.highlight-text {
          color: var(--text-primary);
          font-weight: 600;
          border-left: 3px solid var(--brand-primary);
          padding-left: 1rem;
          margin-top: 1.25rem;
        }

        .vm-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .vm-custom-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          padding: 2rem 1.85rem;
          border: 1.5px solid rgba(216, 180, 254, 0.45);
          box-shadow: 0 14px 34px -10px rgba(168, 85, 247, 0.12), 0 4px 18px rgba(0, 0, 0, 0.03);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .vm-custom-card:hover {
          transform: translateY(-4px);
          border-color: rgba(192, 38, 211, 0.6);
          box-shadow: 0 20px 45px -10px rgba(168, 85, 247, 0.22), 0 8px 24px rgba(0, 0, 0, 0.05);
        }

        .vm-bg-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .vision-glow {
          background: 
            radial-gradient(circle at 100% 100%, rgba(216, 180, 254, 0.35) 0%, rgba(255, 255, 255, 0) 55%),
            radial-gradient(circle at 100% 0%, rgba(224, 242, 254, 0.3) 0%, rgba(255, 255, 255, 0) 45%);
        }

        .mission-glow {
          background: 
            radial-gradient(circle at 100% 0%, rgba(244, 114, 182, 0.25) 0%, rgba(255, 255, 255, 0) 50%),
            radial-gradient(circle at 100% 100%, rgba(216, 180, 254, 0.3) 0%, rgba(255, 255, 255, 0) 50%);
        }

        .vm-icon-gradient {
          position: relative;
          z-index: 1;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #d946ef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.35rem;
          box-shadow: 0 8px 20px -2px rgba(124, 58, 237, 0.38);
        }

        .vm-badge {
          position: relative;
          z-index: 1;
          display: inline-block;
          padding: 0.35rem 0.95rem;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.85rem;
        }

        .vm-badge-blue {
          background: #e0f2fe;
          color: #0284c7;
          border: 1px solid rgba(186, 230, 253, 0.8);
        }

        .vm-badge-purple {
          background: #f3e8ff;
          color: #9333ea;
          border: 1px solid rgba(233, 213, 255, 0.8);
        }

        .vm-title {
          position: relative;
          z-index: 1;
          font-size: 2.15rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin: 0;
          line-height: 1.2;
        }

        .vm-gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #d946ef 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .vm-accent-line {
          position: relative;
          z-index: 1;
          width: 44px;
          height: 3.5px;
          border-radius: 99px;
          background: linear-gradient(90deg, #2563eb 0%, #ec4899 100%);
          margin-top: 0.65rem;
          margin-bottom: 1.25rem;
        }

        .vm-description {
          position: relative;
          z-index: 1;
          font-size: 1.05rem;
          line-height: 1.75;
          color: #475569;
          font-weight: 450;
          margin: 0;
        }

        @media (max-width: 860px) {
          .vm-grid {
            grid-template-columns: 1fr;
          }
          .vm-custom-card {
            padding: 2.25rem 1.75rem;
          }
          .vm-title {
            font-size: 1.85rem;
          }
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .val-custom-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          padding: 2.15rem 2rem;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .val-custom-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 38px -8px rgba(0, 0, 0, 0.08);
          border-color: rgba(203, 213, 225, 1);
        }

        .val-left-stripe {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5.5px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        .val-card-wave {
          position: absolute;
          right: -10px;
          bottom: -10px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          filter: blur(28px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.7;
        }

        .val-card-top {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.4rem;
        }

        .val-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .val-custom-card:hover .val-icon-box {
          transform: scale(1.06);
        }

        .val-arrow-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, background-color 0.25s ease;
        }

        .val-custom-card:hover .val-arrow-circle {
          transform: translateX(3px);
        }

        .val-title {
          position: relative;
          z-index: 1;
          font-size: 1.32rem;
          font-weight: 750;
          color: #0f172a;
          margin-bottom: 0.55rem;
          letter-spacing: -0.01em;
        }

        .val-desc {
          position: relative;
          z-index: 1;
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.62;
          margin: 0;
          font-weight: 450;
        }

        /* Value Themes */
        .val-theme-blue .val-left-stripe { background: linear-gradient(180deg, #2563eb, #3b82f6); }
        .val-theme-blue .val-icon-box { background: #eff6ff; color: #2563eb; }
        .val-theme-blue .val-arrow-circle { background: #eff6ff; color: #2563eb; }
        .val-theme-blue .val-card-wave { background: rgba(191, 219, 254, 0.7); }

        .val-theme-pink .val-left-stripe { background: linear-gradient(180deg, #d946ef, #ec4899); }
        .val-theme-pink .val-icon-box { background: #fdf2f8; color: #db2777; }
        .val-theme-pink .val-arrow-circle { background: #fdf2f8; color: #db2777; }
        .val-theme-pink .val-card-wave { background: rgba(251, 207, 232, 0.7); }

        .val-theme-cyan .val-left-stripe { background: linear-gradient(180deg, #0284c7, #38bdf8); }
        .val-theme-cyan .val-icon-box { background: #e0f2fe; color: #0284c7; }
        .val-theme-cyan .val-arrow-circle { background: #e0f2fe; color: #0284c7; }
        .val-theme-cyan .val-card-wave { background: rgba(186, 230, 253, 0.7); }

        .val-theme-purple .val-left-stripe { background: linear-gradient(180deg, #7c3aed, #a855f7); }
        .val-theme-purple .val-icon-box { background: #f3e8ff; color: #7c3aed; }
        .val-theme-purple .val-arrow-circle { background: #f3e8ff; color: #7c3aed; }
        .val-theme-purple .val-card-wave { background: rgba(233, 213, 255, 0.7); }

        .val-theme-teal .val-left-stripe { background: linear-gradient(180deg, #0d9488, #10b981); }
        .val-theme-teal .val-icon-box { background: #ccfbf1; color: #0d9488; }
        .val-theme-teal .val-arrow-circle { background: #ccfbf1; color: #0d9488; }
        .val-theme-teal .val-card-wave { background: rgba(167, 243, 208, 0.7); }

        .val-theme-coral .val-left-stripe { background: linear-gradient(180deg, #f43f5e, #fb7185); }
        .val-theme-coral .val-icon-box { background: #ffe4e6; color: #f43f5e; }
        .val-theme-coral .val-arrow-circle { background: #ffe4e6; color: #f43f5e; }
        .val-theme-coral .val-card-wave { background: rgba(254, 205, 211, 0.7); }

        @media (max-width: 1024px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
          .val-custom-card {
            padding: 1.75rem 1.5rem;
          }
        }

        .journey-full-section {
          scroll-margin-top: calc(var(--header-height) + 2rem);
        }

        .leadership-section {
          scroll-margin-top: calc(var(--header-height) + 2rem);
        }

        .milestones-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .ms-custom-card {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          padding: 2.15rem 2rem;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .ms-custom-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 38px -8px rgba(0, 0, 0, 0.08);
          border-color: rgba(203, 213, 225, 1);
        }

        .ms-left-stripe {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5.5px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        .ms-card-wave {
          position: absolute;
          right: -10px;
          bottom: -10px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          filter: blur(28px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.7;
        }

        .ms-card-top {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.35rem;
        }

        .ms-top-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .ms-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .ms-custom-card:hover .ms-icon-box {
          transform: scale(1.06);
        }

        .ms-phase-badge {
          display: inline-block;
          padding: 0.32rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .ms-number-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .ms-number {
          font-size: 2.1rem;
          font-weight: 850;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .ms-number-line {
          width: 32px;
          height: 3px;
          border-radius: 99px;
          margin-top: 4px;
        }

        .ms-title {
          position: relative;
          z-index: 1;
          font-size: 1.32rem;
          font-weight: 750;
          color: #0f172a;
          margin-bottom: 0.55rem;
          letter-spacing: -0.01em;
        }

        .ms-desc {
          position: relative;
          z-index: 1;
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.62;
          margin: 0;
          font-weight: 450;
        }

        /* Milestone Themes */
        .ms-theme-blue .ms-left-stripe { background: linear-gradient(180deg, #2563eb, #38bdf8); }
        .ms-theme-blue .ms-icon-box { background: #e0f2fe; color: #0284c7; }
        .ms-theme-blue .ms-phase-badge { background: #e0f2fe; color: #0284c7; border: 1px solid rgba(186, 230, 253, 0.8); }
        .ms-theme-blue .ms-number { background: linear-gradient(135deg, #2563eb, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .ms-theme-blue .ms-number-line { background: #2563eb; }
        .ms-theme-blue .ms-card-wave { background: rgba(186, 230, 253, 0.7); }

        .ms-theme-purple .ms-left-stripe { background: linear-gradient(180deg, #c026d3, #ec4899); }
        .ms-theme-purple .ms-icon-box { background: #f3e8ff; color: #a855f7; }
        .ms-theme-purple .ms-phase-badge { background: #f3e8ff; color: #a855f7; border: 1px solid rgba(233, 213, 255, 0.8); }
        .ms-theme-purple .ms-number { background: linear-gradient(135deg, #a855f7, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .ms-theme-purple .ms-number-line { background: #c026d3; }
        .ms-theme-purple .ms-card-wave { background: rgba(243, 232, 255, 0.7); }

        .ms-theme-teal .ms-left-stripe { background: linear-gradient(180deg, #0d9488, #14b8a6); }
        .ms-theme-teal .ms-icon-box { background: #ccfbf1; color: #0d9488; }
        .ms-theme-teal .ms-phase-badge { background: #ccfbf1; color: #0d9488; border: 1px solid rgba(153, 246, 228, 0.8); }
        .ms-theme-teal .ms-number { background: linear-gradient(135deg, #0d9488, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .ms-theme-teal .ms-number-line { background: #0d9488; }
        .ms-theme-teal .ms-card-wave { background: rgba(204, 251, 241, 0.7); }

        .ms-theme-amber .ms-left-stripe { background: linear-gradient(180deg, #f59e0b, #fbbf24); }
        .ms-theme-amber .ms-icon-box { background: #fef3c7; color: #d97706; }
        .ms-theme-amber .ms-phase-badge { background: #fef3c7; color: #d97706; border: 1px solid rgba(253, 230, 138, 0.8); }
        .ms-theme-amber .ms-number { background: linear-gradient(135deg, #f59e0b, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .ms-theme-amber .ms-number-line { background: #f59e0b; }
        .ms-theme-amber .ms-card-wave { background: rgba(254, 243, 199, 0.7); }

        .ms-theme-magenta .ms-left-stripe { background: linear-gradient(180deg, #d946ef, #7c3aed); }
        .ms-theme-magenta .ms-icon-box { background: #fce7f3; color: #db2777; }
        .ms-theme-magenta .ms-phase-badge { background: #fce7f3; color: #db2777; border: 1px solid rgba(251, 207, 232, 0.8); }
        .ms-theme-magenta .ms-number { background: linear-gradient(135deg, #db2777, #9333ea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .ms-theme-magenta .ms-number-line { background: #db2777; }
        .ms-theme-magenta .ms-card-wave { background: rgba(252, 231, 243, 0.7); }

        .ms-theme-indigo .ms-left-stripe { background: linear-gradient(180deg, #2563eb, #4f46e5); }
        .ms-theme-indigo .ms-icon-box { background: #eff6ff; color: #2563eb; }
        .ms-theme-indigo .ms-phase-badge { background: #eff6ff; color: #2563eb; border: 1px solid rgba(191, 219, 254, 0.8); }
        .ms-theme-indigo .ms-number { background: linear-gradient(135deg, #2563eb, #4f46e5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .ms-theme-indigo .ms-number-line { background: #2563eb; }
        .ms-theme-indigo .ms-card-wave { background: rgba(219, 234, 254, 0.7); }

        @media (max-width: 1024px) {
          .milestones-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .milestones-grid {
            grid-template-columns: 1fr;
          }
          .ms-custom-card {
            padding: 1.75rem 1.5rem;
          }
        }

        .leadership-card {
          padding: 2.25rem 2.5rem;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2.25rem;
          align-items: center;
        }

        .leader-info h3 {
          font-size: 1.75rem;
          margin-top: 0.35rem;
          margin-bottom: 0.25rem;
        }

        .leader-role {
          color: var(--brand-primary);
          font-weight: 600;
          font-size: 0.925rem;
          margin-bottom: 1.15rem;
        }

        .leader-bio {
          font-size: 0.975rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.15rem;
        }

        .leader-quote {
          border-left: 2px solid var(--brand-primary);
          padding-left: 1rem;
          font-style: italic;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .leader-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .leadership-pillars {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .leadership-pillar-item {
          background: #f8fafc;
          border: 1px solid var(--border-subtle);
          padding: 1rem 1.15rem;
          border-radius: var(--radius-md);
        }

        .leadership-pillar-item strong {
          display: block;
          color: var(--text-primary);
          font-size: 0.925rem;
          margin-bottom: 0.2rem;
        }

        .leadership-pillar-item span {
          font-size: 0.825rem;
          color: var(--text-muted);
          line-height: 1.45;
        }

        .about-cta-card {
          text-align: center;
          padding: 2.5rem 1.75rem;
          max-width: 860px;
          margin: 0 auto;
        }

        .about-cta-card h2 {
          font-size: 2rem;
          margin-bottom: 0.65rem;
        }

        .about-cta-card p {
          color: var(--text-muted);
          font-size: 1.05rem;
          max-width: 620px;
          margin: 0 auto 2rem;
        }

        .cta-btn-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .story-grid, .leadership-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .timeline-full {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .about-hero {
            padding-top: calc(var(--header-height) + 1.25rem);
            padding-bottom: 1.5rem;
          }
          .about-hero-title {
            font-size: 1.85rem;
            margin: 0.35rem 0 0.25rem;
          }
          .about-hero-subheading {
            font-size: 1.05rem;
            margin-bottom: 0.5rem;
          }
          .about-hero-copy {
            font-size: 0.885rem;
            line-height: 1.5;
          }
          .story-card, .leadership-card {
            padding: 1.15rem 0.95rem;
            border-radius: 16px;
          }
          .story-lead-col h2 {
            font-size: 1.35rem;
          }
          .story-accent-bar {
            margin-top: 0.45rem;
            margin-bottom: 0.65rem;
          }
          .story-image-wrap {
            height: 140px;
            margin-bottom: 0.75rem;
          }
          .story-content-col p {
            font-size: 0.835rem;
            line-height: 1.5;
            margin-bottom: 0.55rem;
          }
          .story-content-col p.highlight-text {
            font-size: 0.835rem;
            margin-top: 0.65rem;
            padding-left: 0.65rem;
          }
          .vm-grid {
            gap: 0.75rem;
          }
          .vm-custom-card {
            padding: 1.15rem 0.95rem;
            border-radius: 16px;
          }
          .vm-icon-gradient {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            margin-bottom: 0.65rem;
          }
          .vm-badge {
            font-size: 0.65rem;
            padding: 0.2rem 0.55rem;
            margin-bottom: 0.45rem;
          }
          .vm-title {
            font-size: 1.35rem;
          }
          .vm-accent-line {
            margin-top: 0.35rem;
            margin-bottom: 0.65rem;
          }
          .vm-description {
            font-size: 0.835rem;
            line-height: 1.5;
          }
          .values-grid, .milestones-grid {
            gap: 0.75rem;
          }
          .val-custom-card, .ms-custom-card {
            padding: 1rem 0.9rem;
            border-radius: 16px;
          }
          .val-card-top, .ms-card-top {
            margin-bottom: 0.65rem;
          }
          .val-icon-box, .ms-icon-box {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
          .val-title, .ms-title {
            font-size: 1.05rem;
            margin-bottom: 0.25rem;
          }
          .val-desc, .ms-desc {
            font-size: 0.8rem;
            line-height: 1.45;
          }
          .ms-number {
            font-size: 1.45rem;
          }
          .leader-info h3 {
            font-size: 1.25rem;
            margin-bottom: 0.2rem;
          }
          .leader-role {
            font-size: 0.8rem;
            margin-bottom: 0.65rem;
          }
          .leader-bio {
            font-size: 0.825rem;
            line-height: 1.5;
            margin-bottom: 0.65rem;
          }
          .leader-quote {
            font-size: 0.8rem;
            margin-bottom: 0.85rem;
          }
          .leadership-pillars {
            gap: 0.55rem;
            margin-top: 0.85rem;
          }
          .leadership-pillar-item {
            padding: 0.65rem 0.75rem;
          }
          .leadership-pillar-item strong {
            font-size: 0.825rem;
          }
          .leadership-pillar-item span {
            font-size: 0.76rem;
          }
          .about-cta-card {
            padding: 1.35rem 0.95rem;
            border-radius: 16px;
          }
          .about-cta-card h2 {
            font-size: 1.35rem;
            margin-bottom: 0.35rem;
          }
          .about-cta-card p {
            font-size: 0.825rem;
            margin-bottom: 1rem;
          }
          .cta-btn-wrap {
            flex-direction: column;
            width: 100%;
            gap: 0.55rem;
          }
          .cta-btn-wrap .btn {
            width: 100%;
            justify-content: center;
            min-height: 42px;
            font-size: 0.875rem;
          }
          .leader-actions {
            flex-direction: column;
            width: 100%;
            gap: 0.55rem;
          }
          .leader-actions .btn, .leader-actions a {
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
