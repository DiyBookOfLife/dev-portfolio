import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="about-paragraph">
        I’m a <strong>Full-Stack Software Engineer</strong> focused on building{" "}
        <strong>modern, responsive web applications</strong> using{" "}
        <strong>React</strong>, <strong>JavaScript</strong>,{" "}
        <strong>Node.js</strong>, and the <strong>MERN stack</strong>. I enjoy
        creating intuitive, user-focused experiences that combine clean design
        with scalable functionality.
      </p>
      <p className="about-paragraph">
        I’m currently expanding my cloud and infrastructure knowledge through{" "}
        <strong>AWS Cloud Practitioner Essentials</strong> and{" "}
        <strong>Amazon Connect Foundations</strong>, while continuing to
        strengthen my skills in full-stack development and Python programming.
      </p>

      <p className="about-paragraph">
        Before transitioning into Software Engineering, I spent over a decade in
        Technical Support, where I developed strong <em>debugging instincts</em>
        , analytical thinking, and a detail-oriented approach to
        problem-solving.
      </p>

      <p className="about-paragraph">
        I’m passionate about writing <em>clean, maintainable code</em> and
        building <strong>polished, reliable solutions</strong> that solve
        real-world problems while delivering a seamless user experience.
      </p>
    </motion.section>
  );
}
