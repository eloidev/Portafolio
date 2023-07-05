import { FaGithub, FaInstagram, FaDiscord, FaTwitch } from "react-icons/fa";
import FooterButton from "../../components/footerbutton";
import "../css/styles.css";

function Footer() {
  return (
    <footer>
      <p className="footer-titulo">Eloi35 2023</p>
      <div className="footer-buttons">
      <FooterButton
          link={"https://github.com/EloiDeveloper"}
          titulo="Github"
          icono={FaGithub}
        />
        <FooterButton
          link={"https://www.instagram.com/eloi35_/"}
          titulo="Instagram"
          icono={FaInstagram}
        />
        <FooterButton
          link={"https://discord.gg/Hf7jKYmnsz"}
          titulo="Discord"
          icono={FaDiscord}
        />
        <FooterButton
          link={"https://www.twitch.tv/elkoi35"}
          titulo="Twitch"
          icono={FaTwitch}
        />
      </div>
    </footer>
  );
}

export default Footer;
