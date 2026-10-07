import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  BookmarkCheck,
  MessageSquare
} from 'lucide-react';
import { fetchInsightDetail } from '../services/api';
import InsightCard from '../components/cards/InsightCard';

export default function InsightDetail({ onOpenTalkModal }) {
  const { slug } = useParams();
  const [insight, setInsight] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetchInsightDetail(slug);
      if (res && res.data) {
        setInsight(res.data);
        setRelated(res.related || []);
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
        <p>Loading perspective...</p>
      </div>
    );
  }

  if (!insight) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Article Not Found</h2>
        <p>The requested insight could not be found.</p>
        <Link to="/insights" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="insight-detail-page">
      {/* Header & Meta */}
      <section className="article-hero">
        <div className="container article-container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/insights">Insights</Link>
            <ChevronRight size={14} />
            <span>{insight.category}</span>
          </nav>

          <span className={`badge ${insight.category === 'Technology' ? 'badge-cyan' : 'badge-indigo'}`}>
            {insight.category}
          </span>

          <h1 className="article-headline">{insight.title}</h1>

          <div className="article-meta-bar">
            <div className="author-block">
              <div className="author-icon"><User size={16} /></div>
              <div>
                <span className="author-name">{insight.author}</span>
                <span className="meta-sub">Technology Perspectives</span>
              </div>
            </div>

            <div className="meta-divider"></div>

            <div className="meta-items">
              <span className="meta-item">
                <Calendar size={14} />
                {insight.date}
              </span>
              <span className="meta-item">
                <Clock size={14} />
                {insight.read_time}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="section article-content-section">
        <div className="container article-container">
          <div className="glass-card article-body-card">
            {/* Lead introduction */}
            <div className="article-intro-callout">
              <p>{insight.intro}</p>
            </div>

            {/* Paragraphs */}
            <div className="article-paragraphs">
              {insight.content && insight.content.map((p, idx) => (
                <p key={idx} className="body-p">
                  {p}
                </p>
              ))}
            </div>

            {/* Article Footer CTA */}
            <div className="article-internal-cta glass-card">
              <h3>Have questions about implementing this architecture?</h3>
              <p>Discuss your technical roadmap and digital strategy directly with CrafZio engineers.</p>
              <button onClick={onOpenTalkModal} className="btn btn-primary">
                <MessageSquare size={16} />
                <span>Talk to CrafZio</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section related-section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Continue Reading</span>
              <h2>Related Perspectives</h2>
            </div>

            <div className="grid-2 related-grid">
              {related.map((item) => (
                <InsightCard key={item.slug} insight={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .article-hero {
          padding-top: calc(var(--header-height) + 3rem);
          padding-bottom: 3rem;
        }

        .article-container {
          max-width: 860px;
          margin: 0 auto;
        }

        .article-headline {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          line-height: 1.25;
          margin: 1.25rem 0 2rem;
        }

        .article-meta-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-subtle);
          flex-wrap: wrap;
        }

        .author-block {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .author-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 229, 255, 0.1);
          color: var(--brand-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-name {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .meta-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .meta-divider {
          width: 1px;
          height: 28px;
          background: var(--border-subtle);
        }

        .meta-items {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .article-body-card {
          padding: 3.5rem;
        }

        .article-intro-callout {
          border-left: 3px solid var(--brand-primary);
          padding-left: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .article-intro-callout p {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.7;
          margin: 0;
        }

        .article-paragraphs .body-p {
          font-size: 1.1rem;
          line-height: 1.85;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
        }

        .article-internal-cta {
          margin-top: 3.5rem;
          padding: 2.5rem;
          background: rgba(22, 4, 48, 0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(91, 0, 184, 0.35);
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 30px rgba(9, 0, 24, 0.7);
          text-align: center;
        }

        .article-internal-cta h3 {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .article-internal-cta p {
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .related-grid {
          max-width: 860px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .article-body-card {
            padding: 2rem;
          }
          .meta-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
