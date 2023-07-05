function FooterButton({ link, titulo, icono: NombreIcono }) {
  return (
    <a
      className="footer-boton"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={titulo}
    >
      <NombreIcono />
      <span>{titulo}</span>
    </a>
  );
}

export default FooterButton;