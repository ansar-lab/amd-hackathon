import { motion } from "framer-motion";
import { TrendingUp, Droplets, DollarSign, Sprout, CloudSun } from "lucide-react";

const impacts = [
  { icon: TrendingUp, metric: "40%", label: "Increased Crop Productivity" },
  { icon: Droplets, metric: "30%", label: "Reduced Water Usage" },
  { icon: DollarSign, metric: "25%", label: "Lower Farming Costs" },
  { icon: Sprout, metric: "100%", label: "Eco-Friendly Agriculture" },
  { icon: CloudSun, metric: "3x", label: "Climate-Resilient Decisions" },
];

const ImpactSection = () => {
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
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Impact</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Real-World <span className="text-gradient-primary">Benefits</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-gradient-primary mb-1">{item.metric}</div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
