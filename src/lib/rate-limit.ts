import { prisma } from './prisma'

const MAX_ATTEMPTS = 5
const BLOCK_DURATION_MINUTES = 15

export async function checkRateLimit(ipAddress: string): Promise<{ success: boolean; message?: string }> {
  try {
    let attempt = await prisma.loginAttempt.findUnique({
      where: { ipAddress },
    })

    const now = new Date()

    if (attempt) {
      if (attempt.blockedUntil && attempt.blockedUntil > now) {
        return { success: false, message: 'Too many login attempts. Please try again later.' }
      }

      // Reset if block duration passed
      if (attempt.blockedUntil && attempt.blockedUntil <= now) {
        attempt = await prisma.loginAttempt.update({
          where: { ipAddress },
          data: { attempts: 1, blockedUntil: null, lastAttemptAt: now },
        })
        return { success: true }
      }

      // If attempts < MAX_ATTEMPTS, increment
      if (attempt.attempts < MAX_ATTEMPTS) {
        await prisma.loginAttempt.update({
          where: { ipAddress },
          data: { attempts: attempt.attempts + 1, lastAttemptAt: now },
        })
        return { success: true }
      }

      // If attempts reached max, block
      const blockedUntil = new Date(now.getTime() + BLOCK_DURATION_MINUTES * 60000)
      await prisma.loginAttempt.update({
        where: { ipAddress },
        data: { blockedUntil, lastAttemptAt: now },
      })
      return { success: false, message: 'Too many login attempts. Please try again later.' }
    }

    // First attempt
    await prisma.loginAttempt.create({
      data: { ipAddress, attempts: 1, lastAttemptAt: now },
    })

    return { success: true }
  } catch (_error) {
    console.error('Rate limit error:', _error)
    // Fail open to avoid locking out legitimate users if DB fails (since login will fail later anyway)
    return { success: true }
  }
}

export async function resetRateLimit(ipAddress: string) {
  try {
    await prisma.loginAttempt.delete({
      where: { ipAddress },
    })
  } catch (error) {
    // Ignore error if it doesn't exist
  }
}
