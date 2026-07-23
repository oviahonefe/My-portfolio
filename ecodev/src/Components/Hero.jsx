import { useEffect } from 'react'
import profileImg from '../assets/saviour-casual.png'
import rightArrow from '../assets/right-arrow-white.png'
import download from '../assets/download-icon.png'
import resume from '../assets/mycvv.pdf'
import hand from '../assets/hand-icon.png'

const STATS = [
  { value: '4+',    label: 'Years exp.'  },
  { value: '20+',   label: 'Projects'    },
  { value: '2',     label: 'Platforms'   },
  { value: 'JS/TS', label: 'Core stack'  },
]

const CSS = `
@keyframes _hFadeUp {
  from { opacity:0; transform:translateY(22px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes _hScaleIn {
  from { opacity:0; transform:scale(0.93); }
  to   { opacity:1; transform:scale(1); }
}
@keyframes _hPulseRing {
  0%   { transform:scale(1);    opacity:0.5; }
  100% { transform:scale(1.16); opacity:0;   }
}
._h-fade-up  { animation:_hFadeUp  0.75s cubic-bezier(0.22,1,0.36,1) both; }
._h-scale-in { animation:_hScaleIn 0.65s cubic-bezier(0.22,1,0.36,1) both; }
._h-ring     { animation:_hPulseRing 2.2s ease-out infinite; }
`

