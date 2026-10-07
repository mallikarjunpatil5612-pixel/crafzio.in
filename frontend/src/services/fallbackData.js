/**
 * High-fidelity client fallback data for CrafZio
 * Ensures instant page renders even if backend connection is delayed.
 */

export const FALLBACK_SERVICES = [
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    image: '/services/website-development.jpg',
    headline: 'Your business deserves a digital presence that works.',
    short_desc: 'Modern websites that help businesses establish credibility, communicate clearly and connect with customers.',
    full_desc: 'A professional website is often the first place a potential customer goes to understand who you are, what you offer and whether they can trust you. We build high-performance, responsive websites that convert visitors into clients.',
    capabilities: [
      'Responsive design across all devices',
      'Interactive Contact & Lead capture forms',
      'WhatsApp and instant chat integration',
      'Maps and location services',
      'SEO-ready technical architecture',
      'Analytics and tracking integration',
      'Social media integration',
      'Performance and speed optimization'
    ],
    what_we_build: [
      'Corporate websites',
      'Business websites',
      'Landing pages',
      'Portfolio websites',
      'Dynamic websites',
      'CMS-driven websites'
    ],
    cta: 'Build My Website'
  },
  {
    id: 'web-application-development',
    slug: 'web-application-development',
    title: 'Web Application Development',
    image: '/services/web-application-development.jpg',
    headline: 'Build web applications around the way your business works.',
    short_desc: 'Powerful web applications designed around specific business workflows, users and requirements.',
    full_desc: 'We design and develop custom web applications around specific workflows, users and business operations, turning complex manual procedures into smooth digital experiences.',
    capabilities: [
      'Modern frontend frameworks (React/Next.js)',
      'Scalable RESTful API backends',
      'Role-based access control & security',
      'Real-time data visualization',
      'Third-party system integrations',
      'Cloud-native deployment architecture'
    ],
    what_we_build: [
      'Business portals',
      'Interactive dashboards',
      'Customer self-service portals',
      'Management systems',
      'Workflow automation applications',
      'Custom web platforms'
    ],
    cta: 'Discuss a Web Application'
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    image: '/services/mobile-app-development.jpg',
    headline: 'Turn your idea into an app people can use.',
    short_desc: 'Mobile applications that turn ideas and business requirements into usable digital experiences.',
    full_desc: 'We design and develop mobile applications around specific business and product requirements, delivering intuitive, fast, and secure experiences on iOS and Android.',
    capabilities: [
      'Cross-platform Flutter & React Native development',
      'Native iOS and Android performance',
      'Push notifications & real-time alerts',
      'Offline-first data sync',
      'Payment gateway integration',
      'App Store & Google Play deployment'
    ],
    what_we_build: [
      'Customer mobile apps',
      'Booking & reservation apps',
      'Field service & operations apps',
      'Business applications',
      'Startup MVP products',
      'Internal business tools'
    ],
    cta: 'Discuss Your App'
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    image: '/services/ui-ux-design.jpg',
    headline: 'Design experiences people understand.',
    short_desc: 'Interfaces that balance visual quality, usability and business objectives.',
    full_desc: 'We create digital interfaces that balance visual quality, effortless usability and business objectives, ensuring visitors achieve their goals intuitively.',
    capabilities: [
      'User research & persona formulation',
      'Information architecture planning',
      'Figma component libraries & tokens',
      'Micro-interactions & animation specs',
      'Usability testing & feedback cycles',
      'Developer handoff documentation'
    ],
    what_we_build: [
      'User journey maps & user flows',
      'Low & high-fidelity wireframes',
      'Interactive interface prototypes',
      'Comprehensive design systems',
      'Responsive web & mobile UI',
      'Brand identity & digital design guides'
    ],
    cta: 'Start a Design Project'
  },
  {
    id: 'crm-business-software',
    slug: 'crm-business-software',
    title: 'CRM & Business Software',
    image: '/services/crm-business-software.jpg',
    headline: 'Bring your customers, leads and workflows together.',
    short_desc: 'Systems that help businesses manage customers, leads, workflows and information.',
    full_desc: 'We build dedicated systems that help businesses organize customer records, inquiries, sales pipelines, and operational information into one cohesive hub.',
    capabilities: [
      'Automated lead routing & assignment',
      'Email and WhatsApp automated notifications',
      'Custom pipeline stages & filters',
      'Granular permission levels',
      'Historical reporting & forecasting',
      'Exportable business intelligence data'
    ],
    what_we_build: [
      'Lead capture & tracking engines',
      'Customer record & history databases',
      'Sales pipeline & stage trackers',
      'Team task assignment & workflows',
      'Activity & communication tracking',
      'Executive business dashboards'
    ],
    cta: 'Explore a CRM Solution'
  },
  {
    id: 'custom-software',
    slug: 'custom-software',
    title: 'Custom Software Development',
    image: '/services/custom-software.jpg',
    headline: "Your business isn't standard. Your software doesn't have to be.",
    short_desc: 'Purpose-built technology for requirements that standard solutions cannot address.',
    full_desc: 'We build custom software around your proprietary processes, complex requirements and operational challenges, giving you a distinct competitive advantage.',
    capabilities: [
      'Tailored database architectures',
      'Legacy software modernization',
      'Automated document generation & billing',
      'High-throughput transactional engines',
      'API-first enterprise connectivity',
      'Dedicated maintenance & continuous support'
    ],
    what_we_build: [
      'Enterprise Resource Planning (ERP)',
      'Internal operations dashboards',
      'Custom booking & scheduling engines',
      'Resource management systems',
      'Bespoke workflow orchestration',
      'Custom business portals'
    ],
    cta: 'Discuss a Custom Solution'
  }
];

