import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';

const blogPostsData: Record<string, {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
}> = {
  'optimize-amazon-ads': {
    title: 'How to Optimize Amazon Ads for Maximum ROI',
    category: 'Amazon Marketing',
    author: 'Kunal Agarwal',
    date: 'January 10, 2026',
    readTime: '8 min read',
    content: [
      'Amazon advertising has become one of the most powerful tools for sellers looking to increase visibility and drive sales. With over ₹5 crore in ad spend managed, we\'ve learned what works and what doesn\'t.',
      '## Understanding Amazon PPC Basics',
      'Before diving into optimization strategies, it\'s crucial to understand the three main types of Amazon ads: Sponsored Products, Sponsored Brands, and Sponsored Display. Each serves a different purpose in your marketing funnel.',
      '## Keyword Research is Everything',
      'The foundation of any successful Amazon ad campaign is thorough keyword research. Use a combination of Amazon\'s own search terms report, third-party tools, and competitor analysis to build a comprehensive keyword list.',
      '## Bid Optimization Strategies',
      'Start with automatic campaigns to gather data, then transition to manual campaigns with refined targeting. Adjust bids based on performance metrics like ACoS (Advertising Cost of Sale) and ROAS (Return on Ad Spend).',
      '## Negative Keywords Matter',
      'Regularly review your search term reports and add irrelevant or poor-performing keywords as negatives. This helps reduce wasted spend and improve overall campaign efficiency.',
      '## A/B Testing Your Creative',
      'For Sponsored Brands, test different headlines, logos, and product selections. Small changes can lead to significant improvements in click-through rates and conversions.',
      '## Conclusion',
      'Amazon advertising success comes from continuous testing, monitoring, and optimization. If you need help managing your Amazon ads, reach out to our team for a free consultation.',
    ],
  },
  'social-media-tips-small-business': {
    title: 'Social Media Tips for Small Businesses in 2026',
    category: 'Social Media',
    author: 'SellEnergy Team',
    date: 'January 5, 2026',
    readTime: '6 min read',
    content: [
      'Social media marketing doesn\'t have to be overwhelming for small businesses. With the right strategies, you can build a strong online presence without spending hours every day.',
      '## Choose the Right Platforms',
      'You don\'t need to be everywhere. Focus on 2-3 platforms where your target audience is most active. For B2B, LinkedIn might be your best bet. For consumer products, Instagram and Facebook are typically more effective.',
      '## Consistency Over Perfection',
      'It\'s better to post consistently good content than to post perfect content sporadically. Create a content calendar and stick to it.',
      '## Engage, Don\'t Just Broadcast',
      'Social media is a two-way conversation. Respond to comments, engage with other accounts in your niche, and create content that encourages interaction.',
      '## Leverage User-Generated Content',
      'Encourage your customers to share photos and reviews. UGC is authentic, free, and highly effective at building trust.',
      '## Track What Works',
      'Use platform analytics to understand what content resonates with your audience. Double down on what works and adjust what doesn\'t.',
      '## Conclusion',
      'Growing on social media takes time, but with consistent effort and the right strategy, small businesses can build engaged communities that drive real business results.',
    ],
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <main className="pt-16 md:pt-20">
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog">
              <Button variant="cta">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{post.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Share */}
                <div className="card-elevated p-6 mb-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share this article
                  </h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <div className="card-elevated p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let our experts help you implement these strategies for your business.
                  </p>
                  <Link to="/contact">
                    <Button variant="cta" className="w-full">
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Put these strategies into action with our expert team by your side.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
