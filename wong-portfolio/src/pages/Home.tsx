import "./Home.css";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Hi!</span>
            <span className="title-line">I'm Jui Hsin Wong</span>
          </h1>
          <p className="hero-description"> {t("home.description")}</p>
        </div>
      </section>
    </div>
  );
}
