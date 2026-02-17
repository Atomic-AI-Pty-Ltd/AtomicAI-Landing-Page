import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scrollToBooking } from "@/utils/scroll";
import atomicLogo from "@/assets/atomic-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 header-glass"
    >
      <div className="container mx-auto px-4 md:px-6 lg:pl-6 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" aria-label="Atomic AI Home">
          <img
            src={atomicLogo}
            alt="Atomic AI"
            className="h-[40px] md:h-[50px] lg:h-[56px] w-auto max-w-[240px] md:max-w-[300px] lg:max-w-[340px]"
          />
        </Link>
        <button
          onClick={scrollToBooking}
          className="btn-header"
          aria-label="Book a 15-minute call"
        >
          Book a 15-minute call
        </button>
      </div>
    </motion.header>
  );
};

export default Header;