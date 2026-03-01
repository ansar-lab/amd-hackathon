import { motion } from "framer-motion";
import { AlertTriangle, CloudRain, TrendingDown, Thermometer } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Late Disease Detection",
    desc: "Crop diseases go unnoticed until visible damage reduces yield significantly.",
  },
  {
    icon: TrendingDown,
    title: "Unpredictable Yields",
    desc: "Lack of data-driven forecasting leads to poor planning and financial loss.",
  },
  {
    icon: CloudRain,
    title: "Resource Waste",
    desc: "Excess water and fertilizer usage increases costs and harms the environment.",
  },
  {
    icon: Thermometer,
    title: "Climate Uncertainty",
    desc: "Changing weather patterns make traditional farming knowledge unreliable.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-grid relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">The Challenge</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Farming Faces <span className="text-gradient-primary">Critical Challenges</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <p.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
