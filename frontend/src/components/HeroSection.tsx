import { Button } from '@/components/ui/button';
import { Upload, Brain, Settings, CheckSquare } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section text-white py-20 min-h-screen flex items-center">
      <div className="floating-elements"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revolutionize Software Testing with{' '}
              <span className="icon-gradient">AI</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Generate comprehensive test cases and management plans automatically from your 
              Software Requirement Specifications using cutting-edge AI technology.
            </p>
            
            {/* Automation Flow Animation */}
            <div className="mb-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="flow-line"></div>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="flow-node">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm mt-2 block">Upload SRS</span>
                </div>
                <div className="text-center">
                  <div className="flow-node">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm mt-2 block">AI Process</span>
                </div>
                <div className="text-center">
                  <div className="flow-node">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm mt-2 block">Generate Tests</span>
                </div>
                <div className="text-center">
                  <div className="flow-node">
                    <CheckSquare className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm mt-2 block">Manage</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => scrollToSection('workflow')}
              >
                See How It Works
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-white/10 hover:bg-white hover:text-primary"
                onClick={() => scrollToSection('features')}
              >
                Explore Features
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <h3 className="text-3xl font-bold">6+</h3>
                <p className="text-white/70">AI Models</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">99%</h3>
                <p className="text-white/70">Accuracy</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold">80%</h3>
                <p className="text-white/70">Time Saved</p>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-slide-in-right">
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <Settings className="h-20 w-20 mx-auto mb-6 text-white/80 animate-rotate-slow" />
              <h4 className="text-2xl font-bold mb-4">Research-Backed Solution</h4>
              <p className="text-white/80 text-lg">
                Built on comprehensive comparative studies between AI-generated 
                and human-written test cases
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;