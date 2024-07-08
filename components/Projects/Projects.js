import data from "../../data/data";
import "./Projects.css";

const template = () => {
  return `
  <section class="projects" id="projects">
    <h2>Mis Proyectos</h2>
    <ul>
      ${data.projects
      .map(
        (project) => `
      <li>
        <img src=${project.preview} alt=${project.title}/>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      <a href=${project.link} target=":_blank">Conocer más</a>
    </li>
    `
      )
      .join("")}
    </ul>
  </section>
  `;
};


export { template as Projects };