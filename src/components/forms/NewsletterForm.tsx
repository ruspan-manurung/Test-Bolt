'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Download } from 'lucide-react'

const newsletterSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid email is required'),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to subscribe')

      setSubmitMessage('Success! Check your email for the free guide.')
      reset()
    } catch (error) {
      console.error('Error subscribing:', error)
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('firstName')}
          type="text"
          placeholder="First Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('lastName')}
          type="text"
          placeholder="Last Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
        />
        {errors.lastName && (
          <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        variant="primary"
      >
        <Download className="mr-2 h-5 w-5" />
        {isSubmitting ? 'Subscribing...' : 'Download Free Guide Now'}
      </Button>

      {submitMessage && (
        <p className={`text-center text-sm ${
          submitMessage.includes('Success') ? 'text-green-600' : 'text-red-600'
        }`}>
          {submitMessage}
        </p>
      )}
    </form>
  )
}