const Hero = () => {
  useEffect(() => {
    if (document.getElementById('__hero-css')) return
    const tag = document.createElement('style')
    tag.id = '__hero-css'
    tag.textContent = CSS
    document.head.appendChild(tag)
  }, [])

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white dark:bg-[#0a1628] min-h-screen flex items-center"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle,#1f3a5f 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7ff] via-white to-[#fff8f5] dark:from-[#0a1628] dark:via-[#0e2040] dark:to-[#0a1628]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1f6fb2]/7 dark:bg-[#1f6fb2]/12 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#C45500]/5 dark:bg-[#C45500]/9 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[82rem] mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div>
            <div className="_h-fade-up flex flex-wrap items-center gap-2 mb-4 sm:mb-5" style={{ animationDelay: '0ms' }}>
              <div className="inline-flex items-center gap-2 border border-[#1f6fb2]/25 bg-[#f0f7ff] dark:bg-[#1f6fb2]/10 dark:border-[#1f6fb2]/30 px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1f6fb2] animate-pulse" />
                <span className="text-[10.5px] font-bold text-[#1f6fb2] uppercase tracking-[0.18em]">Open to work</span>
              </div>
              <a href="https://logicsofttechnologies.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#FF7A00]/30 bg-[#fff8f5] dark:bg-[#FF7A00]/8 dark:border-[#FF7A00]/20 px-3 py-1.5 hover:border-[#FF7A00] transition-colors">
                <span className="text-[10.5px] font-bold text-[#C45500] dark:text-[#FF9A40] uppercase tracking-[0.14em]">Co-Founder · LogicSoft Technologies ↗</span>
              </a>
            </div>

            <div className="_h-fade-up flex items-center gap-2 mb-2 sm:mb-3" style={{ animationDelay: '60ms' }}>
              <span className="text-[15px] font-semibold text-gray-500 dark:text-white/45">Hi there</span>
              <img src={hand} alt="" className="w-5" />
            </div>

            <h1
              className="_h-fade-up font-serif leading-[1.08] text-[#1f3a5f] dark:text-white mb-4 sm:mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)', animationDelay: '120ms' }}
            >
              I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f6fb2] to-[#3a9bd5]">
                Oviahon Saviour
              </span>
              <br />Fullstack Engineer.
            </h1>

            <p className="_h-fade-up text-[14.5px] sm:text-[15.5px] text-gray-600 dark:text-white/55 leading-[1.8] max-w-[500px] mb-6 sm:mb-8"
              style={{ animationDelay: '190ms' }}>
              4 years building web and mobile applications from pixel-precise frontends to
              scalable Node.js backends. Full JavaScript / TypeScript stack, shipping products
              that are fast, accessible, and production ready.
            </p>

            <div className="_h-fade-up flex flex-wrap gap-3 mb-7 sm:mb-10" style={{ animationDelay: '260ms' }}>
              <a href="#contact"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 text-[13.5px] font-bold text-white bg-gradient-to-br from-[#7A2E00] via-[#C45500] to-[#FF7A00] hover:from-[#8F3600] hover:via-[#D46000] hover:to-[#FF8C1A] ring-1 ring-inset ring-white/20 transition-all duration-200 shadow-[0_4px_18px_rgba(196,85,0,0.3)]">
                Hire me <img src={rightArrow} alt="" className="w-3.5" />
              </a>
              <a href={resume} download
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 text-[13.5px] font-semibold text-[#1f3a5f] dark:text-white/80 border border-[#d1e3f5] dark:border-white/20 bg-white dark:bg-white/[0.04] hover:border-[#1f6fb2] hover:text-[#1f6fb2] dark:hover:text-white dark:hover:bg-white/10 transition-all duration-200">
                Download CV <img src={download} alt="" className="w-3.5 animate-bounce" />
              </a>
            </div>

            <div className="_h-fade-up flex flex-wrap gap-1.5 sm:gap-2" style={{ animationDelay: '320ms' }}>
              {['React','Next.js','Node.js','Express','React Native','PostgreSQL','MongoDB','Javascript','TypeScript'].map(t => (
                <span key={t}
                  className="text-[11px] sm:text-[11.5px] font-semibold text-[#1f3a5f] dark:text-white/70 border border-[#dce8f5] dark:border-white/10 bg-[#f8fafd] dark:bg-white/[0.04] px-2 sm:px-2.5 py-1 hover:border-[#1f6fb2] hover:text-[#1f6fb2] transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="_h-scale-in flex flex-col gap-4 sm:gap-5 items-center lg:items-end mt-8 lg:mt-0" style={{ animationDelay: '80ms' }}>

            <div className="relative w-full max-w-[420px] sm:max-w-[520px]">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#1f6fb2] z-10" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#C45500] z-10" />
              <div className="_h-ring absolute inset-0 border-2 border-[#1f6fb2]/30 pointer-events-none z-10" />

              <div className="w-full overflow-hidden border-2 border-[#1f6fb2]/30 dark:border-[#1f6fb2]/50 shadow-[0_16px_48px_rgba(31,111,178,0.14)] dark:shadow-[0_16px_48px_rgba(31,111,178,0.24)]">
                <img
                  src={profileImg}
                  alt="Oviahon Saviour"
                  className="w-full aspect-[4/4] object-cover object-top"
                />
              </div>

              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white dark:bg-[#0d1f35] border border-gray-100 dark:border-white/10 px-2.5 py-1 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                <span className="text-[9.5px] font-bold text-gray-700 dark:text-white/60 uppercase tracking-[0.12em]">Available</span>
              </div>

              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-white dark:bg-[#0d1f35] border border-[#FF7A00]/25 dark:border-[#FF7A00]/20 px-2.5 py-1 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                <span className="text-[9.5px] font-bold text-[#C45500] dark:text-[#FF9A40] uppercase tracking-[0.12em]">Co-Founder · LogicSoft</span>
              </div>
            </div>

            <div className="w-full max-w-[420px] sm:max-w-[520px] grid grid-cols-4 border border-[#e2ecf7] dark:border-white/10 divide-x divide-[#e2ecf7] dark:divide-white/10 bg-white dark:bg-white/[0.03] shadow-[0_2px_16px_rgba(31,111,178,0.07)]">
              {STATS.map(({ value, label }) => (
                <div key={label} className="py-3 sm:py-4 text-center">
                  <p className="text-[18px] sm:text-[22px] font-black text-[#1f3a5f] dark:text-white leading-none">{value}</p>
                  <p className="text-[8px] sm:text-[9px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-[0.1em] mt-1 sm:mt-1.5">{label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-gray-300 dark:text-white/20">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-gray-300 dark:from-white/20 to-transparent" />
      </div>
    </section>
  )
}

export default Hero