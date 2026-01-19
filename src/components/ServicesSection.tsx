import { motion } from "framer-motion";
import { 
  Droplets, 
  Gauge, 
  Wrench, 
  Car, 
  Thermometer, 
  Settings 
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Αλλαγή Λαδιών",
    description: "Αλλαγή λαδιών με γνήσια προϊόντα Castrol για μέγιστη προστασία του κινητήρα σας.",
  },
  {
    icon: Gauge,
    title: "Διαγνωστικός Έλεγχος",
    description: "Σύγχρονος εξοπλισμός διάγνωσης για εντοπισμό προβλημάτων με ακρίβεια.",
  },
  {
    icon: Wrench,
    title: "Γενική Συντήρηση",
    description: "Ολοκληρωμένη συντήρηση σύμφωνα με τις προδιαγραφές του κατασκευαστή.",
  },
  {
    icon: Car,
    title: "Επισκευές Αυτοκινήτων",
    description: "Επισκευές όλων των τύπων οχημάτων με εγγύηση εργασιών.",
  },
  {
    icon: Thermometer,
    title: "Σύστημα Ψύξης",
    description: "Έλεγχος και συντήρηση του συστήματος ψύξης για αποφυγή υπερθέρμανσης.",
  },
  {
    icon: Settings,
    title: "Σύστημα Πέδησης",
    description: "Έλεγχος και αντικατάσταση τακακίων, δίσκων και υγρών φρένων.",
  },
];

const ServicesSection = () => {
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
            ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ
            <span className="h-px w-8 bg-primary" />
          </span>
          <h2 className="font-display text-4xl text-foreground md:text-5xl">
            ΟΛΟΚΛΗΡΩΜΕΝΕΣ ΥΠΗΡΕΣΙΕΣ
            <span className="block text-primary">ΣΥΝΤΗΡΗΣΗΣ ΑΥΤΟΚΙΝΗΤΩΝ</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl bg-card p-8 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-2xl text-card-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
