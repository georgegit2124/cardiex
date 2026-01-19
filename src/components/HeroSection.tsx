import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroBg from "@/assets/hero-bg.jpg";
import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα μαζί σας.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Castrol Service Cardiex Workshop"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-section-dark/95 via-section-dark/85 to-section-dark/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 py-20">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-primary font-semibold tracking-wide">
              <span className="h-px w-8 bg-primary" />
              ΕΞΟΥΣΙΟΔΟΤΗΜΕΝΟ CASTROL SERVICE
            </span>
            <h1 className="mb-6 font-display text-5xl text-hero-text leading-tight md:text-6xl lg:text-7xl">
              ΑΞΙΟΠΙΣΤΗ ΦΡΟΝΤΙΔΑ
              <span className="block text-primary">ΓΙΑ ΤΟ ΑΥΤΟΚΙΝΗΤΟ ΣΑΣ</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-hero-muted">
              Το Castrol Service Cardiex προσφέρει επαγγελματικές υπηρεσίες 
              συντήρησης και επισκευής με εγγύηση ποιότητας. Εμπιστευτείτε τους 
              ειδικούς για το αυτοκίνητό σας.
            </p>

            {/* Quick Info */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <a
                href="tel:+302106146792"
                className="flex items-center gap-3 text-hero-text transition-colors hover:text-primary"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>21 0614 6792</span>
              </a>
              <div className="flex items-center gap-3 text-hero-muted">
                <Clock className="h-5 w-5 text-primary" />
                <span>Ανοιχτά έως 17:00</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-hero-muted">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span>Άννας Μαρίας 33, Γλυκά Νερά 153 54</span>
            </div>
          </motion.div>

          

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
