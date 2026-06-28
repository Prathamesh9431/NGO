import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section id="gallery" className="py-5 section-dark">
      <div className="container">
        <h2 className="text-center mb-5">Photo Gallery</h2>

        <PhotoProvider>
          <div className="row">
            {images.map((image, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <PhotoView src={image}>
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="gallery-img"
                  />
                </PhotoView>
              </div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}

export default Gallery;