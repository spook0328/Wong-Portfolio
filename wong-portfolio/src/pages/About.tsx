import "./About.css";

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-container">
          <h1 className="about-title">About Me</h1>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                Hi, I'm Eric Wong, a passionate full-stack developer focused on
                creating clean, efficient, and user-friendly digital
                experiences.
              </p>
              <p className="about-description">
                I specialize in modern web technologies and enjoy turning
                complex problems into simple, elegant solutions. My approach
                combines technical expertise with thoughtful design.
              </p>
            </div>

            <div className="skills-section">
              <h2 className="section-title">Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3 className="category-title">Frontend</h3>
                  <ul className="skill-list">
                    <li>React / TypeScript</li>
                    <li>HTML / CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3 className="category-title">Backend</h3>
                  <ul className="skill-list">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PHP</li>
                    <li>Java</li>
                    <li>C#</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3 className="category-title">Database</h3>
                  <ul className="skill-list">
                    <li>SQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Postgre SQL</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3 className="category-title">Tools</h3>
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
