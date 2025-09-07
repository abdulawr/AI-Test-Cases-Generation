import { Upload, Bot, Settings, CheckSquare, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Requirements',
      description: 'Upload your SRS document or input requirements manually through our editor',
      bgColor: 'bg-primary',
      showArrow: true
    },
    {
      icon: Bot,
      title: 'Select AI Model',
      description: 'Choose your preferred AI model and testing standards for generation',
      bgColor: 'bg-green-500',
      showArrow: true
    },
    {
      icon: Settings,
      title: 'AI Processing',
      description: 'AI analyzes your requirements and generates comprehensive test cases and plans',
      bgColor: 'bg-yellow-500',
      showArrow: true
    },
    {
      icon: CheckSquare,
      title: 'Manage & Export',
      description: 'Review, edit, and export your test cases in your preferred format',
      bgColor: 'bg-blue-500',
      showArrow: false
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            <Settings className="inline-block mr-4 icon-gradient" />
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple 4-step process to generate professional test cases
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className={`${step.bgColor} text-white rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto glow-primary shadow-glow`}>
                <step.icon className="h-10 w-10" />
              </div>
              <h5 className="text-xl font-bold mb-4">{step.title}</h5>
              <p className="text-muted-foreground">{step.description}</p>
              
              {/* Arrow for desktop */}
              {step.showArrow && (
                <div className="hidden lg:block absolute top-10 -right-4 text-primary">
                  <ArrowRight className="h-8 w-8 animate-bounce-gentle" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;