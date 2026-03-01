import { motion } from "framer-motion";
import { Leaf, TrendingUp, Droplets, FlaskConical, Bug, Languages } from "lucide-react";

const features = [
  { icon: Leaf, title: "Crop Disease Detection", desc: "AI scans leaf images to identify diseases instantly with high accuracy." },
  { icon: TrendingUp, title: "Yield Prediction", desc: "Machine learning forecasts crop yield based on historical and real-time data." },
  { icon: Droplets, title: "Smart Irrigation", desc: "Data-driven watering advice reduces waste and optimizes water usage." },
  { icon: FlaskConical, title: "Fertilizer Optimization", desc: "AI recommends precise fertilizer amounts to reduce cost and environmental impact." },
  { icon: Bug, title: "Pest Risk Alerts", desc: "Early warning system detects pest threats before they cause crop damage." },
  { icon: Languages, title: "Multilingual Voice Assistant", desc: "Farmer-friendly voice interface accessible in multiple regional languages." },
];

const FeaturesSection = () => {
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
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Powerful <span className="text-gradient-primary">AI Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass-card p-6 group hover:border-primary/30 hover:glow-green-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
