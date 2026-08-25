import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mail, MapPin, ShieldCheck } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Statement | Data Nyansa',
  description:
    'How Data Nyansa collects, uses, stores, protects and discloses personal information in accordance with the Data Protection Act, 2012 (Act 843) of the Republic of Ghana.',
}

const EFFECTIVE_DATE = '25 August 2026'

type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }

type Section = {
  id: string
  number: string
  title: string
  blocks: Block[]
}

const sections: Section[] = [
  {
    id: 'information-we-collect',
    number: '01',
    title: 'Information We Collect',
    blocks: [
      { type: 'p', text: 'Depending on how you interact with Data Nyansa, we may collect:' },
      {
        type: 'list',
        items: [
          'Name and contact details, including email address and telephone number;',
          'Organisation, position or professional information;',
          'Information provided through contact and enquiry forms;',
          'Registration information for events, training programmes, webinars and other activities;',
          'Information provided when participating in surveys, interviews, focus groups and research;',
          'Information relating to consultancy or professional engagements;',
          'Communications and correspondence with Data Nyansa;',
          'Website usage and technical information, including IP address, browser type, device information and pages visited; and',
          'Other information that you voluntarily provide to us.',
        ],
      },
      {
        type: 'p',
        text: 'We seek to collect personal information that is relevant, necessary and not excessive in relation to the purpose for which it is collected.',
      },
    ],
  },
  {
    id: 'how-we-collect',
    number: '02',
    title: 'How We Collect Personal Information',
    blocks: [
      { type: 'p', text: 'We may collect personal information when you:' },
      {
        type: 'list',
        items: [
          'visit or use www.datanyansa.com;',
          'complete an online form;',
          'contact us by email, telephone or other communication channels;',
          'register for an event, training programme or webinar;',
          'subscribe to our newsletter or other communications;',
          'participate in our research or surveys;',
          'engage Data Nyansa for professional services; or',
          'otherwise voluntarily provide information to us.',
        ],
      },
      {
        type: 'p',
        text: 'We may also collect limited technical information automatically when you use our website through cookies, analytics and similar technologies.',
      },
    ],
  },
  {
    id: 'purpose-of-collecting',
    number: '03',
    title: 'Purpose of Collecting Personal Information',
    blocks: [
      { type: 'p', text: 'Data Nyansa may use personal information to:' },
      {
        type: 'list',
        items: [
          'respond to enquiries and requests;',
          'provide research, advisory, consultancy and training services;',
          'administer events, programmes and activities;',
          'conduct surveys and research;',
          'communicate with clients, participants, partners and stakeholders;',
          'provide newsletters, updates and information about our activities;',
          'improve our website, services and user experience;',
          'maintain business and administrative records;',
          'protect the security and integrity of our systems; and',
          'comply with applicable legal and regulatory requirements.',
        ],
      },
      {
        type: 'p',
        text: 'In accordance with Act 843, personal information will be processed for specified and legitimate purposes and will not be used in a manner incompatible with the purpose for which it was collected.',
      },
    ],
  },
  {
    id: 'lawful-processing',
    number: '04',
    title: 'Lawful Processing and Consent',
    blocks: [
      {
        type: 'p',
        text: 'Data Nyansa will process personal information in accordance with the lawful processing requirements of the Data Protection Act, 2012 (Act 843).',
      },
      {
        type: 'p',
        text: 'Where consent is required, we will obtain your consent before collecting or processing your personal information.',
      },
      {
        type: 'p',
        text: 'Where processing is based on consent, you may withdraw your consent by contacting us. Withdrawal of consent will not affect the lawfulness of processing carried out before the withdrawal.',
      },
      {
        type: 'p',
        text: 'In some circumstances, personal information may be processed without consent where permitted or required by law, including where processing is necessary for a contractual relationship, legal obligation or other lawful purpose under Act 843.',
      },
    ],
  },
  {
    id: 'research-and-survey',
    number: '05',
    title: 'Research and Survey Information',
    blocks: [
      { type: 'p', text: 'Data Nyansa undertakes research involving individuals, organisations and communities.' },
      {
        type: 'p',
        text: 'Where personal information is collected as part of research, we will take reasonable steps to ensure that information is collected, used and stored appropriately.',
      },
      {
        type: 'p',
        text: 'Where appropriate, research findings will be presented in aggregated, anonymised or de-identified form so that individual participants cannot reasonably be identified.',
      },
      {
        type: 'p',
        text: 'Where a particular research project requires additional privacy information or consent arrangements, participants will be provided with the relevant information before participation.',
      },
    ],
  },
  {
    id: 'sharing-and-disclosure',
    number: '06',
    title: 'Sharing and Disclosure of Personal Information',
    blocks: [
      { type: 'p', text: 'Data Nyansa does not sell or rent personal information.' },
      {
        type: 'p',
        text: 'We may share personal information with service providers, consultants, technology providers, research partners, contractors or other trusted third parties where reasonably necessary to provide our services, conduct research, administer programmes or operate our business.',
      },
      {
        type: 'p',
        text: 'Where third parties process personal information on our behalf, we will take reasonable steps to ensure that appropriate confidentiality, security and data protection measures are in place.',
      },
      {
        type: 'p',
        text: 'We may also disclose personal information where required or permitted by law, including where necessary to comply with legal obligations, court orders, regulatory requirements or lawful requests from competent authorities.',
      },
    ],
  },
  {
    id: 'international-processing',
    number: '07',
    title: 'International Processing',
    blocks: [
      {
        type: 'p',
        text: 'Data Nyansa may work with clients, partners, researchers and technology providers located outside Ghana. Personal information may therefore, where necessary, be processed or stored outside Ghana.',
      },
      {
        type: 'p',
        text: 'Where personal information is transferred or processed outside Ghana, Data Nyansa will take reasonable steps to ensure that appropriate safeguards are applied and that the information continues to receive appropriate protection in accordance with applicable data protection requirements.',
      },
    ],
  },
  {
    id: 'cookies-and-analytics',
    number: '08',
    title: 'Cookies and Website Analytics',
    blocks: [
      {
        type: 'p',
        text: 'Our website may use cookies and similar technologies to improve website functionality, understand how visitors use our website and improve user experience.',
      },
      {
        type: 'p',
        text: 'Cookies may collect information such as browser type, device information, pages visited and general website usage.',
      },
      {
        type: 'p',
        text: 'You may control or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.',
      },
      {
        type: 'p',
        text: 'Where third-party analytics or other technologies are used, those providers may process information in accordance with their own privacy policies.',
      },
    ],
  },
  {
    id: 'data-security',
    number: '09',
    title: 'Data Security',
    blocks: [
      {
        type: 'p',
        text: 'Data Nyansa takes reasonable technical and organisational measures to protect personal information against:',
      },
      {
        type: 'list',
        items: [
          'unauthorised access;',
          'unlawful processing;',
          'loss or destruction;',
          'accidental disclosure;',
          'alteration; and',
          'other forms of misuse.',
        ],
      },
      {
        type: 'p',
        text: 'Our security measures are designed to protect the integrity, confidentiality and availability of personal information.',
      },
      {
        type: 'p',
        text: 'However, no electronic transmission or storage system can be guaranteed to be completely secure.',
      },
    ],
  },
  {
    id: 'retention',
    number: '10',
    title: 'Retention of Personal Information',
    blocks: [
      {
        type: 'p',
        text: 'Data Nyansa will retain personal information only for as long as reasonably necessary to fulfil the purpose for which it was collected, meet contractual and legal obligations, maintain appropriate business or research records, resolve disputes and protect our legitimate interests.',
      },
      {
        type: 'p',
        text: 'When personal information is no longer required, we will take reasonable steps to securely delete, destroy or anonymise it.',
      },
    ],
  },
  {
    id: 'your-rights',
    number: '11',
    title: 'Your Rights as a Data Subject',
    blocks: [
      {
        type: 'p',
        text: 'Under the Data Protection Act, 2012 (Act 843), individuals have rights concerning their personal information.',
      },
      { type: 'p', text: 'Subject to the Act and applicable circumstances, you may have the right to:' },
      {
        type: 'list',
        items: [
          'be informed about the collection and processing of your personal information;',
          'request access to personal information held about you;',
          'request correction of inaccurate or incomplete information;',
          'object to certain processing of your personal information;',
          'prevent processing that causes or is likely to cause unwarranted damage or distress;',
          'withdraw consent where processing is based on consent;',
          'object to the use of your personal information for direct marketing; and',
          'seek appropriate remedies where your rights under the Act have been infringed.',
        ],
      },
      {
        type: 'p',
        text: 'The Ghana Data Protection Commission confirms that these data subject rights are provided under sections 39–44 of Act 843.',
      },
    ],
  },
  {
    id: 'direct-marketing',
    number: '12',
    title: 'Direct Marketing',
    blocks: [
      {
        type: 'p',
        text: 'Where we send newsletters, promotional communications or other direct marketing, we will provide appropriate mechanisms for individuals to opt out.',
      },
      {
        type: 'p',
        text: 'You may request that Data Nyansa stop using your personal information for direct marketing by contacting us.',
      },
    ],
  },
  {
    id: 'third-party-websites',
    number: '13',
    title: 'Third-Party Websites',
    blocks: [
      { type: 'p', text: 'Our website may contain links to third-party websites, platforms and services.' },
      {
        type: 'p',
        text: 'Data Nyansa is not responsible for the privacy practices, security or content of third-party websites. We encourage you to review the privacy policies of those websites before providing personal information.',
      },
    ],
  },
  {
    id: 'compliance',
    number: '14',
    title: 'Data Protection Compliance',
    blocks: [
      {
        type: 'p',
        text: 'Data Nyansa is committed to complying with the principles established under the Data Protection Act, 2012 (Act 843), including:',
      },
      {
        type: 'list',
        items: [
          'Accountability;',
          'Lawfulness of processing;',
          'Specification of purpose;',
          'Quality and accuracy of information;',
          'Purpose limitation;',
          'Openness and transparency;',
          'Data security safeguards; and',
          'Data subject participation.',
        ],
      },
      {
        type: 'p',
        text: 'These principles are reflected in the guidance of the Ghana Data Protection Commission.',
      },
    ],
  },
  {
    id: 'privacy-complaints',
    number: '15',
    title: 'Privacy Complaints',
    blocks: [
      {
        type: 'p',
        text: 'If you have a concern about how Data Nyansa has collected, used, stored or disclosed your personal information, we encourage you to contact us first so that we can investigate and address your concern.',
      },
      {
        type: 'p',
        text: "If you are not satisfied with our response, you may contact the Data Protection Commission of Ghana, the statutory body responsible for regulating and enforcing Ghana's data protection framework.",
      },
      {
        type: 'p',
        text: 'The Commission also provides mechanisms for individuals to submit formal complaints concerning the handling of their personal data.',
      },
    ],
  },
  {
    id: 'changes',
    number: '16',
    title: 'Changes to This Privacy Statement',
    blocks: [
      {
        type: 'p',
        text: 'Data Nyansa may update this Privacy Statement from time to time to reflect changes in our services, technology, legal requirements or data protection practices.',
      },
      {
        type: 'p',
        text: 'Any updated version will be published on this page together with a revised effective date. The "Last updated" date at the top indicates when it was last revised.',
      },
    ],
  },
]

