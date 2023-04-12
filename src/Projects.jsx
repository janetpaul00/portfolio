import { useState } from "react";
import Cards from "./cards";
import project_data from "./project-data";

export default function Projects() {
  const [category, setCategory] = useState("research");

  const data = project_data();

  let selected_data = data.filter((item) => item.category == category);
  console.log({ category });

  function handleNextClick() {}

  const pages = Math.ceil(selected_data.length / 3);

  const [page, setPage] = useState(0);

  return (
    <>
      <div className="projects">
        <h2>Projects({selected_data.length})</h2>
        <ul className="project-type">
          {["Nature", "Education", "Research"].map((item) => (
            <li key={item}>
              <button
                className="buttons"
                onClick={() => {
                  setCategory(item.toLowerCase());
                  setPage(0);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-cards">
        <Cards page={page} details={selected_data} />
      </div>

      {pages > 1 && (
        <div className="project-pages">
          <ol>
            {page > 0 && (
              <li
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                <span className="material-symbols-outlined">
                  navigate_before
                </span>
              </li>
            )}

            {new Array(pages).fill(0).map((item, index) => (
              <li key={index} className="page" onClick={() => setPage(index)}>
                {index + 1}
              </li>
            ))}

            {page < Math.ceil(selected_data.length / 3) - 1 && (
              <li
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                <span className="material-symbols-outlined">navigate_next</span>
              </li>
            )}
          </ol>
        </div>
      )}
    </>
  );
}
