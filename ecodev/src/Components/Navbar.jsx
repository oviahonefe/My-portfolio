import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, X, Menu, ArrowRight, Mail,
  Globe, Server, Layers, Smartphone, Cloud, TestTube } from 'lucide-react'
import moon from '../assets/moon_icon.png'
import sun  from '../assets/sun_icon.png'

const NAV_ITEMS = [
  { label: 'Home',     href: '#top'      },
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'My Work',  href: '#work'     },
  { label: 'Contact',  href: '#contact'  },
]

const STACK_COLS = [
  {
    icon: <Globe size={13} strokeWidth={1.6} />,
    color: '#1f6fb2',
    title: 'Frontend',
    href: '#services',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'GSAP', 'Three.js', 'Zustand', 'TanStack Query'],
  },
  {
    icon: <Server size={13} strokeWidth={1.6} />,
    color: '#0369a1',
    title: 'Backend',
    href: '#services',
    items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'JWT', 'OAuth2', 'NextAuth', 'BullMQ'],
  },
  {
    icon: <Smartphone size={13} strokeWidth={1.6} />,
    color: '#059669',
    title: 'Mobile',
    href: '#services',
    items: ['React Native', 'Expo', 'React Navigation', 'Redux Toolkit', 'Push notifications', 'Deep linking'],
  },
  {
    icon: <Cloud size={13} strokeWidth={1.6} />,
    color: '#b45309',
    title: 'DevOps & Cloud',
    href: '#services',
    items: ['Docker', 'Vercel', 'GitHub Actions', 'Nginx', 'PM2', 'Supabase', 'Firebase', 'AWS S3', 'Sentry'],
  },
  {
    icon: <Layers size={13} strokeWidth={1.6} />,
    color: '#7c3aed',
    title: 'Architecture',
    href: '#services',
    items: ['MERN', 'PERN', 'Turborepo', 'Microservices', 'Serverless', 'Multi-tenant SaaS', 'GraphQL', 'Socket.io'],
  },
  {
    icon: <TestTube size={13} strokeWidth={1.6} />,
    color: '#dc2626',
    title: 'Testing & Quality',
    href: '#services',
    items: ['Jest', 'React Testing Library', 'Supertest', 'ESLint', 'Prettier', 'Husky', 'Git Flow'],
  },
]

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

@keyframes _nbPulse {
  0%   { transform:scale(0.95); opacity:0; }
  40%  { opacity:0.5; }
  100% { transform:scale(1.42); opacity:0; }
}
._nb-p1 { animation:_nbPulse 1.9s ease-out infinite; }
._nb-p2 { animation:_nbPulse 1.9s ease-out infinite 0.24s; }

@keyframes _nbSlide {
  from { opacity:0; transform:translateY(-8px); }
  to   { opacity:1; transform:translateY(0); }
}
._nb-slide { animation:_nbSlide 0.22s cubic-bezier(0.22,1,0.36,1) both; }

@keyframes _nbDrawer {
  from { transform:translateX(100%); }
  to   { transform:translateX(0); }
}
._nb-drawer { animation:_nbDrawer 0.28s cubic-bezier(0.22,1,0.36,1) both; }

@keyframes _nbAcc {
  from { opacity:0; max-height:0; }
  to   { opacity:1; max-height:560px; }
}
._nb-acc { animation:_nbAcc 0.26s cubic-bezier(0.22,1,0.36,1) both; overflow:hidden; }

