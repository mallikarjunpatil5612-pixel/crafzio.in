import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { submitContactForm } from '../../services/api';

export default function LetsTalkModal({ isOpen, onClose, initialService = 'Website Development' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service_type: initialService,
    message: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service_type: initialService }));
    }
  }, [initialService, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

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
        service_type: 'Website Development',
        message: ''
      });
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please check your details and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitSuccess ? (
          <div className="modal-success">
            <div className="success-icon-wrap">
              <CheckCircle2 size={56} className="success-icon" />
            </div>
            <h3>Project Enquiry Received</h3>
            <p className="success-message">
              Thank you. Your project enquiry has been received. Our team will review the information and contact you regarding the next steps.
            </p>
            <button
              onClick={() => {
                setSubmitSuccess(false);
                onClose();
              }}
              className="btn btn-primary btn-lg"
              style={{ marginTop: '1.5rem', width: '100%' }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <span className="eyebrow"><Sparkles size={14} /> Start a Conversation</span>
              <h2>Let's Talk to CrafZio</h2>
              <p>Tell us about your project, idea, or business challenge. We will respond promptly.</p>
            </div>

            {errorMsg && (
              <div className="error-banner">
                <AlertCircle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Company / Business</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Apex Enterprises"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Work Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp</label>
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

              <div className="form-group">
                <label className="form-label">What are you looking for?</label>
                <select
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
                <label className="form-label">
                  Tell us about your requirement <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your goals, project scope, or business challenge..."
                  required
                  rows={4}
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
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .modal-header h2 {
          font-size: 1.85rem;
          margin-bottom: 0.5rem;
        }

        .modal-header p {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .error-banner {
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.35);
          color: #b91c1c;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          font-size: 0.875rem;
        }

        .modal-success {
          text-align: center;
          padding: 1.5rem 0;
        }

        .success-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          border: 2px solid rgba(16, 185, 129, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--brand-emerald);
        }

        .success-message {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-top: 0.75rem;
        }

        @media (max-width: 600px) {
          .modal-content {
            padding: 1.75rem 1.15rem;
            width: 95%;
            max-height: 92vh;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </div>
  );
}
