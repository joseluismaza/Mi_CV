import data from "../../data/data";
import "./AboutMe.css";

// IMPORTACIÓN FONT AWESOME //
//Despues de instalar el fontawesome con npm https://docs.fontawesome.com/apis/javascript/get-started

import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera)

const camera = icon({ prefix: 'fas', iconName: 'camera' })

// Resto de codigo 
const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <img class="avatar" src=${data.avatar} alt=${data.name}/>
      <ul>
      ${data.skills
      .map(
        (skill) => `<li>
      <i class="${skill.icon}"></i>
      <p>${skill.name}</p>
      </li>`
      )
      .join("")}
    </ul>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a class="contact" href=${`mailto:${data.email}`}>Contacto</a>
    </section>
  `;
};

export const AboutMe = () => {
  return template();
};

export const addAboutListeners = () => {
  const avatar = document.querySelector(".avatar");
};
