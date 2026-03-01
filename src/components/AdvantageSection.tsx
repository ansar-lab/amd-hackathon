import { motion } from "framer-motion";
import { Globe, Cpu, Server, Sprout, Users } from "lucide-react";

const advantages = [
  { icon: Globe, text: "Real-world agricultural impact" },
  { icon: Cpu, text: "AI + hardware optimization with AMD Ryzen" },
  { icon: Server, text: "Scalable architecture for any farm size" },
  { icon: Sprout, text: "Sustainability-focused solution" },
  { icon: Users, text: "Farmer-first design approach" },
];

const AdvantageSection = () => {
  return (
    <section className="section-padding bg-grid relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Why Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            Why AgriVision AI <span className="text-gradient-primary">Stands Out</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {advantages.map((a, i) => (
            <motion.div
              key={a.text}
              className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <a.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">{a.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
