import { motion } from "framer-motion";
import { Brain, Eye, Radio, Cloud, Cpu, CloudSun } from "lucide-react";

const techs = [
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Radio, label: "IoT Sensors" },
  { icon: CloudSun, label: "Weather APIs" },
  { icon: Cloud, label: "Edge & Cloud Computing" },
  { icon: Cpu, label: "AMD Ryzen Processing" },
];

const TechStackSection = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Technology</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Built on <span className="text-gradient-primary">Cutting-Edge Tech</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {techs.map((t, i) => (
            <motion.div
              key={t.label}
              className="glass-card p-5 flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <t.icon className="w-8 h-8 text-primary" />
              <span className="text-xs font-medium text-foreground/80">{t.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-card-highlight p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Cpu className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AgriVision AI leverages <span className="text-foreground font-semibold">AMD Ryzen's high-performance multi-core architecture</span> to enable fast AI inference, real-time analytics, and reliable decision-making at the edge.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
