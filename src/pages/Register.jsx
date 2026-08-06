import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Register() {
  const { t } = useLanguage()
  const a = t.auth.register
  const { register } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !password || !confirm) {
      setError(a.errorRequired)
      return
    }
    if (password !== confirm) {
      setError(a.errorMismatch)
      return
    }
    setError('')
    setLoading(true)
    await register({ name, email })
    setLoading(false)
    navigate('/portal')
  }

  return (
    <section className="auth-page">
      <div className="wrap auth-wrap">
        <div className="auth-card">
          <h1>{a.title}</h1>
          <p className="auth-subtitle">{a.subtitle}</p>

          <form onSubmit={onSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="reg-name">{a.nameLabel}</label>
              <input
                id="reg-name"
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="reg-email">{a.emailLabel}</label>
              <input
                id="reg-email"
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="reg-password">{a.passwordLabel}</label>
                <input
                  id="reg-password"
                  type="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reg-confirm">{a.confirmLabel}</label>
                <input
                  id="reg-confirm"
                  type="password"
                  className="form-input"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
              {loading ? '…' : a.submit}
            </button>
          </form>

          <p className="auth-demo-note">{a.terms}</p>

          <p className="auth-switch">
            {a.haveAccount} <Link to="/login">{a.signIn}</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
