import { motion } from "framer-motion";

import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpg";
import partner4 from "../assets/partner4.jpg";

function Partners() {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
  ];

  return (
    <section id="partners" className="py-5 section-dark">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Partners & Sponsors
        </motion.h2>

        <div className="row justify-content-center">
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-3 mb-4 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="partner-card">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;