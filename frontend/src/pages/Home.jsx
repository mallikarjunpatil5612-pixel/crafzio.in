import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Monitor, 
  Smartphone, 
  PenTool, 
  Settings, 
  LayoutGrid, 
  Zap, 
  Shield, 
  Star,
  Play,
  X,
  Check
} from 'lucide-react';
import { CORPORATE_CONFIG } from '../config/corporate';

export default function Home({ onOpenTalkModal }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const videoRef = useRef(null);

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoModalOpen(false);
  };

  const serviceCards = [
    {
      icon: Monitor,
      title: 'Website Development',
      desc: 'Build a strong online presence with modern, fast and responsive websites tailored to your needs.',
      path: '/services/website-development',
      colorTheme: 'orange',
      themeColor: '#f97316',
      items: [
        'Business Websites',
        'Portfolio Websites',
        'E-commerce Websites',
        'Landing Pages',
        'Custom Websites'
      ],
      image: '/services/home-website-dev.jpg'
    },
    {
      icon: Smartphone,
      title: 'Web Application Development',
      desc: 'Scalable and powerful web applications to turn your ideas into interactive digital solutions.',
      path: '/services/web-application-development',
      colorTheme: 'blue',
      themeColor: '#2563eb',
      items: [
        'Custom Web Applications',
        'SaaS Development',
        'Backend APIs',
        'API Development',
        'Maintenance & Support'
      ],
      image: '/services/home-webapp-dev.jpg'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Create seamless mobile experiences with high-performance, user-friendly applications.',
      path: '/services/mobile-app-development',
      colorTheme: 'purple',
      themeColor: '#9333ea',
      items: [
        'Android App Development',
        'iOS App Development',
        'Cross-Platform Apps',
        'App UI/UX Design',
        'App Maintenance'
      ],
      image: '/services/home-mobile-dev.jpg'
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      desc: 'Designing experiences that are simple, intuitive and impactful.',
      path: '/services/ui-ux-design',
      colorTheme: 'pink',
      themeColor: '#ec4899',
      items: [
        'User Research',
        'Wireframing & Prototyping',
        'UI Design',
        'UX Design',
        'Responsive Design'
      ],
      image: '/services/home-ui-ux.jpg'
    },
    {
      icon: Settings,
      title: 'CRM & Business Software',
      desc: 'Streamline your operations with smart business management solutions.',
      path: '/services/crm-business-software',
      colorTheme: 'green',
      themeColor: '#10b981',
      items: [
        'Lead Management',
        'Customer Management',
        'Sales & Inventory',
        'Reporting & Analytics',
        'Custom Business Solutions'
      ],
      image: '/services/home-crm.jpg'
    },
    {
      icon: LayoutGrid,
      title: 'Custom Software Development',
      desc: 'Tailored software solutions to meet your unique business needs.',
      path: '/services/custom-software',
      colorTheme: 'indigo',
      themeColor: '#6366f1',
      items: [
        'Enterprise Software',
        'Business Applications',
        'System Integration',
        'Cloud Solutions',
        'Ongoing Support'
      ],
      image: '/services/home-custom-software.jpg'
    }
  ];

  return (
    <div className="home-page-root">
      {/* 1. Hero Section with Office Workspace Photo */}
      <section className="crafzio-hero-section">
        <div className="hero-bg-media">
          <img 
            src="/hero-office.jpg" 
            alt="CrafZio Modern Office Desk with Laptop and City View" 
            className="hero-bg-image" 
          />
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="container hero-inner-container">
          <div className="hero-grid">
            {/* Left Column: Headline, Description & Action Buttons */}
            <div className="hero-left-col">
              <div className="hero-eyebrow-tag">
                <span>CRAFZIO — TECHNOLOGY &amp; DIGITAL SOLUTIONS</span>
              </div>

              <h1 className="hero-main-title">
                Building <span className="hero-gradient-text">Digital Solutions</span><br />
                for a Changing World.
              </h1>

              <p className="hero-lead-text">
                CrafZio is a technology company helping businesses transform ideas, processes and opportunities into modern digital experiences.
              </p>

              <p className="hero-sublead-text">
                From websites and applications to business software and custom technology solutions, we design and build digital products around real business needs.
              </p>

              <div className="hero-buttons-row">
                <Link to="/services" className="hero-btn-gradient">
                  <span>Explore Our Services</span>
                  <ArrowRight size={17} />
                </Link>

                <button 
                  onClick={() => onOpenTalkModal()} 
                  className="hero-btn-glass"
                  aria-label="Talk to CrafZio"
                >
                  <MessageSquare size={17} />
                  <span>Talk to CrafZio</span>
                </button>
              </div>
            </div>

            {/* Right Column: Handwritten Cursive Script Tag */}
            <div className="hero-right-col">
              <div className="hero-script-tag">
                <span className="script-line-1">Your</span>
                <span className="script-line-2">Technology</span>
                <span className="script-line-3">Partner</span>
                <svg className="script-underline-svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                  <path d="M4 14C45 4 95 5 136 15" stroke="#ec4899" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "OUR SERVICES" Section with 6 Feature Cards */}
      <section id="services" className="crafzio-services-section">
        <div className="container">
          <div className="services-cards-grid-v2">
            {serviceCards.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className={`service-v2-card theme-${service.colorTheme}`}>
                  {/* Subtle top-right ambient glow */}
                  <div className="service-v2-glow"></div>

                  <div className="service-v2-header">
                    <div className="service-v2-icon-wrap">
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="service-v2-title">{service.title}</h3>
                  <p className="service-v2-desc">{service.desc}</p>

                  <div className="service-v2-content-split">
                    <div className="service-v2-left">
                      <ul className="service-v2-bullet-list">
                        {service.items.map((item, i) => (
                          <li key={i} className="service-v2-bullet-item">
                            <Check size={14} className="service-check-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to={service.path} className="service-v2-btn-pill">
                        <span>Learn More</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                    <div className="service-v2-illustration-wrap">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="service-v2-illustration-img"
                        loading="lazy" 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom Banner: "Need a Custom Solution?" with Mountain Summit Photo */}
      <section className="crafzio-custom-solution-section">
        <div className="container">
          <div className="custom-solution-banner">
            <img 
              src="/banner-custom-solution.jpg" 
              alt="Mountain Hiker Under Stars Working on Laptop" 
              className="custom-solution-bg-img" 
            />
            <div className="custom-solution-overlay"></div>

            <div className="custom-solution-content">
              <div className="custom-solution-left">
                <h2 className="custom-solution-title">Need a Custom Solution?</h2>
                <p className="custom-solution-subtitle">
                  Let's bring your ideas to life. Get a tailored solution for your business needs.
                </p>
                <button 
                  onClick={() => onOpenTalkModal()} 
                  className="custom-solution-btn"
                  aria-label="Talk to Our Team"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="custom-solution-badges">
                <div className="solution-badge-item">
                  <Zap size={20} className="badge-icon" />
                  <span>Innovative</span>
                </div>
                <div className="solution-badge-item">
                  <Shield size={20} className="badge-icon" />
                  <span>Reliable</span>
                </div>
                <div className="solution-badge-item">
                  <Star size={20} className="badge-icon" />
                  <span>Scalable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Video Modal */}
      {videoModalOpen && (
        <div className="video-modal-backdrop" onClick={handleCloseVideo}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button 
              className="video-modal-close" 
              onClick={handleCloseVideo}
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="video-modal-header">
              <span className="section-eyebrow-blue">GROWTH &amp; INNOVATION</span>
              <h3>Technology for a Better Tomorrow</h3>
            </div>
            
            <div className="video-player-container">
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                className="crafzio-video-element"
              >
                <source src="/crafzio-video.mp4" type="video/mp4" />
                <source src="/crafzio-video.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Component Scoped CSS */}
      <style>{`
        .home-page-root {
          background-color: #f8fafc;
          color: #0f172a;
          overflow-x: hidden;
        }

        /* 1. HERO SECTION - Compressed Layout */
        .crafzio-hero-section {
          position: relative;
          min-height: auto;
          display: flex;
          align-items: center;
          padding-top: calc(var(--header-height, 76px) + 1.25rem);
          padding-bottom: 3.25rem;
          overflow: hidden;
          background-color: #090018;
        }

        .hero-bg-media {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
        }

        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(8, 12, 24, 0.94) 0%, rgba(8, 12, 24, 0.8) 45%, rgba(8, 12, 24, 0.28) 80%, rgba(8, 12, 24, 0.12) 100%);
        }

        .hero-inner-container {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2.5rem;
          align-items: center;
        }

        /* Hero Left Column */
        .hero-left-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-eyebrow-tag {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #38bdf8;
          margin-bottom: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-main-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #38bdf8 0%, #60a5fa 40%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-lead-text {
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.6;
          color: #e2e8f0;
          margin-bottom: 0.65rem;
          max-width: 620px;
        }

        .hero-sublead-text {
          font-family: var(--font-body);
          font-size: 0.935rem;
          line-height: 1.55;
          color: #94a3b8;
          margin-bottom: 1.65rem;
          max-width: 600px;
        }

        .hero-buttons-row {
          display: flex;
          align-items: center;
          gap: 1.15rem;
          flex-wrap: wrap;
        }

        .hero-btn-gradient {
          font-family: var(--font-body);
          font-size: 0.975rem;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #ec4899 100%);
          padding: 0.85rem 1.85rem;
          border-radius: 9999px;
          border: none;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .hero-btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(37, 99, 235, 0.55);
        }

        .hero-btn-glass {
          font-family: var(--font-body);
          font-size: 0.975rem;
          font-weight: 500;
          color: #ffffff;
          background: rgba(15, 23, 42, 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.85rem 1.75rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .hero-btn-glass:hover {
          background: rgba(30, 41, 59, 0.8);
          border-color: rgba(255, 255, 255, 0.45);
          transform: translateY(-2px);
        }

        /* Hero Right Column: Cursive Script Tag */
        .hero-right-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          padding-top: 1rem;
        }

        .hero-script-tag {
          font-family: 'Caveat', cursive;
          font-size: 2.75rem;
          line-height: 1.05;
          color: #ffffff;
          text-shadow: 0 3px 18px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          transform: rotate(-5deg);
          user-select: none;
        }

        .script-line-1 {
          color: #ffffff;
        }

        .script-line-2 {
          color: #f1f5f9;
        }

        .script-line-3 {
          color: #f8fafc;
        }

        .script-underline-svg {
          margin-top: 2px;
          filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.65));
        }

        /* 2. SERVICES SECTION - Compressed Layout */
        .crafzio-services-section {
          padding: 2.75rem 0 2rem;
          background-color: #f8fafc;
        }

        .services-cards-grid-v2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.35rem;
        }

        .service-v2-card {
          background: #ffffff;
          border: 1px solid #edf2f7;
          border-radius: 20px;
          padding: 1.45rem 1.35rem 1.35rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-v2-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        /* Ambient Glow in Top-Right Corner */
        .service-v2-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 140px;
          height: 140px;
          pointer-events: none;
          border-radius: 0 24px 0 100%;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .service-v2-card:hover .service-v2-glow {
          opacity: 1;
        }

        /* Icon Badge */
        .service-v2-header {
          margin-bottom: 1.15rem;
          position: relative;
          z-index: 2;
        }

        .service-v2-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: transform 0.25s ease;
        }

        .service-v2-card:hover .service-v2-icon-wrap {
          transform: scale(1.06);
        }

        /* Typography */
        .service-v2-title {
          font-family: var(--font-heading);
          font-size: 1.28rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.45rem;
          line-height: 1.3;
          position: relative;
          z-index: 2;
        }

        .service-v2-desc {
          font-size: 0.865rem;
          color: #64748b;
          line-height: 1.55;
          margin-bottom: 1.25rem;
          min-height: 40px;
          position: relative;
          z-index: 2;
        }

        /* 2-Column Split: Bullet List on Left + Illustration on Right */
        .service-v2-content-split {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 0.85rem;
          align-items: flex-end;
          margin-top: auto;
          position: relative;
          z-index: 2;
        }

        .service-v2-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          justify-content: space-between;
        }

        .service-v2-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.35rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        .service-v2-bullet-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.825rem;
          font-weight: 500;
          color: #334155;
          line-height: 1.35;
        }

        .service-check-icon {
          flex-shrink: 0;
        }

        /* Solid Pill CTA Button */
        .service-v2-btn-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.15rem;
          border-radius: 9999px;
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.835rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .service-v2-btn-pill:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
        }

        /* Illustration Graphic */
        .service-v2-illustration-wrap {
          width: 100%;
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 12px;
        }

        .service-v2-illustration-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.35s ease;
        }

        .service-v2-card:hover .service-v2-illustration-img {
          transform: scale(1.06);
        }

        /* THEME STYLES (MATCHING 2ND PHOTO COLOR SCHEMES) */
        /* 1. Orange Theme (Website Dev) */
        .service-v2-card.theme-orange .service-v2-icon-wrap {
          background: #f97316;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.35);
        }
        .service-v2-card.theme-orange .service-check-icon {
          color: #f97316;
        }
        .service-v2-card.theme-orange .service-v2-btn-pill {
          background: #f97316;
        }
        .service-v2-card.theme-orange .service-v2-glow {
          background: radial-gradient(circle at top right, rgba(249, 115, 22, 0.14) 0%, transparent 70%);
        }

        /* 2. Blue Theme (Web App Dev) */
        .service-v2-card.theme-blue .service-v2-icon-wrap {
          background: #2563eb;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
        }
        .service-v2-card.theme-blue .service-check-icon {
          color: #2563eb;
        }
        .service-v2-card.theme-blue .service-v2-btn-pill {
          background: #2563eb;
        }
        .service-v2-card.theme-blue .service-v2-glow {
          background: radial-gradient(circle at top right, rgba(37, 99, 235, 0.14) 0%, transparent 70%);
        }

        /* 3. Purple Theme (Mobile App Dev) */
        .service-v2-card.theme-purple .service-v2-icon-wrap {
          background: #9333ea;
          box-shadow: 0 4px 12px rgba(147, 51, 234, 0.35);
        }
        .service-v2-card.theme-purple .service-check-icon {
          color: #9333ea;
        }
        .service-v2-card.theme-purple .service-v2-btn-pill {
          background: #9333ea;
        }
        .service-v2-card.theme-purple .service-v2-glow {
          background: radial-gradient(circle at top right, rgba(147, 51, 234, 0.14) 0%, transparent 70%);
        }

        /* 4. Pink Theme (UI/UX Design) */
        .service-v2-card.theme-pink .service-v2-icon-wrap {
          background: #ec4899;
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.35);
        }
        .service-v2-card.theme-pink .service-check-icon {
          color: #ec4899;
        }
        .service-v2-card.theme-pink .service-v2-btn-pill {
          background: #ec4899;
        }
        .service-v2-card.theme-pink .service-v2-glow {
          background: radial-gradient(circle at top right, rgba(236, 72, 153, 0.14) 0%, transparent 70%);
        }

        /* 5. Green Theme (CRM & Business Software) */
        .service-v2-card.theme-green .service-v2-icon-wrap {
          background: #10b981;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
        }
        .service-v2-card.theme-green .service-check-icon {
          color: #10b981;
        }
        .service-v2-card.theme-green .service-v2-btn-pill {
          background: #10b981;
        }
        .service-v2-card.theme-green .service-v2-glow {
          background: radial-gradient(circle at top right, rgba(16, 185, 129, 0.14) 0%, transparent 70%);
        }

        /* 6. Indigo Theme (Custom Software Development) */
        .service-v2-card.theme-indigo .service-v2-icon-wrap {
          background: #6366f1;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
        }
        .service-v2-card.theme-indigo .service-check-icon {
          color: #6366f1;
        }
        .service-v2-card.theme-indigo .service-v2-btn-pill {
          background: #6366f1;
        }
        .service-v2-card.theme-indigo .service-v2-glow {
          background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.14) 0%, transparent 70%);
        }

        @media (max-width: 1200px) {
          .services-cards-grid-v2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .services-cards-grid-v2 {
            grid-template-columns: 1fr;
          }
          .service-v2-content-split {
            grid-template-columns: 1fr;
            gap: 1.15rem;
          }
          .service-v2-illustration-wrap {
            height: 120px;
            order: -1;
          }
        }

        /* 3. "NEED A CUSTOM SOLUTION?" BANNER SECTION - Compressed */
        .crafzio-custom-solution-section {
          padding: 1.5rem 0 2.5rem;
          background-color: #f8fafc;
        }

        .custom-solution-banner {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          min-height: auto;
          display: flex;
          align-items: center;
          padding: 2.25rem 2.75rem;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
        }

        .custom-solution-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 60%;
        }

        .custom-solution-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(8, 12, 28, 0.94) 0%, rgba(8, 12, 28, 0.75) 50%, rgba(8, 12, 28, 0.35) 100%);
        }

        .custom-solution-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 2rem;
        }

        .custom-solution-left {
          max-width: 580px;
        }

        .custom-solution-title {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 3.2vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.025em;
          margin-bottom: 0.65rem;
          line-height: 1.18;
        }

        .custom-solution-subtitle {
          font-family: var(--font-body);
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.55;
          margin-bottom: 1.5rem;
        }

        .custom-solution-btn {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #ec4899 100%);
          padding: 0.8rem 1.65rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.4);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .custom-solution-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(37, 99, 235, 0.6);
        }

        .custom-solution-badges {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
        }

        .solution-badge-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: -0.01em;
        }

        .solution-badge-item .badge-icon {
          color: #38bdf8;
        }

        /* Video Modal Styles */
        .video-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeInModal 0.25s ease;
        }

        .video-modal-dialog {
          background: #0b1120;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 18px;
          width: 100%;
          max-width: 860px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          position: relative;
        }

        .video-modal-close {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .video-modal-close:hover {
          background: rgba(239, 68, 68, 0.8);
          border-color: #ef4444;
          transform: rotate(90deg);
        }

        .video-modal-header {
          padding: 1.25rem 1.5rem 0.85rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .video-modal-header h3 {
          color: #ffffff;
          font-size: 1.2rem;
          margin-top: 0.25rem;
        }

        .video-player-container {
          position: relative;
          width: 100%;
          background: #000000;
          aspect-ratio: 16 / 9;
        }

        .crafzio-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @keyframes fadeInModal {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-right-col {
            align-items: flex-start;
          }
          .hero-script-tag {
            align-items: flex-start;
            transform: rotate(-3deg);
            font-size: 2.25rem;
          }
          .services-cards-grid-v2 {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.15rem;
          }
          .custom-solution-content {
            flex-direction: column;
            align-items: flex-start;
          }
          .custom-solution-badges {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .crafzio-hero-section {
            padding-top: 4.5rem;
            padding-bottom: 1.5rem;
          }
          .hero-main-title {
            font-size: 1.75rem;
            line-height: 1.18;
            margin-bottom: 0.5rem;
          }
          .hero-eyebrow-tag {
            font-size: 0.72rem;
            letter-spacing: 1.2px;
            margin-bottom: 0.5rem;
          }
          .hero-lead-text {
            font-size: 0.885rem;
            line-height: 1.48;
            margin-bottom: 0.35rem;
          }
          .hero-sublead-text {
            font-size: 0.8125rem;
            line-height: 1.42;
            margin-bottom: 1rem;
          }
          .hero-script-tag {
            font-size: 1.55rem;
            transform: rotate(-2deg);
          }
          .crafzio-services-section {
            padding: 1.5rem 0 1rem;
          }
          .services-cards-grid-v2 {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .service-v2-card {
            padding: 1rem 0.85rem;
            border-radius: 16px;
          }
          .service-v2-header {
            margin-bottom: 0.55rem;
          }
          .service-v2-icon-wrap {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
          .service-v2-icon-wrap svg {
            width: 18px;
            height: 18px;
          }
          .service-v2-title {
            font-size: 1.1rem;
            margin-bottom: 0.25rem;
          }
          .service-v2-desc {
            font-size: 0.8125rem;
            line-height: 1.4;
            margin-bottom: 0.65rem;
            min-height: auto;
          }
          .service-v2-content-split {
            grid-template-columns: 1fr;
            gap: 0.6rem;
          }
          .service-v2-illustration-wrap {
            height: 75px;
            order: -1;
            margin-bottom: 0.25rem;
          }
          .service-v2-bullet-list {
            margin-bottom: 0.65rem;
            gap: 0.25rem;
          }
          .service-v2-bullet-item {
            font-size: 0.75rem;
            gap: 0.35rem;
          }
          .service-v2-btn-pill {
            padding: 0.4rem 0.85rem;
            font-size: 0.75rem;
          }
          .crafzio-custom-solution-section {
            padding: 1rem 0 1.25rem;
          }
          .custom-solution-banner {
            padding: 1.25rem 0.95rem;
            border-radius: 16px;
          }
          .custom-solution-title {
            font-size: 1.45rem;
            margin-bottom: 0.25rem;
          }
          .custom-solution-subtitle {
            font-size: 0.825rem;
            line-height: 1.42;
            margin-bottom: 0.85rem;
          }
          .custom-solution-badges {
            gap: 0.5rem;
            margin-top: 0.85rem;
          }
          .solution-badge-item {
            font-size: 0.775rem;
            padding: 0.25rem 0.55rem;
          }
          .custom-solution-btn {
            width: 100%;
            justify-content: center;
            min-height: 42px;
            font-size: 0.875rem;
            padding: 0.6rem 1rem;
          }
          .hero-buttons-row {
            flex-direction: column;
            width: 100%;
            gap: 0.65rem;
          }
          .hero-btn-gradient, .hero-btn-glass {
            width: 100%;
            justify-content: center;
            min-height: 42px;
            padding: 0.6rem 1.15rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
}
