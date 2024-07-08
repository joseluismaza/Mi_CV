import data from "../../data/data";
import "./Education.css";

const template = () => {
  return `
    <section class="education" id="education">
      <h2>Educación</h2>
      </br>
      <h3>${data.education.degree}</h3>
      <h4>${data.education.university}</h4>
      <p>${data.education.graduationYear}</p>
      <h3>Lenguajes Aprendidos</h3>
      <ul id="relevantcourses">
      ${data.education.relevantCourses
      .map(
        (course) => `
      <li>
        <p>${course}</p>
      </li>
      `
      )
      .join("")}
      </ul>
      </br>
      <h3>${data.education.degree2}</h3>
      <h4>${data.education.university2}</h4>
      <p>${data.education.graduationYear2}</p>
      <h3>Lenguajes Aprendidos</h3>
      <ul id="relevantcourses">
      ${data.education.relevantCourses2
      .map(
        (course) => `
      <li>
        <p>${course}</p>
      </li>
      `
      )
      .join("")}
      </ul>
      </br>
      <h3>${data.education.degree3}</h3>
      <h4>${data.education.university3}</h4>
      <p>${data.education.graduationYear3}</p>
      
    </section>
  `;
};

export { template as Education };
