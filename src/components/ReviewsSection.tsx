import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Γιώργος Π.",
    rating: 5,
    text: "Εξαιρετική εξυπηρέτηση! Έφτιαξαν το πρόβλημα στο αυτοκίνητό μου γρήγορα και με πολύ λογική τιμή. Τους συστήνω ανεπιφύλακτα.",
    date: "2 εβδομάδες πριν",
  },
  {
    name: "Μαρία Κ.",
    rating: 5,
    text: "Πολύ επαγγελματίες και ειλικρινείς. Μου εξήγησαν αναλυτικά τι χρειαζόταν το αυτοκίνητό μου χωρίς να προσπαθήσουν να μου πουλήσουν περιττές υπηρεσίες.",
    date: "1 μήνα πριν",
  },
  {
    name: "Νίκος Α.",
    rating: 5,
    text: "Το καλύτερο συνεργείο στην περιοχή! Χρησιμοποιώ τις υπηρεσίες τους εδώ και χρόνια. Πάντα άψογοι.",
    date: "3 εβδομάδες πριν",
  },
  {
    name: "Ελένη Δ.",
    rating: 5,
    text: "Άμεση εξυπηρέτηση, καθαρό χώρο και πολύ καλές τιμές. Η αλλαγή λαδιών έγινε σε χρόνο ρεκόρ!",
    date: "1 εβδομάδα πριν",
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-primary font-semibold tracking-wide">
            <span className="h-px w-8 bg-primary" />
            ΑΞΙΟΛΟΓΗΣΕΙΣ ΠΕΛΑΤΩΝ
            <span className="h-px w-8 bg-primary" />
          </span>
          <h2 className="font-display text-4xl text-foreground md:text-5xl">
            ΤΙ ΛΕΝΕ ΟΙ ΠΕΛΑΤΕΣ ΜΑΣ
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">(62 αξιολογήσεις)</span>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl bg-card p-6 card-shadow"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
              <div className="mb-4 flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 text-card-foreground">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-card-foreground">
                  {review.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="https://www.google.com/maps/place/Castrol+Service+Cardiex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            Δείτε όλες τις αξιολογήσεις στο Google Maps
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
