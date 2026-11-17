export function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje simulado como enviado. ¡Excelente trabajo!");
  };

  return (
    <section className="contact-section" id="contacto" aria-labelledby="titulo-contacto">
      <h2 id="titulo-contacto">Contacto Profesional</h2>
      <p>¿Interesado en conocer más sobre mis proyectos o coordinar una entrevista? Envíame un mensaje.</p>
      
      <form className="contact-form" onSubmit={handleSubmit} aria-label="Formulario de contacto">
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ej. Juan Pérez" required aria-required="true" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" placeholder="tu@correo.com" required aria-required="true" />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..." required aria-required="true"></textarea>
        </div>

        <button type="submit" className="btn-submit" aria-label="Enviar formulario de mensaje">Enviar Mensaje</button>
      </form>
    </section>
  );
}