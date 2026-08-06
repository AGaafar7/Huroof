import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { t } = useLanguage()
  const a = t.auth.login
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError(a.errorRequired)
      return
    }
    setError('')
    setLoading(true)
    await login({ email })
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
              <label className="form-label" htmlFor="login-email">{a.emailLabel}</label>
              <input
                id="login-email"
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <div className="form-label-row">
                <label className="form-label" htmlFor="login-password">{a.passwordLabel}</label>
                <a href="#" className="form-link-small">{a.forgot}</a>
              </div>
              <input
                id="login-password"
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn btn-primary auth-submit" disabled={loading}>
              {loading ? '…' : a.submit}
            </button>
          </form>

          <p className="auth-demo-note">{a.demoNote}</p>

          <p className="auth-switch">
            {a.noAccount} <Link to="/register">{a.createOne}</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
