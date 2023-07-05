import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineTranslate } from "react-icons/hi";
import Modal from "../modal/modal";
import BanderaEn from "../../assets/banderaen.svg";
import BanderaCat from "../../assets/banderacat.svg";
import BanderaEs from "../../assets/banderaes.svg";
import "../css/styles.css";

function Header({
  cambiarModo,
  darkMode,
  cambiarIdioma,
  txtIdioma,
  bodyOverflowHidden,
}) {
  const { Inicio, SobreMi, Proyectos, Contacto } = txtIdioma.header;
  const { copiado, copiadoerror } = txtIdioma.otros;
  // Estados
  const [modalVisible, setModalVisible] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const [mostrarIdiomas, setMostrarIdiomas] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    bodyOverflowHidden();
  };

  const toggleIdiomas = () => {
    setMostrarIdiomas(!mostrarIdiomas);
  };

  const copiarUsuario = (usuario) => {
    try {
      navigator.clipboard.writeText(usuario);
      console.log(copiado + usuario);
    } catch (error) {
      console.log(copiadoerror + error);
    }
  };

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuMobile(!menuMobile);
      bodyOverflowHidden();
    }

    if (mostrarIdiomas) {
      setMostrarIdiomas(!mostrarIdiomas);
    }
  };

  return (
    <header>
      {/* Titulo */}
      <h2 className="header-titulo">{"< EloiDev />"}</h2>
      {/* Menu */}
      <nav className={menuMobile ? "show-nav" : null}>
        <ul>
          <li>
            <a href="#inicio" onClick={toggleMenu}>
              {Inicio}
            </a>
          </li>
          <li>
            <a href="#aboutme" onClick={toggleMenu}>
              {SobreMi}
            </a>
          </li>
          <li>
            <a href="#proyectos" onClick={toggleMenu}>
              {Proyectos}
            </a>
          </li>
        </ul>
      </nav>
      <div className="botones-header">
        {/* Botón Contacto */}
        <button
          className={"boton-contacto " + (menuMobile ? "show-btn" : "")}
          onClick={() => {
            toggleModal();
            toggleMenu();
          }}
        >
          {Contacto}
        </button>
        {/* Botón Dark-Mode */}
        <button
          className={`dark-mod-boton ${darkMode ? "dark-mode" : ""} ${
            menuMobile ? "show-btn" : ""
          }`}
          onClick={cambiarModo}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        {/* Botón Idioma */}
        <div>
          <button
            className={"boton-idioma " + (menuMobile ? "show-btn" : "")}
            onClick={() => toggleIdiomas()}
          >
            <HiOutlineTranslate />
          </button>
          <div
            className={
              "languages-container" + (mostrarIdiomas ? " idiomas--open" : "")
            }
          >
            <ul className="idiomas">
              <li style={{ transform: "none" }}>
                <button
                  className="idioma"
                  onClick={() => {
                    cambiarIdioma("es");
                    toggleIdiomas();
                  }}
                >
                  <img src={BanderaEs} alt="" className="img-idioma" />
                  <span>Es</span>
                </button>
              </li>
              <li style={{ transform: "none" }}>
                <button
                  className="idioma"
                  onClick={() => {
                    cambiarIdioma("en");
                    toggleIdiomas();
                  }}
                >
                  <img src={BanderaEn} alt="" className="img-idioma" />
                  <span>En</span>
                </button>
              </li>
              <li style={{ transform: "none" }}>
                <button
                  className="idioma"
                  onClick={() => {
                    cambiarIdioma("cat");
                    toggleIdiomas();
                  }}
                >
                  <img src={BanderaCat} alt="" className="img-idioma" />
                  <span>Cat</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Menu Hamburguesa */}
      <div
        className={menuMobile ? "hamburguesa hamburguesa--show" : "hamburguesa"}
        onClick={toggleMenu}
      >
        <span className="linea"></span>
        <span className="linea"></span>
        <span className="linea"></span>
      </div>
      {/* Modal */}
      <Modal
        modalVisible={modalVisible}
        cerrarModal={toggleModal}
        copiarUsuario={copiarUsuario}
        txtIdioma={txtIdioma}
      />
    </header>
  );
}

export default Header;
