import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg font-display text-xl text-primary-foreground">
                <img src="src/components/6799B0C5-59C7-4F7B-A265-1FB185538205.png" alt="Cardiex Logo" className="h-10" />
              </div>
              <div>
                <span className="font-display text-lg">CASTROL SERVICE</span>
                <span className="block text-xs opacity-70">CARDIEX</span>
              </div>
            </div>
            <p className="text-sm opacity-70">
              Εξουσιοδοτημένο Castrol Service για επαγγελματική 
              συντήρηση και επισκευή αυτοκινήτων στα Γλυκά Νερά.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-lg">ΕΠΙΚΟΙΝΩΝΙΑ</h4>
            <div className="space-y-3">
              <a
                href="tel:+302106146792"
                className="flex items-center gap-3 text-sm opacity-70 transition-opacity hover:opacity-100"
              >
                <Phone className="h-4 w-4 text-primary" />
                +30 21 0614 6792
              </a>
              <div className="flex items-center gap-3 text-sm opacity-70">
                <Mail className="h-4 w-4 text-primary" />
                info@cardiex.gr
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="mb-4 font-display text-lg">ΔΙΕΥΘΥΝΣΗ</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Άννας Μαρίας 33<br />
                  Γλυκά Νερά 153 54<br />
                  Αθήνα, Ελλάδα
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-display text-lg">ΩΡΑΡΙΟ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm opacity-70">
                <Clock className="h-4 w-4 text-primary" />
                <span>
                  Δευτέρα - Παρασκευή<br />
                  08:00 - 17:00
                </span>
              </div>
              <p className="text-sm opacity-70">
                Σαββατοκύριακο: Κλειστά
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/20 pt-6 text-center text-sm opacity-60">
          <p>© {currentYear} Castrol Service Cardiex. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
