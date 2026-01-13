import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  User,
  Tag
} from 'lucide-react';

const blogPosts = [
  {
    id: 'optimize-amazon-ads',
    title: 'How to Optimize Amazon Ads for Maximum ROI',
    excerpt: 'Learn the proven strategies our team uses to manage ₹5+ crore in ad spend with exceptional returns. From keyword research to bid optimization.',
    category: 'Amazon Marketing',
    author: 'Kunal Agarwal',
    date: 'January 10, 2026',
    readTime: '8 min read',
    image: 'amazon',
  },
  {
    id: 'social-media-tips-small-business',
    title: 'Social Media Tips for Small Businesses in 2026',
    excerpt: 'Discover actionable social media strategies that helped our clients grow from 2,000 to 50,000+ followers organically.',
    category: 'Social Media',
    author: 'SellEnergy Team',
    date: 'January 5, 2026',
    readTime: '6 min read',
    image: 'social',
  },
  {
    id: 'ecommerce-trends-india',
    title: 'E-commerce Trends to Watch in India',
    excerpt: 'The Indian e-commerce landscape is evolving rapidly. Here are the key trends that will shape online selling in the coming year.',
    category: 'E-commerce',
    author: 'Kunal Agarwal',
    date: 'December 28, 2025',
    readTime: '10 min read',
    image: 'ecommerce',
  },
  {
    id: 'google-ads-beginners',
    title: 'Google Ads for Beginners: A Complete Guide',
    excerpt: 'New to Google Ads? This comprehensive guide covers everything from campaign setup to optimization and tracking.',
    category: 'Paid Advertising',
    author: 'SellEnergy Team',
    date: 'December 20, 2025',
    readTime: '12 min read',
    image: 'google',
  },
  {
    id: 'brand-building-digital-age',
    title: 'Building a Strong Brand in the Digital Age',
    excerpt: 'Your brand is more than just a logo. Learn how to create a memorable brand identity that resonates with your target audience.',
    category: 'Branding',
    author: 'Kunal Agarwal',
    date: 'December 15, 2025',
    readTime: '7 min read',
    image: 'brand',
  },
  {
    id: 'content-marketing-strategy',
    title: 'Creating a Content Marketing Strategy That Works',
    excerpt: 'Content is king, but only when done right. Here\'s how to create a content strategy that attracts and converts your ideal customers.',
    category: 'Content Marketing',
    author: 'SellEnergy Team',
    date: 'December 10, 2025',
    readTime: '9 min read',
    image: 'content',
  },
];

const categories = ['All', 'Amazon Marketing', 'Social Media', 'E-commerce', 'Paid Advertising', 'Branding', 'Content Marketing'];

const Blog = () => {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Insights, tips, and strategies to help you succeed in digital marketing
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="card-elevated overflow-hidden card-hover animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl opacity-50">📊</span>
                </div>
                
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                  </div>
                  
                  {/* Title */}
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  {/* Read More Link */}
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm mt-4 hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest digital marketing insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
