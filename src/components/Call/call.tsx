"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CTA() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 border border-dashed border-white rounded-2xl p-6">
        <Card className="relative overflow-hidden bg-linear-to-br from-neutral-900 to-white-950 border border-indigo-500/40 rounded-2xl shadow-xl">
          <CardContent className="p-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
            >
              Ready to Experience HMS? <br />
              <span className="text-indigo-400">Supercharge your workflow today</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-neutral-400 max-w-md"
            >
              Try our interactive demo and explore <br/>
              features from different user perspectives!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-4"
            >
              <Button className="rounded-full px-6 bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg">
                Try Demo
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg">
                Get Started
              </Button>
            </motion.div>
          </CardContent>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_40%)]" />
        </Card>

        <div className="grid grid-rows-3 gap-6">
          {[
            { value: "99.9%", label: "system uptime guaranteed." },
            { value: "10k+", label: "companies using our platform." },
            { value: "1M+", label: "automated tasks run daily." },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-white-950 border border-dashed border-white-800 rounded-2xl"
            >
              <CardContent className="p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-indigo-400"
                >
                  {stat.value}
                </motion.h3>
                <p className="mt-2 text-black-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
