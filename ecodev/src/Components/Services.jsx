import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, Globe, Smartphone, Server, Layers, Cpu, Shield,
  CheckCircle2, ChevronDown, ChevronUp, Zap, Database, Code2,
  GitBranch, TestTube, Cloud, Box
} from 'lucide-react'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Serif+Display:ital@0;1&display=swap');

@keyframes _svFadeUp {
  from { opacity:0; transform:translateY(22px); }
  to   { opacity:1; transform:translateY(0); }
}
._sv-u1 { animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .05s both; }
._sv-u2 { animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .12s both; }
._sv-u3 { animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .19s both; }
._sv-u4 { animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .26s both; }
._sv-u5 { animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .33s both; }
._sv-u6 { animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .40s both; }
._sv-u7 { animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .47s both; }
._sv-u8 { animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .54s both; }
._sv-u9 { animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .61s both; }
._sv-u10{ animation:_svFadeUp .65s cubic-bezier(.22,1,.36,1) .68s both; }

._sv-service-card {
  transition: transform .28s, box-shadow .28s, border-color .28s;
  cursor: default;
}
._sv-service-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 44px rgba(31,111,178,.11);
  border-color: rgba(31,111,178,.35) !important;
}

._sv-tag-pill {
  display:inline-block;
  font-family:'DM Sans',sans-serif;
  font-size:9px;
  font-weight:700;
  letter-spacing:.13em;
  text-transform:uppercase;
  padding:2px 7px;
  background:#f0f7ff;
  color:#1f6fb2;
  border:1px solid #bfdbfe;
}
.dark ._sv-tag-pill {
  background:rgba(31,59,95,.45);
  border-color:rgba(31,111,178,.25);
  color:#60a5fa;
}

