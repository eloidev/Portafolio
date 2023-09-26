import TextoDeColor from "./components/textodecolor";

const idiomas = {
  es: {
    header: {
      Inicio: "Inicio",
      SobreMi: "Sobre mí",
      Proyectos: "Proyectos",
      Contacto: "Contáctame",
    },
    inicio: {
      Subtitulo: "Desarrollador Web",
      Boton: "Descargar CV",
    },
    sobreMi: {
      titulo: "Sobre mí",
      parrafo1: (
        <p>
          ¡Hola! Mi nombre es <TextoDeColor text="Eloi" txtColor="red" />, soy
          un niño de <TextoDeColor text="14 " txtColor="green" />
          años. Me gusta mucho el desarrollo web y el desarrollo de videojuegos.
          Estoy aprendiendo mucho este año, sobre nuevas cosas enfocadas al
          desarrollo web. Actualmente, tengo conocimientos en{" "}
          <TextoDeColor text="HTML" txtColor="#dd4b25" />,{" "}
          <TextoDeColor text="CSS" txtColor="#2277ff" />,{" "}
          <TextoDeColor text="JavaScript" txtColor="#e8b824" /> y{" "}
          <TextoDeColor text="Python" txtColor="#376e9d" />. Ahora estoy
          aprendiendo <TextoDeColor text="ReactJS" txtColor="#5ed3f3" />. 💾
        </p>
      ),
      parrafo2: (
        <p>
          Desde temprana edad, siempre me ha interesado mucho el mundo de la{" "}
          <TextoDeColor text="tecnología" txtColor="cadetblue" /> y la{" "}
          <TextoDeColor text="programación" txtColor="red" />. Durante los
          últimos 3 años, he estado invirtiendo mi{" "}
          <TextoDeColor text="tiempo" txtColor="#651c1c" /> y esfuerzo en
          aprender los <TextoDeColor text="lenguajes " txtColor="violet" />
          de <TextoDeColor text="programación" txtColor="#015f5f" /> necesarios
          para crear sitios <TextoDeColor text="web" txtColor="#00bf00" />{" "}
          atractivos. 💬
        </p>
      ),
      parrafo3: (
        <p>
          Mi objetivo es seguir desarrollando mis{" "}
          <TextoDeColor text="habilidades" txtColor="#92c93e" /> en el área de{" "}
          <TextoDeColor text="desarrollo" txtColor="#4100ff" /> Front-End. 💻
        </p>
      ),
    },
    proyectos: {
      titulo: "Proyectos",
      proyecto1: {
        titulo: "Calculadora",
        descripcion:
          "Es una calculadora sencilla, que la cree con Math.js, para practicar React",
        alt: "Foto de la calculadora",
        title: "Imagen de la calculadora",
      },
      proyecto2: {
        titulo: "Fortnite Swapper",
        descripcion:
          "Es un swapper de Fortnite(cambiador de skins, picos, etc.), creado en C#, con un método viejo",
        alt: "Foto Swapper",
        title: "Imagen Swapper",
      },
      proyecto3: {
        titulo: "Contador de clics",
        descripcion:
          "Es una página web donde puedes contar los clics que haces, en ella puedes sumar i reiniciar los clics. La página la hice en React para aprender",
        alt: "Foto página web contador de clics",
        title: "Imagen contador de clics",
      },
    },
    modal: {
      titulo: "Contáctame",
      parrafo1:
        "Me encantaría poder hablar contigo. Si necesitas ponerte en contacto conmigo, puedes hacerlo a través de Discord o Instagram.",
      parrafo2: "Aquí te dejo mis detalles de contacto:",
      boton: "Cerrar",
    },
    otros: {
      copiado: "Texto copiado con éxito: ",
      copiadoerror: "No se ha podido copiar el texto, error: ",
      alertadesarrollo: "En Desarrollo",
    },
  },
  en: {
    header: {
      Inicio: "Home",
      SobreMi: "About me",
      Proyectos: "Projects",
      Contacto: "Contact me",
    },
    inicio: {
      Subtitulo: "Web developer",
      Boton: "Download CV",
    },
    sobreMi: {
      titulo: "About me",
      parrafo1: (
        <p>
          Hi! I'm <TextoDeColor text="Eloi" txtColor="red" />, a{" "}
          <TextoDeColor text="14" txtColor="green" />
          -year-old boy. I really enjoy web development and game development.
          This year, I'm focusing on learning new things in web development and
          expanding my knowledge. Currently, I have knowledge in{" "}
          <TextoDeColor text="HTML" txtColor="#dd4b25" />,{" "}
          <TextoDeColor text="CSS" txtColor="#2277ff" />,{" "}
          <TextoDeColor text="JavaScript" txtColor="#e8b824" /> and{" "}
          <TextoDeColor text="Python" txtColor="#376e9d" />. I am now learning{" "}
          <TextoDeColor text="ReactJS" txtColor="#5ed3f3" />. 💾
        </p>
      ),
      parrafo2: (
        <p>
          From an early age, I have always been very interested in the world of{" "}
          <TextoDeColor text="technology " txtColor="cadetblue" /> and{" "}
          <TextoDeColor text="programming" txtColor="red" />. For the last 3
          years, I have been investing my{" "}
          <TextoDeColor text="time" txtColor="#651c1c" /> and effort in learning
          the <TextoDeColor text="programming" txtColor="#015f5f" />{" "}
          <TextoDeColor text="languages  " txtColor="violet" /> needed to create
          attractive <TextoDeColor text="websites" txtColor="#00bf00" />. 💬
        </p>
      ),
      parrafo3: (
        <p>
          My goal is to continue developing my{" "}
          <TextoDeColor text="skills" txtColor="#92c93e" /> in the area of
          Front-End <TextoDeColor text="development" txtColor="#4100ff" />. 💻
        </p>
      ),
    },
    proyectos: {
      titulo: "Projects",
      proyecto1: {
        titulo: "Calculator",
        descripcion:
          "It's a simple calculator, which you create with Math.js, to practice React",
        alt: "Calculator photo",
        title: "Calculator image",
      },
      proyecto2: {
        titulo: "Fortnite Swapper",
        descripcion:
          "It is a Fortnite swapper (skin changer, spikes, etc.), created in C#, with an old method",
        alt: "Swapper photo",
        title: "Swapper image",
      },
      proyecto3: {
        titulo: "Click counter",
        descripcion:
          "It is a web page where you can count the clicks you make, in it you can add and restart the clicks. I made the page in React to learn",
        alt: "Photo web page click counter",
        title: "Click counter image",
      },
    },
    modal: {
      titulo: "Contact me",
      parrafo1:
        "I would love to be able to talk to you. If you need to contact me, you can do it through Discord or Instagram.",
      parrafo2: "Here are my contact details:",
      boton: "Close",
    },
    otros: {
      copiado: "Successfully copied text: ",
      copiadoerror: "Failed to copy text, error: ",
      alertadesarrollo: "Developing",
    },
  },
  cat: {
    header: {
      Inicio: "Inici",
      SobreMi: "Sobre mi",
      Proyectos: "Projectes",
      Contacto: "Contacta'm",
    },
    inicio: {
      Subtitulo: "Desenvolupador web",
      Boton: "Descarregar CV",
    },
    sobreMi: {
      titulo: "Sobre mi",
      parrafo1: (
        <p>
          Hola! El meu nom és <TextoDeColor text="Eloi" txtColor="red" />, soc
          un nen de <TextoDeColor text="14 " txtColor="green" />
          anys. M'agrada molt el desenvolupament web i el desenvolupament de
          videojocs. Estic aprenent molt aquest any, sobre noves coses enfocades
          al desenvolupament web. Actualment, tinc coneixements a{" "}
          <TextoDeColor text="HTML" txtColor="#dd4b25" />,{" "}
          <TextoDeColor text="CSS" txtColor="#2277ff" />,{" "}
          <TextoDeColor text="JavaScript" txtColor="#e8b824" /> i{" "}
          <TextoDeColor text="Python" txtColor="#376e9d" />. Ara estic aprenent{" "}
          <TextoDeColor text="ReactJS" txtColor="#5ed3f3" />. 💾
        </p>
      ),
      parrafo2: (
        <p>
          Des de molt jove, sempre m'ha interessat molt el món de la{" "}
          <TextoDeColor text="tecnologia" txtColor="cadetblue" /> i la{" "}
          <TextoDeColor text="programació" txtColor="red" />. Durant els darrers
          3 anys, he estat invertint el meu{" "}
          <TextoDeColor text="temps" txtColor="#651c1c" /> i esforç en aprendre
          els <TextoDeColor text="llenguatges " txtColor="violet" />
          de <TextoDeColor text="programació" txtColor="#015f5f" /> necessaris
          per crear llocs <TextoDeColor text="web" txtColor="#00bf00" />{" "}
          atractius. 💬
        </p>
      ),
      parrafo3: (
        <p>
          El meu objectiu és seguir desenvolupant les meves{" "}
          <TextoDeColor text="habilitats" txtColor="#92c93e" /> a l'àrea de{" "}
          <TextoDeColor text="desenvolupament" txtColor="#4100ff" /> Front-End.
          💻
        </p>
      ),
    },
    proyectos: {
      titulo: "Projectes",
      proyecto1: {
        titulo: "Calculadora",
        descripcion:
          "És una calculadora senzilla, que la vaig crear amb Math.js, per practicar React",
        alt: "Foto de la calculadora",
        title: "Imatge de la calculadora",
      },
      proyecto2: {
        titulo: "Fortnite Swapper",
        descripcion:
          "És un swapper de Fortnite (canviador de skins, pics, etc.), creat a C#, amb un mètode vell",
        alt: "Foto Swapper",
        title: "Imatge Swapper",
      },
      proyecto3: {
        titulo: "Comptador de clics",
        descripcion:
          "És una pàgina web on pots comptar els clics que fas, hi pots sumar i reiniciar els clics. La pàgina la vaig fer en React per aprendre",
        alt: "Foto pàgina web contador de clics",
        title: "Imatge contador de clics",
      },
    },
    modal: {
      titulo: "Contacta'm",
      parrafo1:
        "M'encantaria poder parlar amb tu. Si necessites posar-te en contacte amb mi, ho pots fer a través de Discord o Instagram.",
      parrafo2: "Aquí et deixo els meus detalls de contacte:",
      boton: "Tancar",
    },
    otros: {
      copiado: "Text copiat amb éxit: ",
      copiadoerror: "No s'ha pogut copiar el text, error: ",
      alertadesarrollo: "En Desenvolupament",
    },
  },
};

export default idiomas;