export const FALLBACK_SOLUTIONS = [
  {
    id: 'business-digitalization',
    title: 'Business Digitalization',
    image: '/solutions/business-digitalization.jpg',
    tagline: 'Move business processes from manual systems to connected digital workflows.',
    description: 'Eliminate paper bottlenecks, fragmented spreadsheets, and scattered communications. We create streamlined digital workflows tailored to how your business naturally works.',
    points: [
      'Centralized records and secure data repositories',
      'Elimination of repetitive paper forms and manual filing',
      'Connected departmental workflows with clear accountability',
      'Real-time visibility into day-to-day operations'
    ]
  },
  {
    id: 'customer-lead-management',
    title: 'Customer & Lead Management',
    image: '/solutions/customer-lead-management.jpg',
    tagline: 'Create better ways to capture, organize and manage customer interactions.',
    description: 'Never lose track of a prospect or customer inquiry again. Connect your marketing channels directly to unified CRM software.',
    points: [
      'Instant multi-channel lead capture (web, chat, campaigns)',
      'Organized customer interaction logs and audit history',
      'Sales pipeline stages with status alerts and reminders',
      'Customer retention tracking and loyalty insights'
    ]
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    image: '/solutions/business-automation.jpg',
    tagline: 'Reduce repetitive manual work through purpose-built digital workflows.',
    description: 'Automate recurring notifications, invoice generation, status updates, and reports so your team can focus on high-value client relationships.',
    points: [
      'Automated invoicing, payment receipts, and billing alerts',
      'Triggered notification sequences via Email and WhatsApp',
      'Automated report generation and distribution',
      'Integration with existing business tools'
    ]
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Solutions',
    image: '/solutions/e-commerce.jpg',
    tagline: 'Build digital commerce experiences that connect products, customers and transactions.',
    description: 'From direct-to-consumer digital storefronts to B2B ordering portals, we deliver friction-free shopping and checkout experiences.',
    points: [
      'High-conversion product catalogs and search filtering',
      'Secure, multi-gateway online payment processing',
      'Automated order management and inventory tracking',
      'Customer self-service portal for tracking and re-orders'
    ]
  },
  {
    id: 'custom-business-systems',
    title: 'Custom Business Systems',
    image: '/solutions/custom-business-systems.jpg',
    tagline: 'Create technology around the way your organization actually works.',
    description: 'Off-the-shelf software often forces you to compromise your processes. We develop bespoke business systems built around your exact operational reality.',
    points: [
      'Custom-engineered logic matching unique industry workflows',
      'No recurring per-seat SaaS licensing constraints',
      'Full ownership of your source code, data, and platform',
      'Seamless scalability as your transaction volume multiplies'
    ]
  }
];

export const FALLBACK_PROJECTS = [];

