import { motion } from "framer-motion";
import education from "../assets/education.jpg";
import food from "../assets/food.jpg";
import health from "../assets/health.jpg";
import CampaignPieChart from "./CampaignPieChart";

function Campaigns() {
  return (
    <section id="campaigns" className="py-5 section-dark">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Campaigns
        </motion.h2>

        <div className="row">

          {/* Education */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card h-100 shadow">
              <img
                src={education}
                className="card-img-top"
                alt="Education Drive"
              />

              <div className="card-body text-center">
                <h4>Education Drive</h4>
                <p>
                  Providing books, school supplies, and learning support to
                  underprivileged children.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Food */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card h-100 shadow">
              <img
                src={food}
                className="card-img-top"
                alt="Food Distribution"
              />

              <div className="card-body text-center">
                <h4>Food Distribution</h4>
                <p>
                  Distributing nutritious meals and groceries to families in
                  need.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Health */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card h-100 shadow">
              <img
                src={health}
                className="card-img-top"
                alt="Health Camp"
              />

              <div className="card-body text-center">
                <h4>Health Camp</h4>
                <p>
                  Organizing free medical checkups and healthcare awareness
                  programs.
                </p>
              </div>
            </div>
          </motion.div>

          

        </div>
        <CampaignPieChart/>
      </div>
    </section>
  );
}

export default Campaigns;