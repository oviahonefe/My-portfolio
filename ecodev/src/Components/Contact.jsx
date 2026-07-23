import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowRight, Mail, MapPin, Linkedin, Github, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react'

const EJS_SERVICE_ID  = 'service_l7s88wp'
const EJS_TEMPLATE_ID = 'template_nmvmbma'
const EJS_PUBLIC_KEY  = 'rfzmJEEbwXAmJ4oYh'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Serif+Display:ital@0;1&display=swap');
@keyframes _ctFadeUp {
  from { opacity:0; transform:translateY(20px); }
  to   { opacity:1; transform:translateY(0); }
}
._ct-u1 { animation:_ctFadeUp .6s cubic-bezier(.22,1,.36,1) .08s both; }
._ct-u2 { animation:_ctFadeUp .6s cubic-bezier(.22,1,.36,1) .18s both; }
._ct-u3 { animation:_ctFadeUp .6s cubic-bezier(.22,1,.36,1) .28s both; }
._ct-input {
  font-family:'DM Sans',ui-sans-serif,system-ui,sans-serif;
  font-size:13.5px; width:100%; padding:11px 14px;
  border:1px solid #e5e7eb; background:white; outline:none;
  transition:border-color .2s,box-shadow .2s; color:#1f3a5f;
}
._ct-input::placeholder { color:#9ca3af; }
._ct-input:focus { border-color:#1f6fb2; box-shadow:0 0 0 3px rgba(31,111,178,.08); }
.dark ._ct-input { background:#0a1628; border-color:rgba(255,255,255,.1); color:rgba(255,255,255,.85); }
.dark ._ct-input::placeholder { color:rgba(255,255,255,.3); }
.dark ._ct-input:focus { border-color:#1f6fb2; box-shadow:0 0 0 3px rgba(31,111,178,.14); }
._ct-select {
  font-family:'DM Sans',ui-sans-serif,system-ui,sans-serif;
  font-size:13.5px; width:100%; padding:11px 36px 11px 14px;
  border:1px solid #e5e7eb; background:white; outline:none;
  appearance:none; -webkit-appearance:none;
  transition:border-color .2s,box-shadow .2s; color:#1f3a5f; cursor:pointer;
}
._ct-select:focus { border-color:#1f6fb2; box-shadow:0 0 0 3px rgba(31,111,178,.08); }
.dark ._ct-select { background:#0a1628; border-color:rgba(255,255,255,.1); color:rgba(255,255,255,.85); }
.dark ._ct-select:focus { border-color:#1f6fb2; }
._ct-select-wrap { position:relative; }
._ct-select-icon { position:absolute; right:12px; top:50%; transform:translateY(-50%); pointer-events:none; color:#9ca3af; }
._ct-tech-chip {
  display:inline-flex; align-items:center; gap:5px; cursor:pointer;
  font-family:'DM Sans',sans-serif; font-size:10px; font-weight:600; letter-spacing:.04em;
  padding:5px 10px; border:1px solid #e5e7eb; background:#f9fafb; color:#4b5563;
  transition:all .18s; user-select:none;
}
._ct-tech-chip:hover { border-color:#1f6fb2; color:#1f6fb2; background:#eaf6ff; }
._ct-tech-chip.selected { border-color:#1f6fb2; background:#1f6fb2; color:white; }
.dark ._ct-tech-chip { border-color:rgba(255,255,255,.1); color:rgba(255,255,255,.45); background:rgba(255,255,255,.03); }
.dark ._ct-tech-chip:hover { border-color:#1f6fb2; color:#60a5fa; background:rgba(31,111,178,.12); }
.dark ._ct-tech-chip.selected { background:#1f6fb2; border-color:#1f6fb2; color:white; }
._ct-budget-opt {
  flex:1; text-align:center; cursor:pointer; padding:10px 8px;
  border:1px solid #e5e7eb; background:#f9fafb;
  font-family:'DM Sans',sans-serif; font-size:11.5px; font-weight:600;
  color:#4b5563; transition:all .18s; user-select:none;
}
._ct-budget-opt:hover { border-color:#1f6fb2; color:#1f6fb2; background:#eaf6ff; }
._ct-budget-opt.selected { border-color:#1f6fb2; background:#1f6fb2; color:white; }
.dark ._ct-budget-opt { border-color:rgba(255,255,255,.1); color:rgba(255,255,255,.45); background:rgba(255,255,255,.03); }
.dark ._ct-budget-opt.selected { background:#1f6fb2; border-color:#1f6fb2; color:white; }
@keyframes _ct-spin { to { transform:rotate(360deg); } }
._ct-spinner { animation:_ct-spin .75s linear infinite; }
`

const SANS  = { fontFamily:"'DM Sans',ui-sans-serif,system-ui,sans-serif" }
const SERIF = { fontFamily:"'DM Serif Display',Georgia,serif" }

const PROJECT_TYPES = ['Web Application','Mobile App','E-commerce','SaaS Platform','Company Website','API / Backend','UI/UX Design','Other']

const TECH_OPTIONS = [
  { group:'Frontend', items:['React','Next.js','TypeScript','Tailwind CSS','Framer Motion'] },
  { group:'Backend',  items:['Node.js','Express.js','Prisma','PostgreSQL','MongoDB','Redis'] },
  { group:'Mobile',   items:['React Native','Expo'] },
  { group:'Cloud',    items:['Vercel','Supabase','Firebase','AWS','Docker'] },
  { group:'Auth',     items:['JWT / Auth','OAuth / Social login','NextAuth'] },
  { group:'Payments', items:['Stripe','Paystack','Flutterwave'] },
]

const BUDGET_OPTIONS   = ['< $500','$500–$1.5k','$1.5k–$5k','$5k–$10k','$10k+','Let\'s discuss']
const TIMELINE_OPTIONS = ['ASAP','1–2 weeks','1 month','2–3 months','3+ months','Flexible']

const INFO = [
  { icon:<Mail size={15} strokeWidth={1.5} className="text-[#1f6fb2]"/>, label:'Email', value:'oviahonsaviourefe@gmail.com', href:'mailto:oviahonsaviourefe@gmail.com' },
  { icon:<svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" className="text-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>, label:'WhatsApp', value:'+234 7034302056', href:'https://wa.me/2347034302056' },
  { icon:<MapPin size={15} strokeWidth={1.5} className="text-[#1f6fb2]"/>, label:'Location', value:'Lekki Lagos State, Nigeria · Remote OK', href:null },
]

const EMPTY_FORM = { name:'', email:'', company:'', projectType:'', projectTitle:'', projectDesc:'', subject:'', message:'' }

const Label = ({ children }) => (
  <label style={{ ...SANS, fontSize:'11px', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:'6px' }}
    className="text-gray-400 dark:text-white/30">{children}</label>
)

const SectionHead = ({ num, title }) => (
  <div className="px-4 sm:px-5 py-3 border-b border-gray-100 dark:border-white/8">
    <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase' }}
      className="text-[#1f6fb2]">{num} — {title}</p>
  </div>
)

const Contact = () => {
  const ref = useRef(null)
  const [vis, setVis]                           = useState(false)
  const [selectedTech, setSelectedTech]         = useState([])
  const [selectedBudget, setSelectedBudget]     = useState('')
  const [selectedTimeline, setSelectedTimeline] = useState('')
  const [form, setForm]     = useState(EMPTY_FORM)
  const [status, setStatus] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!document.getElementById('__ct-css')) {
      const t = document.createElement('style'); t.id = '__ct-css'; t.textContent = CSS
      document.head.appendChild(t)
    }
    emailjs.init(EJS_PUBLIC_KEY)
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } },
      { threshold:.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const an = (n) => vis ? `_ct-u${n}` : 'opacity-0'
  const field = (k) => ({ value: form[k], onChange: e => setForm(f => ({ ...f, [k]: e.target.value })) })
  const toggleTech = (item) => setSelectedTech(prev => prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    const templateParams = {
      from_name:     form.name,
      from_email:    form.email,
      company:       form.company       || 'Not provided',
      subject:       form.subject       || 'Portfolio Enquiry',
      project_type:  form.projectType   || 'Not specified',
      project_title: form.projectTitle  || 'Not provided',
      project_desc:  form.projectDesc,
      tech_stack:    selectedTech.length ? selectedTech.join(', ') : 'No preference',
      budget:        selectedBudget     || 'Not specified',
      timeline:      selectedTimeline   || 'Not specified',
      message:       form.message       || 'No additional notes.',
      sent_at:       new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' }),
      reply_to:      form.email,
    }
    try {
      const result = await emailjs.send(EJS_SERVICE_ID, EJS_TEMPLATE_ID, templateParams, EJS_PUBLIC_KEY)
      if (result.status === 200) {
        setStatus('success')
        setForm(EMPTY_FORM)
        setSelectedTech([]); setSelectedBudget(''); setSelectedTimeline('')
      } else {
        throw new Error(`Unexpected status: ${result.status}`)
      }
    } catch (err) {
      console.error('[EmailJS]', err)
      setErrorMsg(err?.text || err?.message || 'Unknown error. Please email me directly.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="w-full bg-white dark:bg-[#0a1628] scroll-mt-20">

      <div className="border-b border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35]">
        <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-6 py-8 sm:py-10 lg:py-12">
          <div className={`flex flex-col lg:flex-row lg:items-end gap-5 lg:gap-6 ${an(1)}`}>
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-block w-8 h-[2px]" style={{ background:'linear-gradient(90deg,#1f6fb2,#FF7A00)' }} />
                <span style={{ ...SANS, fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#1f6fb2' }}>Get In Touch</span>
              </div>
              <h2 style={{ ...SERIF, fontSize:'clamp(26px,4vw,44px)', lineHeight:1.1 }} className="text-[#1f3a5f] dark:text-white">
                Let's build something<br />
                <em className="not-italic" style={{ background:'linear-gradient(135deg,#1f6fb2,#0ea5e9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>together</em>
              </h2>
            </div>
            <p style={{ ...SANS, fontSize:'14px', lineHeight:1.75, maxWidth:'420px' }} className="text-gray-500 dark:text-white/50 lg:text-right">
              Fill out the project brief below — the more detail you share, the better I can scope and quote your project accurately.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-6 py-10 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">

          <div className={an(2)}>
            <form onSubmit={handleSubmit}>

              <div className="border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35] mb-4">
                <SectionHead num="01" title="Your Details" />
                <div className="p-4 sm:p-5 grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Your Name *</Label>
                    <input required type="text" placeholder="John Smith" className="_ct-input" {...field('name')} />
                  </div>
                  <div>
                    <Label>Email Address *</Label>
                    <input required type="email" placeholder="you@company.com" className="_ct-input" {...field('email')} />
                  </div>
                  <div>
                    <Label>Company / Organisation</Label>
                    <input type="text" placeholder="Your company (optional)" className="_ct-input" {...field('company')} />
                  </div>
                  <div>
                    <Label>Subject</Label>
                    <input type="text" placeholder="One-line summary" className="_ct-input" {...field('subject')} />
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35] mb-4">
                <SectionHead num="02" title="Project Brief" />
                <div className="p-4 sm:p-5 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Project Type *</Label>
                      <div className="_ct-select-wrap">
                        <select required className="_ct-select" value={form.projectType}
                          onChange={e => setForm(f => ({ ...f, projectType:e.target.value }))}>
                          <option value="">Select project type…</option>
                          {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <ChevronDown size={14} className="_ct-select-icon" />
                      </div>
                    </div>
                    <div>
                      <Label>Project Name / Title</Label>
                      <input type="text" placeholder="e.g. E-commerce store for…" className="_ct-input" {...field('projectTitle')} />
                    </div>
                  </div>
                  <div>
                    <Label>Project Description *</Label>
                    <textarea required rows={5} placeholder="Describe what you want to build — features, users, integrations, reference sites…"
                      className="_ct-input" style={{ resize:'vertical', minHeight:'120px' }} {...field('projectDesc')} />
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35] mb-4">
                <div className="px-4 sm:px-5 py-3 border-b border-gray-100 dark:border-white/8 flex items-center justify-between">
                  <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase' }} className="text-[#1f6fb2]">03 — Preferred Tech Stack</p>
                  <span style={{ ...SANS, fontSize:'10px', fontWeight:600 }} className="text-gray-400 dark:text-white/25">
                    {selectedTech.length > 0 ? `${selectedTech.length} selected` : 'Optional — select any'}
                  </span>
                </div>
                <div className="p-4 sm:p-5 space-y-4">
                  {TECH_OPTIONS.map(({ group, items }) => (
                    <div key={group}>
                      <p style={{ ...SANS, fontSize:'8.5px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:'6px' }}
                        className="text-gray-400 dark:text-white/25">{group}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map(item => (
                          <button key={item} type="button" onClick={() => toggleTech(item)}
                            className={`_ct-tech-chip ${selectedTech.includes(item) ? 'selected' : ''}`}>
                            {selectedTech.includes(item) && <CheckCircle2 size={10} />}
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  {selectedTech.length > 0 && (
                    <div className="pt-3 border-t border-gray-100 dark:border-white/8">
                      <p style={{ ...SANS, fontSize:'11px', fontWeight:600 }} className="text-[#1f6fb2]">Selected: {selectedTech.join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35] mb-4">
                <SectionHead num="04" title="Budget & Timeline" />
                <div className="p-4 sm:p-5 space-y-5">
                  <div>
                    <Label>Budget Range</Label>
                    <div className="flex flex-wrap gap-1.5">
                      {BUDGET_OPTIONS.map(b => (
                        <button key={b} type="button" onClick={() => setSelectedBudget(b)}
                          style={{ minWidth:'80px' }} className={`_ct-budget-opt ${selectedBudget === b ? 'selected' : ''}`}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Timeline / Start Date</Label>
                    <div className="flex flex-wrap gap-1.5">
                      {TIMELINE_OPTIONS.map(t => (
                        <button key={t} type="button" onClick={() => setSelectedTimeline(t)}
                          style={{ minWidth:'80px' }} className={`_ct-budget-opt ${selectedTimeline === t ? 'selected' : ''}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35] mb-6">
                <SectionHead num="05" title="Anything Else?" />
                <div className="p-4 sm:p-5">
                  <textarea rows={4} placeholder="Other details, questions, or context…"
                    className="_ct-input" style={{ resize:'vertical', minHeight:'100px' }} {...field('message')} />
                </div>
              </div>

              {status === 'success' && (
                <div style={{ ...SANS, fontSize:'13px', fontWeight:600, display:'flex', alignItems:'center', gap:'8px', padding:'12px 16px', marginBottom:'16px', background:'#f0fdf4', border:'1px solid #86efac', color:'#166534' }}
                  className="dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400">
                  <CheckCircle2 size={15} /> Project brief sent! I'll reply within 24 hours with a quote.
                </div>
              )}
              {status === 'error' && (
                <div style={{ ...SANS, fontSize:'13px', fontWeight:600, display:'flex', flexDirection:'column', gap:'4px', padding:'12px 16px', marginBottom:'16px', background:'#fef2f2', border:'1px solid #fca5a5', color:'#991b1b' }}
                  className="dark:bg-red-500/10 dark:border-red-500/30 dark:text-red-400">
                  <div className="flex items-center gap-2"><AlertCircle size={15} /> Something went wrong — please try again.</div>
                  {errorMsg && <p style={{ ...SANS, fontSize:'11.5px', fontWeight:400, opacity:.8 }}>{errorMsg}</p>}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === 'sending'}
                  style={{ ...SANS, fontSize:'13px', fontWeight:700, letterSpacing:'0.02em', padding:'12px 28px', color:'white', background:'linear-gradient(135deg,#7A2E00,#C45500 50%,#FF7A00)', boxShadow:'0 4px 16px rgba(196,85,0,0.26)', display:'inline-flex', alignItems:'center', gap:'8px', opacity:status==='sending'?.7:1, cursor:status==='sending'?'not-allowed':'pointer' }}
                  className="hover:shadow-[0_6px_22px_rgba(196,85,0,0.40)] transition-shadow">
                  {status === 'sending'
                    ? <><svg className="_ct-spinner" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Sending…</>
                    : <><span>Send Project Brief</span><ArrowRight size={14} /></>}
                </button>
                <p style={{ ...SANS, fontSize:'11px' }} className="text-gray-400 dark:text-white/25">* Required fields</p>
              </div>
            </form>
          </div>

          <div className={`space-y-4 ${an(3)}`}>

            <div className="border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35] p-4 sm:p-5">
              <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:'14px' }} className="text-gray-400 dark:text-white/30">Direct contact</p>
              <div className="space-y-4">
                {INFO.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#eaf6ff] dark:bg-[#1f3a5f]/50 border border-[#bfdbfe]/60 dark:border-[#1f6fb2]/20">{icon}</div>
                    <div>
                      <p style={{ ...SANS, fontSize:'9px', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase' }} className="text-gray-400 dark:text-white/25 mb-0.5">{label}</p>
                      {href
                        ? <a href={href} style={{ ...SANS, fontSize:'13px', fontWeight:500 }} className="text-[#1f3a5f] dark:text-white/80 hover:text-[#1f6fb2] transition-colors break-all">{value}</a>
                        : <span style={{ ...SANS, fontSize:'13px', fontWeight:500 }} className="text-[#1f3a5f] dark:text-white/80">{value}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-100 dark:border-white/8 bg-white dark:bg-[#0a1628] divide-y divide-gray-50 dark:divide-white/5">
              {[['Quote turnaround','< 24h'],['WhatsApp response','< 2h'],['Project kickoff','1-3 days'],['Engagement','Freelance & Full-time']].map(([l,v]) => (
                <div key={l} className="flex items-center justify-between px-4 sm:px-5 py-3">
                  <span style={{ ...SANS, fontSize:'12px' }} className="text-gray-500 dark:text-white/40">{l}</span>
                  <span style={{ ...SANS, fontSize:'12px', fontWeight:700 }} className="text-[#1f3a5f] dark:text-white/80">{v}</span>
                </div>
              ))}
            </div>

            <div className="border border-gray-100 dark:border-white/8 bg-[#f9fafb] dark:bg-[#0d1f35] p-4 sm:p-5">
              <p style={{ ...SANS, fontSize:'9.5px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:'12px' }} className="text-gray-400 dark:text-white/30">Quick connect</p>
              <div className="space-y-2">
                <a href="https://wa.me/2347034302056" target="_blank" rel="noreferrer"
                  style={{ ...SANS, fontSize:'12.5px', fontWeight:700, padding:'10px 14px', display:'flex', alignItems:'center', gap:'9px', background:'#f0fdf4', border:'1px solid #86efac', color:'#166534' }}
                  className="dark:bg-emerald-500/10 dark:border-emerald-500/25 dark:text-emerald-400 hover:opacity-90 transition-opacity">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
                <a href="mailto:oviahonsaviourefe@gmail.com"
                  style={{ ...SANS, fontSize:'12.5px', fontWeight:600, padding:'10px 14px', display:'flex', alignItems:'center', gap:'9px' }}
                  className="border border-gray-100 dark:border-white/10 text-gray-600 dark:text-white/55 hover:border-[#1f6fb2] hover:text-[#1f6fb2] transition-colors">
                  <Mail size={14} className="text-[#1f6fb2]" /> Send an email
                </a>
                <a href="https://linkedin.com/in/oviahon-saviour-837a2b422" target="_blank" rel="noreferrer"
                  style={{ ...SANS, fontSize:'12.5px', fontWeight:600, padding:'10px 14px', display:'flex', alignItems:'center', gap:'9px' }}
                  className="border border-gray-100 dark:border-white/10 text-gray-600 dark:text-white/55 hover:border-[#1f6fb2] hover:text-[#1f6fb2] transition-colors">
                  <Linkedin size={14} className="text-[#1f6fb2]" /> Connect on LinkedIn
                </a>
                <a href="https://github.com/oviahonefe" target="_blank" rel="noreferrer"
                  style={{ ...SANS, fontSize:'12.5px', fontWeight:600, padding:'10px 14px', display:'flex', alignItems:'center', gap:'9px' }}
                  className="border border-gray-100 dark:border-white/10 text-gray-600 dark:text-white/55 hover:border-[#1f6fb2] hover:text-[#1f6fb2] transition-colors">
                  <Github size={14} /> View GitHub
                </a>
              </div>
            </div>

            <div style={{ background:'linear-gradient(135deg,#1f3a5f,#1f6fb2)', padding:'16px 20px', display:'flex', alignItems:'center', gap:'12px' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <p style={{ ...SANS, fontSize:'12px', fontWeight:700, color:'white' }}>Currently available</p>
                <p style={{ ...SANS, fontSize:'11px', color:'rgba(255,255,255,.55)' }}>Open to freelance & full-time roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact