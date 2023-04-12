import { useEffect } from "react";

export default function Cards({ details }) {
  useEffect(() => {
    let page = document.querySelector(".project-pages") ?? "error";

    if (details.length < 4) {
      page.classList.add("disabled");
    } else {
      page.classList.remove("disabled");
    }
  }, [details.length]);

  //console.log(JSON.stringify(details[0], null, 2));

  console.log(`length of details array: ${details.length}`);

  return (
    <>
      {details.slice(0, 3).map((details, index) => (
        <div key={index} className="card">
          <img
            className="card-img"
            src={details.image}
            height="200px"
            width="300px"
            alt={details.alt}
          ></img>
          <div className="card-text">
            <p className="card-hashtags">{details.hashtags}</p>
            <h3 className="card-header">{details.header}</h3>
            <p className="card-about">{details.about}</p>
          </div>
          <div className="card-buttons">
            <button className="buttons">Blog</button>
            <button className="buttons">Video</button>
          </div>
        </div>
      ))}
    </>
  );
}
