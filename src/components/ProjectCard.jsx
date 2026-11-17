export function ProjectCard({ title, description, tags, featured }) {
  return (
    <article className={`card ${featured ? "featured" : ""}`} aria-labelledby={`proy-${title}`}>
      <header>
        {featured && <span className="badge" aria-hidden="true">Destacado</span>}
        <h3 id={`proy-${title}`}>{title}</h3>
      </header>
      <p>{description}</p>
      <footer className="card-footer">
        <ul className="tags" aria-label="Tecnologías utilizadas">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </footer>
    </article>
  );
}