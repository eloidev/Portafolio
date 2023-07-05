import Logo from "../../assets/logo.webp";
import "../css/styles.css";
import { BsPersonVcard } from "react-icons/bs";

function Inicio({ txtIdioma }) {
  const { Subtitulo, Boton } = txtIdioma.inicio;
  
  const descargarCv = () => {
    alert("Actualmente no tengo :)");
  };

  return (
    <section id="inicio">
      <div className="inicio-container">
        <div className="inicio-text">
          <h1 className="inicio-titulo">
            EloiDev <span className="saludar">👋</span>
          </h1>
          <h2 className="inicio-subtitulo">{Subtitulo}</h2>
        </div>
        <button className="inicio-boton" onClick={descargarCv}>
          {Boton}{" "}
          <span className="span-icono">
            <BsPersonVcard className="icono-curriculum" />
          </span>
        </button>
      </div>
      <figure>
        <img className="inicio-logo" src={Logo} alt="Foto" title="Logo" />
      </figure>
    </section>
  );
}

export default Inicio;
