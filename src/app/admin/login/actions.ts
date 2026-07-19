'use server'

import { createClient } from '@/lib/supabase/server'
import { verifyRecaptcha } from '@/lib/recaptcha'
import { checkRateLimit, resetRateLimit } from '@/lib/rate-limit'
import { headers } from 'next/headers'
import { prisma } from '@/lib/prisma'

export async function loginAction(formData: FormData) {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const recaptchaToken = formData.get('recaptchaToken') as string

    if (!email || !password || !recaptchaToken) {
      return { error: 'Please fill in all fields.' }
    }

    // IP Rate limiting
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || '127.0.0.1'
    
    const rateLimit = await checkRateLimit(ip)
    if (!rateLimit.success) {
      return { error: rateLimit.message }
    }

    // reCAPTCHA verification
    const isHuman = await verifyRecaptcha(recaptchaToken, 'admin_login')
    if (!isHuman) {
      return { error: 'Security verification failed. Please try again.' }
    }

    // Supabase Auth
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error || !data.user) {
      return { error: 'Invalid login credentials.' }
    }

    // Verify Admin Role
    const profile = await prisma.profile.findUnique({
      where: { authUserId: data.user.id },
    })

    if (!profile || profile.role !== 'ADMIN') {
      // Sign out unauthorized user
      await supabase.auth.signOut()
      return { error: 'Unauthorized access.' }
    }

    // Reset rate limit on successful login
    await resetRateLimit(ip)

    return { success: true }
  } catch (error) {
    console.error("Login Action Error:", error);
    return { error: 'An unexpected error occurred. Please try again later.' }
  }
}

export async function logoutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
}
