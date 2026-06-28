import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1r0zmku",
        "template_4houocp",
        form.current,
        "oZByMY9eHMMtF0iTt"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          toast.error("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-5 section-dark">
      <div className="container">
  <h2 className="text-center mb-5">Contact Us</h2>

  <div className="row g-4">

  <div className="col-lg-6">
    <div className="contact-card">
      <h4> Send Us a Message</h4>

      <form ref={form} onSubmit={sendEmail}>
  <input
    type="text"
    name="from_name"
    className="form-control mb-3"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="from_email"
    className="form-control mb-3"
    placeholder="Your Email"
    required
  />

  <textarea
    name="message"
    className="form-control mb-3"
    rows="5"
    placeholder="Your Message"
    required
  ></textarea>

  <button
    type="submit"
    className="btn btn-primary w-100"
  >
    Send Message
  </button>
</form>
    </div>
  </div>

  <div className="col-lg-6">
    <div className="location-card">
      <h4> Our Location</h4>

      <div className="contact-info">
        <p> Chennai, Tamil Nadu, India</p>
        <p> +91 9876543210</p>
        <p> info@nayepankh.org</p>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu,India&output=embed"
          width="100%"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          title="Location"
        />
      </div>
    </div>
  </div>

</div>
</div>
    </section>
  );
}

export default Contact;