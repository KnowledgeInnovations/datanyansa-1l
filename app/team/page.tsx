import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Linkedin } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  bio: string
  expertise: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Founder & Chief Research Officer',
    bio: 'PhD in Machine Learning from Stanford University with 15+ years of experience in AI research and enterprise solutions.',
    expertise: ['AI/ML', 'Data Science', 'Research'],
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Executive Officer',
    bio: 'Former VP at a leading fintech company with extensive experience in scaling technology businesses and strategic partnerships.',
    expertise: ['Business Strategy', 'Fintech', 'Leadership'],
  },
  {
    name: 'Dr. Michael Thompson',
    role: 'Head of AI Research',
    bio: 'PhD in Computer Science, published researcher in deep learning and natural language processing with 12 years industry experience.',
    expertise: ['Deep Learning', 'NLP', 'Research Methodologies'],
  },
  {
    name: 'Priya Patel',
    role: 'VP, Training & Consultancy',
    bio: 'Certified training specialist with experience training thousands of professionals across fintech, banking, and technology sectors.',
    expertise: ['Training Design', 'Change Management', 'Program Development'],
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4" />
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
                    <Linkedin className="h-4 w-4" />
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
              href="mailto:careers@datanyansa.com"
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
