import { useState } from "react";
import Cards from "./cards";
import project_data from "./project-data";

export default function Projects() {
  const [category, setCategory] = useState("nature");

  const data = project_data();

  let selected_data = data.filter((item) => item.category == category);
  console.log(selected_data);

  return (
    <>
      <div className="projects">
        <h2>Projects(3)</h2>
        <ul className="project-type">
          <li>
            <button
              className="project buttons nature"
              onClick={() => setCategory("nature")}
            >
              Nature{" "}
            </button>
          </li>
          <li>
            <button
              className="project buttons education"
              onClick={() => setCategory("education")}
            >
              Education{" "}
            </button>
          </li>
          <li>
            <button
              className="project buttons research"
              onClick={() => setCategory("research")}
            >
              Research{" "}
            </button>
          </li>
        </ul>
        <p>The current selection is {category}</p>
        {selected_data.map((category, index) => (
          <div key={index}>{category.header}</div>
        ))}
      </div>

      <div className="project-cards">
        <Cards details={selected_data} />
      </div>
    </>
  );
}

// projects
