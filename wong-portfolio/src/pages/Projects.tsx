// src/pages/Projects/Projects.tsx
import "./Projects.css";
import { useLanguage } from "../contexts/LanguageContext";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projects } from "../data/projects"; // 導入專案資料

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="projects-container">
          <h1 className="projects-title">{t("projects.title")}</h1>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
