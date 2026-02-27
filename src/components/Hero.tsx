import { motion } from "framer-motion";
import { scrollToBooking } from "@/utils/scroll";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-28 hero-vignette"
      aria-label="Hero"
    >
      {/* Ambient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "clamp(280px, 45vw, 640px)",
            height: "clamp(280px, 45vw, 640px)",
            top: "-8%",
            left: "-6%",
            background:
              "radial-gradient(circle, hsl(0 0% 100% / 0.28) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "clamp(200px, 34vw, 480px)",
            height: "clamp(200px, 34vw, 480px)",
            bottom: "4%",
            right: "-4%",
            background:
              "radial-gradient(circle, hsl(207 47% 20% / 0.10) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

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
            style={{ lineHeight: "1.08" }}
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
            <motion.button
              onClick={scrollToBooking}
              className="btn-primary text-lg px-8 py-4"
              aria-label="Book a 15-minute obligation-free call"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              Book a 15-minute obligation-free call
            </motion.button>
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
