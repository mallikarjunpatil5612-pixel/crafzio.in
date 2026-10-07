import React, { useState } from 'react';
import { Sparkles, Layers, Bell, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { subscribeNewsletter } from '../services/api';

export default function Products({ onOpenTalkModal }) {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifyStatus, setNotifyStatus] = useState(null);
  const [notifyMessage, setNotifyMessage] = useState('');

  const handleNotifySubmit = async (e) => {
    e.preventDefault();
    if (!notifyEmail) return;
    try {
      const res = await subscribeNewsletter(notifyEmail);
      setNotifyStatus('success');
      setNotifyMessage(res.message || 'You have been registered for product announcements!');
      setNotifyEmail('');
    } catch {
      setNotifyStatus('error');
      setNotifyMessage('Could not register notification. Please try again.');
    }
  };

  const upcomingProducts = [
    {
      name: 'CrafZio FlowCore',
      positioning: 'Lightweight Workflow & Dispatch Automation Engine',
      problem_solved: 'Eliminates departmental handoff lag and email-based approval delays for SMBs without the overhead of heavy enterprise suites.',
      capabilities: ['Visual trigger builder', 'Multi-channel notifications', 'Webhook sync', 'Granular audit log'],
      target_users: ['Operations Managers', 'Logistics Coordinators', 'SMB Teams'],
      status: 'In Active R&D',
    },
    {
      name: 'CrafZio OmniDesk',
      positioning: 'Frictionless Inbound Lead & Customer Experience Hub',
      problem_solved: 'Consolidates website inquiries, WhatsApp chats, and client communication into a zero-clutter dashboard with instant response routing.',
      capabilities: ['Unified inbox', 'Instant response automations', 'Lead qualification scoring', 'Client profile sync'],
      target_users: ['Sales & Customer Success Teams', 'Professional Service Agencies'],
      status: 'Private Alpha',
    }
  ];

  return (
    <div className="products-page">
      {/* Hero */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content animate-fade-in">
            <span className="eyebrow"><Sparkles size={14} /> Proprietary Platforms</span>
            <h1>Products built by CrafZio.</h1>
            <p className="products-hero-intro">
              Alongside client-focused solutions, CrafZio aims to build technology products designed to solve recurring business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Official Specification Statement */}
      <section className="section statement-section">
        <div className="container">
          <div className="glass-card official-statement-box">
            <div className="statement-icon-wrap">
              <Clock size={32} />
            </div>
            <div className="statement-content">
              <span className="badge badge-indigo">Portfolio Roadmap Notice</span>
              <h2>CrafZio is currently developing its product portfolio.</h2>
              <p className="statement-copy">
                New products and platforms will be announced here. In strict alignment with our governance principles, we do not rebrand bespoke client projects as CrafZio-owned products. Our internal product labs are focused on recurring business productivity, workflow automation, and connected digital commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incubation Pipeline Showcase */}
      <section className="section pipeline-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Product Labs</span>
            <h2>Upcoming Technology Platforms</h2>
            <p className="lead">
              A preview of specialized software systems currently undergoing proprietary engineering at CrafZio Labs.
            </p>
          </div>

          <div className="grid-2">
            {upcomingProducts.map((prod, idx) => (
              <div key={idx} className="glass-card product-card">
                <div className="product-card-top">
                  <span className="badge badge-cyan">{prod.status}</span>
                  <span className="prod-badge">Proprietary IP</span>
                </div>

                <h3 className="prod-name">{prod.name}</h3>
                <p className="prod-positioning">{prod.positioning}</p>

                <div className="prod-meta-box">
                  <strong>Problem Solved:</strong>
                  <p>{prod.problem_solved}</p>
                </div>

                <div className="prod-capabilities-box">
                  <strong>Key Capabilities:</strong>
                  <ul>
                    {prod.capabilities.map((cap, cIdx) => (
                      <li key={cIdx}>
                        <CheckCircle2 size={14} className="cap-check" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="prod-targets">
                  <strong>Target Users:</strong> {prod.target_users.join(' • ')}
                </div>

                <div className="prod-card-action">
                  <button onClick={onOpenTalkModal} className="btn btn-outline btn-sm">
                    <span>Register for Early Beta Access</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Notification Box */}
      <section className="section notify-section">
        <div className="container">
          <div className="glass-card notify-box">
            <Bell size={36} className="notify-icon" />
            <h2>Be the first to experience our products.</h2>
            <p>Subscribe to receive launch announcements and exclusive invitations to private beta testing.</p>

            <form onSubmit={handleNotifySubmit} className="notify-form">
              <input
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="Enter your corporate email address"
                required
                className="notify-input"
              />
              <button type="submit" className="btn btn-primary">
                Notify Me
              </button>
            </form>

            {notifyMessage && (
              <p className={`notify-feedback ${notifyStatus}`}>
                {notifyMessage}
              </p>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .products-hero {
          padding-top: calc(var(--header-height) + 4.5rem);
          padding-bottom: 3.5rem;
          text-align: center;
        }

        .products-hero h1 {
          margin: 1rem 0;
          font-size: clamp(2.4rem, 5vw, 4rem);
        }

        .products-hero-intro {
          max-width: 740px;
          margin: 0 auto;
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .official-statement-box {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          padding: 3rem;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border-radius: var(--radius-lg);
        }

        .statement-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.12);
        }

        .statement-content h2 {
          font-size: 1.75rem;
          margin: 0.75rem 0 0.5rem;
          color: #0f172a;
        }

        .statement-copy {
          color: #475569;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0;
        }

        .product-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .product-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .prod-badge {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .prod-name {
          font-size: 1.6rem;
          margin-bottom: 0.35rem;
        }

        .prod-positioning {
          color: var(--brand-primary);
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .prod-meta-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.5rem;
        }

        .prod-meta-box strong {
          display: block;
          font-size: 0.825rem;
          color: var(--text-secondary);
          margin-bottom: 0.35rem;
        }

        .prod-meta-box p {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }

        .prod-capabilities-box {
          margin-bottom: 1.5rem;
        }

        .prod-capabilities-box strong {
          display: block;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .prod-capabilities-box ul {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .prod-capabilities-box li {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .cap-check {
          color: var(--brand-primary);
          flex-shrink: 0;
        }

        .prod-targets {
          font-size: 0.825rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-subtle);
          padding-top: 1rem;
          margin-bottom: 1.5rem;
        }

        .prod-targets strong {
          color: var(--text-secondary);
        }

        .prod-card-action {
          margin-top: auto;
        }

        .notify-box {
          text-align: center;
          padding: 2.25rem 1.75rem;
          max-width: 720px;
          margin: 0 auto;
        }

        .notify-icon {
          color: var(--brand-primary);
          margin-bottom: 0.75rem;
        }

        .notify-box h2 {
          font-size: 1.85rem;
          margin-bottom: 0.4rem;
        }

        .notify-box p {
          color: var(--text-muted);
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .notify-form {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .notify-input {
          flex: 1;
          padding: 0.75rem 1rem;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius-md);
          color: #0f172a;
          outline: none;
          font-size: 0.95rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .notify-input:focus {
          border-color: var(--brand-primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .notify-feedback {
          margin-top: 0.75rem;
          font-size: 0.875rem;
        }

        .notify-feedback.success { color: var(--brand-emerald); }
        .notify-feedback.error { color: #f43f5e; }

        @media (max-width: 768px) {
          .official-statement-box {
            flex-direction: column;
            gap: 1.15rem;
            padding: 1.5rem;
          }
          .notify-form {
            flex-direction: column;
            width: 100%;
          }
          .notify-input {
            width: 100%;
          }
          .notify-form button {
            width: 100%;
          }
          .prod-capabilities-box ul {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .products-hero {
            padding-top: calc(var(--header-height) + 1.25rem);
            padding-bottom: 1.5rem;
          }
          .official-statement-box {
            padding: 1.25rem 0.95rem;
          }
          .product-card {
            padding: 1.25rem 0.95rem;
          }
          .notify-box {
            padding: 1.75rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
