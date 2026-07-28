import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Award, Target, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Data Nyansa
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Building the future through intelligent data solutions, cutting-edge AI research, and expert consultancy
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Our Mission
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                To empower organizations worldwide by transforming raw data into strategic intelligence through advanced analytics, artificial intelligence, and expert consultancy. We believe that every organization deserves access to world-class data and AI solutions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                Our Vision
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                To be the globally recognized leader in AI research, data science innovation, and fintech consultancy. We envision a world where data-driven decision making is the norm, and where cutting-edge technology serves humanity&apos;s greatest challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-border rounded-xl p-6 bg-background hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-sm text-foreground/70">
                We pursue the highest standards in everything we do, from research to service delivery
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-background hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-sm text-foreground/70">
                We embrace continuous learning and stay at the forefront of technological advancement
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-background hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-2">Integrity</h3>
              <p className="text-sm text-foreground/70">
                We operate with transparency, honesty, and ethical responsibility in all relationships
              </p>
            </div>

            <div className="border border-border rounded-xl p-6 bg-background hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-2">Impact</h3>
              <p className="text-sm text-foreground/70">
                We measure success by the real value and positive change we create for our clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Journey</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-l-2 border-primary pl-6 pb-4">
              <h3 className="text-xl font-semibold text-foreground mb-2">Founded on Innovation</h3>
              <p className="text-foreground/70">
                Data Nyansa was founded with a vision to bridge the gap between advanced AI research and practical business applications. We started with a small team of researchers and industry experts who shared a passion for transforming data into actionable insights.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6 pb-4">
              <h3 className="text-xl font-semibold text-foreground mb-2">Growing Expertise</h3>
              <p className="text-foreground/70">
                Over the years, we&apos;ve assembled a world-class team of PhDs, data scientists, and industry veterans. Our research has been published in leading journals and our solutions have helped hundreds of organizations navigate their digital transformation journeys.
              </p>
            </div>

            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Impact</h3>
              <p className="text-foreground/70">
                Today, we work with enterprise clients, financial institutions, and technology leaders across multiple continents. Our commitment to excellence and innovation continues to drive our mission to democratize access to world-class AI and data science expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Team</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our team brings together diverse expertise from academia, industry, and entrepreneurship. We&apos;re passionate about solving complex problems and creating lasting impact.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            View Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Whether you&apos;re a potential client, partner, or team member, we&apos;d love to connect and explore how we can work together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
