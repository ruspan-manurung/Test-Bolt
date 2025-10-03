import { CaseEvaluationForm } from '@/components/forms/CaseEvaluationForm'
import { Scale, Shield, Award, CircleCheck as CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function CaseEvaluationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-black">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="text-right">
              <div className="text-sm text-gray-600">Need immediate help?</div>
              <div className="text-lg font-semibold text-black">(555) 123-4567</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <Scale className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Free Case Evaluation
                </h1>
                <p className="text-gray-600">
                  Get expert legal advice on your case. No obligation, completely confidential.
                </p>
              </div>

              <CaseEvaluationForm />

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Your information is completely confidential and protected by attorney-client privilege.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Get a Free Case Evaluation?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                    title: "Know Your Rights",
                    description: "Understand what legal options are available to you and the strength of your case."
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                    title: "No Cost, No Obligation",
                    description: "Our evaluation is completely free with no strings attached. You're under no obligation to hire us."
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                    title: "Expert Legal Advice",
                    description: "Get insights from attorneys with over 25 years of experience in your specific area of law."
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                    title: "Quick Response",
                    description: "We'll review your case and get back to you within 24 hours with our assessment."
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                    title: "Confidential & Secure",
                    description: "All information you share is protected by attorney-client privilege and kept strictly confidential."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Time-Sensitive Cases</h3>
              <p className="text-gray-300 mb-4">
                Many legal cases have strict deadlines. Don't risk losing your right to compensation by waiting too long.
              </p>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="text-yellow-500 font-semibold">Available 24/7 for urgent matters</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Prefer to speak with someone directly?
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                Call (555) 123-4567 Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}