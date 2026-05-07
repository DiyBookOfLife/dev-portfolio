import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="contact-text">
        I’m currently open to front-end and full-stack Software Engineering
        opportunities. If you’d like to collaborate, discuss a role, or connect
        professionally, feel free to reach out.
      </p>
      <a
        className="contact-button"
        href="mailto:tsthomas205@gmail.com?subject=Portfolio Contact"
        target="_blank"
        rel="noreferrer"
      >
        Let’s Connect
      </a>
    </motion.section>
  );
}
