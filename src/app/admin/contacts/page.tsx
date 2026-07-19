import { prisma } from '@/lib/prisma'
import { ClientContactRow } from './ClientContactRow'

export const dynamic = 'force-dynamic'

export default async function ContactsPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Contact Management</h1>
      
      {contacts.length === 0 ? (
        <div className="p-8 text-center bg-card border rounded-xl text-muted-foreground shadow-sm">
          No contact queries found.
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
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <ClientContactRow key={contact.id} contact={contact} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
