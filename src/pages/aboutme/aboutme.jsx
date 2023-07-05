import "../css/styles.css";

function AboutMe({ txtIdioma }) {
  const { titulo, parrafo1, parrafo2, parrafo3 } = txtIdioma.sobreMi;
  return (
    <section id="aboutme">
      <h2 className="section-titulo">{titulo}</h2>
      <div className="aboutme-container">
        {parrafo1}
        {parrafo2}
        {parrafo3}
      </div>
    </section>
  );
}

export default AboutMe;
