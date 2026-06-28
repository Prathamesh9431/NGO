import logo from "../assets/logo.png";

import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={logo}
            alt="NayePankh Logo"
            width="50"
            height="50"
            className="me-2 rounded-circle"
          />

          <div>
            <h5 className="mb-0 fw-bold">NayePankh</h5>
            <small>NGO</small>
          </div>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                {t("home")}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                {t("about")}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#impact">
                {t("Impact")}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#campaigns">
                {t("campaigns")}
              </a>
            </li>

            {/* Volunteer */}
            <li className="nav-item">
              <a className="nav-link" href="#volunteer">
                {t("Volunteer")}
              </a>
            </li>
            

            {/* Donate */}
             <li className="nav-item">
              <a className="nav-link" href="#donation">
                {t("Donation")}
              </a>
            </li>

            {/* Contact */}
             <li className="nav-item">
              <a className="nav-link" href="#contact">
                {t("contact")}
              </a>
            </li>

            {/* Language Selector */}
            <li className="nav-item ms-lg-3">
              <select
                className="form-select language-select"
                style={{ width: "130px" }}
                value={i18n.language}
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  localStorage.setItem("language", e.target.value);
                }}
              >
                
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="mr">मराठी</option>
              </select>
            </li>

            {/* Dark Mode */}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
