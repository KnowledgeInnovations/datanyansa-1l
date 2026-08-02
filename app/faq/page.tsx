'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQ {
  category: string
  questions: {
    id: string
    question: string
    answer: string
  }[]
}

const faqs: FAQ[] = [
  {
    category: 'General',
    questions: [
      {
        id: 'general-1',
        question: 'What is Data Nyansa?',
        answer: 'Data Nyansa is a technology research and consultancy firm specializing in AI advisory, fintech training, data science research, and enterprise consultancy. We help organizations harness the power of data and artificial intelligence to drive business transformation.',
      },
      {
        id: 'general-2',
        question: 'How long have you been in business?',
        answer: 'Data Nyansa was founded with a vision to bridge the gap between cutting-edge AI research and practical business applications. We have a track record of successful engagements with enterprise clients, financial institutions, and technology leaders.',
      },
      {
        id: 'general-3',
        question: 'Where are you located?',
        answer: 'Our headquarters is located at 123 Tech Street, Innovation Hub, CA 94025. We operate globally and can serve clients through on-site, virtual, and hybrid engagement models.',
      },
    ],
  },
  {
    category: 'Services',
    questions: [
      {
        id: 'services-1',
        question: 'What is AI Advisory, Solutions & Research?',
        answer: 'Our AI Advisory, Solutions & Research service provides strategic guidance on implementing AI solutions, conducting applied research on emerging technologies, and helping organizations build AI-ready capabilities. We offer technology assessments, implementation roadmaps, and organizational transformation support.',
      },
      {
        id: 'services-2',
        question: 'Who should attend your fintech training programs?',
        answer: 'Our fintech training is designed for professionals at all levels looking to build expertise in financial technology. This includes developers, analysts, compliance professionals, business managers, and anyone seeking to understand modern fintech systems and applications.',
      },
      {
        id: 'services-3',
        question: 'Can you customize training programs for our organization?',
        answer: 'Absolutely! We specialize in designing customized training solutions tailored to your organization&apos;s specific needs, skill levels, and business objectives. Our team conducts assessments and works with you to develop targeted programs.',
      },
      {
        id: 'services-4',
        question: 'Do you offer consulting services?',
        answer: 'Yes, we provide comprehensive consulting services including business strategy, technology assessment, implementation support, organizational transformation, and custom solutions for specific challenges your organization faces.',
      },
    ],
  },
  {
    category: 'Training & Learning',
    questions: [
      {
        id: 'training-1',
        question: 'What training delivery formats do you offer?',
        answer: 'We offer flexible delivery models including on-site training at your location, virtual programs via online platforms, and hybrid approaches combining both. You can choose the format that works best for your team.',
      },
      {
        id: 'training-2',
        question: 'How long are typical training programs?',
        answer: 'Program duration varies depending on the subject and depth required. Courses can range from single-day workshops to multi-week programs. We can customize duration to fit your organization&apos;s schedule and learning objectives.',
      },
      {
        id: 'training-3',
        question: 'Do you provide certifications?',
        answer: 'Many of our programs include completion certificates recognized in the industry. We can discuss certification options when you reach out to discuss your specific training needs.',
      },
      {
        id: 'training-4',
        question: 'What is your instructor-to-participant ratio?',
        answer: 'We maintain manageable class sizes to ensure quality instruction and personalized attention. Typical ratios are 1 instructor for every 12-15 participants in group sessions, with more intensive ratios available for specialized programs.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        id: 'technical-1',
        question: 'What technologies do you specialize in?',
        answer: 'We have expertise across AI/ML, blockchain, fintech platforms, data science, cloud infrastructure, secure software development, and enterprise systems. Our team stays current with emerging technologies and best practices.',
      },
      {
        id: 'technical-2',
        question: 'Do you help with data security and compliance?',
        answer: 'Yes, data security and regulatory compliance are core aspects of our consulting and training services. We help organizations implement robust security practices, ensure regulatory compliance (KYC, AML, GDPR, etc.), and establish governance frameworks.',
      },
      {
        id: 'technical-3',
        question: 'Can you help us migrate to the cloud?',
        answer: 'We can provide consulting and implementation support for cloud migration projects. Our team has experience with major cloud providers and can help you design migration strategies, manage execution, and optimize cloud infrastructure.',
      },
    ],
  },
  {
    category: 'Business & Partnerships',
    questions: [
      {
        id: 'business-1',
        question: 'How do I get started working with Data Nyansa?',
        answer: 'Simply reach out through our contact page, and we&apos;ll schedule a discovery call to understand your needs. We&apos;ll discuss your objectives, timeline, budget, and propose a customized engagement approach.',
      },
      {
        id: 'business-2',
        question: 'What is your typical project timeline?',
        answer: 'Project timelines vary based on scope and complexity. Discovery and assessment typically take 1-2 weeks, while implementation can range from weeks to months. We&apos;ll provide a detailed timeline proposal based on your specific needs.',
      },
      {
        id: 'business-3',
        question: 'Do you work with startups and small companies?',
        answer: 'Yes, we work with organizations of all sizes. We have experience serving startups, mid-market companies, and large enterprises. Each engagement is customized based on the client&apos;s specific context and needs.',
      },
      {
        id: 'business-4',
        question: 'Are you open to partnership opportunities?',
        answer: 'We&apos;re always interested in exploring strategic partnerships with complementary service providers, technology vendors, and educational institutions. Contact us to discuss potential collaboration opportunities.',
      },
    ],
  },
]

export default function FAQPage() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Find answers to common questions about our services, training programs, and engagements
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faqGroup) => (
              <div key={faqGroup.category}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{faqGroup.category}</h2>
                <div className="space-y-4 mb-12">
                  {faqGroup.questions.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-border rounded-lg bg-card overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setActiveId(activeId === faq.id ? null : faq.id)
                        }
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-foreground">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                            activeId === faq.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeId === faq.id && (
                        <div className="px-6 py-4 border-t border-border bg-muted/50">
                          <p className="text-foreground/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Didn&apos;t find your answer?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Get in touch with our team and we&apos;ll be happy to help answer any additional questions you may have.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
