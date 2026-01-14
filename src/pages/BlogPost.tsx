import { useParams, Link, useNavigate } from 'react-router-dom';
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
  Linkedin
} from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <main className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="cta">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2);
  const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Parse markdown-like content to HTML
  const parseContent = (content: string) => {
    return content
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-10 mb-4 text-foreground">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-8 mb-3 text-foreground">$1</h3>')
      .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold mt-6 mb-2 text-foreground">$1</h4>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(/^- (.+)$/gm, '<li class="ml-6 mb-1 text-muted-foreground list-disc">$1</li>')
      .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-4 leading-relaxed">');
  };

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-energy-navy via-energy-navy/90 to-energy-navy/70" />
        </div>
        
        <div className="container-custom relative z-10 py-12">
          <button 
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
          
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{post.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/70 text-sm">
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

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: parseContent(post.content) }}
              />
              
              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share this article
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <div className="card-elevated p-6">
                  <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-muted-foreground">Digital Marketing Expert</p>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="card-elevated p-6">
                    <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map(relatedPost => (
                        <Link 
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title}
                              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">{relatedPost.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="card-elevated p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                  <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let our experts help you implement these strategies for your business.
                  </p>
                  <Link to="/contact">
                    <Button variant="cta" size="sm" className="w-full">
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Posts Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">More from Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherPosts.map(otherPost => (
              <Link 
                key={otherPost.id}
                to={`/blog/${otherPost.id}`}
                className="card-elevated overflow-hidden card-hover group"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={otherPost.image} 
                    alt={otherPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary">{otherPost.category}</span>
                  <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {otherPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{otherPost.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                View All Posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;