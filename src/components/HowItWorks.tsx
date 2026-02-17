import { motion } from "framer-motion";
import { Calendar, FileText } from "lucide-react";
import type { Step } from "@/types";

const steps: Step[] = [
  {
    icon: Calendar,
    step: "Step 1",
    description: "Choose a time that suits you (booking calendar below)",
  },
  {
    icon: FileText,
    step: "Step 2",
    description:
      "Tell us a little about your business (form included in booking calendar)",
  },
];

const HowItWorks = () => {
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
          Two quick steps
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-glass group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {item.step}
                  </span>
                  <p
                    className="text-foreground mt-2 text-lg"
                    style={{ lineHeight: "1.5" }}
                  >
                    {item.description}
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

export default HowItWorks;