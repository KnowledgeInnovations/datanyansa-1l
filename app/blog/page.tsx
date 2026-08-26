import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Financial Services',
    excerpt: 'Explore how artificial intelligence is revolutionizing banking, payments, and investment management. A deep dive into emerging trends and practical applications.',
    author: 'Dr. Rajesh Kumar',
    date: 'March 15, 2024',
    category: 'AI & Fintech',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Building Data-Driven Organizations',
    excerpt: 'A comprehensive guide to establishing data culture within your enterprise. Learn strategies for overcoming common challenges and driving adoption across teams.',
    author: 'Sarah Chen',
    date: 'March 10, 2024',
    category: 'Strategy',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Understanding Blockchain and Smart Contracts',
    excerpt: 'Demystifying blockchain technology and its applications beyond cryptocurrency. Practical insights for enterprise adoption and implementation.',
    author: 'James Wilson',
    date: 'March 5, 2024',
    category: 'Blockchain',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Machine Learning Model Deployment Best Practices',
    excerpt: 'Production-ready guidance on deploying ML models at scale. From model validation to monitoring, we cover everything you need to know.',
    author: 'Dr. Amelia Zhang',
    date: 'February 28, 2024',
    category: 'Machine Learning',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Regulatory Compliance in Digital Banking',
    excerpt: 'Navigate the complex landscape of fintech regulations including KYC, AML, and data protection. Essential reading for compliance professionals.',
    author: 'Priya Patel',
    date: 'February 20, 2024',
    category: 'Compliance',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Natural Language Processing Applications in Finance',
    excerpt: 'Discover how NLP is transforming customer service, sentiment analysis, and market research in financial institutions.',
    author: 'Dr. Michael Thompson',
    date: 'February 15, 2024',
    category: 'NLP',
    readTime: '8 min read',
  },
]

const categories = ['All', 'AI & Fintech', 'Strategy', 'Blockchain', 'Machine Learning', 'Compliance', 'NLP']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & Research
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Thought leadership and deep dives into AI, fintech, data science, and technology trends
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

      {/* Blog Posts */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="border border-border rounded-xl overflow-hidden bg-card hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 flex-grow">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-foreground/70 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mb-4 space-y-2 text-xs text-foreground/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div>{post.readTime}</div>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-foreground/70 mb-8">
            Get the latest insights on AI, fintech, and data science delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
