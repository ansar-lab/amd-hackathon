import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Smart farming landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase rounded-full text-primary glass-card-highlight">
            Powered by AMD Ryzen
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          AI-Powered Smart Farming{" "}
          <span className="text-gradient-primary">for a Sustainable Future</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Detect crop diseases early, optimize resources, and increase yield
          using AI powered by AMD Ryzen.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Button variant="hero" size="lg" className="text-base px-8 py-6 w-full">
            AI Crop Health Scanner
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6 w-full">
            Smart Farm Data Analyzer
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6 w-full">
            Profit Forecast Engine
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6 w-full">
            Direct Market Connect
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
