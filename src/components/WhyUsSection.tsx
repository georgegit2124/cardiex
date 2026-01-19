import { motion } from "framer-motion";
import { CheckCircle, Clock, ShieldCheck, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Εξουσιοδοτημένο Castrol Service",
    description: "Χρησιμοποιούμε αποκλειστικά γνήσια λιπαντικά Castrol για μέγιστη απόδοση και προστασία του κινητήρα.",
  },
  {
    icon: ThumbsUp,
    title: "Υψηλή Ικανοποίηση Πελατών",
    description: "Με βαθμολογία 4.9/5 στο Google, η ποιότητα των υπηρεσιών μας μιλάει από μόνη της.",
  },
  {
    icon: Clock,
    title: "Άμεση Εξυπηρέτηση",
    description: "Σεβόμαστε τον χρόνο σας με γρήγορη διάγνωση και αποτελεσματική επισκευή.",
  },
  {
    icon: CheckCircle,
    title: "Εγγύηση Εργασιών",
    description: "Όλες οι εργασίες μας συνοδεύονται από εγγύηση για την απόλυτη δική σας ασφάλεια.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-primary font-semibold tracking-wide">
              <span className="h-px w-8 bg-primary" />
              ΓΙΑΤΙ ΝΑ ΜΑΣ ΕΠΙΛΕΞΕΤΕ
            </span>
            <h2 className="mb-6 font-display text-4xl text-hero-text md:text-5xl">
              Η ΕΜΠΕΙΡΙΑ ΚΑΙ{" "}
              <span className="text-primary">Η ΠΟΙΟΤΗΤΑ</span>{" "}
              ΚΑΝΟΥΝ ΤΗ ΔΙΑΦΟΡΑ
            </h2>
            <p className="text-lg text-hero-muted">
              Με πάνω από 15 χρόνια εμπειρίας στον χώρο του αυτοκινήτου, 
              το Castrol Service Cardiex αποτελεί συνώνυμο της αξιοπιστίας 
              και της επαγγελματικής εξυπηρέτησης στα Γλυκά Νερά.
            </p>
          </motion.div>

          {/* Right - Reasons Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-hero-muted/20 bg-section-dark/50 p-6 backdrop-blur-sm"
              >
                <reason.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 font-display text-xl text-hero-text">
                  {reason.title}
                </h3>
                <p className="text-sm text-hero-muted">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
