import React from 'react';
import { useFetchApi } from '../hooks/useFetchApi';

export function ProjectsPage() {
  const API_URL = 'https://api.github.com/users/elbno/repos?sort=updated&per_page=6';
  const { data: repos, loading, error } = useFetchApi(API_URL);

  return (
    <main className="projects-section">
      <header className="projects-section__header">
        <h1 className="projects-section__title">Repositorios y Desarrollo</h1>
        <p className="projects-section__subtitle">
          Sincronización en tiempo real mediante GitHub REST API[cite: 4, 8]
        </p>
      </header>

      {loading && (
        <div className="projects-section__status" role="status" aria-live="polite">
          Cargando datos desde el servidor externo...[cite: 8]
        </div>
      )}

      {error && (
        <div className="projects-section__status projects-section__status--error" role="alert">
          No fue posible obtener los datos: {error}[cite: 8]
        </div>
      )}

      {!loading && !error && repos && (
        <section className="projects-section__grid" aria-label="Listado de repositorios">
          {repos.map((repo) => (
            <article key={repo.id} className="project-card">
              <h2 className="project-card__title">{repo.name}</h2>
              <p className="project-card__description">
                {repo.description ?? 'Sin descripción proporcionada en el repositorio.'}[cite: 8]
              </p>
              <div className="project-card__footer">
                <span className="project-card__lang">{repo.language || 'N/A'}</span>
                <span className="project-card__stars">⭐ {repo.stargazers_count}</span>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  Ver código
                </a>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}