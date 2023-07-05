import { useState, useEffect } from "react";
import Header from "./pages/header/header";
import Inicio from "./pages/inicio/inicio";
import AboutMe from "./pages/aboutme/aboutme";
import Proyectos from "./pages/proyectos/proyectos";
import Footer from "./pages/footer/footer";
import idiomas from "./idiomas";
import { CgDanger, CgCloseR } from "react-icons/cg";
import "./App.css";

function App() {
  const [idioma, setIdioma] = useState(() => {
    const idiomaGuardado = localStorage.getItem("Idioma");
    return idiomaGuardado || "es"; // Poner idioma guardado o si no idioma español como predeterminado
  });
  const [AlertaDesarrollo, setCerrarAlertaDesarrollo] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("ModoOscuro") === "true" ? true : false
  );
  const txtIdioma = idiomas[idioma];

  const bodyOverflowHidden = () => {
    document.body.classList.toggle("overflow--hiden");
  };

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    localStorage.setItem("Idioma", nuevoIdioma);
  };

  const cambiarModo = () => {
    const modo = !darkMode;
    setDarkMode(modo);
    localStorage.setItem("ModoOscuro", modo);
  };

  const cerrarAlertaDesarrollo = () => {
    setCerrarAlertaDesarrollo(false);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <main className="App">
      <div
        className={
          AlertaDesarrollo ? "alerta-desarrollo" : "alerta-desarrollo--false"
        }
      >
        <div className="alerta-container">
          <CgDanger />
          <p>{txtIdioma.otros.alertadesarrollo}</p>
          <CgCloseR
            className="alerta-close-button"
            onClick={cerrarAlertaDesarrollo}
          />
        </div>
      </div>
      <Header
        cambiarModo={cambiarModo}
        darkMode={darkMode}
        cambiarIdioma={cambiarIdioma}
        txtIdioma={txtIdioma}
        bodyOverflowHidden={bodyOverflowHidden}
      />
      <Inicio txtIdioma={txtIdioma} />
      <AboutMe txtIdioma={txtIdioma} />
      <Proyectos txtIdioma={txtIdioma} />
      <Footer txtIdioma={txtIdioma} />
    </main>
  );
}

export default App;
