'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginAction } from './actions'
import Script from 'next/script'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (!(window as unknown as { grecaptcha: unknown }).grecaptcha) {
        throw new Error('reCAPTCHA not loaded')
      }

      // Get reCAPTCHA token
      const token = await new Promise<string>((resolve) => {
        ;(window as unknown as { grecaptcha: { ready: (cb: () => void) => void, execute: (siteKey: string, options: { action: string }) => Promise<string> } }).grecaptcha.ready(() => {
          ;(window as unknown as { grecaptcha: { execute: (siteKey: string, options: { action: string }) => Promise<string> } }).grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: 'admin_login' }).then(resolve)
        })
      })

      const formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)
      formData.append('recaptchaToken', token)

      const result = await loginAction(formData)

      if (result?.error) {
        setError(result.error)
      } else {
        router.push('/admin')
      }
    } catch (_err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Script 
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} 
        strategy="afterInteractive"
      />
      <div className="w-full max-w-md p-8 rounded-xl border bg-card text-card-foreground shadow-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">Admin Login</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="w-full p-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
