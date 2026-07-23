import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink, GraduationCap, Briefcase, Star } from 'lucide-react'
import userImg from '../assets/saviour-corperate.png'
import vscode  from '../assets/vscode.png'
import firebase from '../assets/firebase.png'
import mongo   from '../assets/mongodb.png'
import git     from '../assets/git.png'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Serif+Display:ital@0;1&display=swap');
@keyframes _abFadeUp {
  from { opacity:0; transform:translateY(22px); }
  to   { opacity:1; transform:translateY(0); }
}
._ab-u1 { animation:_abFadeUp .65s cubic-bezier(.22,1,.36,1) .10s both; }
._ab-u2 { animation:_abFadeUp .65s cubic-bezier(.22,1,.36,1) .22s both; }
._ab-u3 { animation:_abFadeUp .65s cubic-bezier(.22,1,.36,1) .34s both; }
._ab-u4 { animation:_abFadeUp .65s cubic-bezier(.22,1,.36,1) .46s both; }
._ab-u5 { animation:_abFadeUp .65s cubic-bezier(.22,1,.36,1) .58s both; }
@keyframes _abScaleIn {
  from { opacity:0; transform:scale(0.97); }
  to   { opacity:1; transform:scale(1); }
}
._ab-img { animation:_abScaleIn .7s cubic-bezier(.22,1,.36,1) .1s both; }
._ab-tool:hover { transform:translateY(-3px); }
._ab-tool { transition:transform .22s; }
._ab-card:hover { transform:translateY(-3px); box-shadow:4px 4px 0 #1f6fb2; }
._ab-card { transition:transform .28s,box-shadow .28s; }
._ab-pill {
  display:inline-flex; align-items:center;
  font-family:'DM Sans',sans-serif; font-size:9.5px; font-weight:600; letter-spacing:.04em;
  padding:3px 9px; border:1px solid #e5e7eb; color:#4b5563; background:#f9fafb;
  transition:border-color .18s,color .18s,background .18s;
}
._ab-pill:hover { border-color:#1f6fb2; color:#1f6fb2; background:#eaf6ff; }
.dark ._ab-pill { border-color:rgba(255,255,255,.1); color:rgba(255,255,255,.45); background:rgba(255,255,255,.03); }
.dark ._ab-pill:hover { border-color:#1f6fb2; color:#60a5fa; background:rgba(31,111,178,.1); }
`

const SANS  = { fontFamily:"'DM Sans',ui-sans-serif,system-ui,sans-serif" }
const SERIF = { fontFamily:"'DM Serif Display',Georgia,serif" }

const CARDS = [
  {
    icon: <GraduationCap size={17} strokeWidth={1.5} className="text-[#1f6fb2]" />,
    label: 'Education',
    value: 'Undergraduate Industrial Physics, University Of Benin [UNIBEN] Edo state',
  },
  {
    icon: <Briefcase size={17} strokeWidth={1.5} className="text-[#1f6fb2]" />,
    label: 'Availability',
    value: 'Open to freelance, contract & full-time roles worldwide',
  },
  {
    icon: <Star size={17} strokeWidth={1.5} className="text-[#1f6fb2]" />,
    label: 'Specialization',
    value: 'Full-stack web · Mobile · Enterprise APIs · DevOps',
  },
]

const STATS = [
  { value:'4+',  label:'Years exp.'  },
  { value:'20+', label:'Projects'    },
  { value:'50+', label:'Tech tools'  },
  { value:'8',   label:'Domains'     },
]

const TOOLS = [
  { src: vscode,   name:'VS Code'  },
  { src: firebase, name:'Firebase' },
  { src: mongo,    name:'MongoDB'  },
  { src: git,      name:'Git'      },
]

const STACK_GROUPS = [
  {
    label: 'Frontend',
    color: '#1f6fb2',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'GSAP', 'Three.js', 'Zustand', 'TanStack Query', 'Zod'],
  },
  {
    label: 'Backend',
    color: '#0369a1',
    items: ['Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'MongoDB', 'Redis', 'JWT', 'OAuth2', 'NextAuth', 'BullMQ', 'Stripe'],
  },
  {
    label: 'Mobile',
    color: '#059669',
    items: ['React Native', 'Expo', 'React Navigation', 'Redux Toolkit', 'Push Notifications', 'Deep Linking'],
  },
  {
    label: 'DevOps',
    color: '#b45309',
    items: ['Docker', 'Vercel', 'GitHub Actions', 'Nginx', 'PM2', 'Supabase', 'Firebase', 'Sentry'],
  },
]

const About = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!document.getElementById('__ab-css')) {
      const t = document.createElement('style'); t.id = '__ab-css'; t.textContent = CSS
      document.head.appendChild(t)
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const an = (n) => visible ? `_ab-u${n}` : 'opacity-0'

  return (
    <section id="about" ref={ref} className="w-full bg-white dark:bg-[#0a1628] scroll-mt-20">

      <div className="border-b border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35]">
        <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-6 py-8 sm:py-10 lg:py-12 flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="inline-block w-8 h-[2px]" style={{ background:'linear-gradient(90deg,#1f6fb2,#FF7A00)' }} />
              <span style={{ ...SANS, fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#1f6fb2' }}>About Me</span>
            </div>
            <h2 style={{ ...SERIF, fontSize:'clamp(26px,4vw,44px)', lineHeight:1.1 }} className="text-[#1f3a5f] dark:text-white">
              The engineer behind<br />
              <em className="not-italic" style={{ background:'linear-gradient(135deg,#1f6fb2,#0ea5e9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>the code</em>
            </h2>
          </div>
          <p style={{ ...SANS, fontSize:'14px', lineHeight:1.75, maxWidth:'520px' }} className="text-gray-500 dark:text-white/50 lg:text-right">
            I build full-stack web and mobile products from database schema to pixel-perfect UI with TypeScript, React, Node.js, and the tools that ship fast and scale further.
          </p>
        </div>
      </div>

      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <div className={visible ? '_ab-img' : 'opacity-0'}>
            <div className="relative">
              <span className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#1f6fb2] z-10" />
              <span className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#FF7A00] z-10" />
              <span className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#FF7A00] z-10" />
              <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#1f6fb2] z-10" />
              <div className="absolute top-3 left-3 w-full h-full bg-[#1f3a5f]/8 dark:bg-[#1f6fb2]/8" />
              <img src={userImg} alt="Elijah Alexander"
                className="relative w-full object-cover border border-gray-200 dark:border-white/10"
                style={{ aspectRatio:'4/3', objectPosition:'top' }} />
              <div style={{ ...SANS, fontSize:'11px', fontWeight:700 }}
                className="absolute top-4 right-4 flex items-center gap-1.5 bg-white dark:bg-[#0d1f35] border border-gray-200 dark:border-white/15 px-3 py-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-[#1f3a5f] dark:text-white">Available for work</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 border border-gray-100 dark:border-white/8 divide-x divide-gray-100 dark:divide-white/8 bg-[#f9fafb] dark:bg-[#0d1f35]">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center py-3 sm:py-4 px-1 sm:px-2">
                  <span style={{ ...SERIF, fontSize:'20px', color:'#1f6fb2', lineHeight:1 }}>{value}</span>
                  <span style={{ ...SANS, fontSize:'8px', fontWeight:600, letterSpacing:'0.10em', textTransform:'uppercase', marginTop:'4px' }}
                    className="text-gray-400 dark:text-white/30 text-center">{label}</span>
                </div>
              ))}
            </div>

            <div className={`mt-4 grid gap-3 ${an(2)}`}>
              {CARDS.map(({ icon, label, value }) => (
                <div key={label} className="_ab-card border border-gray-100 dark:border-white/8 bg-white dark:bg-[#0d1f35] p-3.5 sm:p-4 cursor-default">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#eaf6ff] dark:bg-[#1f3a5f]/50 border border-[#bfdbfe]/60 dark:border-[#1f6fb2]/20">
                      {icon}
                    </div>
                    <div>
                      <p style={{ ...SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'#1f6fb2', marginBottom:'3px' }}>{label}</p>
                      <p style={{ ...SANS, fontSize:'12px', lineHeight:1.55 }} className="text-gray-600 dark:text-white/65">{value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-5 ${an(3)}`}>
              <div className="flex items-center gap-3 mb-3">
                <p style={{ ...SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase' }} className="text-gray-400 dark:text-white/30">Daily tools</p>
                <span className="flex-1 h-px bg-gray-100 dark:bg-white/8" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {TOOLS.map(({ src, name }) => (
                  <div key={name} className="_ab-tool flex flex-col items-center gap-1.5 p-2.5 sm:p-3 border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35] cursor-default">
                    <img src={src} alt={name} className="w-6 h-6 object-contain" />
                    <span style={{ ...SANS, fontSize:'8.5px', fontWeight:600, letterSpacing:'0.06em' }} className="text-gray-400 dark:text-white/30">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className={an(2)}>
              <div className="flex items-center gap-3 mb-5">
                <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase' }} className="text-gray-400 dark:text-white/30">Full tech stack</p>
                <span className="flex-1 h-px bg-gray-100 dark:bg-white/8" />
                <span style={{ ...SANS, fontSize:'10px', fontWeight:600 }} className="text-gray-400 dark:text-white/25">50+ tools</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {STACK_GROUPS.map(({ label, color, items }) => (
                  <div key={label} className="border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35]">
                    <div className="px-4 py-2.5 border-b border-gray-100 dark:border-white/8 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background:color }} />
                      <p style={{ ...SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color }}>{label}</p>
                    </div>
                    <div className="p-3 flex flex-wrap gap-1.5">
                      {items.map(item => (
                        <span key={item} className="_ab-pill">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`my-6 sm:my-7 h-px bg-gray-100 dark:bg-white/8 ${an(4)}`} />

            <div className={an(4)}>
              <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:'14px' }} className="text-gray-400 dark:text-white/30">What I build</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  { label:'SaaS Platforms',      desc:'Multi-tenant, subscription billing, user management' },
                  { label:'E-commerce Apps',      desc:'Cart, checkout, payments, inventory, admin panels' },
                  { label:'Healthcare Systems',   desc:'Scheduling, records, RBAC, notifications' },
                  { label:'Mobile Applications',  desc:'iOS & Android with React Native & Expo' },
                  { label:'Company Websites',     desc:'Fast, animated, SEO-optimised marketing sites' },
                  { label:'REST APIs & Backends', desc:'Scalable Node.js APIs with auth & caching' },
                ].map(({ label, desc }) => (
                  <div key={label} className="p-3 sm:p-3.5 border border-gray-100 dark:border-white/8 bg-white dark:bg-[#0d1f35]">
                    <p style={{ ...SANS, fontSize:'12px', fontWeight:700, marginBottom:'4px' }} className="text-[#1f3a5f] dark:text-white">{label}</p>
                    <p style={{ ...SANS, fontSize:'11px', lineHeight:1.55 }} className="text-gray-500 dark:text-white/40">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`my-6 sm:my-7 h-px bg-gray-100 dark:bg-white/8 ${an(5)}`} />

            <div className={`flex flex-wrap items-center gap-3 ${an(5)}`}>
              <a href="#contact"
                style={{ ...SANS, fontSize:'13px', fontWeight:700, letterSpacing:'0.02em', padding:'10px 20px', color:'white', background:'linear-gradient(135deg,#7A2E00,#C45500 50%,#FF7A00)', boxShadow:'0 4px 16px rgba(196,85,0,0.26)', display:'inline-flex', alignItems:'center', gap:'8px' }}
                className="hover:shadow-[0_6px_22px_rgba(196,85,0,0.40)] transition-shadow duration-200">
                Hire me <ArrowRight size={14} />
              </a>
              <a href="#work"
                style={{ ...SANS, fontSize:'13px', fontWeight:600, padding:'10px 18px', display:'inline-flex', alignItems:'center', gap:'6px' }}
                className="border border-[#1f3a5f] dark:border-white/20 text-[#1f3a5f] dark:text-white/80 hover:border-[#1f6fb2] hover:text-[#1f6fb2] dark:hover:text-white transition-colors">
                View projects <ExternalLink size={13} />
              </a>
              <div style={{ ...SANS, fontSize:'11px', fontWeight:600, letterSpacing:'0.05em' }}
                className="ml-auto hidden sm:flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 text-emerald-700 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to opportunities
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About