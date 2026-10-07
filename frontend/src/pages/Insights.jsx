import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import InsightCard from '../components/cards/InsightCard';
import { fetchInsights } from '../services/api';
import { FALLBACK_INSIGHTS } from '../services/fallbackData';

const INSIGHT_CATEGORIES = ['All', 'Technology', 'Business', 'CrafZio'];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [insights, setInsights] = useState(FALLBACK_INSIGHTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const res = await fetchInsights(activeCategory);
      if (res && res.data && res.data.length > 0) setInsights(res.data);
    }
    load();
  }, [activeCategory]);

  return (
    <div className="insights-page">
      {/* Hero */}
      <section className="insights-hero">
        <div className="container">
          <div className="insights-hero-content animate-fade-in">
            <span className="eyebrow"><Sparkles size={14} /> Perspectives & Research</span>
            <h1>Ideas that move technology forward.</h1>
            <p className="insights-hero-copy">
              Perspectives on technology, digital business, product development and the work we are building at CrafZio.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter & Grid */}
      <section className="section insights-grid-section">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-scroll">
              {INSIGHT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="loading-state">
              <p>Loading perspectives...</p>
            </div>
          ) : insights.length === 0 ? (
            <div className="empty-state glass-card">
              <h3>No articles in this category</h3>
              <p>Check back soon as new technical deep-dives are published.</p>
            </div>
          ) : (
            <div className="grid-3">
              {insights.map((item) => (
                <InsightCard key={item.slug} insight={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .insights-hero {
          padding-top: calc(var(--header-height) + 4.5rem);
          padding-bottom: 3.5rem;
          text-align: center;
        }

        .insights-hero h1 {
          margin: 1rem 0;
          font-size: clamp(2.4rem, 5vw, 4rem);
        }

        .insights-hero-copy {
          max-width: 760px;
          margin: 0 auto;
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .filter-bar {
          margin-bottom: 3rem;
          display: flex;
          justify-content: center;
        }

        .filter-scroll {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(22, 4, 48, 0.75);
          padding: 0.4rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(91, 0, 184, 0.35);
          box-shadow: 0 4px 14px rgba(9, 0, 24, 0.4);
          overflow-x: auto;
          max-width: 100%;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .filter-scroll::-webkit-scrollbar {
          display: none;
        }

        .filter-btn {
          background: transparent;
          border: none;
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          color: #cbd5e1;
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
          flex-shrink: 0;
          min-height: 38px;
        }

        .filter-btn:hover {
          color: #ffffff;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #174DFF 0%, #5B00B8 100%);
          color: #ffffff;
          box-shadow: 0 0 16px rgba(91, 0, 184, 0.45);
        }

        .loading-state, .empty-state {
          text-align: center;
          padding: 4rem 2rem;
        }

        @media (max-width: 640px) {
          .insights-hero {
            padding-top: calc(var(--header-height) + 1.25rem);
            padding-bottom: 2rem;
          }
          .insights-hero h1 {
            font-size: 2rem;
          }
          .insights-hero-copy {
            font-size: 1rem;
          }
          .filter-bar {
            justify-content: flex-start;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
