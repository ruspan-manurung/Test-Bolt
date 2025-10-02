import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email } = await request.json()

    // Validate input
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Store newsletter subscription
    const { error } = await supabaseAdmin.from('newsletter_subscribers').insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        subscribed_at: new Date().toISOString(),
        source: 'legal_guide',
      },
    ])

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      )
    }

    // Here you would typically:
    // 1. Send the legal guide PDF via email
    // 2. Add to email marketing platform
    // 3. Trigger automated email sequence

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}