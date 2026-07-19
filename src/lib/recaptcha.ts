export async function verifyRecaptcha(token: string, expectedAction: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY is not set')
    // Fail open in development if not configured, otherwise fail closed
    return process.env.NODE_ENV === 'development'
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    
    return data.success && data.score >= 0.5 && data.action === expectedAction
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return false
  }
}
