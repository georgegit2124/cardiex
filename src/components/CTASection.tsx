import { motion } from "framer-motion";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-primary font-semibold tracking-wide">
            <span className="h-px w-8 bg-primary" />
            ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
            <span className="h-px w-8 bg-primary" />
          </span>
          <h2 className="mb-6 font-display text-4xl text-hero-text md:text-5xl lg:text-6xl">
            ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
            <span className="block text-primary">ΣΗΜΕΡΑ</span>
          </h2>
          <p className="mb-8 text-lg text-hero-muted">
            Επικοινωνήστε μαζί μας τηλεφωνικά ή επισκεφθείτε το συνεργείο μας 
            για άμεση εξυπηρέτηση. Είμαστε εδώ για να φροντίσουμε το αυτοκίνητό σας.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a href="tel:+302106146792">
              <Button variant="cta" size="xl" className="group">
                <Phone className="h-5 w-5" />
                Καλέστε: 21 0614 6792
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a
              href="https://www.google.com/maps/place/Castrol+Service+Cardiex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroOutline" size="xl">
                <MapPin className="h-5 w-5" />
                Οδηγίες Πρόσβασης
              </Button>
            </a>
          </div>

          {/* Location Info */}
          <div className="rounded-xl border border-hero-muted/20 bg-section-dark/50 p-6 backdrop-blur-sm">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <h3 className="mb-2 font-display text-xl text-primary">ΔΙΕΥΘΥΝΣΗ</h3>
                <p className="text-hero-muted">
                  Άννας Μαρίας 33<br />
                  Γλυκά Νερά 153 54
                </p>
              </div>
              <div className="text-center">
                <h3 className="mb-2 font-display text-xl text-primary">ΩΡΑΡΙΟ</h3>
                <p className="text-hero-muted">
                  Δευτέρα - Παρασκευή<br />
                  08:00 - 17:00
                </p>
              </div>
              <div className="text-center">
                <h3 className="mb-2 font-display text-xl text-primary">ΤΗΛΕΦΩΝΟ</h3>
                <p className="text-hero-muted">
                  +30 21 0614 6792<br />
                  Για ραντεβού
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
