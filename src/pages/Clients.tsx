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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Fashion Hub India',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    content: 'SellEnergy transformed our Amazon presence completely. Within 6 months, our sales increased by 400%. Their team is responsive, knowledgeable, and truly cares about our success.',
    rating: 5,
    results: '400% Sales Increase',
  },
  {
    name: 'Priya Sharma',
    company: 'Organic Beauty Co.',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    content: 'The social media strategy they developed for us was game-changing. We went from 2,000 to 50,000 followers in just 8 months, and more importantly, our engagement rates are through the roof.',
    rating: 5,
    results: '25x Follower Growth',
  },
  {
    name: 'Amit Patel',
    company: 'TechGear Solutions',
    role: 'E-commerce Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    content: 'Their expertise in Amazon PPC is unmatched. They reduced our ACoS from 45% to 18% while increasing sales by 250%. The ROI has been incredible.',
    rating: 5,
    results: '60% ACoS Reduction',
  },
  {
    name: 'Sneha Reddy',
    company: 'Home Decor Plus',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    content: 'As a small business owner, I was skeptical about hiring a marketing agency. SellEnergy proved me wrong. Their personalized approach and transparent reporting made all the difference.',
    rating: 5,
    results: '₹50L Revenue Generated',
  },
];

const stats = [
  { value: '₹5+ Cr', label: 'Ad Spend Managed', icon: TrendingUp },
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '95%', label: 'Client Retention', icon: Award },
  { value: '500+', label: 'Campaigns Launched', icon: ShoppingCart },
];

const clientLogos = [
  { 
    name: 'E-commerce Brand', 
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&q=80',
    stat: 'Revenue: ₹2+ Crore'
  },
  { 
    name: 'Fashion Retailer', 
    logo: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=200&q=80',
    stat: '300% Growth in Sales'
  },
  { 
    name: 'Tech Startup', 
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&q=80',
    stat: '50K+ Users Acquired'
  },
  { 
    name: 'Food & Beverage', 
    logo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80',
    stat: '₹1 Crore+ Sales'
  },
  { 
    name: 'Health & Wellness', 
    logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80',
    stat: '200% ROAS'
  },
  { 
    name: 'Home & Living', 
    logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&q=80',
    stat: '10K Orders/Month'
  },
  { 
    name: 'Beauty Brand', 
    logo: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80',
    stat: '500% ROI'
  },
  { 
    name: 'Electronics Store', 
    logo: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=200&q=80',
    stat: '₹3 Crore+ Revenue'
  },
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
            Our <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join 100+ businesses that have achieved remarkable growth with SellEnergy
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
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real results from real businesses
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-8 md:p-12 relative animate-fade-in">
              <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
              
              <div className="text-center relative z-10">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-6 ring-4 ring-primary/20"
                />
                
                <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
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
                
                <div className="mt-4 inline-block px-4 py-2 bg-secondary/10 rounded-full">
                  <span className="text-sm font-medium text-secondary">
                    Result: {testimonials[currentTestimonial].results}
                  </span>
                </div>
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
                      className={`h-2 rounded-full transition-all ${
                        index === currentTestimonial ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
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

      {/* Client Logos */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted By <span className="gradient-text-accent">Leading Brands</span>
            </h2>
            <p className="text-muted-foreground">
              We've helped businesses across various industries achieve exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {clientLogos.map((client, index) => (
              <Tooltip key={client.name}>
                <TooltipTrigger asChild>
                  <div
                    className="card-elevated overflow-hidden card-hover cursor-pointer animate-fade-in-up group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="h-32 md:h-40 overflow-hidden">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <p className="font-medium text-sm truncate">{client.name}</p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-card border-border p-3">
                  <div className="text-center">
                    <p className="font-semibold">{client.name}</p>
                    <p className="text-primary font-medium text-sm">{client.stat}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-center mb-8">
            More Success Stories
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-elevated p-6 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm truncate">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground truncate">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-4">"{testimonial.content}"</p>
                
                <div className="mt-3 pt-3 border-t border-border">
                  <span className="text-xs font-medium text-secondary">{testimonial.results}</span>
                </div>
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
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join 100+ businesses that trust SellEnergy to drive their digital growth.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Clients;