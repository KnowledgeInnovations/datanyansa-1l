import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, BookOpen, Users, Target } from 'lucide-react'

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Training & <span className="text-primary">Consultancy</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Customized training solutions and expert consultancy tailored to your organization&apos;s needs
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Empower Your Team</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We believe in creating sustainable growth through knowledge transfer and capability development. Our training and consultancy services are designed to build internal expertise within your organization.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                From executive leadership programs to technical skill development, we provide comprehensive solutions that address your specific business challenges and drive organizational excellence.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Discuss Your Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl h-96 flex items-center justify-center">
                <BookOpen className="h-40 w-40 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Offerings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">Executive Leadership Programs</h3>
              <p className="text-foreground/70 mb-6">
                Strategic programs designed for C-suite and senior management to navigate digital transformation
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Digital strategy and innovation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Change management excellence
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Technology decision-making
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills Development</h3>
              <p className="text-foreground/70 mb-6">
                Build technical competencies in data science, AI, cloud, and modern development practices
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Data science and analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Cloud and infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Software engineering practices
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">Organizational Transformation</h3>
              <p className="text-foreground/70 mb-6">
                Guide your organization through cultural and operational transformation initiatives
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Agile and DevOps transition
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Data-driven culture building
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Process optimization
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">Custom Consulting</h3>
              <p className="text-foreground/70 mb-6">
                Tailored consulting services addressing your unique business challenges and opportunities
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Business problem analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Solution design and implementation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  Performance optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Models */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Flexible Delivery Models</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">On-Site Training</h3>
              <p className="text-foreground/70">
                Customized training delivered at your location with hands-on workshops and team engagement
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Virtual Programs</h3>
              <p className="text-foreground/70">
                Interactive online training with live instructors, case studies, and collaborative projects
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Hybrid Solutions</h3>
              <p className="text-foreground/70">
                Blended approach combining virtual instruction with on-site workshops and coaching
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Approach</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  1
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Discovery & Assessment</h4>
                <p className="text-foreground/70">
                  We start by understanding your organization&apos;s current state, challenges, goals, and team capabilities
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  2
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Customization</h4>
                <p className="text-foreground/70">
                  We design bespoke programs aligned with your strategic objectives and current team skill levels
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  3
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Implementation</h4>
                <p className="text-foreground/70">
                  Programs are delivered with engaging instructors, practical exercises, and ongoing support
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  4
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Measurement & Iteration</h4>
                <p className="text-foreground/70">
                  We track progress, gather feedback, and continuously improve programs for maximum impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Invest in Your Team?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Let&apos;s design a training and consultancy program that drives real results for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
