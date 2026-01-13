import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote, 
  TrendingUp, 
  Users, 
  Award, 
  ShoppingCart,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Kumar Electronics',
    role: 'Owner',
    image: 'RK',
    content: 'SellEnergy transformed our Amazon presence completely. Our sales increased by 300% within 6 months, and their team is always available to help. Best decision we made for our business!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Sharma Textiles',
    role: 'Marketing Head',
    image: 'PS',
    content: 'Their social media strategies are exceptional. We went from 2,000 followers to 50,000+ in just one year. The engagement and brand awareness they created is phenomenal.',
    rating: 5,
  },
  {
    name: 'Amit Gupta',
    company: 'Gupta Foods',
    role: 'CEO',
    image: 'AG',
    content: 'The ROI on our Google Ads campaigns has been incredible. SellEnergy\'s data-driven approach and constant optimization have made every rupee count. Highly recommended!',
    rating: 5,
  },
];

const stats = [
  { value: '₹5+ Cr', label: 'Ad Spend Managed', icon: TrendingUp },
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '95%', label: 'Client Retention', icon: Award },
  { value: '500+', label: 'Campaigns Launched', icon: ShoppingCart },
];

const clientLogos = [
  'Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E', 'Brand F', 'Brand G', 'Brand H'
];

const Clients = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Clients</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We're proud to have helped 100+ businesses achieve their digital growth goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it—hear from our satisfied clients
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-elevated p-8 md:p-12 relative animate-fade-in">
              <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
              
              <div className="text-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {testimonials[currentTestimonial].image}
                  </span>
                </div>
                
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-muted-foreground">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-center mb-8">
            More Success Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-elevated p-6 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-center mb-8">
            Trusted By Leading Brands
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientLogos.map((logo, index) => (
              <div
                key={logo}
                className="h-24 rounded-xl bg-muted flex items-center justify-center animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-muted-foreground font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Ready to become our next success story? Let's discuss how we can help 
            transform your business.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Clients;
