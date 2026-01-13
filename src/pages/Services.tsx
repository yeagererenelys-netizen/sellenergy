import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Share2, 
  Globe, 
  BarChart3, 
  Users, 
  Palette,
  Search,
  MessageSquare,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'Amazon Account Management',
    description: 'Complete A-to-Z management of your Amazon seller account. From product listing optimization to inventory management, we handle everything.',
    benefits: [
      'Product listing optimization & A+ content',
      'Inventory & order management',
      'Amazon PPC campaign management',
      'Brand registry & protection',
      'Review management & customer support',
    ],
    color: 'primary',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns that build brand awareness, drive engagement, and convert followers into customers.',
    benefits: [
      'Content creation & scheduling',
      'Community management',
      'Paid social advertising',
      'Influencer partnerships',
      'Analytics & reporting',
    ],
    color: 'secondary',
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Modern, responsive websites and e-commerce stores that are optimized for conversions and user experience.',
    benefits: [
      'Custom responsive design',
      'E-commerce integration',
      'SEO-optimized structure',
      'Fast loading speeds',
      'CMS implementation',
    ],
    color: 'primary',
  },
  {
    icon: BarChart3,
    title: 'Google & Meta Ads',
    description: 'High-converting paid advertising campaigns with optimized targeting, bidding strategies, and continuous optimization.',
    benefits: [
      'Google Search & Display Ads',
      'Facebook & Instagram Ads',
      'Retargeting campaigns',
      'A/B testing & optimization',
      'ROI tracking & reporting',
    ],
    color: 'secondary',
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    description: 'Connect with the right influencers to amplify your brand message and reach your target audience authentically.',
    benefits: [
      'Influencer identification & vetting',
      'Campaign strategy & execution',
      'Content collaboration',
      'Performance tracking',
      'Long-term partnership building',
    ],
    color: 'primary',
  },
  {
    icon: Palette,
    title: 'Brand Strategy & Design',
    description: 'Build a memorable brand identity that resonates with your audience and stands out in the market.',
    benefits: [
      'Logo & visual identity design',
      'Brand guidelines development',
      'Packaging design',
      'Marketing collateral',
      'Brand positioning strategy',
    ],
    color: 'secondary',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Improve your organic visibility and drive qualified traffic with our comprehensive SEO strategies.',
    benefits: [
      'Technical SEO audit',
      'On-page optimization',
      'Content strategy',
      'Link building',
      'Local SEO optimization',
    ],
    color: 'primary',
  },
  {
    icon: MessageSquare,
    title: 'Content Marketing',
    description: 'Create valuable content that attracts, engages, and converts your target audience.',
    benefits: [
      'Blog writing & management',
      'Video content production',
      'Email marketing campaigns',
      'Infographics & visuals',
      'Content calendar planning',
    ],
    color: 'secondary',
  },
];

const Services = () => {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to accelerate your business growth and maximize ROI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-elevated p-8 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  service.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                }`}>
                  <service.icon className={`w-7 h-7 ${
                    service.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        service.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`} />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button variant={service.color === 'primary' ? 'cta' : 'ctaAccent'}>
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            We understand every business is unique. Let's discuss your specific needs and create a tailored strategy for your growth.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
