import { useState } from "react";
import project_data from "./project-data";

export default function Projects() {
  const [category, setCategory] = useState("nature");

  const data = project_data();
  console.log(data);

  return (
    <>
      <div className="projects">
        <h2>Projects(3)</h2>
        <ul className="project-type">
          <li>
            <button
              className="project-buttons nature"
              onClick={() => setCategory("nature")}
            >
              Nature{" "}
            </button>
          </li>
          <li>
            <button
              className="project-buttons education"
              onClick={() => setCategory("education")}
            >
              Education{" "}
            </button>
          </li>
          <li>
            <button
              className="project-buttons research"
              onClick={() => setCategory("research")}
            >
              Research{" "}
            </button>
          </li>
        </ul>
      </div>

      <div className="project-cards">
        <p>The current state is {category}</p>
        <br />
        {/* {data.filter((card) => card.category == category)} */}
        {data.map((category, index) => (
          <div className="card" key={index}>
            {category.header}
          </div>
        ))}
      </div>
    </>
  );
}

// projects
