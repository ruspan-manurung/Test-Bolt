'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { supabase } from '@/lib/supabase'

const leadSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  practiceArea: z.string().min(1, 'Please select a practice area'),
  caseDescription: z.string().min(10, 'Please provide more details about your case'),
})

type LeadFormData = z.infer<typeof leadSchema>

interface LeadCaptureFormProps {
  source?: string
  onSuccess?: () => void
}

export function LeadCaptureForm({ source = 'website', onSuccess }: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const { error } = await supabase.from('leads').insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          practice_area: data.practiceArea,
          case_description: data.caseDescription,
          source,
          status: 'new',
        },
      ])

      if (error) throw error

      setSubmitMessage('Thank you! We\'ll contact you within 24 hours.')
      reset()
      onSuccess?.()
    } catch (error) {
      console.error('Error submitting lead:', error)
      setSubmitMessage('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('fullName')}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('phone')}
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <select
          {...register('practiceArea')}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        >
          <option value="">Select Practice Area</option>
          <option value="personal-injury">Personal Injury</option>
          <option value="corporate-law">Corporate Law</option>
          <option value="family-law">Family Law</option>
          <option value="criminal-defense">Criminal Defense</option>
          <option value="real-estate">Real Estate Law</option>
          <option value="estate-planning">Estate Planning</option>
        </select>
        {errors.practiceArea && (
          <p className="mt-1 text-sm text-red-600">{errors.practiceArea.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('caseDescription')}
          placeholder="Brief description of your case"
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
        {errors.caseDescription && (
          <p className="mt-1 text-sm text-red-600">{errors.caseDescription.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        variant="secondary"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
      </Button>

      {submitMessage && (
        <p className={`text-center text-sm ${
          submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'
        }`}>
          {submitMessage}
        </p>
      )}
    </form>
  )
}