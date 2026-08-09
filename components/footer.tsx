import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-foreground/20">
                <span className="text-sm font-bold">DN</span>
              </div>
              <h3 className="font-bold text-lg">Data Nyansa</h3>
            </div>
            <p className="text-sm opacity-90 mb-4">Intelligence built on data.</p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/datanyansa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5" />
                </svg>
              </a>
              <a
                href={`mailto:${['solutions', 'datanyansa.com'].join('@')}`}
                className="hover:opacity-80 transition-opacity"
                aria-label="Email Data Nyansa"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/ai-advisory" className="opacity-90 hover:opacity-100 transition-opacity">
                  AI Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/fintech-training" className="opacity-90 hover:opacity-100 transition-opacity">
                  Fintech Training
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="opacity-90 hover:opacity-100 transition-opacity">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/research" className="opacity-90 hover:opacity-100 transition-opacity">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="opacity-90 hover:opacity-100 transition-opacity">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="opacity-90 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 opacity-75" />
                <div>
                  <span className="opacity-90 block">31 Tumu Avenue, Kanda</span>
                  <span className="opacity-90 block">Accra, Ghana</span>
                  <span className="text-xs opacity-75 block mt-1">Digital: GA-003-5259</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 opacity-75" />
                <span className="opacity-90">solutions@datanyansa.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {currentYear} Data Nyansa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
