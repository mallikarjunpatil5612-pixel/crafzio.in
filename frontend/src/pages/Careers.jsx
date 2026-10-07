import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Briefcase, 
  Heart, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  Loader2, 
  AlertCircle,
  X,
  Compass,
  Target,
  MessageSquare,
  Laptop,
  AppWindow,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import { submitCareerApplication } from '../services/api';

const WHAT_WE_LOOK_FOR = [
  { 
    id: 'curiosity',
    title: 'Curiosity', 
    desc: 'An intrinsic desire to explore how systems work and how they can be engineered better.',
    icon: Compass,
    theme: 'theme-blue'
  },
  { 
    id: 'problem-solving',
    title: 'Problem Solving', 
    desc: 'Approaching challenges methodically with first-principles reasoning.',
    icon: Target,
    theme: 'theme-purple'
  },
  { 
    id: 'communication',
    title: 'Communication', 
    desc: 'Articulating technical tradeoffs clearly with both teammates and business clients.',
    icon: MessageSquare,
    theme: 'theme-cyan'
  },
  { 
    id: 'technical-capability',
    title: 'Technical Capability', 
    desc: 'Solid software craftsmanship, architecture design, and attention to code quality.',
    icon: Laptop,
    theme: 'theme-indigo'
  },
  { 
    id: 'ui-ux-design',
    title: 'UI/UX Design', 
    desc: 'Designing intuitive user flows, clear visual hierarchy, and polished interfaces that delight users.',
    icon: AppWindow,
    theme: 'theme-pink'
  },
  { 
    id: 'creativity',
    title: 'Creativity', 
    desc: 'Thinking beyond textbook solutions to design intuitive, memorable digital experiences.',
    icon: Lightbulb,
    theme: 'theme-green'
  },
  { 
    id: 'ownership',
    title: 'Ownership', 
    desc: 'Taking full accountability for the reliability and longevity of what you build.',
    icon: ShieldCheck,
    theme: 'theme-royal'
  },
  { 
    id: 'willingness-to-learn',
    title: 'Willingness to Learn', 
    desc: 'Embracing evolving technologies and continuously expanding technical depth.',
    icon: TrendingUp,
    theme: 'theme-violet'
  }
];

const OPEN_POSITIONS = [
  {
    title: 'Full Stack Engineer (React & Python)',
    department: 'Software Engineering',
    location: 'Hybrid / Remote, India',
    type: 'Full-Time',
    experience: '2–4 Years',
    responsibilities: [
      'Design and develop high-performance web applications using React and Python/Flask/FastAPI.',
      'Implement scalable REST APIs, relational database schemas, and clean state management.',
      'Collaborate with UI/UX designers to translate Figma design systems into pixel-perfect code.',
      'Participate in code reviews, automated testing, and performance optimization.'
    ],
    requirements: [
      'Proficiency in modern JavaScript/TypeScript, React 18+, and component-driven architecture.',
      'Solid experience developing backend services and APIs with Python.',
      'Familiarity with SQL (PostgreSQL, SQLite), Docker, and Git workflows.',
      'Strong eye for UI polish, responsive CSS, and micro-interactions.'
    ]
  },
  {
    title: 'UI/UX & Product Designer',
    department: 'Product Design',
    location: 'Remote, India',
    type: 'Full-Time / Contract',
    experience: '2+ Years',
    responsibilities: [
      'Design user flows, wireframes, and interactive prototypes for web applications and mobile products.',
      'Maintain and expand scalable Figma design systems and component libraries.',
      'Conduct stakeholder discovery and translate complex business processes into intuitive layouts.'
    ],
    requirements: [
      'Strong portfolio demonstrating high-end digital product, web app, or SaaS design.',
      'Mastery of Figma, auto-layout, design tokens, and interactive prototyping.',
      'Deep understanding of typography, contrast, visual hierarchy, and responsive web principles.'
    ]
  }
];