._sv-stack-pill {
  display:inline-flex;
  align-items:center;
  font-family:'DM Sans',sans-serif;
  font-size:9.5px;
  font-weight:600;
  letter-spacing:.04em;
  padding:3px 9px;
  border:1px solid #e5e7eb;
  color:#4b5563;
  background:#f9fafb;
  transition:border-color .18s,color .18s,background .18s;
}
._sv-stack-pill:hover { border-color:#1f6fb2; color:#1f6fb2; background:#eaf6ff; }
.dark ._sv-stack-pill { border-color:rgba(255,255,255,.1); color:rgba(255,255,255,.45); background:rgba(255,255,255,.03); }
.dark ._sv-stack-pill:hover { border-color:#1f6fb2; color:#60a5fa; background:rgba(31,111,178,.1); }

._sv-acc-btn { cursor:pointer; transition:background .2s; }
._sv-acc-btn:hover { background:rgba(31,111,178,.04); }
.dark ._sv-acc-btn:hover { background:rgba(255,255,255,.04); }

._sv-acc-body {
  animation:_svFadeUp .25s cubic-bezier(.22,1,.36,1) both;
  overflow:hidden;
}
`

const SANS  = { fontFamily:"'DM Sans',ui-sans-serif,system-ui,sans-serif" }
const SERIF = { fontFamily:"'DM Serif Display',Georgia,serif" }

const SERVICES = [
  {
    icon: <Globe size={20} strokeWidth={1.5} />,
    label: 'Frontend Engineering',
    tag: 'Web · React · Next.js',
    color: '#1f6fb2',
    tagline: 'High-performance, SEO-optimised web applications',
    desc: 'I build production-grade frontends with Next.js App Router, React Server Components, and TypeScript strict mode. From complex UI systems to 3D experiences architected for scale.',
    highlights: ['Next.js App Router + RSC', 'TypeScript (strict)', 'Framer Motion / GSAP / Three.js', 'SSR · SSG · ISR · Edge rendering', 'Web Vitals & Lighthouse optimisation'],
    stacks: [
      ['Core', ['Next.js', 'React', 'TypeScript', 'React Server Components', 'Server Actions']],
      ['UI', ['shadcn/ui', 'Radix UI', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js', 'Lottie']],
      ['State', ['Redux Toolkit', 'Zustand', 'TanStack Query', 'SWR', 'React Context']],
      ['Forms', ['React Hook Form', 'Zod', 'Yup']],
      ['Performance', ['Code splitting', 'Dynamic imports', 'Lazy loading', 'Bundle analysis', 'Image optimisation']],
      ['SEO', ['OpenGraph', 'JSON-LD', 'Sitemap', 'Canonical URLs']],
    ],
  },
  {
    icon: <Server size={20} strokeWidth={1.5} />,
    label: 'Backend Engineering',
    tag: 'APIs · Node.js · Databases',
    color: '#0369a1',
    tagline: 'Secure, scalable, enterprise-grade APIs',
    desc: 'I design clean REST APIs following MVC and Clean Architecture principles covering auth flows, database design, caching, and real-time features. Built to handle production load.',
    highlights: ['REST API + OpenAPI / Swagger docs', 'JWT · OAuth2 · RBAC', 'Redis caching & sessions', 'WebSockets & real-time', 'Rate limiting & security hardening'],
    stacks: [
      ['Runtime', ['Node.js', 'Express.js', 'Next.js API Routes']],
      ['Databases', ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']],
      ['ORMs', ['Prisma', 'Mongoose', 'Sequelize']],
      ['Auth', ['JWT', 'OAuth2', 'NextAuth', 'Passport.js', 'RBAC', 'MFA']],
      ['Security', ['Helmet', 'CORS', 'Rate limiting', 'CSRF', 'Zod/Joi', 'Bcrypt']],
      ['Advanced', ['BullMQ', 'Cron jobs', 'WebSockets', 'Webhooks', 'Stripe API']],
    ],
  },
  {
    icon: <Layers size={20} strokeWidth={1.5} />,
    label: 'Full-Stack Architecture',
    tag: 'MERN · PERN · Monorepo',
    color: '#7c3aed',
    tagline: 'End-to-end systems designed for scale',
    desc: 'I architect complete product stacks from database schema and API layer to UI and deployment. Including SaaS multi-tenancy, microservices basics, and serverless patterns.',
    highlights: ['MERN & PERN stacks', 'Monorepo with Turborepo', 'Serverless & edge architecture', 'Multi-tenant SaaS patterns', 'Schema design & query optimization'],
    stacks: [
      ['Patterns', ['MERN', 'PERN', 'Monorepo (Turborepo)', 'Microservices', 'Serverless', 'Event-driven']],
      ['Data', ['Schema design', 'Indexing & optimization', 'Redis caching', 'Pagination & filtering']],
      ['SaaS', ['Multi-tenant architecture', 'Role-based access', 'Subscription billing', 'Webhook systems']],
      ['APIs', ['GraphQL', 'Apollo Client/Server', 'REST', 'WebSockets (Socket.io)']],
    ],
  },
  {
    icon: <Smartphone size={20} strokeWidth={1.5} />,
    label: 'Mobile Development',
    tag: 'React Native · Expo',
    color: '#059669',
    tagline: 'Cross-platform iOS & Android apps',
    desc: 'Native-quality cross-platform mobile apps with React Native and Expo. Full-featured with push notifications, offline support, deep linking, and secure auth flows.',
    highlights: ['React Native + Expo', 'TypeScript + Redux / Zustand', 'Push notifications & deep linking', 'Offline-first support', 'App Store deployment'],
    stacks: [
      ['Core', ['React Native', 'Expo', 'TypeScript']],
      ['Navigation', ['React Navigation', 'Deep linking']],
      ['State', ['Redux Toolkit', 'Zustand']],
      ['Features', ['Push notifications', 'Secure storage', 'Offline support', 'Native modules', 'Auth flows']],
      ['Performance', ['FlatList optimisation', 'Lazy loading', 'Memory optimisation', 'App size optimisation']],
    ],
  },
  {
    icon: <Cloud size={20} strokeWidth={1.5} />,
    label: 'DevOps & Infrastructure',
    tag: 'Docker · Vercel · CI/CD',
    color: '#b45309',
    tagline: 'Reliable deployment pipelines and hosting',
    desc: 'From Vercel edge deployments to VPS configuration with Nginx and PM2 I handle the infrastructure side. Docker, GitHub Actions CI/CD, monitoring, and production security.',
    highlights: ['Vercel · VPS · DigitalOcean', 'Docker & Docker Compose', 'GitHub Actions CI/CD', 'Nginx reverse proxy + PM2', 'Sentry error tracking'],
    stacks: [
      ['Hosting', ['Vercel', 'VPS (Ubuntu)', 'DigitalOcean', 'AWS basics']],
      ['Containers', ['Docker', 'Docker Compose']],
      ['CI/CD', ['GitHub Actions', 'Automated deployments', 'Env management']],
      ['BaaS', ['Supabase', 'Firebase', 'Cloudinary', 'AWS S3']],
      ['Monitoring', ['Winston', 'Morgan', 'Sentry', 'PM2']],
      ['Security', ['HTTPS/SSL', 'Rate limiting', 'Server hardening', 'Backup strategies']],
    ],
  },
  {
    icon: <TestTube size={20} strokeWidth={1.5} />,
    label: 'Testing & Code Quality',
    tag: 'Jest · RTL · ESLint',
    color: '#dc2626',
    tagline: 'Clean, tested, maintainable code',
    desc: 'I write tested, linted, and well-documented code. Unit tests, integration tests, and end-to-end API testing with enforced code quality through pre-commit hooks.',
    highlights: ['Jest unit & integration tests', 'React Testing Library', 'Supertest API testing', 'ESLint + Prettier', 'Husky pre-commit hooks'],
    stacks: [
      ['Testing', ['Jest', 'React Testing Library', 'Supertest', 'Postman']],
      ['Quality', ['ESLint', 'Prettier', 'Husky', 'Git Flow', 'PR workflow']],
      ['Version Control', ['Git', 'GitHub', 'GitHub Projects', 'Git Flow']],
    ],
  },
]

const PROCESS = [
  { step:'01', title:'Discovery',    desc:'Deep dive into goals, users, constraints, and success metrics.' },
  { step:'02', title:'Architecture', desc:'System design, tech stack selection, schema and API planning.' },
  { step:'03', title:'Build',        desc:'Clean, tested, type-safe code shipped in focused sprints.' },
  { step:'04', title:'Deploy',       desc:'CI/CD pipelines, production hardening, monitoring, and handover.' },
]

function ServiceCard({ service, animClass }) {
  const [open, setOpen] = useState(false)
  const { icon, label, tag, color, tagline, desc, highlights, stacks } = service

  return (
    <div className={`_sv-service-card border border-gray-100 dark:border-white/8 bg-white dark:bg-[#0d1f35] flex flex-col ${animClass}`}>

      <div className="p-4 sm:p-5 border-b border-gray-50 dark:border-white/5">
        <div className="flex items-start justify-between mb-3.5">
          <div className="w-10 h-10 flex items-center justify-center border"
            style={{ background:`${color}14`, borderColor:`${color}30`, color }}>
            {icon}
          </div>
          <span className="_sv-tag-pill">{tag}</span>
        </div>

        <h3 style={{ ...SERIF, fontSize:'17px', lineHeight:1.25, marginBottom:'4px' }}
          className="text-[#1f3a5f] dark:text-white">{label}</h3>
        <p style={{ ...SANS, fontSize:'11px', fontWeight:600, color, marginBottom:'10px', letterSpacing:'0.01em' }}>
          {tagline}
        </p>
        <p style={{ ...SANS, fontSize:'12.5px', lineHeight:1.7 }}
          className="text-gray-500 dark:text-white/45">{desc}</p>
      </div>

      <div className="p-4 sm:p-5 flex-1">
        <ul className="space-y-2">
          {highlights.map(h => (
            <li key={h} style={{ ...SANS, fontSize:'12px' }} className="flex items-start gap-2 text-gray-600 dark:text-white/55">
              <CheckCircle2 size={12} strokeWidth={2.5} className="mt-0.5 shrink-0" style={{ color }} />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-50 dark:border-white/5">
        <button onClick={() => setOpen(v => !v)}
          className="_sv-acc-btn w-full flex items-center justify-between px-4 sm:px-5 py-3">
          <span style={{ ...SANS, fontSize:'10.5px', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase' }}
            className="text-gray-400 dark:text-white/30">Full stack</span>
          {open
            ? <ChevronUp size={13} className="text-gray-300 dark:text-white/20" />
            : <ChevronDown size={13} className="text-gray-300 dark:text-white/20" />}
        </button>

        {open && (
          <div className="_sv-acc-body border-t border-gray-50 dark:border-white/5 p-3 sm:p-4 space-y-3">
            {stacks.map(([groupLabel, pills]) => (
              <div key={groupLabel}>
                <p style={{ ...SANS, fontSize:'8.5px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:'5px' }}
                  className="text-gray-400 dark:text-white/25">{groupLabel}</p>
                <div className="flex flex-wrap gap-1.5">
                  {pills.map(p => (
                    <span key={p} className="_sv-stack-pill">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <a href="#contact"
        style={{ ...SANS, fontSize:'12px', fontWeight:700, color, display:'flex', alignItems:'center', gap:'5px', padding:'12px 16px', borderTop:'1px solid' }}
        className="border-gray-100 dark:border-white/8 hover:gap-2.5 transition-all duration-200">
        Hire me for this <ArrowRight size={12} />
      </a>
    </div>
  )
}

const Services = () => {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    if (!document.getElementById('__sv-css')) {
      const t = document.createElement('style')
      t.id = '__sv-css'; t.textContent = CSS
      document.head.appendChild(t)
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } },
      { threshold: .08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const an = (n) => vis ? `_sv-u${n}` : 'opacity-0'

  return (
    <section id="services" ref={ref} className="w-full bg-white dark:bg-[#0a1628] scroll-mt-20">

      <div className="border-b border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35]">
        <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-6 py-8 sm:py-10 lg:py-14">
          <div className={`flex flex-col lg:flex-row lg:items-end gap-6 sm:gap-8 ${an(1)}`}>
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-block w-8 h-[2px]" style={{ background:'linear-gradient(90deg,#1f6fb2,#FF7A00)' }} />
                <span style={{ ...SANS, fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#1f6fb2' }}>
                  What I Offer
                </span>
              </div>
              <h2 style={{ ...SERIF, fontSize:'clamp(26px,4.5vw,50px)', lineHeight:1.05 }}
                className="text-[#1f3a5f] dark:text-white">
                Enterprise-grade engineering<br />
                <em className="not-italic" style={{ background:'linear-gradient(135deg,#1f6fb2,#0ea5e9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                  across every layer
                </em>
              </h2>
            </div>
            <div className="lg:max-w-[460px] space-y-4">
              <p style={{ ...SANS, fontSize:'14px', lineHeight:1.8 }}
                className="text-gray-500 dark:text-white/50">
                From pixel-perfect frontends to hardened production APIs I cover the full stack. Six specialization areas, one engineer.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  ['8+','Tech domains'],
                  ['50+','Tools & libraries'],
                  ['20+','Shipped products'],
                  ['3+','Years active'],
                ].map(([val, lbl]) => (
                  <div key={lbl} className="flex items-center gap-2 border border-gray-100 dark:border-white/10 bg-white dark:bg-white/[0.03] px-3 py-1.5">
                    <span style={{ ...SERIF, fontSize:'18px', color:'#1f6fb2', lineHeight:1 }}>{val}</span>
                    <span style={{ ...SANS, fontSize:'10.5px', fontWeight:600 }} className="text-gray-400 dark:text-white/30">{lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-6 py-10 sm:py-12 lg:py-16 space-y-12 sm:space-y-16">

        <div>
          <div className={`flex flex-wrap items-center gap-3 mb-6 ${an(2)}`}>
            <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase' }}
              className="text-gray-400 dark:text-white/30">Specialisations</p>
            <span className="flex-1 h-px bg-gray-100 dark:bg-white/8" />
            <span style={{ ...SANS, fontSize:'10px', fontWeight:600 }} className="text-gray-400 dark:text-white/25 hidden sm:inline">
              Click "Full stack" to expand each service
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.label} service={svc} animClass={an(i + 3)} />
            ))}
          </div>
        </div>

        <div className={`border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35] ${an(9)}`}>
          <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-white/8 flex items-center justify-between">
            <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase' }}
              className="text-gray-400 dark:text-white/30">Complete tech inventory</p>
            <span className="_sv-tag-pill">50+ tools</span>
          </div>
          <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              { label:'Frontend', items:['Next.js','React','TypeScript','Tailwind CSS','shadcn/ui','Framer Motion','GSAP','Three.js','Zustand','TanStack Query','React Hook Form','Zod'] },
              { label:'Backend',  items:['Node.js','Express.js','Prisma','PostgreSQL','MongoDB','Redis','JWT','OAuth2','NextAuth','Helmet','BullMQ','Stripe'] },
              { label:'Mobile',   items:['React Native','Expo','React Navigation','Redux Toolkit','Push notifications','Deep linking','Secure storage','Offline support'] },
              { label:'DevOps & Tools', items:['Docker','Vercel','GitHub Actions','Nginx','PM2','Supabase','Firebase','Sentry','Jest','ESLint','Prettier','Husky'] },
            ].map(({ label, items }) => (
              <div key={label}>
                <p style={{ ...SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:'10px', paddingBottom:'8px', borderBottom:'1px solid' }}
                  className="text-[#1f6fb2] border-[#bfdbfe] dark:border-[#1f6fb2]/25">{label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(t => (
                    <span key={t} className="_sv-stack-pill">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`border border-gray-100 dark:border-white/8 bg-white dark:bg-[#0a1628] ${an(10)}`}>
          <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-white/8">
            <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase' }}
              className="text-gray-400 dark:text-white/30">My process</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-white/8">
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} className="px-4 sm:px-6 py-5 sm:py-6 flex flex-col gap-2">
                <span style={{ ...SERIF, fontSize:'30px', color:'#1f6fb2', lineHeight:1, opacity:.25 }}>{step}</span>
                <h4 style={{ ...SANS, fontSize:'14px', fontWeight:700, letterSpacing:'-0.01em' }}
                  className="text-[#1f3a5f] dark:text-white">{title}</h4>
                <p style={{ ...SANS, fontSize:'12.5px', lineHeight:1.65 }}
                  className="text-gray-500 dark:text-white/45">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-gray-100 dark:border-white/8 px-4 sm:px-7 py-6 bg-gradient-to-r from-[#eaf6ff] to-white dark:from-[#1f3a5f]/25 dark:to-transparent ${an(10)}`}>
          <div>
            <h4 style={{ ...SERIF, fontSize:'clamp(17px,3vw,20px)' }} className="text-[#1f3a5f] dark:text-white mb-1">
              Ready to build something serious?
            </h4>
            <p style={{ ...SANS, fontSize:'13.5px' }} className="text-gray-500 dark:text-white/45">
              Let's talk about your project — I'm open to freelance, contract, and full-time roles.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a href="#work"
              style={{ ...SANS, fontSize:'13px', fontWeight:600, padding:'10px 20px', display:'inline-flex', alignItems:'center', gap:'6px' }}
              className="border border-[#1f3a5f] dark:border-white/20 text-[#1f3a5f] dark:text-white/70 hover:border-[#1f6fb2] hover:text-[#1f6fb2] dark:hover:text-white transition-colors">
              See my work
            </a>
            <a href="#contact"
              style={{ ...SANS, fontSize:'13px', fontWeight:700, letterSpacing:'0.02em', padding:'10px 20px', color:'white', background:'linear-gradient(135deg,#7A2E00,#C45500 50%,#FF7A00)', boxShadow:'0 4px 16px rgba(196,85,0,0.26)', display:'inline-flex', alignItems:'center', gap:'8px' }}
              className="hover:shadow-[0_6px_22px_rgba(196,85,0,0.40)] transition-shadow duration-200">
              Start a conversation <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services