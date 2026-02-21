import { motion } from "framer-motion";
import { scrollToBooking } from "@/utils/scroll";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28 hero-vignette"
      aria-label="Hero"
    >
      <div className="container mx-auto px-6 text-center relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-shell max-w-4xl mx-auto"
        >
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 mx-auto"
            style={{ lineHeight: "1.08", fontFamily: "Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif" }}
          >
            Automation and AI Systems For Small Businesses.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            style={{ lineHeight: "1.5" }}
          >
            Optimise the use of ChatGPT in your business efficiently and
            effectively.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <button
              onClick={scrollToBooking}
              className="btn-primary text-lg px-8 py-4"
              aria-label="Book a 15-minute obligation-free call"
            >
              Book a 15-minute obligation-free call
            </button>
            <div
              className="text-muted-foreground text-sm md:text-base max-w-md space-y-1.5"
              style={{ lineHeight: "1.5" }}
            >
              <p>
                Stop wasting time in trial and error; we've made the mistakes
                so you don't have to!
              </p>
              <p>
                No prep required — we'll clarify what you need and suggest next
                steps.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
