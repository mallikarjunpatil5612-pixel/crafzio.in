import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactForm } from '../../services/api';

export default function ProjectEnquiryForm({ initialService = 'Website Development' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service_type: initialService,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitContactForm(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service_type: initialService,
        message: ''
      });
    } catch (err) {
      setErrorMsg(err.message || 'Unable to submit enquiry. Please verify your fields.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="enquiry-success glass-card animate-fade-in">
        <div className="success-icon-badge">
          <CheckCircle2 size={48} />
        </div>
        <h3>Project Enquiry Received</h3>
        <p className="success-copy">
          Thank you. Your project enquiry has been received. Our team will review the information and contact you regarding the next steps.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="btn btn-secondary"
          style={{ marginTop: '1.5rem' }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="project-enquiry-form glass-card">
      <div className="form-head">
        <h3>Send Us Your Project Enquiry</h3>
        <p>Fill out the details below and we will get back to you with a structured proposal.</p>
      </div>

      {errorMsg && (
        <div className="error-banner">
          <AlertCircle size={18} />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="form-name">
            Your Name <span className="required">*</span>
          </label>
          <input
            id="form-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Anand Varma"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="form-company">
            Company / Business
          </label>
          <input
            id="form-company"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Horizon Tech Pvt Ltd"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="form-email">
            Official Email Address <span className="required">*</span>
          </label>
          <input
            id="form-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="anand@company.com"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="form-phone">
            Phone / WhatsApp Number
          </label>
          <input
            id="form-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="form-service">
          What are you looking for?
        </label>
        <select
          id="form-service"
          name="service_type"
          value={formData.service_type}
          onChange={handleChange}
          className="form-select"
        >
          <option value="Website Development">Website Development</option>
          <option value="Web Application Development">Web Application Development</option>
          <option value="Mobile Application Development">Mobile Application Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="CRM & Business Software">CRM & Business Software</option>
          <option value="Custom Software Development">Custom Software Development</option>
          <option value="Other">Other Requirement</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="form-message">
          Tell us about your requirement <span className="required">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe what you want to build, specific challenges, target timeline, or scope..."
          required
          rows={5}
          className="form-textarea"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary btn-lg submit-btn"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Sending Project Enquiry...</span>
          </>
        ) : (
          <>
            <Send size={18} />
            <span>Submit — Send Enquiry</span>
          </>
        )}
      </button>

      <style>{`
        .project-enquiry-form {
          border: 1px solid var(--border-subtle);
          padding: 1.85rem;
          border-radius: var(--radius-lg);
        }

        .form-head {
          margin-bottom: 1.35rem;
        }

        .form-head h3 {
          font-size: 1.45rem;
          margin-bottom: 0.35rem;
        }

        .form-head p {
          color: var(--text-muted);
          font-size: 0.925rem;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }

        .enquiry-success {
          text-align: center;
          padding: 2.5rem 1.5rem;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .success-icon-badge {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          color: var(--brand-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          border: 2px solid rgba(16, 185, 129, 0.4);
        }

        .success-copy {
          max-width: 500px;
          margin: 0.75rem auto 0;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .project-enquiry-form {
            padding: 1.25rem 0.95rem;
          }
          .form-head h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </form>
  );
}
