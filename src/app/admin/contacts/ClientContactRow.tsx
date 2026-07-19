'use client'

import { useState } from 'react'
import { updateContactStatus } from './actions'
import { ContactStatus, Contact } from '@prisma/client'

export function ClientContactRow({ contact }: { contact: Contact }) {
  const [status, setStatus] = useState<ContactStatus>(contact.status)
  const [loading, setLoading] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleStatusChange = async (newStatus: ContactStatus) => {
    setLoading(true)
    const result = await updateContactStatus(contact.id, newStatus)
    if (result.success) {
      setStatus(newStatus)
    } else {
      alert(result.error)
    }
    setLoading(false)
  }

  return (
    <>
      <tr className="hover:bg-muted/20 transition-colors border-b">
        <td className="p-4">{contact.name}</td>
        <td className="p-4">{contact.email}</td>
        <td className="p-4">
          <select 
            value={status} 
            onChange={(e) => handleStatusChange(e.target.value as ContactStatus)}
            disabled={loading}
            className="p-1 rounded bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {Object.values(ContactStatus).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </td>
        <td className="p-4">{new Date(contact.createdAt).toLocaleDateString()}</td>
        <td className="p-4">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="text-primary text-sm hover:underline font-medium"
          >
            {showDetails ? 'Hide' : 'View'}
          </button>
        </td>
      </tr>
      {showDetails && (
        <tr className="bg-muted/10 border-b">
          <td colSpan={5} className="p-4 space-y-2 text-sm">
            <div><strong className="text-muted-foreground font-medium">Subject:</strong> {contact.subject || 'N/A'}</div>
            <div><strong className="text-muted-foreground font-medium">Phone:</strong> {contact.phone || 'N/A'}</div>
            <div className="mt-4 bg-background p-4 rounded-md border whitespace-pre-wrap shadow-inner">
              {contact.message}
            </div>
          </td>
        </tr>
      )}
    </>
  )
}
