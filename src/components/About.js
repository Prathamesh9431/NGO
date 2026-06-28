import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="py-5 section-dark"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>

        <p className="text-center fs-5">
          NayePankh is a non-profit organization dedicated to empowering
          underprivileged communities through education, healthcare,
          and social welfare programs.
        </p>
      </div>
    </motion.section>
  );
}

export default About;