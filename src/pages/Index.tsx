import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ImpactSection from "@/components/ImpactSection";
import AdvantageSection from "@/components/AdvantageSection";
import FooterSection from "@/components/FooterSection";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <div className="min-h-screen bg-background">
      {loading && <LoadingScreen onComplete={handleComplete} />}
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <TechStackSection />
      <ArchitectureSection />
      <ImpactSection />
      <AdvantageSection />
      <FooterSection />
    </div>
  );
};

export default Index;
