"use client";

import { ArrowRight, Code, Cloud, Settings, Users, Zap, Building } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Stats } from "@/components/sections/Stats";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative mt-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-accent/20 to-background py-32">
          <div className="absolute inset-0 bg-grid-white/10" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container relative mx-auto px-4"
          >
            <div className="max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold tracking-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-accent via-accent/80 to-primary bg-clip-text text-transparent">
                  Intelligent Software Solutions
                </span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Empowering businesses with cutting-edge ERP, HR, and CRM solutions
                that drive growth and efficiency.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#products"
                  className="inline-flex items-center rounded-lg border border-input bg-white/80 px-6 py-3 text-sm font-medium transition-all hover:bg-accent/10 hover:text-accent hover:shadow-lg"
                >
                  Our Products
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <ProductShowcase />

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-center text-3xl font-bold">Our Services</h2>
              <p className="mb-12 text-center text-lg text-muted-foreground">
                Comprehensive solutions for your business needs
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Code className="h-8 w-8" />}
                title="Custom Development"
                description="Tailored software solutions built to address your unique business challenges."
              />
              <ServiceCard
                icon={<Cloud className="h-8 w-8" />}
                title="Cloud Solutions"
                description="Scalable cloud-based applications for maximum flexibility and efficiency."
              />
              <ServiceCard
                icon={<Building className="h-8 w-8" />}
                title="Enterprise Solutions"
                description="End-to-end business management systems for large organizations."
              />
            </div>
          </div>
        </section>

        <Stats />

        {/* About Section */}
        <section id="about" className="bg-gradient-to-b from-accent/5 to-background py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-4 text-3xl font-bold">About Nicenom</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We are a team of passionate developers and business analysts dedicated
                to creating innovative software solutions that help businesses thrive
                in the digital age.
              </p>
              <div className="grid gap-8 md:grid-cols-2">
                <FeatureCard
                  icon={<Zap className="h-6 w-6" />}
                  title="Innovation First"
                  description="We stay ahead of technology trends to deliver cutting-edge solutions."
                />
                <FeatureCard
                  icon={<Users className="h-6 w-6" />}
                  title="Client Success"
                  description="Your success is our priority. We work closely with you to ensure results."
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl overflow-hidden rounded-xl border bg-card shadow-xl"
            >
              <div className="bg-gradient-to-r from-accent via-accent/80 to-primary p-8 text-white">
                <h2 className="text-center text-3xl font-bold">Get in Touch</h2>
              </div>
              <form className="space-y-6 p-8">
                <div>
                  <label className="mb-2 block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-4 py-2 transition-colors focus:border-accent focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-4 py-2 transition-colors focus:border-accent focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Message</label>
                  <textarea
                    className="w-full rounded-md border border-input bg-background px-4 py-2 transition-colors focus:border-accent focus:ring-accent"
                    rows={4}
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group rounded-xl border bg-gradient-to-br from-white to-accent/5 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-4 text-accent">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-lg">
      <div className="rounded-lg bg-accent/10 p-2 text-accent">{icon}</div>
      <div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}