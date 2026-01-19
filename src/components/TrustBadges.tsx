import { motion } from "framer-motion";
import { Shield, Award, Users, Star } from "lucide-react";

const badges = [
  {
    icon: Shield,
    value: "Castrol",
    label: "Εξουσιοδοτημένο Service",
  },
  {
    icon: Award,
    value: "15+",
    label: "Χρόνια Εμπειρίας",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Ικανοποιημένοι Πελάτες",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Βαθμολογία Google",
  },
];

const TrustBadges = () => {
  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center text-primary-foreground"
            >
              <badge.icon className="mb-2 h-8 w-8" />
              <span className="font-display text-2xl md:text-3xl">{badge.value}</span>
              <span className="text-sm opacity-90">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
