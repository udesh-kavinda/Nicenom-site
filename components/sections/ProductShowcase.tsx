"use client";

import {
  BarChart3,
  Users2,
  Building2,
  LineChart,
  PieChart,
  BarChart4,
  ShieldCheck,
  Workflow,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    title: "NiceERP",
    description: "Comprehensive enterprise resource planning solution with modules for finance, inventory, and operations.",
    icon: <Building2 className="h-12 w-12" />,
    features: ["Financial Management", "Inventory Control", "Supply Chain", "Analytics"],
    chartIcon: <BarChart3 className="h-6 w-6" />,
    gradient: "from-chart-1 to-chart-2",
  },
  {
    title: "NiceHR",
    description: "Complete human resource management system for modern workplaces.",
    icon: <Users2 className="h-12 w-12" />,
    features: ["Recruitment", "Payroll", "Performance", "Training"],
    chartIcon: <LineChart className="h-6 w-6" />,
    gradient: "from-chart-2 to-chart-3",
  },
  {
    title: "NiceCRM",
    description: "Customer relationship management platform to boost sales and engagement.",
    icon: <PieChart className="h-12 w-12" />,
    features: ["Lead Management", "Sales Pipeline", "Customer Support", "Analytics"],
    chartIcon: <BarChart4 className="h-6 w-6" />,
    gradient: "from-chart-3 to-chart-4",
  },
  {
    title: "NiceSecure",
    description: "Enterprise-grade security and compliance management system.",
    icon: <ShieldCheck className="h-12 w-12" />,
    features: ["Access Control", "Compliance", "Threat Detection", "Audit Logs"],
    chartIcon: <LineChart className="h-6 w-6" />,
    gradient: "from-chart-4 to-chart-5",
  },
  {
    title: "NiceFlow",
    description: "Business process automation and workflow management solution.",
    icon: <Workflow className="h-12 w-12" />,
    features: ["Process Automation", "Task Management", "Reporting", "Integration"],
    chartIcon: <BarChart3 className="h-6 w-6" />,
    gradient: "from-chart-5 to-chart-1",
  },
  {
    title: "NiceData",
    description: "Advanced data analytics and business intelligence platform.",
    icon: <Database className="h-12 w-12" />,
    features: ["Data Visualization", "Predictive Analytics", "Real-time Insights", "Custom Reports"],
    chartIcon: <PieChart className="h-6 w-6" />,
    gradient: "from-chart-1 to-chart-3",
  },
];

export function ProductShowcase() {
  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold">Our Products</h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Powerful solutions for modern businesses
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-lg transition-all hover:shadow-xl dark:bg-card/95"
            >
              {/* Background layers */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-card via-card to-accent/5 transition-all duration-300 ease-in-out group-hover:opacity-0" 
              />
              <div 
                className="absolute inset-0 bg-gradient-to-br opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom right, hsl(var(--${product.gradient.split('-')[1]})), hsl(var(--${product.gradient.split('-')[3]})))`,
                }} 
              />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-lg bg-accent/10 p-3 text-accent group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                    {product.icon}
                  </div>
                  <div className="text-muted-foreground/60 group-hover:text-white/60 transition-colors duration-300">
                    {product.chartIcon}
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="mb-4 text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li 
                      key={feature} 
                      className="flex items-center text-sm text-foreground/80 group-hover:text-white/90 transition-colors duration-300"
                    >
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent group-hover:bg-white transition-colors duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}