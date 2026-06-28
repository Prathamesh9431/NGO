import { motion } from "framer-motion";
import { FaAward, FaUsers, FaGraduationCap, FaHandsHelping } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaAward />,
      title: "Best NGO Award 2025",
      description: "Recognized for outstanding social service."
    },
    {
      icon: <FaGraduationCap />,
      title: "2000+ Children Educated",
      description: "Providing quality education to underprivileged children."
    },
    {
      icon: <FaUsers />,
      title: "500+ Volunteers",
      description: "Dedicated volunteers helping our mission succeed."
    },
    {
      icon: <FaHandsHelping />,
      title: "125+ Donors",
      description: "Supporters contributing to positive change."
    }
  ];

  return (
    <section id="achievements" className="py-5 section-dark">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Achievements
        </motion.h2>

        <div className="row">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="col-md-3 col-sm-6 mb-4"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="achievement-card text-center p-4">
                <div className="achievement-icon">
                  {item.icon}
                </div>

                <h5 className="mt-3">{item.title}</h5>

                <p className="mt-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;