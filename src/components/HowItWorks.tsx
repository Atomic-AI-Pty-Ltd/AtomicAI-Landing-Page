import { motion } from "framer-motion";
import { CalendarCheck2, ClipboardList } from "lucide-react";
import type { Step } from "@/types";

const steps: Step[] = [
  {
    icon: CalendarCheck2,
    step: "Step 1",
    description: "Choose a time that suits you (booking calendar below)",
  },
  {
    icon: ClipboardList,
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto section-luster">
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
                <motion.div
                  className="w-12 h-12 rounded-xl icon-glossy flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                  whileHover={{ scale: 1.12, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 340, damping: 20 }}
                >
                  <item.icon className="w-5 h-5 text-primary icon-transition" strokeWidth={1.8} />
                </motion.div>
                <div>
                  <span className="step-badge">
                    {item.step}
                  </span>
                  <p
                    className="text-foreground mt-2.5 text-lg"
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
