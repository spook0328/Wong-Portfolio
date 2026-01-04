// src/components/LanguageSwitcher/LanguageSwitcher.tsx

import { useLanguage } from "../../contexts/LanguageContext";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "zh" ? "en" : "zh";
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-switcher"
      aria-label="Switch Language"
    >
      <span className="current-lang">{language === "zh" ? "中文" : "EN"}</span>
      <span className="lang-separator">/</span>
      <span className="other-lang">{language === "zh" ? "EN" : "中文"}</span>
    </button>
  );
}
