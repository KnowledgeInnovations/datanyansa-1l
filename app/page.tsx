import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Brain, TrendingUp, BookOpen, Users, Zap, LineChart, Globe2, BarChart3, Sparkles, AudioLines, Landmark } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 relative overflow-hidden py-20 lg:py-32 bg-[url('/ghana-ai-summit-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Intelligence Built on <span className="text-primary">Data</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
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
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-16 lg:py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">Our platforms</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ideas that move industries forward</h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Explore the initiatives and solutions shaping Africa&apos;s next chapter of intelligent growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: 'Ghana AI Summit', href: 'https://ghanaaisummit.com', icon: Globe2, detail: 'AI ecosystem' },
              { name: 'Smart Stock Africa', href: 'https://smartstockafrica.com', icon: BarChart3, detail: 'Market intelligence' },
              { name: 'Nyansa AI', href: 'https://nyansaai.com', icon: Sparkles, detail: 'Applied intelligence' },
              { name: 'AI Voice Services', href: 'mailto:solutions@datanyansa.com?subject=AI%20Voice%20Services', icon: AudioLines, detail: 'Voice solutions' },
              { name: 'Fintech Innovations', href: 'mailto:solutions@datanyansa.com?subject=Fintech%20Innovations', icon: Landmark, detail: 'Financial technology' },
            ].map((initiative) => {
              const Icon = initiative.icon
              return (
                <a
                  key={initiative.name}
                  href={initiative.href}
                  target={initiative.href.startsWith('http') ? '_blank' : undefined}
                  rel={initiative.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col justify-between min-h-40 rounded-xl border border-border bg-background p-5 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="mt-8">
                    <h3 className="font-semibold text-foreground leading-snug">{initiative.name}</h3>
                    <p className="mt-1 text-sm text-foreground/55">{initiative.detail}</p>
                  </div>
                </a>
              )
            })}
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

      {/* Partners */}
      <section className="border-y border-border bg-card py-12 overflow-hidden" aria-labelledby="partners-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 id="partners-heading" className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Partners</h2>
          </div>
          <div className="relative -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
            <div className="flex w-max items-center gap-5 animate-[partner-scroll_36s_linear_infinite] hover:[animation-play-state:paused]">
              {[...Array(2)].flatMap((_, copy) => [
                ['Knowledge Innovations', 'https://ghanaaisummit.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NjY4LCJwdXIiOiJibG9iX2lkIn19--dd196635e3d9995bac5371a4c1dfe522f23ab431/Partners-Knowledge-Innovation.png'],
                ['Meta', 'https://ghanaaisummit.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NjY5LCJwdXIiOiJibG9iX2lkIn19--55249f81693f5afe78fb95f32fe9baa2d407a22b/meta-log.png'],
                ['Deloitte', 'https://ghanaaisummit.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NjcwLCJwdXIiOiJibG9iX2lkIn19--7da4ba7c538ed672dd5b218b5a0324128710a1c0/Deloitte.png'],
                ['The AI Collective', 'https://ghanaaisummit.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NjcxLCJwdXIiOiJibG9iX2lkIn19--cfabd76e2c036910062b7078780d9c0c3a7a455c/the-ai-collective.jpeg'],
                ['Ghana AI Research Network', 'https://ghanaaisummit.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NjkwLCJwdXIiOiJibG9iX2lkIn19--65c371d907112d1fd5c410489b0c9200b56812a8/gains.png'],
                ['NyasaAI Solutions', 'https://ghanaaisummit.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NjkyLCJwdXIiOiJibG9iX2lkIn19--6cd7eaf4c06a282c583ca71309c4b2493f7f993e/partner-nyasa.jpg'],
              ].map(([name, src]) => (
                <a key={`${copy}-${name}`} href="https://ghanaaisummit.com" target="_blank" rel="noopener noreferrer" className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-background px-4 grayscale hover:grayscale-0 transition-all">
                  <img src={src} alt={`${name} partner logo`} className="max-h-14 max-w-full object-contain" loading="lazy" />
                </a>
              )))}
            </div>
          </div>
        </div>
        <style>{`@keyframes partner-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
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
