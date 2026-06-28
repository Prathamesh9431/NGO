import { useState, useEffect } from "react";
import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Impact from "./components/Impact";
import Campaigns from "./components/Campaigns";
import SuccessStories from "./components/SuccessStories";
import VolunteerForm from "./components/VolunteerForm";
import Donation from "./components/Donation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Team from "./components/Team";
import Map from "./components/Map";
import Gallery from "./components/Gallery";
import DonorCounter from "./components/DonorCounter";
import DonationProgress from "./components/DonationProgress";
import NewsEvents from "./components/NewsEvents";
import Countdown from "./components/Countdown";
import WhatsAppButton from "./components/WhatsAppButton";
import VideoSection from "./components/VideoSection";
import Achievements from "./components/Achievements";
import Partners from "./components/Partners";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar  />

      <Hero />
      <About />
      <Impact />
      <Achievements/>
      <Partners/>
      <Campaigns />
      <NewsEvents />
      <Countdown />
      <Gallery />
      <VideoSection/>
      <SuccessStories />
      <Team />
      <VolunteerForm />
      <Donation />
      <DonationProgress />
      <DonorCounter />
      
      <Contact />
      <ScrollToTop />
      <Footer />
      <WhatsAppButton/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}

export default App;