export const FALLBACK_INDUSTRIES = [
  {
    id: 'startups',
    name: 'Startups',
    image: '/industries/startups.jpg',
    tagline: 'From idea validation to MVP and beyond.',
    desc: 'We help ambitious founders turn early concepts into robust, market-ready MVPs fast, laying solid engineering foundations that scale with seed and series rounds.'
  },
  {
    id: 'smb',
    name: 'Small & Medium Businesses',
    image: '/industries/smb.jpg',
    tagline: 'Digital foundations for growing businesses.',
    desc: 'We provide cost-effective, high-impact digital solutions that streamline operations, boost brand credibility, and convert local and regional customers.'
  },
  {
    id: 'education',
    name: 'Education',
    image: '/industries/education.jpg',
    tagline: 'Digital platforms and experiences for institutions, educators and edtech businesses.',
    desc: 'From institutional web portals and learning dashboards to course registration and student administration tools, we engineer reliable educational technology.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    image: '/industries/healthcare.jpg',
    tagline: 'Digital experiences for healthcare organizations and service providers.',
    desc: 'Patient-first digital experiences, secure record management, clinic scheduling systems, and telemedicine portals built with accessibility and privacy at the core.'
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    image: '/industries/retail-ecommerce.jpg',
    tagline: 'Technology that connects businesses, products and customers.',
    desc: 'High-converting online shops, omnichannel product catalogs, customer retention platforms, and fast inventory synchronization for modern retail.'
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    image: '/industries/professional-services.jpg',
    tagline: 'Digital solutions for consultants, agencies and service businesses.',
    desc: 'Streamline client intake, proposal generation, appointment scheduling, and project reporting with bespoke business platforms.'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    image: '/industries/manufacturing.jpg',
    tagline: 'Technology for industrial businesses and manufacturers.',
    desc: 'Purpose-built operations portals, inventory reconciliation systems, supplier workflows, and internal plant-floor tracking.'
  }
];

export const FALLBACK_INSIGHTS = [
  {
    slug: 'software-architecture-for-smbs',
    title: 'Why Purpose-Built Software Beats Generic SaaS for Scaling Businesses',
    category: 'Technology',
    date: 'March 2026',
    read_time: '5 min read',
    excerpt: 'Generic SaaS tools often charge per user and force you to twist your business processes. Here is how custom business systems yield high long-term ROI.',
    author: 'CrafZio Engineering Team',
    body: `Modern businesses often start by subscribing to off-the-shelf SaaS tools. However, as business processes mature, standard platforms begin to create unexpected friction:

1. **Per-Seat Licensing Inflation**: Subscription fees multiply with every new hire, creating financial disincentives to grant system access to team members.
2. **Process Distortion**: Instead of the software serving the business, the business is forced to reshape its workflows around the software's rigid schema.
3. **Data Silos**: Valuable client records, inventory logs, and dispatch tickets become trapped in disparate platforms that require fragile third-party automations.

At CrafZio, we advocate for purpose-built systems that consolidate your unique workflows into unified, secure, high-performance web applications.`
  },
  {
    slug: 'modern-web-performance-and-seo',
    title: 'Speed, Clean Typography and User Intent: The 2026 Web Baseline',
    category: 'Technology',
    date: 'February 2026',
    read_time: '4 min read',
    excerpt: 'Visitors form an opinion about your business in under 50 milliseconds. Discover the engineering principles behind ultra-fast digital experiences.',
    author: 'CrafZio Design & UX Lab',
    body: `In 2026, web visitors expect instant interactivity and seamless visual clarity. A slow website or disorganized navigation directly erodes brand credibility:

- **Sub-Second Initial Loads**: Modern bundling and responsive asset delivery ensure that pages feel native and immediate.
- **Intent-Driven Layouts**: Visitors should find what they need without cognitive overload. Clear typographic hierarchies guide decision-making.
- **Accessible & Mobile-First**: Over 68% of commercial traffic originates from mobile devices. Touch targets and layout flow must be flawless.`
  },
  {
    slug: 'the-crafzio-philosophy-digital-foundations',
    title: 'Engineering With Purpose: What We Learned Building Digital Solutions',
    category: 'CrafZio',
    date: 'January 2026',
    read_time: '6 min read',
    excerpt: 'Technology should solve problems, simplify workflows and connect people. Reflecting on our philosophy and the projects that defined our approach.',
    author: 'Founding Leadership',
    body: `From day one, CrafZio was founded on a simple principle: technology should do more than exist. It should actively solve operational challenges.

Our four-step cycle—Understand, Design, Build, and Evolve—ensures that every application, website, or custom tool we create is directly aligned with real user needs and tangible business outcomes.`
  }
];
