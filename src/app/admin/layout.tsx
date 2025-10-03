import Link from 'next/link'
import { Users, FileText, Calendar, Settings, Home } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-black">
                Orca Legal Admin
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/admin" className="flex items-center space-x-2 text-gray-600 hover:text-black">
                  <FileText className="h-4 w-4" />
                  <span>Overview</span>
                </Link>
                <Link href="/admin/leads" className="flex items-center space-x-2 text-gray-600 hover:text-black">
                  <Users className="h-4 w-4" />
                  <span>Leads</span>
                </Link>
                <Link href="/admin/consultations" className="flex items-center space-x-2 text-gray-600 hover:text-black">
                  <Calendar className="h-4 w-4" />
                  <span>Consultations</span>
                </Link>
              </div>
            </div>
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-black">
              <Home className="h-4 w-4" />
              <span>Back to Site</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}