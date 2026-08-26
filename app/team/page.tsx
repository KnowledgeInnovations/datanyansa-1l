import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Share2 } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  bio: string
  expertise: string[]
  image?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Kwami Ahiabenu PhD',
    role: 'Founder & Chief Research Officer',
    bio: 'PhD in bank sector tech innovation with 20+ years advancing fintech innovation, digital transformation and governance across Africa.',
    expertise: ['AI/ML', 'Research', 'Fintech'],
    image: '/kwami-ahiabenu.jpeg',
  },
  {
    name: 'Dzifa Amenya',
    role: 'Consultant',
    bio: 'Consultant supporting organizations through digital transformation, change management, and effective project delivery.',
    expertise: ['Digital Transformation', 'Change Management', 'Project Management'],
    image: '/dzifa-amenya.png',
  },
  {
    name: 'Muheeb (Kwabena) Nuaku',
    role: 'AI Automation Specialist | Software Engineer | Tech Solutions',
    bio: 'Technology professional focused on AI automation, software engineering, and practical technology solutions.',
    expertise: ['AI Automation', 'Software Engineering', 'Tech Solutions'],
    image: '/muheeb-nuaku.png',
  },
  {
    name: 'Mildred Asaah',
    role: 'Communications & Marketing Lead',
    bio: 'Experienced communications and marketing professional focused on strengthening public relations, brand visibility, and stakeholder engagement.',
    expertise: ['Communication', 'Public Relations', 'Marketing'],
    image: '/mildred-asaah.jpeg',
  },
  {
    name: 'Eric Osiakwan',
    role: 'Consultant',
    bio: 'Technology investment and innovation consultant supporting strategic advisory and growth-focused solutions.',
    expertise: ['Tech Investment', 'Advisory', 'Innovation'],
    image: '/eric-osiakwan.png',
  },
  {
    name: 'Gobarshev Zanus',
    role: 'Data & Technology Specialist',
    bio: 'Data-focused technology professional combining analysis, design, and development to create practical digital solutions.',
    expertise: ['Data Analysis', 'Design', 'Developer'],
    image: '/gobarshev-zanus.png',
  },
  {
    name: 'Julia Osei',
    role: 'Frontend-Focused Full-Stack Developer | Web + Mobile',
    bio: 'Frontend-focused full-stack developer building web and mobile products with modern JavaScript and TypeScript technologies.',
    expertise: ['React Native', 'React', 'Next.js', 'TypeScript'],
    image: '/julia-osei.png',
  },
  {
    name: 'Eugenia Blay',
    role: 'Consultant',
    bio: 'Consultant specializing in digital transformation, innovation, and fintech strategy.',
    expertise: ['Digital Transformation', 'Innovation', 'Fintech'],
    image: '/eugenia-blay.png',
  },
  {
    name: 'Charity Ahiatrogah',
    role: 'Project Admin',
    bio: 'Project administration professional supporting finance, operations, and effective project delivery.',
    expertise: ['Finance', 'Admin', 'Project Management'],
    image: '/charity-ahiatrogah.jpeg',
  },
  {
    name: 'Gilbert Agyeman',
    role: 'Director, Finance',
    bio: 'Chartered Accountant overseeing financial strategy, planning, and governance for Data Nyansa.',
    expertise: ['Chartered Accountancy', 'Finance', 'Financial Governance'],
    image: '/gilbert-agyeman.png',
  },
  {
    name: 'James Wilson',
    role: 'Lead Consultant, Fintech',
    bio: 'Former Chief Technology Officer at blockchain startup, now leading fintech consulting with focus on digital transformation.',
    expertise: ['Fintech Architecture', 'Blockchain', 'Digital Strategy'],
  },
  {
    name: 'Dr. Amelia Zhang',
    role: 'Senior Data Scientist',
    bio: 'PhD in Statistics with expertise in predictive modeling, time series analysis, and enterprise analytics solutions.',
    expertise: ['Statistics', 'Predictive Modeling', 'Analytics'],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Expert Team
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Exceptional talent from academia, industry, and entrepreneurship united by a passion for innovation
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="border border-border rounded-xl bg-card p-6 hover:border-primary transition-colors"
              >
                <div className="mb-4">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} portrait`}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4" />
                  )}
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/70 mb-4">{member.bio}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground/60 mb-2">EXPERTISE</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-xs text-primary font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
                    <Mail className="h-4 w-4" />
                    Email
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
                    <Share2 className="h-4 w-4" />
                    Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Interested in Joining Our Team?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            We&apos;re always looking for exceptional talent. Visit our careers page or reach out to connect with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:solutions@datanyansa.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Send Your Resume
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
