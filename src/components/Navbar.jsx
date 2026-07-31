import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="wrap navbar-inner">
        <a href="#top" className="logo" onClick={close}>
          <div className="logo-mark">ح</div>
          <div className="logo-text">
            <span className="en">Huroof</span>
            <span className="ar arabic">حروف</span>
          </div>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#courses" onClick={close}>{t.nav.courses}</a>
          <a href="#path" onClick={close}>{t.nav.path}</a>
          <a href="#instructors" onClick={close}>{t.nav.instructors}</a>
          <a href="#stories" onClick={close}>{t.nav.stories}</a>
          <div className="nav-links-mobile-actions">
            <a href="#" className="nav-login">{t.nav.login}</a>
            <a href="#courses" className="btn btn-primary nav-cta" onClick={close}>{t.nav.cta}</a>
          </div>
        </nav>

        <div className="nav-actions">
          <button type="button" className="lang-switch" onClick={toggleLang} aria-label="Switch language">
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
            <span className={lang === 'ar' ? 'active' : ''}>ع</span>
          </button>
          <a href="#" className="nav-login">{t.nav.login}</a>
          <a href="#courses" className="btn btn-primary nav-cta">{t.nav.cta}</a>
          <button
            type="button"
            className={`nav-toggle ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
