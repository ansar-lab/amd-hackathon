import { motion } from "framer-motion";
import { ScanEye, Database, Brain, Activity } from "lucide-react";

const steps = [
  {
    icon: ScanEye,
    title: "Leaf Image Analysis",
    desc: "Computer vision scans crop images to identify diseases and deficiencies in real time.",
  },
  {
    icon: Database,
    title: "Data Fusion",
    desc: "Soil, weather, and IoT sensor data are combined for a holistic farm view.",
  },
  {
    icon: Brain,
    title: "AI Predictions",
    desc: "Machine learning models generate accurate yield forecasts and actionable recommendations.",
  },
  {
    icon: Activity,
    title: "Real-Time Decisions",
    desc: "Instant, data-driven support helps farmers act before problems escalate.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Solution</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            How <span className="text-gradient-primary">AgriVision AI</span> Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="flex gap-5 glass-card p-6 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
