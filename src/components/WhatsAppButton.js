import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919448376765?text=Hi,%20I%20want%20to%20become%20a%20volunteer."
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;