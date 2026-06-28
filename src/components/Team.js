import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

function Team() {
  const members = [
    {
      name: "Rahul Sharma",
      role: "Founder",
      image: profileImg
    },
    {
      name: "Priya Patel",
      role: "Volunteer Coordinator",
      image: profileImg
    },
    {
      name: "Amit Kumar",
      role: "Campaign Manager",
      image: profileImg
    }
  ];

  return (
    <section id="team" className="py-5 section-dark">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>

        <div className="row">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card text-center p-4 h-100 shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-img mx-auto mb-3"
                />

                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;