import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-section-dark/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg font-display text-xl text-primary-foreground">

            <img src="public/6799B0C5-59C7-4F7B-A265-1FB185538205.png" alt="Cardiex Logo" className="h-10" />

          </div>
          <div>
            <span className="font-display text-lg text-hero-text">CASTROL SERVICE</span>
            <span className="block text-xs text-hero-muted">CARDIEX</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm text-hero-muted transition-colors hover:text-hero-text"
          >
            Υπηρεσίες
          </button>
          <button
            onClick={() => scrollToSection("why-us")}
            className="text-sm text-hero-muted transition-colors hover:text-hero-text"
          >
            Γιατί Εμάς
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="text-sm text-hero-muted transition-colors hover:text-hero-text"
          >
            Κριτικές
          </button>
          <a href="tel:+302106146792">
            <Button variant="default" size="sm">
              <Phone className="h-4 w-4" />
              21 0614 6792
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-hero-text md:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-hero-muted/20 bg-section-dark md:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-hero-muted transition-colors hover:text-hero-text"
              >
                Υπηρεσίες
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-left text-hero-muted transition-colors hover:text-hero-text"
              >
                Γιατί Εμάς
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-left text-hero-muted transition-colors hover:text-hero-text"
              >
                Κριτικές
              </button>
              <a href="tel:+302106146792">
                <Button variant="default" className="w-full">
                  <Phone className="h-4 w-4" />
                  Καλέστε: 21 0614 6792
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
