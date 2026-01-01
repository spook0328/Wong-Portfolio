import "./Projects.css";

export default function Projects() {
  // 範例專案數據
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A brief description of your first project and what technologies were used.",
      year: "2024",
      tags: ["React", "TypeScript", "CSS"],
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "A brief description of your second project and what you accomplished.",
      year: "2024",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A brief description of your third project and its key features.",
      year: "2023",
      tags: ["React", "API", "Design"],
    },
  ];

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="projects-container">
          <h1 className="projects-title">Selected Works</h1>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-header">
                  <h2 className="project-title">{project.title}</h2>
                  <span className="project-year">{project.year}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
