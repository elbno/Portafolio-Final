import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>404 - Página no encontrada</h1>
      <p style={{ color: 'var(--text-muted)', margin: '1rem 0' }}>
        Lo sentimos, la ruta que buscas no existe o ha sido movida.
      </p>
      <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
        Volver al inicio
      </Link>
    </main>
  );
}