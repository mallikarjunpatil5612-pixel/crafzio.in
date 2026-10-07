import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight 
} from 'lucide-react';
import { fetchServiceDetail, fetchServices } from '../services/api';
import ProjectEnquiryForm from '../components/forms/ProjectEnquiryForm';

export default function ServiceDetail({ onOpenTalkModal }) {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [detailRes, listRes] = await Promise.all([
        fetchServiceDetail(slug),
        fetchServices()
      ]);

      if (detailRes && detailRes.data) {
        setService(detailRes.data);
      }
      if (listRes && listRes.data) {
        setAllServices(listRes.data);
      }
      setLoading(false);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <p>Loading service capabilities...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Service Not Found</h2>
        <p>The requested service detail could not be found.</p>
        <Link to="/services" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Services
        </Link>
      </div>
    );
  }

  const otherServices = allServices.filter((s) => s.slug !== slug);
  const serviceImg = service.image || `/services/${service.slug}.jpg`;

  return (
    <div className="service-detail-page">
      {/* Breadcrumb Header */}
      <section className="service-detail-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services">Services</Link>
            <ChevronRight size={14} />
            <span>{service.title}</span>
          </nav>

          <div className="service-hero-grid animate-fade-in">
            <div className="service-hero-main">
              <span className="eyebrow"><Sparkles size={14} /> {service.title}</span>
              <h1 className="service-hero-headline">{service.headline}</h1>
              <p className="service-hero-desc">{service.full_desc}</p>
              <div className="hero-btn-group">
                <button onClick={onOpenTalkModal} className="btn btn-primary btn-lg">
                  <MessageSquare size={18} />
                  <span>{service.cta || 'Discuss Your Requirement'}</span>
                </button>
              </div>
            </div>

            <div className="service-hero-visual-card glass-card">
              <img 
                src={serviceImg} 
                alt={service.title} 
                className="service-hero-visual-img" 
              />
              <div className="visual-card-overlay"></div>
              <div className="visual-badge">Enterprise Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build & Capabilities Section */}
      <section className="section capabilities-section">
        <div className="container">
          <div className="grid-2 detail-capabilities-grid">
            {/* What We Build */}
            <div className="capability-box cap-theme-blue">
              <div className="cap-left-stripe"></div>
              <div className="cap-card-wave" aria-hidden="true"></div>
              <span className="eyebrow">Solutions Portfolio</span>
              <h2>What we build</h2>
              <p className="box-intro">Purpose-designed digital assets suited for your specific industry requirements.</p>

              <ul className="capability-checklist">
                {service.what_we_build.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Capabilities */}
            <div className="capability-box cap-theme-purple">
              <div className="cap-left-stripe"></div>
              <div className="cap-card-wave" aria-hidden="true"></div>
              <span className="eyebrow">Technical Architecture</span>
              <h2>Core capabilities</h2>
              <p className="box-intro">Engineered to enterprise standards with performance, security, and scalability.</p>

              <ul className="capability-checklist">
                {service.capabilities.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="check-icon cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Project Enquiry Form */}
      <section className="section inline-enquiry-section">
        <div className="container">
          <div className="enquiry-wrapper">
            <ProjectEnquiryForm initialService={service.title} />
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="section other-services-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Explore More</span>
            <h2>Complementary Services</h2>
            <p className="lead">Integrate additional digital engineering capabilities into your technology roadmap.</p>
          </div>

          <div className="grid-3">
            {otherServices.slice(0, 3).map((s) => (
              <div key={s.slug} className="glass-card other-card">
                <div className="other-card-img-wrap">
                  <img 
                    src={s.image || `/services/${s.slug}.jpg`} 
                    alt={s.title} 
                    className="other-card-img" 
                    loading="lazy"
                  />
                  <div className="other-card-overlay"></div>
                </div>
                <div className="other-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.short_desc}</p>
                  <Link to={`/services/${s.slug}`} className="other-link">
                    <span>Learn more</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .service-detail-hero {
          padding-top: calc(var(--header-height) + 2.5rem);
          padding-bottom: 4rem;
          position: relative;
        }

        .service-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
          margin-top: 1rem;
        }

        .service-hero-main {
          max-width: 750px;
        }

        .service-hero-visual-card {
          position: relative;
          padding: 0 !important;
          overflow: hidden;
          border-radius: var(--radius-xl);
          height: 320px;
          border: 1px solid rgba(0, 240, 255, 0.3);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 240, 255, 0.15);
        }

        .service-hero-visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .visual-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 19, 43, 0.2) 0%, rgba(11, 19, 43, 0.75) 100%);
          pointer-events: none;
        }

        .visual-badge {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          background: rgba(11, 19, 43, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(0, 240, 255, 0.4);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .service-hero-headline {
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          margin: 1.25rem 0;
          line-height: 1.2;
        }

        .service-hero-desc {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .hero-btn-group {
          display: flex;
          gap: 1rem;
        }

        .capability-box {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          padding: 2.75rem 2.25rem;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .capability-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 38px -8px rgba(0, 0, 0, 0.08);
          border-color: rgba(203, 213, 225, 1);
        }

        .cap-left-stripe {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5.5px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }

        .cap-card-wave {
          position: absolute;
          right: -15px;
          bottom: -15px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          filter: blur(28px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.65;
        }

        .capability-box h2 {
          position: relative;
          z-index: 1;
          font-size: 1.85rem;
          font-weight: 750;
          color: #0f172a;
          margin: 0.75rem 0 0.5rem;
          letter-spacing: -0.01em;
        }

        .box-intro {
          position: relative;
          z-index: 1;
          font-size: 0.95rem;
          color: #64748b;
          margin-bottom: 1.75rem;
          line-height: 1.6;
        }

        .capability-checklist {
          position: relative;
          z-index: 1;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .capability-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.965rem;
          color: #334155;
          font-weight: 480;
        }

        .cap-theme-blue .cap-left-stripe { background: linear-gradient(180deg, #2563eb, #38bdf8); }
        .cap-theme-blue .cap-card-wave { background: rgba(186, 230, 253, 0.65); }
        .cap-theme-blue .check-icon { color: #2563eb; flex-shrink: 0; margin-top: 3px; }

        .cap-theme-purple .cap-left-stripe { background: linear-gradient(180deg, #c026d3, #7c3aed); }
        .cap-theme-purple .cap-card-wave { background: rgba(243, 232, 255, 0.65); }
        .cap-theme-purple .check-icon { color: #c026d3; flex-shrink: 0; margin-top: 3px; }

        .enquiry-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        /* Other Service Cards */
        .other-card {
          padding: 0 !important;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-subtle);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .other-card:hover {
          border-color: rgba(0, 229, 255, 0.45);
          box-shadow: 0 16px 36px -4px rgba(29, 78, 216, 0.14), 0 0 22px rgba(0, 229, 255, 0.15);
          transform: translateY(-4px);
        }

        .other-card-img-wrap {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: #0b132b;
        }

        .other-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .other-card:hover .other-card-img {
          transform: scale(1.08);
        }

        .other-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 19, 43, 0.1) 0%, rgba(11, 19, 43, 0.6) 100%);
          pointer-events: none;
        }

        .other-card-body {
          padding: 1.35rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .other-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .other-card p {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .other-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--brand-primary);
          margin-top: auto;
        }

        .other-link:hover {
          gap: 0.6rem;
        }

        @media (max-width: 900px) {
          .service-hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .service-hero-visual-card {
            height: 240px;
          }
        }

        @media (max-width: 768px) {
          .capability-box {
            padding: 2rem;
          }
        }

        @media (max-width: 640px) {
          .service-detail-hero {
            padding-top: calc(var(--header-height) + 1.5rem);
            padding-bottom: 2.5rem;
          }
          .hero-btn-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn-group .btn {
            width: 100%;
          }
          .capability-box {
            padding: 1.5rem 1.15rem;
          }
        }
      `}</style>
    </div>
  );
}
