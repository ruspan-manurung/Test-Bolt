'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'

const caseEvaluationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  practiceArea: z.string().min(1, 'Please select a practice area'),
  caseDescription: z.string().min(20, 'Please provide more details about your case'),
  urgency: z.enum(['low', 'medium', 'high', 'urgent']).default('medium'),
})

type CaseEvaluationFormData = z.infer<typeof caseEvaluationSchema>

export function CaseEvaluationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CaseEvaluationFormData>({
    resolver: zodResolver(caseEvaluationSchema),
  })

  const onSubmit = async (data: CaseEvaluationFormData) => {
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/case-evaluation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to submit case evaluation')

      setSubmitMessage('Thank you! We\'ll review your case and contact you within 24 hours.')
      reset()
    } catch (error) {
      console.error('Error submitting case evaluation:', error)
      setSubmitMessage('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            {...register('fullName')}
            type="text"
            placeholder="Full Name *"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address *"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            {...register('phone')}
            type="tel"
            placeholder="Phone Number *"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <select
            {...register('practiceArea')}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="">Select Practice Area *</option>
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
      </div>

      <div>
        <select
          {...register('urgency')}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>

      <div>
        <textarea
          {...register('caseDescription')}
          placeholder="Please describe your case in detail *"
          rows={4}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
        {errors.caseDescription && (
          <p className="mt-1 text-sm text-red-600">{errors.caseDescription.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        variant="primary"
        size="lg"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Case Evaluation'}
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