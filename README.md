# AtomicAI-Landing-Page
A refactored landing page for Atomic AI, based off the existing Lovable repository.

- Removed unused shadcn/ui components
- Removed unused dependencies (radix, react-query, etc.)
- Added TypeScript types for Service and Step for better type safety
- Extracted scrollToBooking to shared utility for reusable logic.
- Fixed vite.config.ts (remove lovable-tagger)
- Fixedtailwind.config.ts (ES module import)
- Added aria tags for 'book a call' buttons for screenreader compatibility
- Updated Favicon for site

