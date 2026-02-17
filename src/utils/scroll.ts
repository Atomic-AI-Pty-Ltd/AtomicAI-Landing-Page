/** Smoothly scrolls to an element by ID. Used across Header and Hero to scroll to booking section */

export const scrollToBooking = (): void => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };