import { useState } from "react";
import Cards from "./cards";
import project_data from "./project-data";

export default function Projects() {
  const [category, setCategory] = useState("research");

  const data = project_data();

  let selected_data = data.filter((item) => item.category == category);
  console.log({ category });

  return (
    <>
      <div className="projects">
        <h2>Projects(3)</h2>
        <ul className="project-type">
          <li>
            <button
              className="buttons nature"
              onClick={() => setCategory("nature")}
            >
              Nature{" "}
            </button>
          </li>
          <li>
            <button
              className="buttons education"
              onClick={() => setCategory("education")}
            >
              Education{" "}
            </button>
          </li>
          <li>
            <button
              className="buttons research"
              onClick={() => setCategory("research")}
            >
              Research{" "}
            </button>
          </li>
        </ul>
        {selected_data.map((category, index) => (
          <div key={index}>{category.header}</div>
        ))}
      </div>

      <div className="project-cards">
        <Cards details={selected_data} />
      </div>

      <div className="project-pages">
        <ol>
          <li>
            <span className="material-symbols-outlined">navigate_before</span>
          </li>
          <li>1</li>
          <li className="page">2</li>
          <li>
            <span className="material-symbols-outlined">navigate_next</span>
          </li>
        </ol>
      </div>
    </>
  );
}

// projects
