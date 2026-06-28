import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        campaigns: "Campaigns",
        contact: "Contact Us",
        Donation: "Donate",
        heroTitle: "Together We Can Change Lives",
        Volunteer: "Volunteer",
        Impact:"impact",
      },
    },
    hi: {
      translation: {
        home: "होम",
        about: "हमारे बारे में",
        campaigns: "अभियान",
        contact: "संपर्क करें",
        Donation: "दान करें",
        heroTitle: "हम मिलकर जीवन बदल सकते हैं",
        Volunteer: "स्वयंसेवक",
        Impact: "प्रभाव",
      },
    },
    mr: {
      translation: {
        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        campaigns: "मोहीमा",
        contact: "संपर्क",
        Donation: "देणगी",
        heroTitle: "एकत्र येऊन आपण जीवन बदलू शकतो",
        Volunteer: "स्वयंसेवक",
        Impact: "परिणाम",
      },
    },
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;