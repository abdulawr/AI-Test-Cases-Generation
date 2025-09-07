import { Card, CardContent } from '@/components/ui/card';
import { 
  Upload, 
  Bot, 
  CheckSquare, 
  Download, 
  Award, 
  Users,
  FileText,
  FileCode,
  Table,
  Brain,
  Cpu,
  Check,
  Clock,
  X,
  Star
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Upload,
      title: 'Multiple Input Formats',
      description: 'Upload SRS documents in PDF, DOCX, TXT formats or input requirements manually through our rich-text editor.',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      animation: 'animate-float',
      supportIcons: [FileText, FileCode, FileText]
    },
    {
      icon: Bot,
      title: 'AI Model Selection',
      description: 'Choose from ChatGPT, Copilot, Grok, DeepSeek, Google Gemini, and Claude for optimal results.',
      bgColor: 'bg-green-500/10',
      iconColor: 'text-green-500',
      animation: 'animate-pulse-slow',
      supportIcons: [Brain, Cpu, Star]
    },
    {
      icon: CheckSquare,
      title: 'Complete Test Management',
      description: 'Generate test cases and comprehensive management plans with status tracking and collaboration features.',
      bgColor: 'bg-yellow-500/10',
      iconColor: 'text-yellow-500',
      animation: 'animate-rotate-slow',
      statusBadges: true
    },
    {
      icon: Download,
      title: 'Export Options',
      description: 'Export your test cases and plans in JSON, PDF, CSV formats for seamless integration with existing tools.',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
      animation: 'animate-pulse-slow',
      supportIcons: [FileCode, FileText, Table]
    },
    {
      icon: Award,
      title: 'Standards Compliance',
      description: 'Generate test cases following ISO/IEC/IEEE standards for professional testing environments.',
      bgColor: 'bg-red-500/10',
      iconColor: 'text-red-500',
      animation: 'animate-float',
      supportIcons: [Award, Star, Award]
    },
    {
      icon: Users,
      title: 'Collaborative Platform',
      description: 'Personal dashboards, commenting system, and team collaboration features for efficient test management.',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
      animation: 'animate-pulse-slow',
      supportIcons: [Users, Users, Users]
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 animate-fade-in-up">
            <Star className="inline-block mr-4 icon-gradient" />
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up">
            Everything you need for automated test case generation and management
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full card-hover border-0 shadow-lg">
              <CardContent className="text-center p-8">
                <div className={`${feature.bgColor} rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto glow-primary`}>
                  <feature.icon className={`h-10 w-10 ${feature.iconColor} ${feature.animation}`} />
                </div>
                <h5 className="text-xl font-bold mb-4">{feature.title}</h5>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                
                {/* Support Icons */}
                {feature.supportIcons && (
                  <div className="flex justify-center space-x-4">
                    {feature.supportIcons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className={`h-6 w-6 ${feature.iconColor}`} />
                    ))}
                  </div>
                )}
                
                {/* Status Badges */}
                {feature.statusBadges && (
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="status-badge status-passed">
                      <Check className="h-3 w-3 mr-1" />
                      Passed
                    </span>
                    <span className="status-badge status-pending">
                      <Clock className="h-3 w-3 mr-1" />
                      Pending
                    </span>
                    <span className="status-badge status-failed">
                      <X className="h-3 w-3 mr-1" />
                      Failed
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;