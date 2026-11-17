import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projectsData";

export function ProjectsSection() {
  return (
    <section className="projects-section" id="proyectos" aria-labelledby="titulo-proyectos">
      <h2 id="titulo-proyectos">Proyectos y Prácticas Académicas</h2>
      <p className="section-subtitle">Soluciones desarrolladas durante el año abarcando ingeniería de software, redes y algoritmos.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            featured={project.featured}
          />
        ))}
      </div>
    </section>
  );
}