export default function Careers() {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('General Application');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'General Application',
    experience: '',
    portfolio_url: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleOpenApply = (roleTitle) => {
    setSelectedRole(roleTitle);
    setFormData((prev) => ({ ...prev, role: roleTitle }));
    setSubmitSuccess(false);
    setErrorMsg('');
    setProfileModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitCareerApplication(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: selectedRole,
        experience: '',
        portfolio_url: '',
        notes: ''
      });
    } catch (err) {
      setErrorMsg(err.message || 'Could not submit your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="careers-page">
      {/* Hero */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content animate-fade-in">
            <span className="eyebrow"><Sparkles size={14} /> Join Our Team</span>
            <h1>Build the future with CrafZio.</h1>
            <p className="careers-hero-copy">
              We are building a team that believes technology should solve meaningful problems.
            </p>
            <button onClick={() => handleOpenApply('General Application')} className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem' }}>
              <Send size={18} />
              <span>Send Your Profile</span>
            </button>
          </div>
        </div>
      </section>

      {/* Life at CrafZio */}
      <section className="section culture-section">
        <div className="container">
          <div className="glass-card culture-card">
            <span className="eyebrow">Work Ethos</span>
            <h2>Life at CrafZio</h2>
            <p className="culture-lead">
              We value curiosity, ownership, learning and thoughtful execution.
            </p>
            <p className="culture-subtext">
              We are deliberate in our work. We believe the best digital solutions are crafted by curious minds who take deep ownership of every detail—from clean backend code to fluid UI transitions. There is no bureaucracy or unnecessary meetings; we prioritize focused engineering and high-trust autonomy.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Us Forward */}
      <section className="section traits-section">
        {/* Ambient Decorative Background Orbs from Design Mockup */}
        <div className="values-bg-glow-top-left" />
        <div className="values-bg-glow-bottom-right" />
        <div className="values-floating-orb-dot" />
        <div className="values-floating-orb-gradient" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header text-center" style={{ marginBottom: '3.5rem' }}>
            <div className="values-badge">
              <span className="values-badge-dash">—</span> OUR VALUES
            </div>
            <h2 className="values-heading">
              What Drives Us <span className="highlight-forward">Forward</span>
            </h2>
            <p className="values-lead">
              We believe in building great software through innovation, collaboration and a deep focus on people. These core values guide everything we do.
            </p>
          </div>

          <div className="values-cards-grid">
            {WHAT_WE_LOOK_FOR.map((trait) => {
              const IconComp = trait.icon || CheckCircle2;
              return (
                <div key={trait.id} className="value-card">
                  <div className={`value-icon-box ${trait.theme}`}>
                    <IconComp size={28} strokeWidth={2.2} />
                  </div>
                  <div className="value-card-body">
                    <h3>{trait.title}</h3>
                    <p>{trait.desc}</p>
                    <span className={`value-pill-indicator ${trait.theme}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section positions-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Opportunities</span>
            <h2>Open Positions</h2>
            <p className="lead">Explore current openings to help engineer next-generation digital products.</p>
          </div>

          <div className="positions-list">
            {OPEN_POSITIONS.map((job, idx) => (
              <div key={idx} className="glass-card position-card">
                <div className="position-head">
                  <div>
                    <div className="badge-group">
                      <span className="badge badge-cyan">{job.department}</span>
                      <span className="badge">{job.location}</span>
                      <span className="badge">{job.type}</span>
                    </div>
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-exp">Experience: {job.experience}</p>
                  </div>

                  <button
                    onClick={() => handleOpenApply(job.title)}
                    className="btn btn-primary"
                  >
                    <span>Apply for this Role</span>
                  </button>
                </div>

                <div className="job-details-grid">
                  <div>
                    <h4>Key Responsibilities:</h4>
                    <ul>
                      {job.responsibilities.map((r, rIdx) => (
                        <li key={rIdx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Requirements:</h4>
                    <ul>
                      {job.requirements.map((req, reqIdx) => (
                        <li key={reqIdx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Inquiries Notice */}
          <div className="general-inquiry-box glass-card">
            <h3>Don't see a role that matches your profile?</h3>
            <p>
              "We are always interested in meeting talented people, so you may still send us your profile for future opportunities."
            </p>
            <button
              onClick={() => handleOpenApply('General Application')}
              className="btn btn-secondary"
              style={{ marginTop: '1rem' }}
            >
              Send Your Profile for Future Roles
            </button>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {profileModalOpen && (
        <div className="modal-overlay" onClick={() => setProfileModalOpen(false)}>
          <div className="modal-content glass-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setProfileModalOpen(false)}>
              <X size={20} />
            </button>

            {submitSuccess ? (
              <div className="modal-success">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={56} className="success-icon" />
                </div>
                <h3>Profile Received</h3>
                <p className="success-message">
                  Thank you for sharing your profile. Our talent team will review your details for current and future opportunities.
                </p>
                <button
                  onClick={() => setProfileModalOpen(false)}
                  className="btn btn-primary btn-lg"
                  style={{ marginTop: '1.5rem', width: '100%' }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="modal-header">
                  <span className="eyebrow">Join CrafZio</span>
                  <h2>Apply: {selectedRole}</h2>
                  <p>Share your credentials, GitHub/portfolio link, and background.</p>
                </div>

                {errorMsg && (
                  <div className="error-banner">
                    <AlertCircle size={18} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label className="form-label">Full Name <span className="required">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sumanth Rao"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email Address <span className="required">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sumanth@example.com"
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Total Experience</label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="e.g. 3 years"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Portfolio / GitHub / LinkedIn URL</label>
                      <input
                        type="url"
                        name="portfolio_url"
                        value={formData.portfolio_url}
                        onChange={handleChange}
                        placeholder="https://github.com/username"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Brief Introduction / Notes</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us about the systems you've built and why you'd like to work with CrafZio..."
                      rows={3}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Submitting Profile...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .careers-hero {
          padding-top: calc(var(--header-height) + 4.5rem);
          padding-bottom: 3.5rem;
          text-align: center;
        }

        .careers-hero h1 {
          margin: 1rem 0;
          font-size: clamp(2.4rem, 5vw, 4rem);
        }

        .careers-hero-copy {
          max-width: 760px;
          margin: 0 auto;
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .culture-card {
          padding: 3.5rem 2.5rem;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .culture-card h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .culture-lead {
          font-size: 1.25rem;
          font-weight: 650;
          color: #2563eb;
          margin-bottom: 1.25rem;
        }

        .culture-subtext {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.8;
          max-width: 760px;
          margin: 0 auto;
        }

        /* Values Section - Matching Design Mockup */
        .traits-section {
          position: relative;
          overflow: hidden;
          background: #f8fafc;
          padding: 6rem 0;
        }

        .values-bg-glow-top-left {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(186, 230, 253, 0.45) 0%, rgba(248, 250, 252, 0) 70%);
          pointer-events: none;
          z-index: 1;
        }

        .values-bg-glow-bottom-right {
          position: absolute;
          bottom: -80px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(251, 207, 232, 0.35) 0%, rgba(248, 250, 252, 0) 70%);
          pointer-events: none;
          z-index: 1;
        }

        .values-floating-orb-dot {
          position: absolute;
          bottom: 120px;
          right: 70px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%);
          box-shadow: 0 4px 12px rgba(56, 189, 248, 0.35);
          pointer-events: none;
          z-index: 1;
        }

        .values-floating-orb-gradient {
          position: absolute;
          bottom: -40px;
          right: -20px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(244, 114, 182, 0.6) 0%, rgba(192, 132, 252, 0.7) 100%);
          filter: blur(8px);
          pointer-events: none;
          z-index: 1;
        }

        .values-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.785rem;
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #2563eb;
          background: #e0f2fe;
          padding: 0.35rem 1.15rem;
          border-radius: 999px;
          margin-bottom: 1.25rem;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
        }

        .values-badge-dash {
          font-weight: 850;
        }

        .values-heading {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          font-weight: 850;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 1.15rem;
          line-height: 1.18;
        }

        .highlight-forward {
          background: linear-gradient(90deg, #1d4ed8 0%, #3b82f6 40%, #d946ef 75%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }

        .highlight-forward::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #2563eb 0%, #ec4899 100%);
          border-radius: 999px;
        }

        .values-lead {
          max-width: 680px;
          margin: 0 auto;
          font-size: 1.075rem;
          color: #64748b;
          line-height: 1.68;
          font-weight: 450;
        }

        /* Cards Grid */
        .values-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .value-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 1.85rem 1.75rem;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 2px 8px -2px rgba(0, 0, 0, 0.02);
          display: flex;
          align-items: flex-start;
          gap: 1.35rem;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
          position: relative;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 45px -10px rgba(37, 99, 235, 0.1), 0 4px 14px rgba(0, 0, 0, 0.04);
          border-color: rgba(199, 210, 254, 0.9);
        }

        /* Value Icon Boxes */
        .value-icon-box {
          width: 66px;
          height: 66px;
          border-radius: 20px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .value-card:hover .value-icon-box {
          transform: scale(1.08) rotate(2deg);
        }

        /* Theme Color Presets */
        .theme-blue {
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          border: 1px solid rgba(186, 230, 253, 0.9);
          color: #0284c7;
          box-shadow: 0 8px 18px -4px rgba(14, 165, 233, 0.28);
        }

        .theme-purple {
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          border: 1px solid rgba(233, 213, 255, 0.9);
          color: #9333ea;
          box-shadow: 0 8px 18px -4px rgba(168, 85, 247, 0.28);
        }

        .theme-cyan {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border: 1px solid rgba(191, 219, 254, 0.9);
          color: #2563eb;
          box-shadow: 0 8px 18px -4px rgba(37, 99, 235, 0.25);
        }

        .theme-indigo {
          background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
          border: 1px solid rgba(221, 214, 254, 0.9);
          color: #6366f1;
          box-shadow: 0 8px 18px -4px rgba(99, 102, 241, 0.28);
        }

        .theme-pink {
          background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
          border: 1px solid rgba(251, 207, 232, 0.9);
          color: #db2777;
          box-shadow: 0 8px 18px -4px rgba(236, 72, 153, 0.28);
        }

        .theme-green {
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          border: 1px solid rgba(209, 250, 229, 0.9);
          color: #059669;
          box-shadow: 0 8px 18px -4px rgba(16, 185, 129, 0.25);
        }

        .theme-royal {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border: 1px solid rgba(191, 219, 254, 0.9);
          color: #1d4ed8;
          box-shadow: 0 8px 18px -4px rgba(29, 78, 216, 0.28);
        }

        .theme-violet {
          background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
          border: 1px solid rgba(221, 214, 254, 0.9);
          color: #7c3aed;
          box-shadow: 0 8px 18px -4px rgba(124, 58, 237, 0.28);
        }

        /* Card Body */
        .value-card-body {
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: flex-start;
          text-align: left;
        }

        .value-card-body h3 {
          font-size: 1.22rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.45rem;
          letter-spacing: -0.015em;
        }

        .value-card-body p {
          font-size: 0.915rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 0.85rem;
          font-weight: 450;
        }

        /* Indicator Pill Line */
        .value-pill-indicator {
          display: inline-block;
          width: 32px;
          height: 3.5px;
          border-radius: 999px;
          margin-top: auto;
        }

        .value-pill-indicator.theme-blue { background: #0284c7; }
        .value-pill-indicator.theme-purple { background: #9333ea; }
        .value-pill-indicator.theme-cyan { background: #2563eb; }
        .value-pill-indicator.theme-indigo { background: #6366f1; }
        .value-pill-indicator.theme-pink { background: #db2777; }
        .value-pill-indicator.theme-green { background: #10b981; }
        .value-pill-indicator.theme-royal { background: #1d4ed8; }
        .value-pill-indicator.theme-violet { background: #7c3aed; }

        @media (max-width: 1024px) {
          .values-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .positions-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .position-card {
          padding: 3rem;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .position-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .badge-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .job-title {
          font-size: 1.8rem;
          margin-bottom: 0.35rem;
        }

        .job-exp {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .job-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .job-details-grid h4 {
          font-size: 1.05rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .job-details-grid ul {
          list-style: disc;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .job-details-grid li {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .general-inquiry-box {
          text-align: center;
          padding: 3rem 2rem;
          margin-top: 3rem;
          background: #ffffff;
          border-radius: 20px;
          border: 1px dashed rgba(203, 213, 225, 0.9);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.03);
        }

        .general-inquiry-box h3 {
          font-size: 1.4rem;
          font-weight: 750;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .general-inquiry-box p {
          color: #64748b;
          font-style: italic;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .traits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .position-head {
            flex-direction: column;
            align-items: flex-start;
          }
          .job-details-grid {
            grid-template-columns: 1fr;
          }
          .position-card {
            padding: 2rem;
          }
        }

        @media (max-width: 640px) {
          .careers-hero {
            padding-top: calc(var(--header-height) + 1.5rem);
            padding-bottom: 2.5rem;
          }
          .culture-card {
            padding: 2rem 1.15rem;
          }
          .values-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.15rem;
          }
          .value-card {
            padding: 1.5rem 1.25rem;
            gap: 1.1rem;
          }
          .value-icon-box {
            width: 54px;
            height: 54px;
            border-radius: 16px;
          }
          .position-card {
            padding: 1.5rem 1.15rem;
          }
          .position-head {
            align-items: stretch;
            gap: 1.25rem;
          }
          .position-head .btn {
            width: 100%;
          }
          .general-inquiry-box {
            padding: 2rem 1.15rem;
          }
          .general-inquiry-box .btn {
            width: 100%;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
