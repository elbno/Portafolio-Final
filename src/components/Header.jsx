export function Header() {
  return (
    <header className="site-header" role="banner">
      <a href="#" className="logo" aria-label="Volver al inicio de Mi Portafolio">✦ Mi Portafolio</a>
      <nav className="main-nav" role="navigation" aria-label="Menú Principal">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}