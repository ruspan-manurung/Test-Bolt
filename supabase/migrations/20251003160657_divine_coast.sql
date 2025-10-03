/*
  # Add case evaluations table

  1. New Tables
    - `case_evaluations`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `practice_area` (text)
      - `case_description` (text)
      - `urgency` (text)
      - `status` (text)

  2. Security
    - Enable RLS on `case_evaluations` table
    - Add policies for public insert and authenticated read
*/

-- Create case evaluations table
CREATE TABLE IF NOT EXISTS case_evaluations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  practice_area text NOT NULL,
  case_description text NOT NULL,
  urgency text DEFAULT 'medium' CHECK (urgency IN ('low', 'medium', 'high', 'urgent')),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'declined'))
);

-- Enable Row Level Security
ALTER TABLE case_evaluations ENABLE ROW LEVEL SECURITY;

-- Create policies for case evaluations
CREATE POLICY "Allow public insert on case_evaluations"
  ON case_evaluations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on case_evaluations"
  ON case_evaluations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on case_evaluations"
  ON case_evaluations
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_case_evaluations_created_at ON case_evaluations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_case_evaluations_status ON case_evaluations(status);
CREATE INDEX IF NOT EXISTS idx_case_evaluations_urgency ON case_evaluations(urgency);
CREATE INDEX IF NOT EXISTS idx_case_evaluations_practice_area ON case_evaluations(practice_area);