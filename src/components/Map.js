function Map() {
  return (
    <section id="location" className="py-5 section-dark">
      <div className="container">
        <h2 className="text-center mb-4">Our Location</h2>

        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "300px",
            margin: "0 auto",
          }}
        >
          <iframe
            title="NayePankh Location"
            src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu,India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Map;
