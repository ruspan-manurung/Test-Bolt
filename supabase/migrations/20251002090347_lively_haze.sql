/*
  # Create leads management system

  1. New Tables
    - `leads`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `practice_area` (text)
      - `case_description` (text)
      - `status` (text)
      - `source` (text)
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `subscribed_at` (timestamp)
      - `source` (text)
    - `consultations`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `lead_id` (uuid, foreign key)
      - `scheduled_date` (timestamp)
      - `status` (text)
      - `notes` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated access
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  practice_area text NOT NULL,
  case_description text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'closed')),
  source text DEFAULT 'website'
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  source text DEFAULT 'website'
);

-- Create consultations table
CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  lead_id uuid REFERENCES leads(id) ON DELETE CASCADE,
  scheduled_date timestamptz NOT NULL,
  status text DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'no_show')),
  notes text
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Create policies for leads table
CREATE POLICY "Allow public insert on leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create policies for newsletter subscribers
CREATE POLICY "Allow public insert on newsletter_subscribers"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on newsletter_subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for consultations
CREATE POLICY "Allow authenticated full access on consultations"
  ON consultations
  FOR ALL
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_practice_area ON leads(practice_area);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_consultations_lead_id ON consultations(lead_id);
CREATE INDEX IF NOT EXISTS idx_consultations_scheduled_date ON consultations(scheduled_date);