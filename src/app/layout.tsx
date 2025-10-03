import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orca Legal - Expert Legal Representation',
  description: 'Professional legal services with over 25 years of experience. Specializing in personal injury, corporate law, family law, and more.',
  keywords: 'lawyer, legal services, personal injury, corporate law, family law, criminal defense',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}