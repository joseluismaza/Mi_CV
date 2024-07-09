import "./Footer.css";

const template = () => {
  return `
  <footer>
    <p>©️ Creado por Jose Luis Maza</p>
    <a href="/CV_JoseLuisMaza.pdf" target="_blank">Descárgalo en PDF <i class="fa-solid fa-file-pdf"></i></a>
  </footer>
  `;
};

const Footer = () => {
  return template();
};

export default Footer;