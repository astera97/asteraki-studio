// components/NewsletterSection.tsx
'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) {
      toast({ title: "Email invalide", variant: "destructive" })
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      toast({ title: "Abonnement réussi !" })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="newsletter" className="bg-gray-50 rounded-xl p-8 mb-20 border border-gray-200">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Restez Informé</h2>
          <p className="text-gray-600">
            Abonnez-vous à notre newsletter pour recevoir les derniers insights.
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="flex gap-2">
          <Input
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border-gray-300 focus-visible:ring-orange-500"
            required
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-600 hover:bg-orange-700 text-white whitespace-nowrap"
          >
            {isSubmitting ? "..." : "S'abonner"}
          </Button>
        </form>
      </div>
    </section>
  )
}