import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export default function InsightCard({ insight }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/insights/${insight.slug}`);
  };

  return (
    <article 
      className="insight-card glass-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`Read article: ${insight.title}`}
    >
      <div className="insight-header">
        <span className={`badge ${insight.category === 'Technology' ? 'badge-cyan' : 'badge-indigo'}`}>
          {insight.category}
        </span>
        <div className="insight-meta-item">
          <Clock size={13} />
          <span>{insight.read_time}</span>
        </div>
      </div>

      <h3 className="insight-title">{insight.title}</h3>

      <p className="insight-intro">{insight.intro}</p>

      <div className="insight-footer">
        <div className="author-meta">
          <div className="author-avatar">
            <User size={14} />
          </div>
          <div className="author-details">
            <span className="author-name">{insight.author}</span>
            <span className="publish-date">
              <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
              {insight.date}
            </span>
          </div>
        </div>

        <div className="read-more-link">
          <span>Read Article</span>
          <ArrowRight size={15} />
        </div>
      </div>

      <style>{`
        .insight-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .insight-card:hover {
          border-color: rgba(0, 229, 255, 0.4);
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 229, 255, 0.15);
          transform: translateY(-5px);
        }

        .insight-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .insight-meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        .insight-title {
          font-size: 1.25rem;
          line-height: 1.4;
          margin-bottom: 0.75rem;
          transition: color var(--transition-fast);
        }

        .insight-card:hover .insight-title {
          color: var(--brand-primary);
        }

        .insight-intro {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .insight-footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
          gap: 1rem;
        }

        .author-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .author-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 229, 255, 0.1);
          color: var(--brand-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-details {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .publish-date {
          font-size: 0.725rem;
          color: var(--text-muted);
        }

        .read-more-link {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--brand-primary);
          white-space: nowrap;
          transition: gap var(--transition-fast);
        }

        .insight-card:hover .read-more-link {
          gap: 0.55rem;
        }
      `}</style>
    </article>
  );
}
