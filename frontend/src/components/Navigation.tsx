import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Bot } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-primary shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-white animate-pulse-slow" />
            <span className="text-xl font-bold text-white">AI TestGen</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('workflow')}
              className="text-white/90 hover:text-white transition-colors"
            >
              Workflow
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-white/90 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white transition-colors"
            >
              Contact
            </button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-sm border-t border-white/20">
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white/90 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('workflow')}
                className="text-white/90 hover:text-white transition-colors text-left"
              >
                Workflow
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-white/90 hover:text-white transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/90 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary w-fit">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;