'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <span className="text-white text-sm font-bold">DN</span>
            </div>
            <span className="hidden sm:inline">Data Nyansa</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>

            <Link
              href="/directory"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Directory
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/services/ai-advisory"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-t-lg"
                >
                  AI Advisory & Research
                </Link>
                <Link
                  href="/services/fintech-training"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                >
                  Fintech Training
                </Link>
                <Link
                  href="/services/training"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-b-lg"
                >
                  Training Programs
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>

            {/* Get to Know Us Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Get to Know Us
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-t-lg"
                >
                  About
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                >
                  Team
                </Link>
                <Link
                  href="/partners"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                >
                  Partners
                </Link>
                <Link
                  href="/events"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                >
                  Events
                </Link>
                <Link
                  href="/publications"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                >
                  Publications
                </Link>
                <Link
                  href="/projects"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                >
                  Projects
                </Link>
                <Link
                  href="/videos"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-b-lg"
                >
                  Our Videos
                </Link>
              </div>
            </div>

            <Link
              href="/faq"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="ml-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border pb-6">
            <div className="space-y-2 pt-4">
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                Home
              </Link>

              <Link
                href="/directory"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                Directory
              </Link>

              <div>
                <button
                  onClick={() => toggleSubmenu('services')}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded flex items-center justify-between transition-colors"
                >
                  Services
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', openSubmenu === 'services' && 'rotate-180')}
                  />
                </button>
                {openSubmenu === 'services' && (
                  <div className="bg-muted rounded ml-2 mt-1 space-y-1">
                    <Link
                      href="/services/ai-advisory"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      AI Advisory & Research
                    </Link>
                    <Link
                      href="/services/fintech-training"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      Fintech Training
                    </Link>
                    <Link
                      href="/services/training"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      Training Programs
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                Blog
              </Link>

              <div>
                <button
                  onClick={() => toggleSubmenu('company')}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded flex items-center justify-between transition-colors"
                >
                  Get to Know Us
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', openSubmenu === 'company' && 'rotate-180')}
                  />
                </button>
                {openSubmenu === 'company' && (
                  <div className="bg-muted rounded ml-2 mt-1 space-y-1">
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      About
                    </Link>
                    <Link
                      href="/team"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      Team
                    </Link>
                    <Link
                      href="/partners"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      Partners
                    </Link>
                    <Link
                      href="/events"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      Events
                    </Link>
                    <Link
                      href="/publications"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      Publications
                    </Link>
                    <Link
                      href="/projects"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/videos"
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary"
                    >
                      Our Videos
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/faq"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
