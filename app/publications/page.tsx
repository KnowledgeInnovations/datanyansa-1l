import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { FileText, ExternalLink, Award } from 'lucide-react'

interface Publication {
  id: number
  title: string
  authors: string[]
  journal: string
  date: string
  category: string
  abstract: string
  link: string
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Deep Learning Approaches to Financial Time Series Prediction',
    authors: ['Dr. Rajesh Kumar', 'Dr. Amelia Zhang'],
    journal: 'Journal of Machine Learning Research',
    date: 'March 2024',
    category: 'Machine Learning',
    abstract: 'Novel deep learning architectures for predicting financial market trends with state-of-the-art accuracy.',
    link: '#',
  },
  {
    id: 2,
    title: 'Federated Learning in Banking: Privacy-Preserving AI',
    authors: ['Dr. Michael Thompson', 'James Wilson'],
    journal: 'IEEE Transactions on Financial Services',
    date: 'February 2024',
    category: 'Privacy & Security',
    abstract: 'Exploring federated learning applications for financial institutions to maintain data privacy.',
    link: '#',
  },
  {
    id: 3,
    title: 'Blockchain Smart Contracts: Design Patterns and Best Practices',
    authors: ['James Wilson', 'Dr. Rajesh Kumar'],
    journal: 'International Journal of Blockchain',
    date: 'January 2024',
    category: 'Blockchain',
    abstract: 'Comprehensive analysis of smart contract design patterns for enterprise blockchain applications.',
    link: '#',
  },
  {
    id: 4,
    title: 'Explainable AI for Financial Decision Making',
    authors: ['Dr. Amelia Zhang'],
    journal: 'AI and Ethics Review',
    date: 'December 2023',
    category: 'AI Ethics',
    abstract: 'Methods for making AI models interpretable and trustworthy in financial services.',
    link: '#',
  },
  {
    id: 5,
    title: 'Natural Language Processing in Regulatory Compliance',
    authors: ['Dr. Michael Thompson', 'Priya Patel'],
    journal: 'Journal of Fintech Innovation',
    date: 'November 2023',
    category: 'NLP',
    abstract: 'Using NLP to automate compliance monitoring and regulatory reporting in financial services.',
    link: '#',
  },
  {
    id: 6,
    title: 'Cloud Infrastructure for AI at Scale',
    authors: ['Dr. Rajesh Kumar'],
    journal: 'Cloud Computing Quarterly',
    date: 'October 2023',
    category: 'Cloud Computing',
    abstract: 'Architectural patterns for deploying and scaling AI applications in cloud environments.',
    link: '#',
  },
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Research & <span className="text-primary">Publications</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Our team&apos;s peer-reviewed research and thought leadership
            </p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.id}
                className="border border-border rounded-xl bg-card p-6 hover:border-primary transition-colors"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-semibold text-foreground flex-grow">
                        {pub.title}
                      </h3>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold whitespace-nowrap">
                        {pub.category}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/70 mb-2">
                      {pub.authors.join(', ')}
                    </p>

                    <p className="text-sm text-foreground/60 mb-3">
                      <em>{pub.journal}</em> • {pub.date}
                    </p>

                    <p className="text-foreground/70 mb-4 line-clamp-2">
                      {pub.abstract}
                    </p>

                    <Link
                      href={pub.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
                    >
                      Read Paper <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
              Load More Publications
            </button>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Recognition & Awards</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Award {i}</h3>
                <p className="text-sm text-foreground/70">
                  Recognition for excellence in AI research and fintech innovation
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
