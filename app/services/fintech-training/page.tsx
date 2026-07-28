import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, Code } from 'lucide-react'

export default function FintechTrainingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Fintech <span className="text-primary">Training</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Master the latest financial technologies through our specialized, hands-on training programs
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Master Fintech</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Our fintech training programs are designed for professionals who want to build expertise in the rapidly evolving financial technology space. From blockchain and cryptocurrencies to digital banking and payment systems, we cover the technologies reshaping finance.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Each program combines theoretical foundations with practical, real-world case studies and hands-on projects to ensure you can immediately apply what you learn.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl h-96 flex items-center justify-center">
                <TrendingUp className="h-40 w-40 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Training Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">Blockchain & Cryptocurrencies</h3>
              <p className="text-foreground/70 mb-6">
                Comprehensive training on blockchain technology, cryptocurrency fundamentals, smart contracts, and DeFi protocols
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Blockchain architecture and consensus
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Cryptocurrency protocols
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Smart contract development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  DeFi and Web3 ecosystems
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">Digital Banking & Payments</h3>
              <p className="text-foreground/70 mb-6">
                Learn about modern banking platforms, payment systems, APIs, and financial services architecture
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Core banking systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Payment processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  API design for fintech
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Open banking & PSD2
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">Regulatory & Compliance</h3>
              <p className="text-foreground/70 mb-6">
                Navigate the complex regulatory landscape of fintech including compliance frameworks and governance
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Financial regulations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  KYC/AML procedures
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Risk management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Data protection laws
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">FinTech Software Development</h3>
              <p className="text-foreground/70 mb-6">
                Build production-ready fintech applications with industry best practices and security standards
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Secure fintech architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Cloud infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Financial data handling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Integration patterns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Training Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Hands-On Labs</h3>
              <p className="text-foreground/70">
                Practical exercises with real-world projects to build actual fintech applications
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Instructors</h3>
              <p className="text-foreground/70">
                Learn from industry professionals with years of fintech experience
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Career Ready</h3>
              <p className="text-foreground/70">
                Certifications and skills that employers value in the fintech industry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Launch Your Fintech Career
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Get the skills and knowledge to succeed in the rapidly growing fintech industry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
