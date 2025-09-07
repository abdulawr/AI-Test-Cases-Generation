import { Card, CardContent } from '@/components/ui/card';
import { Brain, Zap, Star, MessageSquare, Cpu, Flame } from 'lucide-react';

const AIModelsSection = () => {
  const aiModels = [
    {
      name: 'Claude',
      icon: Zap,
      color: 'text-yellow-500',
      animation: 'animate-pulse-slow'
    },
    {
      name: 'Google Gemini',
      icon: Star,
      color: 'text-yellow-500',
      animation: 'animate-float'
    },
    {
      name: 'ChatGPT',
      icon: MessageSquare,
      color: 'text-green-500',
      animation: 'animate-pulse-slow'
    },
    {
      name: 'DeepSeek',
      icon: Brain,
      color: 'text-blue-500',
      animation: 'animate-rotate-slow'
    },
    {
      name: 'Grok',
      icon: Flame,
      color: 'text-red-500',
      animation: 'animate-float'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            <Brain className="inline-block mr-4 icon-gradient" />
            Supported AI Models
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose from industry-leading AI models for optimal test case generation
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl">
            {aiModels.map((model, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-lg card-hover h-full">
                <CardContent className="py-8">
                  <model.icon className={`h-12 w-12 mx-auto mb-4 ${model.color} ${model.animation}`} />
                  <h6 className="font-bold text-sm">{model.name}</h6>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModelsSection;