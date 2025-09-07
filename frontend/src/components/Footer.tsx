import { Bot, Heart } from 'lucide-react';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const platformLinks = [
    { name: 'Features', action: () => scrollToSection('features') },
    { name: 'Workflow', action: () => scrollToSection('workflow') },
    { name: 'API', action: () => {} },
    { name: 'Pricing', action: () => {} },
    { name: 'Enterprise', action: () => {} }
  ];

  const companyLinks = [
    { name: 'About Us', action: () => {} },
    { name: 'Contact', action: () => scrollToSection('contact') },
    { name: 'Careers', action: () => {} },
    { name: 'Blog', action: () => {} },
    { name: 'News', action: () => {} }
  ];

  const supportLinks = [
    { name: 'Documentation', action: () => {} },
    { name: 'Help Center', action: () => {} },
    { name: 'Community', action: () => {} },
    { name: 'Tutorials', action: () => {} },
    { name: 'Status', action: () => {} }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', action: () => {} },
    { name: 'Terms of Service', action: () => {} },
    { name: 'Security', action: () => {} },
    { name: 'GDPR', action: () => {} },
    { name: 'Cookies', action: () => {} }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-primary animate-pulse-slow" />
              <span className="text-2xl font-bold">AI TestGen</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionizing software testing through AI-powered test case generation 
              and comprehensive management solutions.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h6 className="font-bold mb-4">Platform</h6>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h6 className="font-bold mb-4">Company</h6>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h6 className="font-bold mb-4">Support</h6>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2025 AI TestGen. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center">
            <Heart className="h-4 w-4 text-red-500 mr-2" />
            Built with research excellence and innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;