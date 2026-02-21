import { motion } from "framer-motion";

const Booking = () => {
  return (
    <section id="booking" className="py-20 md:py-24 lg:py-28 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-10 md:mb-12"
          style={{ fontFamily: "Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif" }}
        >
          Book a time that suits you
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto booking-shell"
        >
          <div className="booking-container">
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://outlook.office.com/book/AtomicAI1@atomicai.au/?ismsaljsauthenabled"
                width="100%"
                title="Book a call with Atomic Business Advisers"
                className="min-h-[600px] md:min-h-[900px] lg:min-h-[1000px] border-0"
                loading="lazy"
              />
            </div>
          </div>
          <p
            className="text-muted-foreground text-sm text-center mt-6"
            style={{ lineHeight: "1.5" }}
          >
            Your details are used only to contact you about your booking.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
