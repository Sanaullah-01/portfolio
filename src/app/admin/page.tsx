import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const totalContacts = await prisma.contact.count()
  const pendingContacts = await prisma.contact.count({ where: { status: 'PENDING' } })
  const resolvedContacts = await prisma.contact.count({ where: { status: 'RESOLVED' } })
  const completedContacts = await prisma.contact.count({ where: { status: 'COMPLETED' } })

  const recentContacts = await prisma.contact.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-6 bg-card border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Contacts</h3>
          <p className="text-3xl font-bold">{totalContacts}</p>
        </div>
        <div className="p-6 bg-card border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Pending</h3>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{pendingContacts}</p>
        </div>
        <div className="p-6 bg-card border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Resolved</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{resolvedContacts}</p>
        </div>
        <div className="p-6 bg-card border rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Completed</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">{completedContacts}</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Recent Queries</h2>
          <Link href="/admin/contacts" className="text-primary hover:underline">
            View all
          </Link>
        </div>
        
        {recentContacts.length === 0 ? (
          <div className="p-8 text-center bg-card border rounded-xl text-muted-foreground shadow-sm">
            No contact queries yet.
          </div>
        ) : (
          <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {recentContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4">{contact.name}</td>
                    <td className="p-4">{contact.email}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                        {contact.status}
                      </span>
                    </td>
                    <td className="p-4">{new Date(contact.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
