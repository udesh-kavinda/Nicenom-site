"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Happy Clients", value: "500+" },
  { label: "Projects Delivered", value: "1000+" },
  { label: "Team Members", value: "50+" },
  { label: "Years Experience", value: "10+" },
];

export function Stats() {
  return (
    <section className="bg-gradient-to-r from-accent via-accent/80 to-primary py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}