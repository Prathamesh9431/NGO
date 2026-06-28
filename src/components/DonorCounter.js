import CountUp from "react-countup";
import { motion } from "framer-motion";

function DonorCounter() {
  return (
    <section className="py-5 section-dark">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Supporters 
        </motion.h2>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="display-2 text-primary fw-bold">
            <CountUp end={125} duration={3} />+
          </h1>

          <h4>Donors Supported Our Mission</h4>

          <p className="mt-3">
            Every contribution helps us bring hope and opportunities to those in
            need.
          </p>
        </motion.div>
        <div className="row text-center mt-5">
          <div className="col-md-4">
            <h1 className="text-primary">
              <CountUp end={125} duration={3} />+
            </h1>
            <p>Donors</p>
          </div>

          <div className="col-md-4">
            <h1 className="text-success">
              ₹<CountUp end={75000} duration={3} separator="," />
            </h1>
            <p>Funds Raised</p>
          </div>

          <div className="col-md-4">
            <h1 className="text-warning">
              <CountUp end={500} duration={3} />+
            </h1>
            <p>Volunteers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonorCounter;
