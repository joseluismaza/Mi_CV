import data from "../../data/data";
import "./Experience.css";

const template = () => {
  return `
  <section class="experience" id="experience">
    <h2>Experiencia</h2>
    <ul>
      ${data.workExperience
      .map(
        (item) => `
      <li>
        <h3>${item.position}</h3>
        <h4>${item.company}</h4>
        <h5>${item.startDate} - ${item.endDate}</h5>
        <p>${item.description}</p>
      </li>
      `
      )
      .join("")}
    </ul>
  </section>`;
};

export { template as Experience };