._nb-accent { height:2px; background:linear-gradient(90deg,#1f3a5f 0%,#1f6fb2 40%,#FF7A00 68%,#C45500 100%); }

._nb-stack-pill {
  display:inline-block;
  font-family:'DM Sans',sans-serif;
  font-size:10px; font-weight:600; letter-spacing:.02em;
  padding:2px 8px;
  border:1px solid #e5e7eb;
  background:#f9fafb; color:#4b5563;
  transition:border-color .15s, color .15s, background .15s;
  white-space:nowrap;
}
._nb-stack-pill:hover { border-color:#1f6fb2; color:#1f6fb2; background:#eaf6ff; }
.dark ._nb-stack-pill { border-color:rgba(255,255,255,.1); color:rgba(255,255,255,.45); background:rgba(255,255,255,.03); }
.dark ._nb-stack-pill:hover { border-color:#1f6fb2; color:#60a5fa; background:rgba(31,111,178,.1); }
`

const SANS  = { fontFamily:"'DM Sans',ui-sans-serif,system-ui,sans-serif" }
const SERIF = { fontFamily:"'DM Serif Display',Georgia,serif" }

const LogoFull = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 44" fill="none"
    style={{ width:'180px', height:'auto' }} aria-label="Oviahon Saviour">
    <defs>
      <linearGradient id="nb-ng-l" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1f3a5f"/><stop offset="100%" stopColor="#1f6fb2"/>
      </linearGradient>
      <linearGradient id="nb-ng-d" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#90c4e8"/>
      </linearGradient>
      <linearGradient id="nb-ag" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C45500"/><stop offset="100%" stopColor="#FF7A00"/>
      </linearGradient>
      <linearGradient id="nb-mb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1f3a5f"/><stop offset="100%" stopColor="#1f6fb2"/>
      </linearGradient>
    </defs>
    <rect x="0" y="4" width="36" height="36" fill="url(#nb-mb)"/>
    <polygon points="22,4 36,4 36,18" fill="url(#nb-ag)" opacity="0.9"/>
    <ellipse cx="16" cy="22" rx="7" ry="9" fill="none" stroke="white" strokeWidth="2.5"/>
    <text x="46" y="24.5" fontFamily="'DM Serif Display',Georgia,serif" fontSize="15"
      letterSpacing="0.3" fill="url(#nb-ng-l)" className="dark:hidden">OVIAHON</text>
    <text x="46" y="24.5" fontFamily="'DM Serif Display',Georgia,serif" fontSize="15"
      letterSpacing="0.3" fill="url(#nb-ng-d)" className="hidden dark:block">OVIAHON</text>
    <rect x="122" y="10" width="1" height="24" fill="#1f6fb2" opacity="0.2"/>
    <text x="130" y="24.5" fontFamily="'DM Sans',sans-serif" fontSize="9.5"
      fontWeight="700" letterSpacing="1.8" fill="#1f3a5f" opacity="0.58"
      className="dark:hidden">SAVIOUR</text>
    <text x="130" y="24.5" fontFamily="'DM Sans',sans-serif" fontSize="9.5"
      fontWeight="700" letterSpacing="1.8" fill="white" opacity="0.35"
      className="hidden dark:block">SAVIOUR</text>
    <rect x="46" y="28" width="62" height="1.5" fill="url(#nb-ag)" opacity="0.65"/>
  </svg>
)

const LogoCompact = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 44" fill="none"
    style={{ width:'100px', height:'auto' }} aria-label="Oviahon Saviour">
    <defs>
      <linearGradient id="nb-ng-cl" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1f3a5f"/><stop offset="100%" stopColor="#1f6fb2"/>
      </linearGradient>
      <linearGradient id="nb-ng-cd" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#90c4e8"/>
      </linearGradient>
      <linearGradient id="nb-ag-c" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C45500"/><stop offset="100%" stopColor="#FF7A00"/>
      </linearGradient>
      <linearGradient id="nb-mb-c" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1f3a5f"/><stop offset="100%" stopColor="#1f6fb2"/>
      </linearGradient>
    </defs>
    <rect x="0" y="4" width="36" height="36" fill="url(#nb-mb-c)"/>
    <polygon points="22,4 36,4 36,18" fill="url(#nb-ag-c)" opacity="0.9"/>
    <ellipse cx="16" cy="22" rx="7" ry="9" fill="none" stroke="white" strokeWidth="2.5"/>
    <text x="46" y="24.5" fontFamily="'DM Serif Display',Georgia,serif" fontSize="15"
      letterSpacing="0.3" fill="url(#nb-ng-cl)" className="dark:hidden">OVIAHON</text>
    <text x="46" y="24.5" fontFamily="'DM Serif Display',Georgia,serif" fontSize="15"
      letterSpacing="0.3" fill="url(#nb-ng-cd)" className="hidden dark:block">OVIAHON</text>
    <rect x="46" y="28" width="62" height="1.5" fill="url(#nb-ag-c)" opacity="0.65"/>
  </svg>
)

function StackPanel({ onClose }) {
  return (
    <div className="_nb-slide absolute left-0 top-full w-full bg-white dark:bg-[#0d1f35] border-b border-gray-200 dark:border-white/10 shadow-[0_20px_56px_rgba(0,0,0,0.10)] z-[9990]">

      <div className="border-b border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0a1628]">
        <div className="max-w-[82rem] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-5 h-[2px]"
              style={{ background:'linear-gradient(90deg,#1f6fb2,#FF7A00)' }} />
            <span style={{ ...SANS, fontSize:'10px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#1f6fb2' }}>
              Full Technology Stack
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span style={{ ...SANS, fontSize:'11px', fontWeight:600 }}
              className="text-gray-400 dark:text-white/25">50+ tools across 6 domains</span>
            <a href="#services" onClick={onClose}
              style={{ ...SANS, fontSize:'11px', fontWeight:700, color:'#1f6fb2', display:'inline-flex', alignItems:'center', gap:'5px' }}
              className="hover:gap-2 transition-all duration-200">
              View full services <ArrowRight size={11} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[82rem] mx-auto px-6 py-5 grid grid-cols-6 gap-0 divide-x divide-gray-100 dark:divide-white/8">
        {STACK_COLS.map((col) => (
          <div key={col.title} className="px-4 first:pl-0 last:pr-0">
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-gray-100 dark:border-white/8">
              <span style={{ color: col.color }}>{col.icon}</span>
              <a href={col.href} onClick={onClose}
                style={{ ...SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color: col.color }}
                className="hover:underline">{col.title}</a>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {col.items.map(item => (
                <span key={item} className="_nb-stack-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0a1628]">
        <div className="max-w-[82rem] mx-auto px-6 py-2 flex items-center gap-6">
          <span style={{ ...SANS, fontSize:'11px', fontWeight:600 }}
            className="text-gray-400 dark:text-white/25">Explore →</span>
          {[['My projects','#work'],['All services','#services'],['Hire me','#contact']].map(([label, href]) => (
            <a key={href} href={href} onClick={onClose}
              style={{ ...SANS, fontSize:'11px', fontWeight:500, textDecoration:'underline', textUnderlineOffset:'2px' }}
              className="text-gray-400 dark:text-white/30 hover:text-[#1f6fb2] dark:hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileDrawer({ open, onClose, toggleTheme }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[99990]" onClick={onClose} />
      <div className="_nb-drawer fixed top-0 right-0 h-[100dvh] w-[290px] z-[99999] bg-white dark:bg-[#0d1f35] flex flex-col shadow-[-24px_0_64px_rgba(0,0,0,0.13)] dark:shadow-[-24px_0_64px_rgba(0,0,0,0.55)]">

        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-white/10 bg-[#f8fafc] dark:bg-[#0a1628] shrink-0">
          <LogoCompact />
          <button onClick={onClose}
            className="w-7 h-7 flex items-center justify-center border border-gray-200 dark:border-white/15 hover:border-[#1f6fb2] hover:bg-[#f0f7ff] dark:hover:bg-white/8 transition-all">
            <X size={14} className="text-gray-500 dark:text-white/55" />
          </button>
        </div>

        <div className="flex border-b border-gray-100 dark:border-white/8 shrink-0">
          {[
            { label:'Email',    href:'mailto:oviahonsaviourefe@gmail.com', ext:false,
              icon:<Mail size={10} className="text-[#1f6fb2]" /> },
            { label:'WhatsApp', href:'https://wa.me/2347034302056', ext:true,
              icon:<svg className="w-2.5 h-2.5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
            { label:'GitHub',   href:'https://github.com/oviahonefe', ext:true,
              icon:<svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
          ].map(({ label, href, icon, ext }, i, arr) => (
            <a key={label} href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noreferrer' : undefined}
              style={{ ...SANS, fontSize:'10.5px', fontWeight:600 }}
              className={`flex-1 flex items-center justify-center gap-1 py-2 text-[#1f3a5f] dark:text-white/55 hover:bg-[#f0f7ff] dark:hover:bg-white/5 transition-colors ${i < arr.length-1 ? 'border-r border-gray-100 dark:border-white/8' : ''}`}>
              {icon} {label}
            </a>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain" style={{ scrollbarWidth: 'none' }}>
          <nav className="py-1">

            <div className="border-b border-gray-50 dark:border-white/5">
              <button onClick={() => setExpanded(v => !v)}
                style={{ ...SANS, fontSize:'13px', fontWeight:600, letterSpacing:'-0.01em', width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px' }}
                className={`transition-colors ${expanded ? 'text-[#1f6fb2] bg-[#f8fafd] dark:bg-white/5' : 'text-[#1f3a5f] dark:text-white/80 hover:text-[#1f6fb2] hover:bg-[#f8fafd] dark:hover:bg-white/5'}`}>
                My Stack
                <ChevronDown size={14} className={`transition-transform duration-200 ${expanded ? 'rotate-180 text-[#1f6fb2]' : 'text-gray-300 dark:text-white/25'}`} />
              </button>

              {expanded && (
                <div className="_nb-acc">
                  {STACK_COLS.map(col => (
                    <div key={col.title} className="px-4 mb-3">
                      <div className="flex items-center gap-1.5 mb-2 pt-2">
                        <span style={{ color: col.color }}>{col.icon}</span>
                        <p style={{ ...SANS, fontSize:'8.5px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color: col.color }}>
                          {col.title}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {col.items.map(item => (
                          <span key={item}
                            style={{ ...SANS, fontSize:'9px', fontWeight:600, padding:'2px 7px', letterSpacing:'0.02em' }}
                            className="text-[#1f3a5f] dark:text-white/60 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="px-4 pb-3">
                    <a href="#services" onClick={onClose}
                      style={{ ...SANS, fontSize:'11.5px', fontWeight:700, color:'#1f6fb2', display:'inline-flex', alignItems:'center', gap:'5px' }}
                      className="hover:gap-2 transition-all duration-200">
                      See all services <ArrowRight size={11} />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {NAV_ITEMS.map(({ label, href }) => (
              <a key={href} href={href} onClick={onClose}
                style={{ ...SANS, fontSize:'13px', fontWeight:600, letterSpacing:'-0.01em', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px' }}
                className="text-[#1f3a5f] dark:text-white/80 hover:text-[#1f6fb2] dark:hover:text-white hover:bg-[#f8fafd] dark:hover:bg-white/5 border-b border-gray-50 dark:border-white/5 transition-colors group">
                <span>{label}</span>
                <ChevronRight size={12} className="text-gray-200 dark:text-white/15 group-hover:text-[#1f6fb2] transition-colors" />
              </a>
            ))}

            <div className="px-4 pt-3 pb-2">
              <p style={{ ...SANS, fontSize:'8.5px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:'8px' }}
                className="text-gray-400 dark:text-white/25">Quick links</p>
              <div className="grid grid-cols-2 gap-1.5">
                {[['GitHub','https://github.com/oviahonefe'],['LinkedIn','https://www.linkedin.com/in/oviahon-saviour-837a2b422'],['Resume','#'],['Blog','#']].map(([label, href]) => (
                  <a key={label} href={href}
                    style={{ ...SANS, fontSize:'11px', fontWeight:500, display:'block', padding:'6px 10px' }}
                    className="text-gray-600 dark:text-white/50 hover:text-[#1f6fb2] border border-gray-100 dark:border-white/8 bg-[#f8fafc] dark:bg-white/[0.03] hover:border-[#1f6fb2]/25 hover:bg-[#f0f7ff] transition-all">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mx-4 mb-3 p-2.5 border border-gray-100 dark:border-white/8 bg-[#f8fafc] dark:bg-white/[0.02]">
              <p style={{ ...SANS, fontSize:'8.5px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:'6px' }}
                className="text-gray-400 dark:text-white/25">Core technologies</p>
              <div className="flex flex-wrap gap-1">
                {['React','Node.js','Next.js','PostgreSQL','React Native','TypeScript'].map(t => (
                  <span key={t} style={{ ...SANS, fontSize:'9px', fontWeight:700, padding:'2px 6px', letterSpacing:'0.02em' }}
                    className="text-[#1f3a5f] dark:text-white/60 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">{t}</span>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className="shrink-0 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-[#0d1f35] p-3 space-y-1.5">
          <a href="#contact" onClick={onClose}
            style={{ ...SANS, fontSize:'12.5px', fontWeight:700, letterSpacing:'0.02em', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', width:'100%', padding:'10px', color:'white', background:'linear-gradient(135deg,#7A2E00,#C45500 50%,#FF7A00)', boxShadow:'0 4px 14px rgba(196,85,0,0.28)' }}>
            Hire me <ArrowRight size={14} />
          </a>
          <button onClick={toggleTheme}
            style={{ ...SANS, fontSize:'11px', fontWeight:500, display:'flex', alignItems:'center', justifyContent:'center', gap:'6px', width:'100%', padding:'7px' }}
            className="text-gray-500 dark:text-white/45 hover:text-[#1f3a5f] dark:hover:text-white border border-gray-200 dark:border-white/10 hover:border-[#1f6fb2] transition-all">
            <img src={moon} alt="" className="w-3.5 dark:hidden" />
            <img src={sun}  alt="" className="w-3.5 hidden dark:block" />
            Toggle theme
          </button>
        </div>
      </div>
    </>
  )
}

const Navbar = () => {
  const [scrolled,     setScrolled]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [activeHref,   setActiveHref]   = useState('#top')

  useEffect(() => {
    if (document.getElementById('__nb-css')) return
    const tag = document.createElement('style')
    tag.id = '__nb-css'; tag.textContent = CSS
    document.head.appendChild(tag)
  }, [])

  useEffect(() => {
  if (localStorage.theme === 'dark')
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')
}, [])

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { if (scrolled) setDropdownOpen(false) }, [scrolled])

  const showSolid = scrolled || dropdownOpen || mobileOpen

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        showSolid
          ? 'bg-white/95 dark:bg-[#0a1628]/95 backdrop-blur-md shadow-[0_1px_18px_rgba(0,0,0,0.07)] dark:shadow-[0_2px_22px_rgba(0,0,0,0.45)]'
          : 'bg-transparent'
      }`}>

        <div className="_nb-accent" />

        <div className={`hidden md:block transition-all duration-300 overflow-hidden ${showSolid ? 'max-h-8 bg-[#1f3a5f] dark:bg-[#0d1f35]' : 'max-h-0'}`}>
          <div className="max-w-[82rem] mx-auto px-4 py-[4px] flex items-center gap-5">
            <a href="mailto:oviahonsaviourefe@gmail.com"
              style={{ ...SANS, fontSize:'10.5px', fontWeight:500 }}
              className="flex items-center gap-1.5 text-white/65 hover:text-white transition-colors">
              <Mail size={10} /> oviahonsaviourefe@gmail.com
            </a>
            <a href="https://github.com/oviahonefe" target="_blank" rel="noreferrer"
              style={{ ...SANS, fontSize:'10.5px', fontWeight:500 }}
              className="flex items-center gap-1.5 text-white/65 hover:text-white transition-colors">
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <div className="ml-auto flex items-center gap-4">
              <span className="text-white/15 text-xs">|</span>
              <a href="https://www.linkedin.com/in/oviahon-saviour-837a2b422" target="_blank" rel="noreferrer"
                style={{ ...SANS, fontSize:'10.5px', fontWeight:500 }}
                className="text-white/65 hover:text-white transition-colors">LinkedIn</a>
              <a href="#work" style={{ ...SANS, fontSize:'10.5px', fontWeight:500 }}
                className="text-white/65 hover:text-white transition-colors">Portfolio</a>
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-300 border-b ${dropdownOpen ? 'border-gray-200 dark:border-white/10' : showSolid ? 'border-gray-100/60 dark:border-white/5' : 'border-transparent'}`}>
          <div className="max-w-[82rem] mx-auto px-6 py-3 flex items-center">

            <a href="#top" onClick={() => setActiveHref('#top')} className="shrink-0 mr-8 flex items-center">
              <span className="hidden sm:block"><LogoFull /></span>
              <span className="block sm:hidden"><LogoCompact /></span>
            </a>

            <div className="hidden md:flex items-center gap-0.5 ml-auto">

              <button onClick={() => setDropdownOpen(v => !v)}
                style={{ ...SANS, fontSize:'13px', fontWeight:500, letterSpacing:'-0.01em', position:'relative', display:'flex', alignItems:'center', gap:'4px', padding:'6px 12px' }}
                className={`transition-colors duration-150 ${
                  dropdownOpen
                    ? 'text-[#1f6fb2] bg-blue-50/80 dark:bg-white/5'
                    : showSolid
                      ? 'text-gray-700 dark:text-white/70 hover:text-[#1f3a5f] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                      : 'text-gray-800 dark:text-white/85 hover:bg-white/15 dark:hover:bg-white/10'
                }`}>
                My Stack
                <ChevronDown size={12} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#1f6fb2]' : 'text-gray-400 dark:text-white/30'}`} />
                {dropdownOpen && <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#1f6fb2]" />}
              </button>

              {NAV_ITEMS.map(({ label, href }) => (
                <a key={href} href={href} onClick={() => setActiveHref(href)}
                  style={{ ...SANS, fontSize:'13px', fontWeight:500, letterSpacing:'-0.01em', position:'relative', padding:'6px 12px' }}
                  className={`transition-colors duration-150 ${
                    activeHref === href
                      ? 'text-[#1f6fb2]'
                      : showSolid
                        ? 'text-gray-700 dark:text-white/70 hover:text-[#1f3a5f] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                        : 'text-gray-800 dark:text-white/85 hover:bg-white/15 dark:hover:bg-white/10'
                  }`}>
                  {label}
                  {activeHref === href && <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#1f6fb2]" />}
                </a>
              ))}

              <span className="w-px h-4 bg-gray-200 dark:bg-white/10 mx-2.5" />

              <button onClick={toggleTheme}
                className={`p-1.5 mr-8 transition-colors ${showSolid ? 'text-gray-500 dark:text-white/45' : 'text-gray-700 dark:text-white/60'} hover:text-[#1f3a5f] dark:hover:text-white`}
                aria-label="Toggle theme">
                <img src={moon} alt="dark"  className="w-4 dark:hidden" />
                <img src={sun}  alt="light" className="w-4 hidden dark:block" />
              </button>

              <div className="relative inline-flex items-center justify-center">
                <span className="_nb-p1 absolute inset-0 border-2 border-[#C45500]/55 pointer-events-none" />
                <span className="_nb-p2 absolute inset-0 border   border-[#C45500]/30 pointer-events-none" />
                <a href="#contact"
                  style={{ ...SANS, fontSize:'12.5px', fontWeight:700, letterSpacing:'0.02em', padding:'6px 20px', color:'white', background:'linear-gradient(135deg,#7A2E00,#C45500 50%,#FF7A00)', boxShadow:'0 2px 12px rgba(196,85,0,0.26)', whiteSpace:'nowrap', position:'relative', zIndex:10 }}
                  className="ring-1 ring-inset ring-white/25 hover:shadow-[0_4px_18px_rgba(196,85,0,0.42)] transition-shadow duration-200">
                  Hire me
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-1.5 ml-auto">
              <button onClick={toggleTheme}
                className={`p-1.5 transition-colors ${showSolid ? 'text-gray-500 dark:text-white/45' : 'text-gray-600 dark:text-white/60'} hover:text-[#1f3a5f] dark:hover:text-white`}>
                <img src={moon} alt="" className="w-4 dark:hidden" />
                <img src={sun}  alt="" className="w-4 hidden dark:block" />
              </button>
              <button onClick={() => setMobileOpen(v => !v)}
                className={`p-1.5 transition-colors ${mobileOpen ? 'text-[#1f6fb2]' : showSolid ? 'text-gray-600 dark:text-white/65' : 'text-gray-700 dark:text-white/75'} hover:text-[#1f3a5f] dark:hover:text-white`}
                aria-label="Toggle menu">
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {dropdownOpen && <StackPanel onClose={() => setDropdownOpen(false)} />}
      </nav>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} toggleTheme={toggleTheme} />
    </>
  )
}

export default Navbar