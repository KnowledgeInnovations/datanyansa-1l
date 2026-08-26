import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { PlayCircle, Calendar } from 'lucide-react'

interface Video {
  id: number
  title: string
  description: string
  date: string
  duration: string
  category: string
  youtubeId: string
  views: string
}

const videos: Video[] = [
  {
    id: 1,
    title: 'AI in Finance: A Practical Guide',
    description: 'Learn how to implement AI solutions in financial services. Dr. Kumar discusses practical strategies and real-world applications.',
    date: 'March 2024',
    duration: '28:45',
    category: 'AI & Finance',
    youtubeId: 'dQw4w9WgXcQ',
    views: '15.2K',
  },
  {
    id: 2,
    title: 'Understanding Blockchain and Cryptocurrency',
    description: 'A beginner-friendly introduction to blockchain technology, cryptocurrencies, and decentralized finance.',
    date: 'February 2024',
    duration: '35:20',
    category: 'Blockchain',
    youtubeId: 'dQw4w9WgXcQ',
    views: '22.5K',
  },
  {
    id: 3,
    title: 'Building Data-Driven Organizations',
    description: 'Sarah Chen shares insights on creating a data culture and leveraging analytics for business growth.',
    date: 'January 2024',
    duration: '42:15',
    category: 'Data & Strategy',
    youtubeId: 'dQw4w9WgXcQ',
    views: '18.7K',
  },
  {
    id: 4,
    title: 'Machine Learning Deployment Best Practices',
    description: 'Dr. Zhang covers production deployment of ML models, monitoring, and scaling considerations.',
    date: 'December 2023',
    duration: '31:50',
    category: 'Machine Learning',
    youtubeId: 'dQw4w9WgXcQ',
    views: '12.3K',
  },
  {
    id: 5,
    title: 'Natural Language Processing Applications',
    description: 'Dr. Thompson explores NLP use cases in finance, customer service, and sentiment analysis.',
    date: 'November 2023',
    duration: '26:40',
    category: 'NLP',
    youtubeId: 'dQw4w9WgXcQ',
    views: '10.8K',
  },
  {
    id: 6,
    title: 'Regulatory Compliance in Fintech',
    description: 'Priya Patel discusses navigating compliance requirements in financial technology.',
    date: 'October 2023',
    duration: '33:25',
    category: 'Compliance',
    youtubeId: 'dQw4w9WgXcQ',
    views: '9.4K',
  },
]

const categories = ['All', 'AI & Finance', 'Blockchain', 'Data & Strategy', 'Machine Learning', 'NLP', 'Compliance']

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Videos
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Educational content and thought leadership from our team on YouTube
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background border border-border text-foreground hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <article
                key={video.id}
                className="border border-border rounded-xl overflow-hidden bg-card hover:border-primary hover:shadow-lg transition-all"
              >
                {/* Thumbnail */}
                <Link
                  href={`https://youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-48 bg-black overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/60 text-white text-xs font-medium">
                    {video.duration}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 rounded bg-primary/10 text-primary text-xs font-semibold">
                      {video.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    <Link
                      href={`https://youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {video.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-foreground/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {video.date}
                    </div>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Subscribe */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Subscribe to Our YouTube Channel
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Don&apos;t miss new content on AI, fintech, data science, and technology trends
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Visit Our Channel
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
