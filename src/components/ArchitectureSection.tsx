import { motion } from "framer-motion";
import { Camera, Cpu, Brain, Monitor, ArrowRight } from "lucide-react";

const nodes = [
  { icon: Camera, label: "Sensors & Cameras", sub: "Data Collection" },
  { icon: Cpu, label: "Edge Device", sub: "AMD Ryzen" },
  { icon: Brain, label: "AI Models", sub: "Inference & Prediction" },
  { icon: Monitor, label: "Dashboard", sub: "Web & Mobile" },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="section-padding bg-grid relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Architecture</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            System <span className="text-gradient-primary">Architecture</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {nodes.map((n, i) => (
            <motion.div
              key={n.label}
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="glass-card p-6 flex flex-col items-center text-center min-w-[160px] hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <n.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-sm">{n.label}</h4>
                <span className="text-xs text-muted-foreground mt-1">{n.sub}</span>
              </div>
              {i < nodes.length - 1 && (
                <ArrowRight className="w-6 h-6 text-primary/50 mx-3 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
