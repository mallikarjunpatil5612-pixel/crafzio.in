/**
 * CrafZio Corporate Configuration & Placeholders
 * Complies with Section 18 & 22 of the MVP Content Specification
 */

export const CORPORATE_CONFIG = {
  brandName: 'CrafZio',
  legalCompanyName: 'CrafZio Private Limited',
  cin: '[CIN: Registration in Progress]',
  udyamRegistration: 'UDYAM-KR-25-0087087',
  msmeRegistration: 'MSME Registered | UDYAM Registration No: UDYAM-KR-25-0087087',
  incorporationDate: '2026',
  startYear: '2023',
  tagline: 'Building Digital Solutions for a Changing World.',
  supportingMessage: 'CrafZio is a technology company helping businesses transform ideas, processes and opportunities into modern digital experiences.',
  brandDescription: 'Crafting digital experiences for the future. We transform ideas into innovative solutions that drive business growth.',
  
  contact: {
    officialEmail: 'team@crafzio.in',
    contactEmail: 'contact@crafzio.in',
    officialPhone: '+91 7026496890',
    displayPhone: '+91 7026496890',
    phoneRaw: '+917026496890',
    whatsappUrl: 'https://wa.me/917026496890?text=' + encodeURIComponent("Hello! I'm interested in your services at CrafZio."),
    address: 'Tumkur, India',
    fullAddress: 'Honnaiahanapalya, Haralur Post, Tumakuru - 572104, Karnataka, India',
    businessHours: 'Monday – Friday, 9:30 AM – 6:30 PM IST',
  },

  social: {
    linkedin: 'https://linkedin.com/company/crafzio',
    twitter: 'https://twitter.com/crafzio',
    github: 'https://github.com/crafzio',
    instagram: 'https://instagram.com/crafzio',
  },

  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Products', path: '/products' },
    { label: 'Projects', path: '/projects' },
    { label: 'Industries', path: '/industries' },
    { label: 'Contact', path: '/contact' },
  ],

  servicesList: [
    { label: 'Website Development', path: '/services/website-development', slug: 'website-development' },
    { label: 'Web Application Development', path: '/services/web-application-development', slug: 'web-application-development' },
    { label: 'Mobile Application Development', path: '/services/mobile-app-development', slug: 'mobile-app-development' },
    { label: 'UI/UX Design', path: '/services/ui-ux-design', slug: 'ui-ux-design' },
    { label: 'CRM & Business Software', path: '/services/crm-business-software', slug: 'crm-business-software' },
    { label: 'Custom Software Development', path: '/services/custom-software', slug: 'custom-software' },
  ],

  solutionsList: [
    { label: 'Business Digitalization', path: '/solutions#business-digitalization' },
    { label: 'Customer & Lead Management', path: '/solutions#customer-lead-management' },
    { label: 'Business Automation', path: '/solutions#business-automation' },
    { label: 'E-Commerce', path: '/solutions#e-commerce' },
    { label: 'Custom Business Systems', path: '/solutions#custom-business-systems' },
  ],

  legalLinks: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Refund / Cancellation Policy', path: '/refund-policy' },
    { label: 'Disclaimer', path: '/disclaimer' },
  ],

  stats: [
    { label: 'Modern Digital Solutions', value: '100%', subtext: 'Custom-tailored architecture' },
    { label: 'Client Collaboration', value: 'End-to-End', subtext: 'From concept to deployment' },
    { label: 'Engineering Focus', value: 'Enterprise Ready', subtext: 'Scalable & secure platforms' },
    { label: 'Support & Evolution', value: '24/7', subtext: 'Continuous product maintenance' },
  ],

  values: [
    {
      title: 'Customer First',
      desc: 'We build around the people and businesses who use what we create.',
      icon: 'Users'
    },
    {
      title: 'Think Clearly',
      desc: 'We believe good technology begins with understanding the problem.',
      icon: 'Lightbulb'
    },
    {
      title: 'Build with Purpose',
      desc: 'Every feature should have a reason to exist.',
      icon: 'Compass'
    },
    {
      title: 'Keep Learning',
      desc: 'Technology changes continuously. So do we.',
      icon: 'BookOpen'
    },
    {
      title: 'Take Ownership',
      desc: 'We take responsibility for the work we create.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Build for Tomorrow',
      desc: 'We think beyond today’s requirement and consider what comes next.',
      icon: 'TrendingUp'
    }
  ],

  timeline: [
    { phase: 'GENESIS', title: 'Our Beginning', desc: 'Conceived with a clear vision: technology should be useful, accessible and tightly connected to business needs.', icon: 'Dna' },
    { phase: 'MILESTONE 1', title: 'Building Together', desc: 'Partnered with forward-thinking enterprises to design and build bespoke digital experiences.', icon: 'Rocket' },
    { phase: 'MILESTONE 2', title: 'Expanding Horizons', desc: 'Broadened capabilities into full-stack web platforms, mobile products, and custom CRM systems.', icon: 'Layers' },
    { phase: 'MILESTONE 3', title: 'Automation & Growth', desc: 'Initiated modular business automation frameworks and dedicated digital product incubation.', icon: 'Settings' },
    { phase: 'MILESTONE 4', title: 'Private Limited', desc: 'Incorporated as a full Private Limited technology company with robust corporate delivery standards.', icon: 'ShieldCheck' },
    { phase: 'CURRENT PHASE', title: 'Scaling for Tomorrow', desc: 'Scaling digital engineering partnerships across industries with purpose-built software.', icon: 'TrendingUp' },
  ]
};
