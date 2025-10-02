export interface Lead {
  id: string
  created_at: string
  full_name: string
  email: string
  phone: string
  practice_area: string
  case_description: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed'
  source: 'website' | 'referral' | 'advertising'
}

export interface Consultation {
  id: string
  created_at: string
  lead_id: string
  scheduled_date: string
  status: 'scheduled' | 'completed' | 'cancelled' | 'no_show'
  notes?: string
}

export interface CaseEvaluation {
  id: string
  created_at: string
  full_name: string
  email: string
  phone: string
  practice_area: string
  case_description: string
  urgency: 'low' | 'medium' | 'high' | 'urgent'
  status: 'pending' | 'reviewed' | 'accepted' | 'declined'
}