const introParagraphs = [
  'Data Nyansa ("Data Nyansa", "we", "us" or "our") is committed to protecting the privacy and personal information of individuals who interact with our website, services, research activities, training programmes, events and other activities.',
  'This Privacy Statement explains how Data Nyansa collects, uses, stores, protects and discloses personal information in accordance with the Data Protection Act, 2012 (Act 843) of the Republic of Ghana and applicable guidance of the Data Protection Commission of Ghana (DPC).',
  'The Data Protection Act establishes principles governing the collection, use, disclosure, security and handling of personal data in Ghana.',
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-primary py-20 text-primary-foreground lg:py-28">
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-primary-foreground/15" />
          <div className="absolute -bottom-44 left-1/4 h-96 w-96 rounded-full border border-primary-foreground/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">Privacy</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
              Privacy Statement
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-primary-foreground/80">
              Data Nyansa is committed to protecting the privacy and personal information of individuals who interact
              with our website, services, research activities, training programmes, events and other activities.
            </p>
            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-2.5">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium">Effective date: {EFFECTIVE_DATE}</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
            {/* Table of contents */}
            <nav aria-labelledby="toc-heading" className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 id="toc-heading" className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
                  On this page
                </h2>
                <ul className="mt-5 flex flex-col gap-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="flex gap-3 rounded-lg px-2 py-2 text-sm leading-6 text-foreground/70 transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span className="font-mono text-xs leading-6 text-primary/70">{section.number}</span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact-us"
                      className="flex gap-3 rounded-lg px-2 py-2 text-sm leading-6 text-foreground/70 transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="font-mono text-xs leading-6 text-primary/70">17</span>
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Policy content */}
            <div className="min-w-0">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-9">
                <div className="flex flex-col gap-5">
                  {introParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-foreground/75 sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-14 flex flex-col gap-14">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 border-b border-border pb-5">
                      <span className="font-mono text-sm text-primary">{section.number}</span>
                      <h2 id={`${section.id}-heading`} className="text-2xl font-bold text-balance sm:text-3xl">
                        {section.title}
                      </h2>
                    </div>
                    <div className="mt-7 flex flex-col gap-6">
                      {section.blocks.map((block, index) =>
                        block.type === 'p' ? (
                          <p key={index} className="max-w-3xl text-base leading-8 text-foreground/70">
                            {block.text}
                          </p>
                        ) : (
                          <ul key={index} className="flex max-w-3xl flex-col gap-3">
                            {block.items.map((item) => (
                              <li key={item} className="flex gap-3 text-base leading-8 text-foreground/70">
                                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ),
                      )}
                    </div>
                  </section>
                ))}

                {/* Contact */}
                <section id="contact-us" aria-labelledby="contact-us-heading" className="scroll-mt-28">
                  <div className="flex items-baseline gap-4 border-b border-border pb-5">
                    <span className="font-mono text-sm text-primary">17</span>
                    <h2 id="contact-us-heading" className="text-2xl font-bold text-balance sm:text-3xl">
                      Contact Us
                    </h2>
                  </div>
                  <p className="mt-7 max-w-3xl text-base leading-8 text-foreground/70">
                    If you have questions, requests or concerns regarding this Privacy Statement or the way Data Nyansa
                    handles personal information, please contact us:
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-semibold">Data Nyansa</h3>
                      <p className="mt-2 leading-7 text-foreground/70">
                        31 Tumu Avenue, Kanda
                        <br />
                        Accra, Ghana
                      </p>
                      <p className="mt-2 text-sm text-foreground/60">Digital Address: GA-003-5259</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-semibold">Get in touch</h3>
                      <p className="mt-2 leading-7 text-foreground/70">
                        Email:{' '}
                        <a href="mailto:solutions@datanyansa.com" className="text-primary hover:underline">
                          solutions@datanyansa.com
                        </a>
                      </p>
                      <p className="leading-7 text-foreground/70">
                        Website:{' '}
                        <a href="https://www.datanyansa.com" className="text-primary hover:underline">
                          www.datanyansa.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-muted/40 p-6">
                    <p className="text-sm font-medium text-foreground/70">Effective Date: {EFFECTIVE_DATE}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3"
                    >
                      Contact our team <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
