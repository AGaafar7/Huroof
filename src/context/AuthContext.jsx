import { createContext, useContext, useState, useEffect } from 'react'

/**
 * Mock authentication.
 * No backend yet, so this fakes a session in localStorage. Every function
 * here (login/register/logout) is written to be a drop-in swap for real
 * API calls later — same signatures, just replace the body with a fetch().
 */

const AuthContext = createContext(null)
const STORAGE_KEY = 'huroof_mock_session'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {
      // ignore corrupted storage
    }
    setReady(true)
  }, [])

  const persist = (nextUser) => {
    setUser(nextUser)
    if (nextUser) localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    else localStorage.removeItem(STORAGE_KEY)
  }

  // TODO: replace with a real POST /api/auth/login call
  const login = async ({ email }) => {
    await new Promise((r) => setTimeout(r, 400))
    const nextUser = { name: email.split('@')[0], email }
    persist(nextUser)
    return nextUser
  }

  // TODO: replace with a real POST /api/auth/register call
  const register = async ({ name, email }) => {
    await new Promise((r) => setTimeout(r, 400))
    const nextUser = { name, email }
    persist(nextUser)
    return nextUser
  }

  const logout = () => persist(null)

  return (
    <AuthContext.Provider value={{ user, ready, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
