import CountUp from "react-countup";
import { motion } from "framer-motion";


function Impact() {
  return (
    <section id="impact" className="py-5 section-dark">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Impact
        </motion.h2>

        <div className="row text-center">

          {/* Card 1 */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-4 shadow">
              <h1 className="text-primary">
                <CountUp end={500} duration={3} />+
              </h1>
              <p>Volunteers</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card p-4 shadow">
              <h1 className="text-primary">
                <CountUp end={2000} duration={3} />+
              </h1>
              <p>Children Educated</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card p-4 shadow">
              <h1 className="text-primary">
                <CountUp end={50} duration={3} />+
              </h1>
              <p>Campaigns Conducted</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

export default Impact;