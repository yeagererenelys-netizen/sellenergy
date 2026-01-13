import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Heart, 
  Lightbulb, 
  Users, 
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Tailored Strategies',
    description: 'We don\'t believe in one-size-fits-all. Every strategy is customized to your unique business needs and goals.',
  },
  {
    icon: Heart,
    title: 'Exceptional Service',
    description: 'Your success is our priority. We go above and beyond to ensure you receive outstanding support and results.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven',
    description: 'We stay ahead of industry trends and leverage cutting-edge tools to give you a competitive advantage.',
  },
  {
    icon: Users,
    title: 'Transparent Partnership',
    description: 'Open communication and honest reporting. You\'ll always know exactly what\'s happening with your campaigns.',
  },
];

const milestones = [
  { year: '2019', title: 'Founded', description: 'Started with a vision to help micro businesses thrive digitally' },
  { year: '2020', title: '25+ Clients', description: 'Expanded services and crossed 25 satisfied clients' },
  { year: '2022', title: '₹2 Cr Ad Spend', description: 'Managed over ₹2 crore in advertising spend' },
  { year: '2024', title: '100+ Clients', description: 'Serving 100+ businesses across India with 95% retention' },
];

const About = () => {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">SellEnergy</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A young, dynamic startup in Agra helping micro businesses thrive in the digital economy.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SellEnergy was founded with a simple yet powerful mission: to empower small and micro businesses 
                  with the same digital marketing capabilities that big corporations enjoy.
                </p>
                <p>
                  Based in the historic city of Agra, we've grown from a small team of passionate marketers 
                  to a full-service digital agency serving clients across India. Our journey has been marked 
                  by continuous learning, innovation, and an unwavering commitment to our clients' success.
                </p>
                <p>
                  Today, we've managed over ₹5 crore in advertising spend, helped 100+ businesses scale their 
                  operations, and maintained an impressive 95% client retention rate—a testament to the 
                  value we deliver.
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8">
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Work With Us
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="card-elevated p-8 animate-fade-in-up delay-200">
              <h3 className="text-xl font-bold mb-6">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {milestone.year.slice(-2)}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-primary/20 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h4 className="font-semibold">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text-accent">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-elevated p-6 text-center card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Leader</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The visionary behind SellEnergy
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="card-elevated p-8 text-center card-hover animate-fade-in-up">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">KA</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Kunal Agarwal</h3>
              <p className="text-primary font-medium mb-4">Founder & CEO</p>
              <p className="text-muted-foreground text-sm">
                A passionate digital marketing expert with 5+ years of experience in e-commerce 
                and social media marketing. Kunal founded SellEnergy with the vision of making 
                premium digital marketing accessible to businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Grow Together
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Ready to partner with an agency that truly cares about your success? 
            Let's discuss how we can help your business thrive.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
