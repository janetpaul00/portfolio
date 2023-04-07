import { useState } from "react";
import project_data from "./project-data";

export default function Projects() {
  const [category, setCategory] = useState("nature");

  return (
    <>
      <div className="projects">
        <h2>Projects(3)</h2>
        <ul className="project-type">
          <li className="nature">Nature</li>
          <li className="education">Education</li>
          <li className="research">Research</li>
        </ul>
      </div>

      <div className="project-cards">
        {project_data.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </>
  );
}

// projects
