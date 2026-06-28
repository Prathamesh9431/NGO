import { motion } from "framer-motion";

function SuccessStories() {
  return (
    <section className="py-5 section-dark">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>

        <div className="row">

          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="card p-4 h-100 text-center shadow">
              <h4>Priya</h4>
              <p className="mt-3">
                "With the support of NayePankh, I completed my education and
                became the first graduate in my family."
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-4 h-100 text-center shadow">
              <h4>Rohan</h4>
              <p className="mt-3">
                "The food distribution campaign helped my family during difficult times."
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card p-4 h-100 text-center shadow">
              <h4>Anjali</h4>
              <p className="mt-3">
                "The health camp provided free treatment and awareness to our entire village."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default SuccessStories;