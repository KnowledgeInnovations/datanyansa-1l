import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Briefcase, TrendingUp } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  client: string
  industry: string
  results: string[]
  year: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Fraud Detection System',
    description: 'Developed a machine learning system to detect fraudulent transactions in real-time for a major financial institution.',
    client: 'Leading Global Bank',
    industry: 'Banking & Finance',
    results: ['99.2% fraud detection accuracy', '45% reduction in false positives', '$50M+ fraud prevented'],
    year: '2023-2024',
  },
  {
    id: 2,
    title: 'Blockchain Payment Platform',
    description: 'Built a secure blockchain-based payment platform enabling cross-border transactions with reduced settlement times.',
    client: 'Fintech Startup',
    industry: 'Fintech',
    results: ['90% faster settlements', 'Support for 15+ currencies', '10,000+ daily transactions'],
    year: '2023',
  },
  {
    id: 3,
    title: 'Enterprise Data Lake Implementation',
    description: 'Designed and deployed a comprehensive data lake architecture enabling advanced analytics and machine learning.',
    client: 'Fortune 500 Company',
    industry: 'Technology & Enterprise',
    results: ['Unified 50+ data sources', 'Reduced query times by 80%', 'Enabled 200+ analytics projects'],
    year: '2022-2023',
  },
  {
    id: 4,
    title: 'Natural Language Processing for Compliance',
    description: 'Implemented NLP solution for automating regulatory compliance monitoring and reporting.',
    client: 'Investment Bank',
    industry: 'Banking & Finance',
    results: ['Automated 85% of compliance checks', '60% reduction in manual work', 'Zero compliance violations'],
    year: '2023',
  },
  {
    id: 5,
    title: 'Customer Analytics Platform',
    description: 'Built comprehensive customer analytics platform providing real-time insights and personalization.',
    client: 'E-Commerce Platform',
    industry: 'Retail & E-Commerce',
    results: ['25% increase in customer lifetime value', '40% improvement in recommendations', 'Real-time dashboards'],
    year: '2022-2023',
  },
  {
    id: 6,
    title: 'Risk Management AI System',
    description: 'Developed AI system for comprehensive portfolio risk analysis and management recommendations.',
    client: 'Asset Management Firm',
    industry: 'Investment Management',
    results: ['Reduced portfolio risk by 20%', 'Improved risk reporting accuracy', 'Automated risk alerts'],
    year: '2023-2024',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Real-world implementations delivering measurable business impact
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="border border-border rounded-xl bg-card p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.year}</p>
                  </div>
                </div>

                <p className="text-foreground/70 mb-4">{project.description}</p>

                <div className="mb-4 space-y-1 text-sm">
                  <p className="text-foreground/60">
                    <span className="font-semibold">Client:</span> {project.client}
                  </p>
                  <p className="text-foreground/60">
                    <span className="font-semibold">Industry:</span> {project.industry}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Key Results</p>
                  <ul className="space-y-1">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                        <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1 text-sm"
                >
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Let&apos;s discuss how we can help you achieve similar results
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
