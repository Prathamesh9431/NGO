function VolunteerForm() {
  return (
    <section id="volunteer" className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-center mb-4">Become a Volunteer</h2>

        <form className="mx-auto" style={{ maxWidth: "500px" }}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
          />

          <input
            type="tel"
            className="form-control mb-3"
            placeholder="Phone Number"
          />

          <button className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export default VolunteerForm;