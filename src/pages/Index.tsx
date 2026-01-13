import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Award, 
  ShoppingCart, 
  Share2, 
  Globe, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock
} from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const stats = [
  { value: '₹5+ Cr', label: 'Ad Spend Managed', icon: TrendingUp },
  { value: '100+', label: 'Clients Served', icon: Users },
  { value: '95%', label: 'Client Retention', icon: Award },
  { value: '5+', label: 'Years Experience', icon: Clock },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Data-Driven Strategies',
    description: 'We leverage analytics and insights to maximize your ROI on every campaign.',
  },
  {
    icon: Target,
    title: 'Tailored Solutions',
    description: 'Custom strategies designed specifically for your business goals and target audience.',
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    description: 'Successfully scaled 100+ businesses with measurable, sustainable growth.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 account management with a team that treats your success as their own.',
  },
];

const services = [
  {
    icon: ShoppingCart,
    title: 'Amazon Account Management',
    description: 'Complete A-to-Z management of your Amazon seller account for maximum visibility and sales.',
    color: 'primary',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns that build brand awareness and drive engagement.',
    color: 'secondary',
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Modern, responsive websites that convert visitors into loyal customers.',
    color: 'primary',
  },
  {
    icon: BarChart3,
    title: 'Google & Meta Ads',
    description: 'High-converting paid advertising campaigns with optimized targeting and spend.',
    color: 'secondary',
  },
];

const Index = () => {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Digital marketing workspace" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-energy-navy via-energy-navy/90 to-energy-navy/70" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-300" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">E-commerce & Digital Marketing Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
              Scale Your Business with{' '}
              <span className="gradient-text">Data-Driven</span>{' '}
              Strategies
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up delay-100">
              Managed <span className="text-primary font-semibold">₹5+ Crore</span> in Ads | 
              <span className="text-secondary font-semibold"> 95% Retention</span> | 
              <span className="text-primary font-semibold"> 5+ Years Experience</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Link to="/contact">
                <Button variant="cta" size="xl" className="group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
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

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">SellEnergy</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              We're not just another agency. We're your growth partners committed to delivering measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated p-6 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive digital solutions to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated p-8 card-hover animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  <service.icon className={`w-7 h-7 ${
                    service.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="cta" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join 100+ businesses that trust SellEnergy to drive their digital growth. 
            Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/clients">
              <Button variant="heroOutline" size="xl">
                See Client Results
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
