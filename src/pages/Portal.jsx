import { useMemo, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { getCourses } from '../data/courses.js'

const TABS = ['all', 'free', 'paid', 'inProgress']

export default function Portal() {
  const { t, lang } = useLanguage()
  const p = t.portal
  const { user, logout } = useAuth()
  const [tab, setTab] = useState('all')

  const courses = useMemo(() => getCourses(lang), [lang])

  const filtered = courses.filter((c) => {
    if (tab === 'free') return c.type === 'free'
    if (tab === 'paid') return c.type === 'paid'
    if (tab === 'inProgress') return c.progress !== null
    return true
  })

  return (
    <section className="section portal">
      <div className="wrap">
        <div className="portal-header">
          <div>
            <h1>{p.greeting}{user?.name ? `, ${user.name}` : ''}</h1>
            <p>{p.subtitle}</p>
          </div>
          <button type="button" className="btn btn-ghost" onClick={logout}>{p.logout}</button>
        </div>

        <div className="portal-tabs" role="tablist">
          {TABS.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              className={`tab-btn ${tab === key ? 'active' : ''}`}
              onClick={() => setTab(key)}
            >
              {p.tabs[key]}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="portal-empty">{p.emptyState}</p>
        ) : (
          <div className="courses-grid portal-grid">
            {filtered.map((c) => (
              <article className="course-card" key={c.id}>
                <div className={`course-thumb ${c.theme}`}>
                  <span className="level-pill"><span className="dot" />{c.levelLabel}</span>
                  <span className="glyph arabic">{c.glyph}</span>
                  <span className={`price-badge ${c.type === 'free' ? 'is-free' : 'is-paid'}`}>
                    {c.type === 'free' ? p.priceFree : `$${c.price}`}
                  </span>
                </div>
                <div className="course-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>

                  {c.progress !== null && (
                    <div className="portal-progress">
                      <div className="row">
                        <span>{p.progressLabel}</span>
                        <span>{c.progress}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${c.progress}%` }} />
                      </div>
                    </div>
                  )}

                  <div className="course-foot">
                    <div className="instructor">
                      <span className="avatar">{c.instructor[0]}</span>
                      <div>
                        <small>{c.instructor}</small>
                        <span>{c.lessons} {p.lessonsLabel}</span>
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-small">
                      {c.progress !== null ? p.continueBtn : c.type === 'free' ? p.enrollFree : p.enrollBtn}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="portal-note">{p.comingSoonNote}</p>
      </div>
    </section>
  )
}
