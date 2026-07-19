import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { logoutAction } from './login/actions'
import { headers } from 'next/headers'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || ''

  // If this is the login route, we don't render the sidebar or check profile.
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  const profile = await prisma.profile.findUnique({
    where: { authUserId: user.id },
  })

  if (!profile || profile.role !== 'ADMIN') {
    redirect('/')
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <aside className="w-full md:w-64 bg-card border-r border-border p-4 flex flex-col">
        <div className="mb-8 px-2">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        
        <nav className="flex-1 space-y-2">
          <Link href="/admin" className="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
            Dashboard
          </Link>
          <Link href="/admin/contacts" className="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
            Contacts
          </Link>
        </nav>

        <form action={logoutAction} className="mt-auto pt-4 border-t">
          <button type="submit" className="w-full px-3 py-2 text-left text-destructive rounded-md hover:bg-destructive/10 transition-colors">
            Logout
          </button>
        </form>
      </aside>
      
      <main className="flex-1 overflow-auto bg-muted/20">
        {children}
      </main>
    </div>
  )
}
