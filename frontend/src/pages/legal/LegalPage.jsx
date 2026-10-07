import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Shield, FileText, RefreshCw, AlertTriangle, ChevronRight } from 'lucide-react';
import { CORPORATE_CONFIG } from '../../config/corporate';

const LEGAL_DOCS = {
  '/privacy-policy': {
    title: 'Privacy Policy',
    icon: Shield,
    lastUpdated: 'March 2026',
    sections: [
      {
        heading: '1. Introduction & Scope',
        content: `CrafZio (${CORPORATE_CONFIG.legalCompanyName}, hereafter "we", "us", or "our") respects your privacy and is dedicated to safeguarding user information. This Privacy Policy outlines our procedures concerning the collection, storage, use, and protection of personal and technical data gathered via our corporate website (${CORPORATE_CONFIG.domain}) and associated digital services.`
      },
      {
        heading: '2. Information We Collect',
        content: `We collect information directly when you communicate with us, including via the Project Enquiry Form, "Let's Talk" dialogue, career profile submissions, or newsletter sign-ups. Such details may include your name, corporate organization, official email address, phone number, and project technical specifications. We also automatically gather limited non-personally identifiable diagnostic analytics (browser agent, screen resolution, referrers) to ensure high-performance service delivery.`
      },
      {
        heading: '3. Utilization of Information',
        content: `Your data is utilized solely for lawful business operations: evaluating project proposals, preparing formal engineering estimates, responding to communications, assessing candidate applications for current or future roles, and sending authorized product and perspective updates. We do not monetize, rent, or sell your corporate information to third-party brokers.`
      },
      {
        heading: '4. Information Security & Retention',
        content: `We enforce industry-standard technical safeguards, encryption protocols, and administrative access limitations to protect against unauthorized disclosure or loss. Information is retained only as long as required for fulfillment of contractual or legitimate business obligations.`
      },
      {
        heading: '5. Contact for Privacy Inquiries',
        content: `For questions regarding data practices or to request modification or erasure of your records, contact our Data Governance Officer at ${CORPORATE_CONFIG.contact.officialEmail}.`
      }
    ]
  },
  '/terms': {
    title: 'Terms & Conditions',
    icon: FileText,
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. Corporate Identity & Acceptance of Terms',
        content: `These Terms and Conditions constitute a legally binding agreement between you (whether individually or representing a corporate entity) and ${CORPORATE_CONFIG.legalCompanyName} (MSME Registered, UDYAM Registration No: ${CORPORATE_CONFIG.udyamRegistration}, with registered operations in Tumkur, Karnataka, India). By accessing, browsing, or utilizing this website or engaging our technology services, you acknowledge that you have read, understood, and agreed to be governed by these Terms & Conditions.`
      },
      {
        heading: '2. Commercial Services, MSAs & Statements of Work',
        content: `Information presented on this website serves corporate informational purposes and does not constitute a binding legal tender or finalized commercial quotation. Formal technology development, software engineering, application architecture, and consulting services are governed exclusively by standalone Master Services Agreements (MSAs), formal Service Level Agreements (SLAs), and mutually signed Statements of Work (SOWs) executed directly between CrafZio Private Limited and the client entity.`
      },
      {
        heading: '3. Intellectual Property Rights & Code Ownership',
        content: `All design systems, proprietary frameworks, visual assets, software workflows, typography, logos, and documentation created by ${CORPORATE_CONFIG.legalCompanyName} remain our intellectual property unless explicitly transferred under a signed commercial contract. Upon full and final settlement of agreed project milestones and invoicing fees, custom-developed source code and proprietary deliverables created specifically for the client entity are assigned to the client as stipulated in the governing Statement of Work.`
      },
      {
        heading: '4. Client Obligations & Collaboration',
        content: `Clients agree to provide accurate project specifications, timely feedback, required third-party API credentials, assets, and design approvals necessary for project milestones. Delays resulting from missing client approvals or dependencies will adjust project completion schedules accordingly.`
      },
      {
        heading: '5. Invoicing, Milestone Payments & Taxes',
        content: `All commercial engagements follow structured milestone schedules defined in the project SOW. Invoices issued by CrafZio Private Limited are payable in accordance with the agreed payment window (standard 7 to 14 days from date of invoice). Invoices are subject to applicable Indian taxes (including GST) in accordance with regulatory laws.`
      },
      {
        heading: '6. Confidentiality & Non-Disclosure (NDA)',
        content: `Both ${CORPORATE_CONFIG.legalCompanyName} and the client agree to maintain strict confidentiality regarding all proprietary information, trade secrets, software codebases, business logic, and customer data shared during the course of evaluation or commercial engagement. Confidentiality obligations endure beyond project completion.`
      },
      {
        heading: '7. Warranties & Limitation of Liability',
        content: `While CrafZio Private Limited engineers software according to industry best practices and provides milestone warranty periods, we shall not be liable for indirect, incidental, consequential, or punitive damages arising out of software usage, third-party server downtimes, or external API modifications. In no event shall our total aggregate liability exceed the fees paid for the specific service milestone giving rise to the claim.`
      },
      {
        heading: '8. Termination & Contract Exit',
        content: `Either party may terminate an active services agreement in accordance with the written notice stipulations established in the governing MSA or SOW. Upon termination, the client will be invoiced for verifiable engineering milestones completed up to the effective termination date, and completed work artifacts will be handed over following invoice settlement.`
      },
      {
        heading: '9. Governing Law & Dispute Jurisdiction',
        content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes, controversies, or claims arising out of or related to these terms or services provided by ${CORPORATE_CONFIG.legalCompanyName} shall be subject to the exclusive jurisdiction of the competent courts in Tumakuru / Bengaluru, Karnataka, India.`
      }
    ]
  },
  '/refund-policy': {
    title: 'Refund & Cancellation Policy',
    icon: RefreshCw,
    lastUpdated: 'March 2026',
    sections: [
      {
        heading: '1. Professional Services Scope',
        content: `${CORPORATE_CONFIG.legalCompanyName} delivers bespoke software development, custom applications, and technical consulting. Due to the resource-intensive and engineering-driven nature of our engagements, services are billed pursuant to mutually agreed project milestones, retainer schedules, or approved Statements of Work.`
      },
      {
        heading: '2. Project Initiation & Milestone Retainers',
        content: `Initial mobilization retainers and milestone disbursements cover architectural discovery, dedicated engineering time, and resource allocation. Once work on a designated milestone has commenced, payments associated with that milestone are non-refundable, except where expressly specified in a written service agreement.`
      },
      {
        heading: '3. Engagement Termination & Cancellation',
        content: `Either party may cancel or pause an ongoing service engagement in accordance with the notice provisions set forth in the governing contract. Upon receipt of formal cancellation, the client will be invoiced only for verified engineering hours completed and verifiable expenses incurred up to the effective termination date.`
      },
      {
        heading: '4. Inquiries & Dispute Resolution',
        content: `For any billing inquiries, invoice clarifications, or resolution requests, please reach out to our corporate finance department at ${CORPORATE_CONFIG.contact.officialEmail}.`
      }
    ]
  },
  '/disclaimer': {
    title: 'Corporate Disclaimer',
    icon: AlertTriangle,
    lastUpdated: 'March 2026',
    sections: [
      {
        heading: '1. General Informational Notice',
        content: `The information contained on this website is provided for general informational and corporate positioning purposes only. While ${CORPORATE_CONFIG.legalCompanyName} endeavors to ensure all material is accurate and current, we make no representations or warranties of any kind, express or implied, about completeness or suitability.`
      },
      {
        heading: '2. Technical & Performance Projections',
        content: `Case studies and project summaries represent past engineering solutions and illustrative outcomes. Actual technical performance, business conversion increases, and development timelines vary based on client infrastructure, scope complexity, and third-party dependencies.`
      },
      {
        heading: '3. Third-Party Links & Integrations',
        content: `This website may feature links or references to external services, APIs, and partner technologies. CrafZio maintains no control over, and assumes no responsibility for, the content or practices of external third-party sites.`
      },
      {
        heading: '4. Corporate Identity',
        content: `CrafZio operates as ${CORPORATE_CONFIG.legalCompanyName}. For official regulatory verification, refer to our corporate registration filing details (${CORPORATE_CONFIG.cin}).`
      }
    ]
  }
};

export default function LegalPage() {
  const location = useLocation();
  const currentPath = location.pathname;
  const doc = LEGAL_DOCS[currentPath] || LEGAL_DOCS['/privacy-policy'];
  const Icon = doc.icon;

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>Corporate Legal</span>
            <ChevronRight size={14} />
            <span>{doc.title}</span>
          </nav>

          <div className="legal-hero-content animate-fade-in">
            <div className="legal-icon-box">
              <Icon size={28} />
            </div>
            <h1>{doc.title}</h1>
            <p className="legal-meta">
              Official Corporate Policy • {CORPORATE_CONFIG.legalCompanyName} • Last Updated: {doc.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container">
          <div className="legal-layout">
            {/* Legal Nav Sidebar */}
            <aside className="legal-sidebar glass-card">
              <h3>Legal Information</h3>
              <ul className="legal-nav-list">
                {CORPORATE_CONFIG.legalLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`legal-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="sidebar-corp-info">
                <span className="corp-label">Registered Corporate Entity</span>
                <strong>{CORPORATE_CONFIG.legalCompanyName}</strong>
                <p>{CORPORATE_CONFIG.cin}</p>
                <p>{CORPORATE_CONFIG.contact.officialEmail}</p>
              </div>
            </aside>

            {/* Document Body */}
            <div className="legal-body glass-card">
              {doc.sections.map((sec, idx) => (
                <div key={idx} className="legal-section-block">
                  <h2>{sec.heading}</h2>
                  <p>{sec.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .legal-hero {
          padding-top: calc(var(--header-height) + 3rem);
          padding-bottom: 2.5rem;
        }

        .legal-icon-box {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          color: var(--brand-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .legal-hero h1 {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          margin-bottom: 0.5rem;
        }

        .legal-meta {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .legal-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
          align-items: flex-start;
        }

        .legal-sidebar {
          padding: 2rem;
          position: sticky;
          top: calc(var(--header-height) + 2rem);
        }

        .legal-sidebar h3 {
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
        }

        .legal-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .legal-nav-link {
          display: block;
          padding: 0.55rem 0.85rem;
          font-size: 0.875rem;
          color: var(--text-muted);
          border-radius: var(--radius-sm);
        }

        .legal-nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .legal-nav-link.active {
          color: var(--brand-primary);
          background: rgba(0, 229, 255, 0.08);
          font-weight: 600;
        }

        .sidebar-corp-info {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .corp-label {
          display: block;
          font-size: 0.725rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--brand-primary);
          margin-bottom: 0.25rem;
        }

        .sidebar-corp-info strong {
          display: block;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .legal-body {
          padding: 3.5rem;
        }

        .legal-section-block {
          margin-bottom: 2.5rem;
        }

        .legal-section-block:last-child {
          margin-bottom: 0;
        }

        .legal-section-block h2 {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .legal-section-block p {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .legal-layout {
            grid-template-columns: 1fr;
          }
          .legal-sidebar {
            position: static;
          }
          .legal-body {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
