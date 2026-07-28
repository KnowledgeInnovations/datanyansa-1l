import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Lightbulb, Users, Zap } from 'lucide-react'

export default function AIAdvisoryPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI Advisory & <span className="text-primary">Research</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Strategic guidance on AI implementation, research methodologies, and data-driven transformation for enterprises
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Transform with AI</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Our AI Advisory & Research services help organizations navigate the complex landscape of artificial intelligence, machine learning, and data science. We provide strategic guidance on technology selection, implementation roadmaps, and organizational change management.
              </p>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Whether you&apos;re beginning your AI journey or optimizing existing systems, our expert team brings proven methodologies and industry best practices to accelerate your digital transformation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl h-96 flex items-center justify-center">
                <Lightbulb className="h-40 w-40 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">AI Strategy & Roadmap</h3>
                  <p className="text-foreground/70">
                    Develop comprehensive AI strategies aligned with your business goals and competitive landscape
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Technology Assessment</h3>
                  <p className="text-foreground/70">
                    Evaluate and recommend appropriate AI/ML technologies and platforms for your use cases
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Data Science Research</h3>
                  <p className="text-foreground/70">
                    Conduct applied research on advanced ML methodologies and emerging AI technologies
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Implementation Support</h3>
                  <p className="text-foreground/70">
                    Guide and support your teams through AI project implementation and deployment
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Organizational Transformation</h3>
                  <p className="text-foreground/70">
                    Build AI-ready organizations through culture change and capability development
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-8 bg-background hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Ethics & Governance</h3>
                  <p className="text-foreground/70">
                    Establish responsible AI practices and governance frameworks for your organization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Partner With Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Team</h3>
              <p className="text-foreground/70">
                PhDs and industry veterans with deep AI and research expertise
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Proven Methodologies</h3>
              <p className="text-foreground/70">
                Battle-tested frameworks and best practices from leading organizations
              </p>
            </div>

            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation Focused</h3>
              <p className="text-foreground/70">
                Continuously exploring cutting-edge AI developments and applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Unlock AI Potential?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Let&apos;s discuss how AI advisory can accelerate your business transformation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
