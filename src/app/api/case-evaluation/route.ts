import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const evaluationData = await request.json()

    const { error } = await supabaseAdmin.from('case_evaluations').insert([{
      full_name: evaluationData.fullName,
      email: evaluationData.email,
      phone: evaluationData.phone,
      practice_area: evaluationData.practiceArea,
      case_description: evaluationData.caseDescription,
      urgency: evaluationData.urgency || 'medium',
      status: 'pending'
    }])

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to submit case evaluation' },
        { status: 500 }
      )
    }

    // Here you would typically:
    // 1. Send notification email to law firm
    // 2. Send confirmation email to client
    // 3. Add to CRM system
    // 4. Trigger automated follow-up sequence

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Case evaluation submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}