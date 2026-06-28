import heroImage from "../assets/children.jpg";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <motion.h1
  className="display-1 fw-bold mb-4"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Together We Can
  <br />
  Change Lives
</motion.h1>

<motion.p
  className="lead mb-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, delay: 0.5 }}
>
  <ReactTyped
    strings={[
      "Empowering Communities Through Education",
      "Providing Healthcare Support",
      "Creating Better Opportunities",
      "Together We Can Change Lives"
    ]}
    typeSpeed={50}
    backSpeed={30}
    loop
  />
</motion.p>

            <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  <a href="#volunteer" className="btn btn-primary me-3">
  Become a Volunteer
</a>

<a href="#donation" className="btn btn-outline-light">
  Donate Now
</a>
</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
