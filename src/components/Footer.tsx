const Footer = () => {
  return (
    <footer className="py-14 md:py-16 footer-premium">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground/70 text-sm">
          © {new Date().getFullYear()} Atomic Business Advisers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;