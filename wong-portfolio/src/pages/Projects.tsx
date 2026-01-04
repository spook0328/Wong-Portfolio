// src/pages/Projects/Projects.tsx
import "./Projects.css";
import { useLanguage } from "../../contexts/LanguageContext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  const { t } = useLanguage();

  // 範例專案數據（支援多語言）
  const projects = [
    {
      id: 1,
      title: {
        en: "Project One",
        zh: "專案一",
      },
      description: {
        en: "A brief description of your first project and what technologies were used.",
        zh: "您的第一個專案的簡要描述以及使用的技術。",
      },
      year: "2024",
      tags: ["React", "TypeScript", "CSS"],
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: {
        en: "Project Two",
        zh: "專案二",
      },
      description: {
        en: "A brief description of your second project and what you accomplished.",
        zh: "您的第二個專案的簡要描述以及您完成的成果。",
      },
      year: "2024",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: {
        en: "Project Three",
        zh: "專案三",
      },
      description: {
        en: "A brief description of your third project and its key features.",
        zh: "您的第三個專案的簡要描述及其主要特色。",
      },
      year: "2023",
      tags: ["React", "API", "Design"],
      link: "https://example.com/project3",
    },
  ];

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
