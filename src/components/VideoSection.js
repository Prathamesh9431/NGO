function VideoSection() {
  return (
    <section id="video" className="py-5 section-dark">
      <div className="container text-center">
        <h2 className="mb-4">Our Journey</h2>

        <p className="mb-5">
          Watch how NayePankh is making a difference in people's lives.
        </p>

        <div className="video-container mx-auto">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/0CbFrom3Qkk"
            title="NayePankh NGO Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
