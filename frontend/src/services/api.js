import {
  FALLBACK_SERVICES,
  FALLBACK_SOLUTIONS,
  FALLBACK_PROJECTS,
  FALLBACK_INDUSTRIES,
  FALLBACK_INSIGHTS
} from './fallbackData';

const API_BASE = '/api';

export async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    return await res.json();
  } catch (err) {
    console.warn('Backend offline, using client fallback:', err);
    return { status: 'offline' };
  }
}

export async function fetchServices() {
  try {
    const res = await fetch(`${API_BASE}/services`);
    if (!res.ok) throw new Error('Failed to fetch services');
    const data = await res.json();
    return data && data.data && data.data.length ? data : { status: 'success', data: FALLBACK_SERVICES };
  } catch (err) {
    console.warn('API fetch error for services, using fallback:', err);
    return { status: 'success', data: FALLBACK_SERVICES };
  }
}

export async function fetchServiceDetail(slug) {
  try {
    const res = await fetch(`${API_BASE}/services/${slug}`);
    if (!res.ok) throw new Error('Service not found');
    const data = await res.json();
    return data && data.data ? data : { status: 'success', data: FALLBACK_SERVICES.find(s => s.slug === slug) };
  } catch (err) {
    console.warn(`API fetch error for service ${slug}, using fallback:`, err);
    const fallback = FALLBACK_SERVICES.find(s => s.slug === slug);
    return fallback ? { status: 'success', data: fallback } : null;
  }
}

export async function fetchSolutions() {
  try {
    const res = await fetch(`${API_BASE}/solutions`);
    if (!res.ok) throw new Error('Failed to fetch solutions');
    const data = await res.json();
    return data && data.data && data.data.length ? data : { status: 'success', data: FALLBACK_SOLUTIONS };
  } catch (err) {
    console.warn('API fetch error for solutions, using fallback:', err);
    return { status: 'success', data: FALLBACK_SOLUTIONS };
  }
}

export async function fetchProjects(category = 'all') {
  try {
    const query = category && category !== 'all' ? `?category=${encodeURIComponent(category)}` : '';
    const res = await fetch(`${API_BASE}/projects${query}`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    const data = await res.json();
    return data && Array.isArray(data.data) ? data : { status: 'success', data: filterProjects(category) };
  } catch (err) {
    console.warn('API fetch error for projects, using fallback:', err);
    return { status: 'success', data: filterProjects(category) };
  }
}

function filterProjects(category) {
  if (!category || category === 'all' || category === 'All') return FALLBACK_PROJECTS;
  return FALLBACK_PROJECTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export async function fetchProjectDetail(id) {
  try {
    const res = await fetch(`${API_BASE}/projects/${id}`);
    if (!res.ok) throw new Error('Project not found');
    const data = await res.json();
    return data && data.data ? data : { status: 'success', data: FALLBACK_PROJECTS.find(p => p.id === id) };
  } catch (err) {
    console.warn(`API fetch error for project ${id}, using fallback:`, err);
    const fallback = FALLBACK_PROJECTS.find(p => p.id === id);
    return fallback ? { status: 'success', data: fallback } : null;
  }
}

export async function fetchIndustries() {
  try {
    const res = await fetch(`${API_BASE}/industries`);
    if (!res.ok) throw new Error('Failed to fetch industries');
    const data = await res.json();
    return data && data.data && data.data.length ? data : { status: 'success', data: FALLBACK_INDUSTRIES };
  } catch (err) {
    console.warn('API fetch error for industries, using fallback:', err);
    return { status: 'success', data: FALLBACK_INDUSTRIES };
  }
}

export async function fetchInsights(category = 'all') {
  try {
    const query = category && category !== 'all' ? `?category=${encodeURIComponent(category)}` : '';
    const res = await fetch(`${API_BASE}/insights${query}`);
    if (!res.ok) throw new Error('Failed to fetch insights');
    const data = await res.json();
    return data && data.data && data.data.length ? data : { status: 'success', data: filterInsights(category) };
  } catch (err) {
    console.warn('API fetch error for insights, using fallback:', err);
    return { status: 'success', data: filterInsights(category) };
  }
}

function filterInsights(category) {
  if (!category || category === 'all' || category === 'All') return FALLBACK_INSIGHTS;
  return FALLBACK_INSIGHTS.filter(i => i.category.toLowerCase() === category.toLowerCase());
}

export async function fetchInsightDetail(slug) {
  try {
    const res = await fetch(`${API_BASE}/insights/${slug}`);
    if (!res.ok) throw new Error('Insight not found');
    const data = await res.json();
    return data && data.data ? data : { status: 'success', data: FALLBACK_INSIGHTS.find(i => i.slug === slug) };
  } catch (err) {
    console.warn(`API fetch error for insight ${slug}, using fallback:`, err);
    const fallback = FALLBACK_INSIGHTS.find(i => i.slug === slug);
    return fallback ? { status: 'success', data: fallback } : null;
  }
}

export async function submitContactForm(payload) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || (data.errors && data.errors.join(', ')) || 'Failed to submit enquiry');
  }
  return data;
}

export async function submitCareerApplication(payload) {
  const res = await fetch(`${API_BASE}/careers/apply`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to submit application');
  }
  return data;
}

export async function subscribeNewsletter(email) {
  const res = await fetch(`${API_BASE}/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  return await res.json();
}
