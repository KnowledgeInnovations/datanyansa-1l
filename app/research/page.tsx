'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, FlaskConical, Globe2, LineChart, Search, Users } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const researchServices = [
  {
    icon: Search,
    title: 'Qualitative Research',
    text: 'Understand experiences, motivations, behaviours, and perceptions through interviews, focus groups, consultations, case studies, and user research.',
    items: ['In-depth interviews', 'Focus groups', 'Key informant interviews', 'Stakeholder consultations', 'Case studies', 'Thematic and narrative analysis'],
  },
  {
    icon: LineChart,
    title: 'Quantitative Research',
    text: 'Generate robust, measurable evidence through surveys, baseline and endline studies, statistical analysis, and monitoring and evaluation research.',
    items: ['Large-scale surveys', 'Online and mobile surveys', 'Customer and user surveys', 'Baseline and endline studies', 'Statistical analysis'],
  },
  {
    icon: FlaskConical,
    title: 'Mixed-Methods Research',
    text: 'Combine qualitative depth with quantitative evidence to develop a comprehensive understanding of complex problems, markets, and opportunities.',
    items: ['Research design', 'Integrated analysis', 'Evidence synthesis', 'Actionable reporting'],
  },
  {
    icon: Globe2,
    title: 'Large-Scale Data Collection',
    text: 'Design and implement data collection programmes across diverse populations and geographic locations, with quality built into every stage.',
    items: ['Instrument design', 'Sampling and fieldwork', 'Enumerator management', 'Digital data collection', 'Quality assurance', 'Data cleaning and reporting'],
  },
]

const researchAreas = [
  'Digital Transformation',
  'Digital Banking & Fintech',
  'Digital Payments & Financial Inclusion',
  'Artificial Intelligence & Emerging Technologies',
  'Economic Development & Technology',
  'Technology-Enabled Agriculture',
  'Digital Health',
]

const reasons = ['Rigorous methodology', 'Deep subject-matter expertise', 'Scale and reach', 'Local Ghanaian knowledge', 'International experience', 'Strong research partnerships', 'Actionable insights']

export default function ResearchPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border bg-primary py-20 text-primary-foreground lg:py-28">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-primary-foreground/15" />
          <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full border border-primary-foreground/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Data Nyansa Research</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">Research that turns data into decisions.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/80">Evidence. Insight. Impact.</p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-primary-foreground/75 sm:text-lg">We provide high-quality research services that help organisations understand people, markets, technologies, industries, and emerging trends.</p>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our approach</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Evidence you can trust. Insights you can act on.</h2>
              <p className="mt-6 text-lg leading-8 text-foreground/65">Combining rigorous methodologies with deep subject-matter expertise and extensive Ghanaian and international experience, we deliver research that supports better decisions, stronger strategies, and measurable impact.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {researchServices.map((service) => {
                const Icon = service.icon
                return <article key={service.title} className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-foreground/65">{service.text}</p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {service.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-foreground/65"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
                  </ul>
                </article>
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Industry & market research</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Local insight. International perspective.</h2>
              <p className="mt-6 leading-8 text-foreground/65">We help organisations understand markets, industries, technologies, competitors, and emerging opportunities. Our work combines deep knowledge of Ghana and African markets with international experience and research standards.</p>
              <p className="mt-5 leading-8 text-foreground/65">We collaborate with universities, research institutions, think tanks, technology ecosystems, and subject-matter experts to bring specialised expertise and diverse perspectives to each engagement.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Key research areas</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {researchAreas.map((area) => <div key={area} className="rounded-xl border border-border bg-background p-4 font-medium text-foreground/75">{area}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why work with us?</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Research built for real-world impact.</h2>
                <p className="mt-5 leading-8 text-foreground/65">Whether you are entering a new market, evaluating a technology, developing a policy, understanding customers, assessing an industry, or measuring impact, we can help you find the evidence you need.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {reasons.map((reason) => <div key={reason} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"><Check className="h-5 w-5 text-primary" /><span className="font-medium">{reason}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-muted/40 py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Start a conversation</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let&apos;s turn your questions into evidence.</h2>
              <p className="mt-5 max-w-xl leading-8 text-foreground/65">Tell us the question. We&apos;ll help you design the research to answer it.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">Explore contact options <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {submitted ? <div className="py-10 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Check /></div><h3 className="mt-5 text-xl font-semibold">Thank you.</h3><p className="mt-2 text-foreground/65">Our research team will be in touch shortly.</p></div> : <form onSubmit={handleSubmit} className="grid gap-5">
                <div><label htmlFor="research-name" className="text-sm font-medium">Name</label><input id="research-name" name="name" required className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" /></div>
                <div><label htmlFor="research-mobile" className="text-sm font-medium">Mobile number</label><input id="research-mobile" name="mobile" type="tel" required className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" /></div>
                <div><label htmlFor="research-organisation" className="text-sm font-medium">Organisation</label><input id="research-organisation" name="organisation" required className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" /></div>
                <button type="submit" className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">Request a Research Consultation</button>
              </form>}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
