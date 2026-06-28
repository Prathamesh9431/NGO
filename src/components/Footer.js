import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">

        <img
          src={logo}
          alt="NayePankh Logo"
          className="footer-logo"
        />

        <h2 className="footer-title">
          NayePankh <span>NGO</span>
        </h2>

        <p className="footer-tagline">
          Empowering communities through education,
          healthcare and social welfare.
        </p>

        <h3 className="follow-text">Follow Us</h3>

        <div className="social-icons">
          <a href="https://facebook.com">
            <FaFacebook className="facebook-icon" />
          </a>

          <a href="https://instagram.com">
            <FaInstagram className="instagram-icon" />
          </a>

          <a href="https://linkedin.com">
            <FaLinkedin className="linkedin-icon" />
          </a>

          <a href="https://youtube.com">
            <FaYoutube className="youtube-icon" />
          </a>
        </div>

        <hr />

        <p className="copyright">
          © 2026 NayePankh NGO. All Rights Reserved.
        </p>

        <p className="footer-bottom-text">
           Together we can Inspire • Support • Transform Lives 
        </p>

      </div>
    </footer>
  );
}

export default Footer;