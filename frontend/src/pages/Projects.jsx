import React, { useState, useEffect } from 'react';
import { Sparkles, Search, MessageSquare, X } from 'lucide-react';
import ProjectCard from '../components/cards/ProjectCard';
import ProjectModal from '../components/common/ProjectModal';
import { fetchProjects } from '../services/api';
import { FALLBACK_PROJECTS } from '../services/fallbackData';

const CATEGORIES = [
  'All',
  'Websites',
  'Web Applications',
  'Mobile Applications',
  'Business Software',
  'E-Commerce'
];

export default function Projects({ onOpenTalkModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const res = await fetchProjects(activeCategory);
      if (res && res.data && res.data.length > 0) {
        setProjects(res.data);
      }
    }
    load();
  }, [activeCategory]);

  const filteredProjects = projects.filter((p) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.short_desc.toLowerCase().includes(query) ||
      p.industry.toLowerCase().includes(query) ||
      (p.tech_used && p.tech_used.some(t => t.toLowerCase().includes(query)))
    );
  });

  return (
    <div className="projects-page">
      {/* Hero */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content animate-fade-in">
            <span className="eyebrow"><Sparkles size={14} /> Case Studies & Portfolio</span>
            <h1>Work that we've built.</h1>
            <p className="projects-hero-copy">
              Every project starts with a requirement. Our job is to turn that requirement into something useful, reliable and meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs, Search & Grid */}
      <section className="section projects-grid-section">
        <div className="container">
          <div className="controls-row">
            {/* Category Filter Chips */}
            <div className="filter-scroll">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Instant Search Box */}
            <div className="search-input-wrap">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by tech, industry..."
                className="search-input"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')} 
                  className="search-clear-btn" 
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {loading ? (
            <div className="loading-state">
              <p>Loading projects portfolio...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="empty-state glass-card" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
              <Sparkles size={32} style={{ color: 'var(--brand-primary)', margin: '0 auto 1rem', display: 'block' }} />
              <h3>Portfolio Case Studies Being Updated</h3>
              <p style={{ maxWidth: '520px', margin: '0.5rem auto 1.5rem', color: 'var(--text-secondary)' }}>
                We are currently curating and uploading our newest client deployments and technical architectures. You can reach out directly to explore our capabilities or request relevant case studies.
              </p>
              <button onClick={() => onOpenTalkModal()} className="btn btn-primary btn-md">
                <MessageSquare size={16} />
                <span>Request Case Studies & Discuss Project</span>
              </button>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="empty-state glass-card">
              <h3>No matching projects found</h3>
              <p>Try refining your search keyword or selecting a different category filter.</p>
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="btn btn-outline btn-sm" style={{ marginTop: '1rem' }}>
                  Clear Search Filter
                </button>
              )}
            </div>
          ) : (
            <div className="grid-3">
              {filteredProjects.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onStartSimilar={(name) => {
            setSelectedProject(null);
            onOpenTalkModal(name);
          }}
        />
      )}

      {/* Bottom CTA */}
      <section className="section projects-cta-section">
        <div className="container">
          <div className="glass-card projects-cta-card">
            <h2>Have a project in mind?</h2>
            <p>From early concept mapping to enterprise systems, our engineering team is ready to build with you.</p>
            <button onClick={() => onOpenTalkModal()} className="btn btn-primary btn-lg">
              <MessageSquare size={18} />
              <span>Start a Conversation</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .projects-hero {
          padding-top: calc(var(--header-height) + 4.5rem);
          padding-bottom: 3.5rem;
          text-align: center;
        }

        .projects-hero h1 {
          margin: 1rem 0;
          font-size: clamp(2.4rem, 5vw, 4rem);
        }

        .projects-hero-copy {
          max-width: 740px;
          margin: 0 auto;
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-scroll {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          padding: 0.4rem;
          border-radius: var(--radius-full);
          border: 1px solid #cbd5e1;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          color: #475569;
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
          color: #0f172a;
          background: #f1f5f9;
        }

        .filter-btn.active {
          background: #0b0f19;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(11, 15, 25, 0.2);
        }

        .search-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 280px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 0.65rem 2.2rem 0.65rem 2.5rem;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: var(--radius-full);
          color: #0f172a;
          font-size: 0.875rem;
          outline: none;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .search-input:focus {
          border-color: var(--brand-primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .search-clear-btn {
          position: absolute;
          right: 0.75rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loading-state, .empty-state {
          text-align: center;
          padding: 4rem 2rem;
        }

        .empty-state h3 {
          margin-bottom: 0.5rem;
        }

        .empty-state p {
          color: var(--text-muted);
        }

        .projects-cta-card {
          text-align: center;
          padding: 2.25rem 1.75rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .projects-cta-card h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .projects-cta-card p {
          color: var(--text-muted);
          font-size: 1.02rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 850px) {
          .controls-row {
            flex-direction: column;
            align-items: stretch;
          }
          .search-input-wrap {
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 640px) {
          .projects-hero {
            padding-top: calc(var(--header-height) + 1.25rem);
            padding-bottom: 1.5rem;
          }
          .filter-scroll {
            scrollbar-width: none;
          }
          .filter-scroll::-webkit-scrollbar {
            display: none;
          }
          .projects-cta-card {
            padding: 1.75rem 1.15rem;
          }
          .projects-cta-card h2 {
            font-size: 1.65rem;
          }
          .projects-cta-card .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
