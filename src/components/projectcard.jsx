import { useState } from "react";
import { AiOutlineFolderOpen, AiOutlineEye } from "react-icons/ai";
import "./projectcard.css";

function ProjectCard({ name, description, img, alt, title, webLink, webSource, languages }) {
  const [hovered, setHovered] = useState(false);

  function getColorClass(language) {
    const colors = {
      HTML: "borde naranja",
      CSS: "borde azul-css",
      JS: "borde amarillo",
      REACT: "borde azul-react",
      "C#": "borde csharp",
      default: "borde",
    };
    return colors[language] || colors.default;
  }

  return (
    <div className="card">
      <div
        className="card-img-container"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <img className="card-img" loading="lazy" src={img} alt={alt} title={title} />
        <div
          className={`card-buttons ${hovered ? "card-buttons--visible" : ""}`}
        >
          <a className="card-view-button" href={webLink} target="_blank" rel="noopener noreferrer">
            <AiOutlineEye />
          </a>
          <a className="card-code-button" href={webSource} target="_blank" rel="noopener noreferrer">
            <AiOutlineFolderOpen />
          </a>
        </div>
      </div>
      <div className="card-text">
        <h2 className="card-titulo">{name}</h2>
        <p>{description}</p>
        <div className="card_technology">
        {languages.map((language, index) => (
            <span
              key={index}
              className={getColorClass(language)}
              title={language}
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
