import ProjectCard from "../../components/projectcard";
import ImgCountClicker from "../../assets/countclicker.webp";
import ImgCalculadora from "../../assets/calculadora.webp";
import ImgPokedex from "../../assets/swapper.webp";
import "../css/styles.css";

function Proyectos({ txtIdioma }) {
  const {
    titulo,
    proyecto1: {
      titulo: tituloProyecto1,
      descripcion: descripcionProyecto1,
      alt: altProyecto1,
      title: titleProyecto1,
    },
    proyecto2: {
      titulo: tituloProyecto2,
      descripcion: descripcionProyecto2,
      alt: altProyecto2,
      title: titleProyecto2,
    },
    proyecto3: {
      titulo: tituloProyecto3,
      descripcion: descripcionProyecto3,
      alt: altProyecto3,
      title: titleProyecto3,
    },
  } = txtIdioma.proyectos;

  return (
    <section id="proyectos">
      <h2 className="section-titulo">{titulo}</h2>
      <div className="cards">
        <ProjectCard
          name={tituloProyecto1}
          description={descripcionProyecto1}
          img={ImgCalculadora}
          alt={altProyecto1}
          title={titleProyecto1}
          webLink="https://mi-calculadora.pages.dev/"
          webSource="https://github.com/EloiDeveloper/Calculadora"
          languages={["HTML", "CSS", "JS", "REACT"]}
        />
        <ProjectCard
          name={tituloProyecto2}
          description={descripcionProyecto2}
          img={ImgPokedex}
          alt={altProyecto2}
          title={titleProyecto2}
          webLink="http://eloi.pages.dev/static/media/swapper.8903653c2a2ef01ea747.webp"
          webSource="https://github.com/EloiDeveloper/Fortnite-Swapper"
          languages={["C#"]}
        />
        <ProjectCard
          name={tituloProyecto3}
          description={descripcionProyecto3}
          img={ImgCountClicker}
          alt={altProyecto3}
          title={titleProyecto3}
          webLink="https://clickcounter.pages.dev"
          webSource="https://github.com/EloiDeveloper/ClickCounter"
          languages={["HTML", "CSS", "JS", "REACT"]}
        />
      </div>
    </section>
  );
}

export default Proyectos;
