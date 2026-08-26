import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Handshake, Globe, Users } from 'lucide-react'

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Strategic partnerships with industry leaders and innovators
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Alliances</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We collaborate with leading technology companies, research institutions, and service providers to deliver comprehensive solutions to our clients.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Our partnerships enable us to stay at the cutting edge of innovation and provide our clients with access to the best tools, platforms, and expertise available.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl h-80 flex items-center justify-center">
                <Handshake className="h-40 w-40 text-primary/30" />
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="border border-border rounded-xl bg-card p-8 hover:border-primary transition-colors text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">Partner {i}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Partner Company {i}</h3>
                <p className="text-sm text-foreground/70">
                  Strategic partnership in technology solutions and enterprise services
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Partnership Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-border rounded-xl bg-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Technology Partners</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Collaborate on technology solutions, platforms, and integrations
              </p>
              <a href="#" className="text-primary font-semibold text-sm hover:gap-2 inline-flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="p-6 border border-border rounded-xl bg-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Strategic Alliances</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Form strategic alliances for mutual growth and shared market opportunities
              </p>
              <a href="#" className="text-primary font-semibold text-sm hover:gap-2 inline-flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="p-6 border border-border rounded-xl bg-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Reseller Programs</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Become a reseller or referral partner and grow your business with our solutions
              </p>
              <a href="#" className="text-primary font-semibold text-sm hover:gap-2 inline-flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Interested in Partnership?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            We&apos;re always looking for strategic partners to collaborate and create value together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Our Partnership Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
