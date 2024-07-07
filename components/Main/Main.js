import "./Main.css";
import { AboutMe } from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

let show = "Experiencia";

const template = () => {
  return `
  <main>
    ${AboutMe()}
    <div class="change-container">
      <button id="change">Muestra ${show}</button>
    </div>
    <div id="content">
      ${Education()}
    </div>
    ${Projects()}
  </main>
  `;
};

export const Main = () => {
  return template();
};

export const addMainListeners = () => {
  const button = document.querySelector("#change");

  button.addEventListener("click", () => {
    const content = document.querySelector("#content");

    if (show === "Experiencia") {
      content.innerHTML = `${Experience()}`;
      show = "Educación";
    } else {
      content.innerHTML = `${Education()}`;
      show = "Experiencia";
    }
    button.textContent = `Muestra ${show}`;

  })
};