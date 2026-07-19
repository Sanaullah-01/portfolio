'use server'

import { prisma } from '@/lib/prisma'
import { createClient } from '@/lib/supabase/server'
import { ContactStatus } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export async function updateContactStatus(id: string, status: ContactStatus) {
  // Authorization check
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Unauthorized' }
  }

  const profile = await prisma.profile.findUnique({
    where: { authUserId: user.id },
  })

  if (!profile || profile.role !== 'ADMIN') {
    return { error: 'Forbidden' }
  }

  // Validate status
  const validStatuses = Object.values(ContactStatus)
  if (!validStatuses.includes(status)) {
    return { error: 'Invalid status' }
  }

  try {
    await prisma.contact.update({
      where: { id },
      data: { status },
    })

    revalidatePath('/admin/contacts')
    revalidatePath('/admin')
    
    return { success: true }
  } catch {
    return { error: 'Failed to update status' }
  }
}
