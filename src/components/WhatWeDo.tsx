import { motion } from "framer-motion";
import { Search, MessageSquare, Layers, GraduationCap } from "lucide-react";
import type { Service } from "@/types";

const services: Service[] = [
  {
    icon: Search,
    title: "Automation opportunities",
    description: "Identify bottlenecks and quick wins",
  },
  {
    icon: MessageSquare,
    title: "ChatGPT implementation",
    description: "Instructions and prompt setup",
  },
  {
    icon: Layers,
    title: "Reusable systems",
    description: "Templates, SOPs, and scalable processes",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Teach the skills to use, maintain, and improve your systems",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-12 md:mb-16"
        >
          What we do
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto section-luster">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p
                    className="text-muted-foreground"
                    style={{ lineHeight: "1.5" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
