import { motion } from "framer-motion";

function NewsEvents() {
  const events = [
    {
      title: "Free Health Camp",
      date: "15 July 2026",
      description:
        "Providing free medical checkups and medicines to rural communities.",
    },
    {
      title: "Book Donation Drive",
      date: "28 July 2026",
      description:
        "Collecting and distributing books to underprivileged children.",
    },
    {
      title: "Food Distribution Program",
      date: "10 August 2026",
      description:
        "Serving nutritious meals to families in need.",
    },
  ];

  return (
    <section id="news" className="py-5 section-dark">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Latest News & Events
        </motion.h2>

        <div className="row">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card p-4 h-100 shadow">
                <span className="badge bg-primary mb-3">
                  {event.date}
                </span>

                <h4>{event.title}</h4>

                <p className="mt-3">
                  {event.description}
                </p>

                <button className="btn btn-outline-primary mt-auto">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsEvents;