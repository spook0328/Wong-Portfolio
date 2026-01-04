import "./About.css";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-container">
          <h1 className="about-title">{t("about.title")}</h1>

          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">{t("about.intro")}</p>
              <p className="about-description">{t("about.description")}</p>
            </div>

            <div className="about-pic">
              <img
                src="./public/profile_pic.jpg"
                alt="profile_pic"
                className="profile-pic"
              />
            </div>

            <div className="skills-section">
              <h2 className="section-title">{t("about.skills")}</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3 className="category-title">{t("about.frontend")}</h3>
                  <ul className="skill-list">
                    <li>React / TypeScript</li>
                    <li>HTML / CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3 className="category-title">{t("about.backend")}</h3>
                  <ul className="skill-list">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PHP</li>
                    <li>Java</li>
                    <li>C#</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3 className="category-title">{t("about.database")}</h3>
                  <ul className="skill-list">
                    <li>SQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Postgre SQL</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3 className="category-title">{t("about.tools")}</h3>
                  <ul className="skill-list">
                    <li>Git / GitHub</li>
                    <li>VS Code</li>
                    <li>Linux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
