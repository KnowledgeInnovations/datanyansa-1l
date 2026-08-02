import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Site Directory
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Navigate through all Data Nyansa pages and resources
            </p>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Main Pages</h3>
              <nav className="space-y-2">
                <Link href="/" className="block text-primary hover:text-primary/80 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-primary hover:text-primary/80 transition-colors">
                  About
                </Link>
                <Link href="/blog" className="block text-primary hover:text-primary/80 transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="block text-primary hover:text-primary/80 transition-colors">
                  Contact
                </Link>
                <Link href="/faq" className="block text-primary hover:text-primary/80 transition-colors">
                  FAQ
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
              <nav className="space-y-2">
                <Link
                  href="/services/ai-advisory"
                  className="block text-primary hover:text-primary/80 transition-colors"
                >
                  AI Advisory, Solutions & Research
                </Link>
                <Link
                  href="/services/fintech-training"
                  className="block text-primary hover:text-primary/80 transition-colors"
                >
                  Fintech Training
                </Link>
                <Link
                  href="/services/training"
                  className="block text-primary hover:text-primary/80 transition-colors"
                >
                  Training & Consultancy
                </Link>
              </nav>
            </div>

            {/* Company */}
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
              <nav className="space-y-2">
                <Link href="/team" className="block text-primary hover:text-primary/80 transition-colors">
                  Team
                </Link>
                <Link href="/partners" className="block text-primary hover:text-primary/80 transition-colors">
                  Partners
                </Link>
                <Link href="/events" className="block text-primary hover:text-primary/80 transition-colors">
                  Events
                </Link>
                <Link href="/publications" className="block text-primary hover:text-primary/80 transition-colors">
                  Publications
                </Link>
              </nav>
            </div>

            {/* Resources */}
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
              <nav className="space-y-2">
                <Link href="/projects" className="block text-primary hover:text-primary/80 transition-colors">
                  Projects
                </Link>
                <Link href="/videos" className="block text-primary hover:text-primary/80 transition-colors">
                  Videos
                </Link>
                <Link href="/blog" className="block text-primary hover:text-primary/80 transition-colors">
                  Research & Insights
                </Link>
                <Link href="/directory" className="block text-primary hover:text-primary/80 transition-colors">
                  Directory
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
              <nav className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground/70">Email</p>
                  <a
                    href="mailto:info@datanyansa.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    info@datanyansa.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/70">Phone</p>
                  <a href="tel:+15551234567" className="text-primary hover:text-primary/80 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </nav>
            </div>

            {/* Legal */}
            <div className="border border-border rounded-xl p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Legal</h3>
              <nav className="space-y-2">
                <a href="#" className="block text-primary hover:text-primary/80 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-primary hover:text-primary/80 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-primary hover:text-primary/80 transition-colors">
                  Cookie Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
