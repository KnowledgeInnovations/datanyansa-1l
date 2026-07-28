import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  type: 'webinar' | 'workshop' | 'conference'
  attendees: string
}

const events: Event[] = [
  {
    id: 1,
    title: 'AI in Finance: Strategy & Implementation',
    date: 'April 15, 2024',
    time: '2:00 PM - 4:00 PM EST',
    location: 'Virtual',
    description: 'A comprehensive workshop on implementing AI solutions in financial services',
    type: 'workshop',
    attendees: '150+',
  },
  {
    id: 2,
    title: 'Fintech Training Program Launch',
    date: 'April 22, 2024',
    time: '10:00 AM - 12:00 PM EST',
    location: 'Innovation Hub, CA',
    description: 'Announcement and overview of our new fintech training program curriculum',
    type: 'conference',
    attendees: '200+',
  },
  {
    id: 3,
    title: 'Blockchain & Smart Contracts Webinar',
    date: 'April 29, 2024',
    time: '1:00 PM - 2:00 PM EST',
    location: 'Virtual',
    description: 'Understanding blockchain technology and building with smart contracts',
    type: 'webinar',
    attendees: '300+',
  },
  {
    id: 4,
    title: 'Data-Driven Decision Making Workshop',
    date: 'May 6, 2024',
    time: '3:00 PM - 5:00 PM EST',
    location: 'Virtual',
    description: 'Practical techniques for building data-driven organizations',
    type: 'workshop',
    attendees: '120+',
  },
  {
    id: 5,
    title: 'AI Research Conference 2024',
    date: 'May 20-22, 2024',
    time: 'Full Day',
    location: 'San Francisco, CA',
    description: 'Annual conference showcasing latest AI research and practical applications',
    type: 'conference',
    attendees: '500+',
  },
  {
    id: 6,
    title: 'Machine Learning Deployment Webinar',
    date: 'June 3, 2024',
    time: '11:00 AM - 12:00 PM EST',
    location: 'Virtual',
    description: 'Best practices for deploying machine learning models to production',
    type: 'webinar',
    attendees: '250+',
  },
]

const typeColors = {
  webinar: 'bg-accent/10 text-accent',
  workshop: 'bg-primary/10 text-primary',
  conference: 'bg-secondary/10 text-secondary',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Join us for webinars, workshops, and conferences on AI, fintech, and data science
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="border border-border rounded-xl bg-card p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        typeColors[event.type]
                      }`}
                    >
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                  </div>

                  <div className="space-y-2 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-foreground/70 mb-4">{event.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-foreground/60">{event.time}</span>
                    </div>
                  </div>

                  <div className="md:col-span-1 flex md:justify-end">
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Register
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Contact us to discuss custom training, workshops, or speaking opportunities
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
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
