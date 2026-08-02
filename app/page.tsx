import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Brain, TrendingUp, BookOpen, Users, Zap, LineChart } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Intelligence Built on <span className="text-primary">Data</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              We transform complex data into actionable insights through cutting-edge AI research, advanced fintech solutions, and strategic advisory services for enterprises and financial institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-advisory"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Comprehensive solutions designed to drive innovation and growth in your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Advisory */}
            <div className="group rounded-xl border border-border bg-background p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Brain className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI Advisory, Solutions & Research</h3>
              <p className="text-foreground/70 mb-4">
                Strategic guidance on implementing AI solutions, conducting cutting-edge research, and transforming your business with data-driven intelligence.
              </p>
              <Link
                href="/services/ai-advisory"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Fintech Training */}
            <div className="group rounded-xl border border-border bg-background p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <TrendingUp className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Fintech Training</h3>
              <p className="text-foreground/70 mb-4">
                Specialized training programs designed for financial technology professionals, covering blockchain, payments, digital banking, and regulatory frameworks.
              </p>
              <Link
                href="/services/fintech-training"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Training & Consultancy */}
            <div className="group rounded-xl border border-border bg-background p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <BookOpen className="h-6 w-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Training & Consultancy</h3>
              <p className="text-foreground/70 mb-4">
                Comprehensive training solutions and expert consultancy services tailored to your organization&apos;s unique challenges and growth objectives.
              </p>
              <Link
                href="/services/training"
                className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Data Nyansa</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              We combine expertise, innovation, and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Expert Team</h4>
                <p className="text-foreground/70">
                  Industry veterans with deep expertise in AI, fintech, and data science
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Zap className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Cutting-Edge Solutions</h4>
                <p className="text-foreground/70">
                  We stay at the forefront of technology innovation
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <LineChart className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Proven Results</h4>
                <p className="text-foreground/70">
                  Track record of delivering measurable business impact
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary mt-1" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Strategic Partnerships</h4>
                <p className="text-foreground/70">
                  Strong network of partners and industry collaborators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Connect with our team to explore how Data Nyansa can help you harness the power of data and AI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
