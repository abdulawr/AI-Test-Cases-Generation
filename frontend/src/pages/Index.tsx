import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WorkflowSection from '@/components/WorkflowSection';
import FeaturesSection from '@/components/FeaturesSection';
import AIModelsSection from '@/components/AIModelsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestManagementSection from '@/components/TestManagementSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <AIModelsSection />
      <HowItWorksSection />
      <TestManagementSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
