import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink, Github, Globe, Filter } from 'lucide-react'
import work_1 from '../assets/e-commerc.png'
import work_2 from '../assets/broker.jpg'
import work_3 from '../assets/doctor.png'
import work_4 from '../assets/owodex.png'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Serif+Display:ital@0;1&display=swap');
@keyframes _wkFadeUp {
  from { opacity:0; transform:translateY(20px); }
  to   { opacity:1; transform:translateY(0); }
}
._wk-u1 { animation:_wkFadeUp .6s cubic-bezier(.22,1,.36,1) .08s both; }
._wk-u2 { animation:_wkFadeUp .6s cubic-bezier(.22,1,.36,1) .16s both; }
._wk-u3 { animation:_wkFadeUp .6s cubic-bezier(.22,1,.36,1) .24s both; }
._wk-u4 { animation:_wkFadeUp .6s cubic-bezier(.22,1,.36,1) .32s both; }
._wk-u5 { animation:_wkFadeUp .6s cubic-bezier(.22,1,.36,1) .40s both; }
._wk-u6 { animation:_wkFadeUp .6s cubic-bezier(.22,1,.36,1) .48s both; }
._wk-card { transition:transform .28s,box-shadow .28s; }
._wk-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(31,111,178,.13); }
._wk-img-wrap { overflow:hidden; }
._wk-img-wrap img { transition:transform .5s cubic-bezier(.22,1,.36,1); }
._wk-card:hover ._wk-img-wrap img { transform:scale(1.05); }
._wk-overlay { transition:opacity .3s; }
._wk-card:hover ._wk-overlay { opacity:1 !important; }
._wk-filter-btn { transition:all .18s; }
._wk-filter-btn.active { background:#1f3a5f; color:white; border-color:#1f3a5f; }
.dark ._wk-filter-btn.active { background:#1f6fb2; border-color:#1f6fb2; }
`

const SANS  = { fontFamily:"'DM Sans',ui-sans-serif,system-ui,sans-serif" }
const SERIF = { fontFamily:"'DM Serif Display',Georgia,serif" }

const PROJECTS = [
  {
    img: work_1,
    title: 'Ecommerce Platform',
    type: 'Full-Stack',
    stack: 'MERN Stack',
    year: '2025',
    desc: 'Complete e-commerce solution with product management, cart, checkout flow, order tracking, and a full admin dashboard with analytics.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe'],
    live: 'https://azafricanstore.com/',
    github: 'https://github.com/oviahonefe',
    featured: true,
  },
  {
    img: work_2,
    title: 'Investment Broker Platform',
    type: 'Full-stack',
    stack: 'ReactJS + TailwindCSS · NodeJS · PostgreSQL',
    year: '2025',
    desc: 'Investment platform frontend with real-time stock data, user authentication, portfolio management, and interactive charts.',
    tags: ['React', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'CoinGecko API', 'Express.js', 'JWT', 'NodeJS'],
    live: 'https://innovationspacextrading.cloud/',
    github: 'https://github.com/oviahonefe',
    featured: false,
  },
  {
    img: work_3,
    title: 'Doctor Appointment App',
    type: 'Full-Stack',
    stack: 'MERN Stack',
    year: '2024',
    desc: 'Healthcare booking system with patient management, doctor scheduling, appointment reminders, role-based access, and admin panel.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Nodemailer'],
    live: 'https://doctors-appointment-website.vercel.app/',
    github: 'https://github.com/oviahonefe',
    featured: true,
  },
  {
    img: work_4,
    title: 'Fintech Website',
    type: 'Frontend',
    stack: 'React · Motion',
    year: '2024',
    desc: 'Modern fintech website with animated UI elements and a sleek design.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'GSAP'],
    live: 'https://www.owodex.com/',
    github: 'https://github.com/oviahonefe',
    featured: false,
  },
]

const FILTERS = ['All', 'Full-Stack', 'Frontend']

const Work = () => {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  const [active, setActive] = useState('All')

  useEffect(() => {
    if (!document.getElementById('__wk-css')) {
      const t = document.createElement('style'); t.id = '__wk-css'; t.textContent = CSS
      document.head.appendChild(t)
    }
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold:.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const an = (n) => vis ? `_wk-u${n}` : 'opacity-0'
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === active)

  return (
    <section id="work" ref={ref} className="w-full bg-[#f9fafb] dark:bg-[#0d1f35] scroll-mt-20">

      <div className="border-b border-gray-100 dark:border-white/8 bg-white dark:bg-[#0a1628]">
        <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-6 py-8 sm:py-10 lg:py-12">
          <div className={`flex flex-col lg:flex-row lg:items-end gap-5 lg:gap-6 ${an(1)}`}>
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-block w-8 h-[2px]" style={{ background:'linear-gradient(90deg,#1f6fb2,#FF7A00)' }} />
                <span style={{ ...SANS, fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#1f6fb2' }}>My Portfolio</span>
              </div>
              <h2 style={{ ...SERIF, fontSize:'clamp(26px,4vw,44px)', lineHeight:1.1 }} className="text-[#1f3a5f] dark:text-white">
                Projects I've <br />
                <em className="not-italic" style={{ background:'linear-gradient(135deg,#1f6fb2,#0ea5e9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>shipped</em>
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3">
              <p style={{ ...SANS, fontSize:'14px', lineHeight:1.75, maxWidth:'420px' }} className="text-gray-500 dark:text-white/50 lg:text-right">
                Full-stack web and mobile products each built with clean architecture, tested, and shipped to production.
              </p>
              <a href="https://github.com/oviahonefe" target="_blank" rel="noreferrer"
                style={{ ...SANS, fontSize:'12.5px', fontWeight:600, display:'inline-flex', alignItems:'center', gap:'6px', padding:'7px 16px' }}
                className="border border-[#1f3a5f] dark:border-white/20 text-[#1f3a5f] dark:text-white/70 hover:border-[#1f6fb2] hover:text-[#1f6fb2] dark:hover:text-white transition-colors">
                <Github size={13} /> View all on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-6 py-10 sm:py-12 lg:py-16">

        <div className={`flex items-center gap-3 mb-6 sm:mb-8 ${an(2)}`}>
          <Filter size={13} className="text-gray-400 dark:text-white/25 shrink-0" />
          <div className="flex items-center gap-2 flex-wrap">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)}
                style={{ ...SANS, fontSize:'11.5px', fontWeight:600, padding:'5px 14px', border:'1px solid' }}
                className={`_wk-filter-btn border-gray-200 dark:border-white/15 text-gray-500 dark:text-white/45 hover:border-[#1f6fb2] hover:text-[#1f6fb2] ${active === f ? 'active' : ''}`}>
                {f}
              </button>
            ))}
          </div>
          <span style={{ ...SANS, fontSize:'11px' }} className="ml-auto text-gray-400 dark:text-white/25">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map(({ img, title, type, stack, year, desc, tags, live, github, featured }, i) => (
            <div key={title}
              className={`_wk-card bg-white dark:bg-[#0a1628] border flex flex-col ${featured ? 'border-[#1f6fb2]/30 dark:border-[#1f6fb2]/25' : 'border-gray-100 dark:border-white/8'} ${an(i + 3)}`}>

              {featured && (
                <div style={{ ...SANS, fontSize:'8.5px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', padding:'4px 12px', background:'linear-gradient(90deg,#1f3a5f,#1f6fb2)', color:'white' }}>
                  Featured project
                </div>
              )}

              <div className="_wk-img-wrap relative" style={{ aspectRatio:'16/10' }}>
                <img src={img} alt={title} className="w-full h-full object-cover object-top" />
                <div style={{ ...SANS, fontSize:'9px', fontWeight:700, position:'absolute', bottom:'8px', left:'8px', padding:'3px 8px', background:'rgba(10,22,40,.82)', color:'rgba(255,255,255,.7)', backdropFilter:'blur(4px)' }}>
                  {year}
                </div>
                <div className="_wk-overlay absolute inset-0 flex items-center justify-center gap-3" style={{ background:'rgba(15,30,60,0.74)', opacity:0 }}>
                  <a href={live} target="_blank" rel="noreferrer"
                    style={{ ...SANS, fontSize:'11.5px', fontWeight:700, padding:'8px 14px', color:'white', background:'linear-gradient(135deg,#7A2E00,#C45500,#FF7A00)', display:'inline-flex', alignItems:'center', gap:'5px' }}>
                    <Globe size={12} /> Live
                  </a>
                  <a href={github} target="_blank" rel="noreferrer"
                    style={{ ...SANS, fontSize:'11.5px', fontWeight:700, padding:'8px 14px', display:'inline-flex', alignItems:'center', gap:'5px' }}
                    className="bg-white/15 border border-white/30 text-white hover:bg-white/25 transition-colors">
                    <Github size={12} /> Code
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span style={{ ...SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'#1f6fb2' }}>{type} · {stack}</span>
                </div>

                <h3 style={{ ...SERIF, fontSize:'17px', lineHeight:1.25, marginBottom:'8px' }} className="text-[#1f3a5f] dark:text-white">{title}</h3>
                <p style={{ ...SANS, fontSize:'12.5px', lineHeight:1.65 }} className="text-gray-500 dark:text-white/50 mb-4 flex-1">{desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.map(t => (
                    <span key={t} style={{ ...SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.06em', padding:'3px 7px' }}
                      className="border border-gray-100 dark:border-white/10 bg-[#f8fafc] dark:bg-white/[0.04] text-gray-500 dark:text-white/40">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-white/8">
                  <a href={live} target="_blank" rel="noreferrer"
                    style={{ ...SANS, fontSize:'12px', fontWeight:700, display:'inline-flex', alignItems:'center', gap:'4px', color:'#1f6fb2' }}
                    className="hover:gap-2 transition-all duration-150">
                    Live site <ExternalLink size={11} />
                  </a>
                  <a href={github} target="_blank" rel="noreferrer"
                    style={{ ...SANS, fontSize:'12px', fontWeight:600, display:'inline-flex', alignItems:'center', gap:'4px' }}
                    className="text-gray-400 dark:text-white/30 hover:text-[#1f3a5f] dark:hover:text-white transition-colors">
                    <Github size={11} /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-gray-100 dark:border-white/8 px-4 sm:px-6 py-5 bg-white dark:bg-[#0a1628] ${an(6)}`}>
          <div>
            <h4 style={{ ...SERIF, fontSize:'17px' }} className="text-[#1f3a5f] dark:text-white mb-0.5">More projects on GitHub</h4>
            <p style={{ ...SANS, fontSize:'13px' }} className="text-gray-500 dark:text-white/45">Browse repos, experiments, and open-source work.</p>
          </div>
          <a href="https://github.com/oviahonefe" target="_blank" rel="noreferrer"
            style={{ ...SANS, fontSize:'13px', fontWeight:700, letterSpacing:'0.02em', padding:'10px 20px', display:'inline-flex', alignItems:'center', gap:'8px', whiteSpace:'nowrap' }}
            className="shrink-0 border border-[#1f3a5f] dark:border-white/20 text-[#1f3a5f] dark:text-white hover:border-[#1f6fb2] hover:text-[#1f6fb2] dark:hover:border-white/40 transition-colors">
            <Github size={14} /> View GitHub <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work