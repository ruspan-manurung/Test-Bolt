import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json()

    const { error } = await supabaseAdmin.from('leads').insert([leadData])

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to submit lead' },
        { status: 500 }
      )
    }

    // Here you would typically:
    // 1. Send notification email to law firm
    // 2. Send confirmation email to lead
    // 3. Add to CRM system
    // 4. Trigger automated follow-up sequence

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { data: leads, error } = await supabaseAdmin
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch leads' },
        { status: 500 }
      )
    }

    return NextResponse.json({ leads })
  } catch (error) {
    console.error('Leads fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}