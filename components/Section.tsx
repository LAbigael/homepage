'use client'

import { motion } from "framer-motion";

const Section = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default Section;
