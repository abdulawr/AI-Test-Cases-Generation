import { Button } from '@/components/ui/button';
import { Rocket, PlayCircle, Shield, Clock, Users, TrendingUp } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security'
    },
    {
      icon: Clock,
      title: 'Fast',
      description: 'Generate tests in seconds'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Team-friendly features'
    },
    {
      icon: TrendingUp,
      title: 'Scalable',
      description: 'Grows with your needs'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Testing Process?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join the future of software testing with AI-powered test case generation. 
            Start creating professional test cases in minutes, not hours.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-white/10 hover:bg-white hover:text-primary px-8"
              onClick={() => scrollToSection('workflow')}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 pt-8 border-t border-white/20">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                <benefit.icon className="h-12 w-12 mb-3 md:mb-0 md:mr-4 text-white/80" />
                <div>
                  <h6 className="font-bold text-lg">{benefit.title}</h6>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;