import React, { useEffect } from 'react'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import logo from '../assets/my-name.png'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Serif+Display:ital@0;1&display=swap');
._ft-action { transition:all .2s; display:flex; align-items:center; }
._ft-action:hover { transform:translateX(3px); }
._ft-social { transition:background .2s,border-color .2s,transform .2s; display:flex; align-items:center; justify-content:center; }
._ft-social:hover { transform:translateY(-3px); border-color:#1f6fb2 !important; }
`

const SANS  = { fontFamily:"'DM Sans',ui-sans-serif,system-ui,sans-serif" }
const SERIF = { fontFamily:"'DM Serif Display',Georgia,serif" }

const QUICK_ACTIONS = [
  {
    label: 'Start a project',
    sub: 'Fill out the project brief',
    href: '#contact',
    cta: true,
  },
  {
    label: 'Chat on WhatsApp',
    sub: 'Fast replies · usually < 2h',
    href: 'https://wa.me/2347034302056',
    ext: true,
    icon: <svg width="16" height="16" fill="currentColor" className="text-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  },
  {
    label: 'Send an email',
    sub: 'oviahonsaviourefe@gmail.com',
    href: 'mailto:oviahonsaviourefe@gmail.com',
    icon: <Mail size={16} className="text-[#1f6fb2]" />,
  },
  {
    label: 'Connect on LinkedIn',
    sub: 'Professional profile',
    href: 'https://www.linkedin.com/in/oviahon-saviour-837a2b422',
    ext: true,
    icon: <svg width="16" height="16" fill="currentColor" className="text-[#0077b5]" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'Browse GitHub',
    sub: 'Repos · open-source · experiments',
    href: 'https://github.com/oviahonefe',
    ext: true,
    icon: <svg width="16" height="16" fill="currentColor" className="text-gray-700 dark:text-white/70" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
  },
  {
    label: 'Download Resume',
    sub: 'PDF · Updated 2024',
    href: '#',
    icon: <ArrowRight size={16} className="text-[#1f6fb2] rotate-90" />,
  },
]

const Footer = () => {
  useEffect(() => {
    if (!document.getElementById('__ft-css')) {
      const t = document.createElement('style'); t.id = '__ft-css'; t.textContent = CSS
      document.head.appendChild(t)
    }
  }, [])

  return (
    <footer className="w-full bg-white dark:bg-[#0a1628]">

      <div style={{ background:'linear-gradient(135deg,#1f3a5f 0%,#1f6fb2 100%)' }}>
        <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-6 py-7 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 style={{ ...SERIF, fontSize:'clamp(18px,3vw,22px)', color:'white', lineHeight:1.2, marginBottom:'4px' }}>
              Ready to start your next project?
            </h3>
            <p style={{ ...SANS, fontSize:'13.5px', color:'rgba(255,255,255,.6)' }}>
              I'm open to freelance, contract, and full-time opportunities.
            </p>
          </div>
          <a href="#contact"
            style={{ ...SANS, fontSize:'13px', fontWeight:700, letterSpacing:'0.02em', padding:'11px 22px', background:'linear-gradient(135deg,#7A2E00,#C45500 50%,#FF7A00)', boxShadow:'0 4px 16px rgba(196,85,0,0.35)', color:'white', display:'inline-flex', alignItems:'center', gap:'8px', whiteSpace:'nowrap' }}
            className="shrink-0 hover:shadow-[0_6px_22px_rgba(196,85,0,0.5)] transition-shadow duration-200">
            Get in touch <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-white/8">
        <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-6 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 sm:gap-12">

          <div>
            <a href="#top" className="inline-block mb-5">
              <img src={logo} alt="Oviahon Saviour" className="h-40 w-auto object-contain brightness-0 dark:brightness-0 dark:invert" />
            </a>
            <p style={{ ...SANS, fontSize:'14px', lineHeight:1.8, maxWidth:'380px', marginBottom:'16px' }}
              className="text-gray-500 dark:text-white/45">
              Full-Stack Engineer building performant, production-grade web and mobile products. Based in Nigeria — available worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <div style={{ ...SANS, fontSize:'11.5px', fontWeight:600, display:'inline-flex', alignItems:'center', gap:'6px', padding:'5px 12px', border:'1px solid' }}
                className="border-gray-100 dark:border-white/10 text-gray-500 dark:text-white/35">
                <MapPin size={11} className="text-[#1f6fb2]" /> Lekki Lagos State, Nigeria · Remote OK
              </div>
              <div style={{ ...SANS, fontSize:'11.5px', fontWeight:600, display:'inline-flex', alignItems:'center', gap:'6px', padding:'5px 12px' }}
                className="border border-emerald-200 dark:border-emerald-500/25 bg-emerald-50 dark:bg-emerald-500/8 text-emerald-700 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for work
              </div>
            </div>

            <div>
              <p style={{ ...SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:'8px' }}
                className="text-gray-400 dark:text-white/25">Core stack</p>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js','React','TypeScript','Node.js','React Native','PostgreSQL','MongoDB','Docker'].map(t => (
                  <span key={t} style={{ ...SANS, fontSize:'9.5px', fontWeight:600, letterSpacing:'0.03em', padding:'3px 9px', border:'1px solid' }}
                    className="border-gray-100 dark:border-white/10 text-gray-500 dark:text-white/35 bg-[#f9fafb] dark:bg-white/[0.03]">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:'14px' }}
              className="text-gray-400 dark:text-white/30">Quick actions</p>

            <div className="space-y-1.5">
              {QUICK_ACTIONS.map(({ label, sub, href, ext, icon, cta }) => (
                <a key={label} href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noreferrer' : undefined}
                  className={`_ft-action group w-full gap-3 px-3 sm:px-4 py-3 sm:py-3.5 border transition-all ${
                    cta
                      ? 'border-[#1f3a5f]/30 dark:border-[#1f6fb2]/25 bg-gradient-to-r from-[#eaf6ff] to-white dark:from-[#1f3a5f]/25 dark:to-transparent hover:border-[#1f6fb2] hover:from-[#dff0ff]'
                      : 'border-gray-100 dark:border-white/8 bg-white dark:bg-[#0d1f35] hover:border-[#1f6fb2]/40'
                  }`}>
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#f9fafb] dark:bg-white/[0.04] border border-gray-100 dark:border-white/8">
                    {cta
                      ? <ArrowRight size={14} className="text-[#FF7A00]" />
                      : icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p style={{ ...SANS, fontSize:'13px', fontWeight:cta?700:600 }}
                      className={cta ? 'text-[#1f3a5f] dark:text-white' : 'text-gray-700 dark:text-white/70'}>{label}</p>
                    <p style={{ ...SANS, fontSize:'11px' }} className="text-gray-400 dark:text-white/30 truncate">{sub}</p>
                  </div>
                  <ArrowRight size={13} className="shrink-0 text-gray-300 dark:text-white/15 group-hover:text-[#1f6fb2] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-white/8">
        <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p style={{ ...SANS, fontSize:'12px' }} className="text-gray-400 dark:text-white/20 text-center sm:text-left">
            © {new Date().getFullYear()} Oviahon Saviour. All rights reserved.
          </p>
          <p style={{ ...SANS, fontSize:'11.5px' }} className="text-gray-400 dark:text-white/20 text-center sm:text-right">
            Built with React · Vite · EmailJS · TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer