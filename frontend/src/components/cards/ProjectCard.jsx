import React from 'react';
import { ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="project-card glass-card" onClick={() => onSelect(project)}>
      <div className="project-header">
        <span className="badge badge-cyan">{project.category}</span>
        <span className="project-industry">{project.industry}</span>
      </div>

      <div className="project-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-built-tag">
          <strong>What We Built:</strong> {project.what_we_built}
        </p>
        <p className="project-desc">{project.short_desc}</p>

        {project.outcome && (
          <div className="project-outcome">
            <CheckCircle2 size={16} className="outcome-icon" />
            <span>{project.outcome}</span>
          </div>
        )}
      </div>

      <div className="project-footer">
        <div className="tech-tags">
          {project.tech_used && project.tech_used.slice(0, 3).map((t, idx) => (
            <span key={idx} className="tech-pill">{t}</span>
          ))}
          {project.tech_used && project.tech_used.length > 3 && (
            <span className="tech-pill">+{project.tech_used.length - 3}</span>
          )}
        </div>

        <button className="view-project-btn" onClick={(e) => { e.stopPropagation(); onSelect(project); }}>
          <span>View Project</span>
          <ExternalLink size={14} />
        </button>
      </div>

      <style>{`
        .project-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid var(--border-subtle);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .project-industry {
          font-size: 0.775rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .project-body {
          flex-grow: 1;
        }

        .project-name {
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
          transition: color var(--transition-fast);
        }

        .project-card:hover .project-name {
          color: var(--brand-primary);
        }

        .project-built-tag {
          font-size: 0.85rem;
          color: var(--brand-primary);
          margin-bottom: 0.75rem;
        }

        .project-built-tag strong {
          color: var(--text-secondary);
        }

        .project-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .project-outcome {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.825rem;
          font-weight: 500;
          color: #065f46;
          margin-bottom: 1.25rem;
        }

        .outcome-icon {
          flex-shrink: 0;
          margin-top: 2px;
          color: #059669;
        }

        .project-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
          gap: 0.5rem;
        }

        .tech-tags {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .tech-pill {
          font-size: 0.725rem;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          background: #f1f5f9;
          color: #334155;
          font-weight: 500;
          border: 1px solid #e2e8f0;
        }

        .view-project-btn {
          background: transparent;
          border: none;
          color: var(--brand-primary);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
        }

        .view-project-btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
