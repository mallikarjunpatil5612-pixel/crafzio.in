import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Cpu, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose, onStartSimilar }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card project-modal animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close project modal">
          <X size={20} />
        </button>

        <div className="project-modal-header">
          <div className="badge-row">
            <span className="badge badge-cyan">{project.category}</span>
            <span className="badge badge-indigo">{project.industry}</span>
          </div>
          <h2>{project.name}</h2>
          <p className="project-subtitle">
            <strong>What We Built:</strong> {project.what_we_built}
          </p>
        </div>

        <div className="project-modal-body">
          {/* Outcome Banner */}
          {project.outcome && (
            <div className="outcome-banner">
              <Award size={22} className="banner-icon" />
              <div>
                <strong>Key Result & Impact</strong>
                <p>{project.outcome}</p>
              </div>
            </div>
          )}

          {/* 3 Pillars: Challenge, Approach, Solution */}
          <div className="pillars-grid">
            <div className="pillar-card">
              <h4>The Challenge</h4>
              <p>{project.challenge}</p>
            </div>
            <div className="pillar-card">
              <h4>Our Approach</h4>
              <p>{project.approach}</p>
            </div>
            <div className="pillar-card">
              <h4>The Solution</h4>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          {project.key_features && (
            <div className="modal-section">
              <h4>Key Capabilities & Features</h4>
              <ul className="modal-feature-list">
                {project.key_features.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {project.tech_used && (
            <div className="modal-section">
              <h4>Technology Architecture</h4>
              <div className="tech-stack-row">
                {project.tech_used.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="project-modal-footer">
          <button
            onClick={() => {
              onClose();
              onStartSimilar(project.name);
            }}
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
          >
            <span>Start a Similar Project</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .project-modal {
          max-width: 750px;
          padding: 2.5rem;
        }

        .badge-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .project-modal-header h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .project-subtitle {
          color: var(--brand-primary);
          font-size: 1rem;
        }

        .project-subtitle strong {
          color: var(--text-secondary);
        }

        .project-modal-body {
          margin: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .outcome-banner {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          color: var(--text-primary);
        }

        .banner-icon {
          color: var(--brand-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .outcome-banner p {
          margin: 0.25rem 0 0;
          color: var(--brand-primary);
          font-weight: 500;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .pillar-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 1.25rem;
          border-radius: var(--radius-md);
        }

        .pillar-card h4 {
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .pillar-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }

        .modal-section h4 {
          font-size: 1.05rem;
          margin-bottom: 0.75rem;
        }

        .modal-feature-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .modal-feature-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--brand-primary);
          flex-shrink: 0;
        }

        .tech-stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          background: #f1f5f9;
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.825rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        @media (max-width: 700px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .modal-feature-list {
            grid-template-columns: 1fr;
          }
          .project-modal {
            padding: 1.5rem 1.15rem;
            max-height: 90vh;
          }
          .modal-close {
            top: 1rem;
            right: 1rem;
          }
          .project-modal-header h2 {
            font-size: 1.6rem;
            padding-right: 2rem;
          }
          .modal-footer-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
