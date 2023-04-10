export default function Cards({ details }) {
  console.log(JSON.stringify(details[0], null, 2));
  return (
    <>
      <div className="card">
        <img
          className="card-img"
          src={details[0].image}
          height="200px"
          width="300px"
          alt={details[0].alt}
        ></img>
        <div className="card-text">
          <p className="card-hashtags">{details[0].hashtags}</p>
          <h3 className="card-header">{details[0].header}</h3>
          <p className="card-about">{details[0].about}</p>
        </div>
        <div className="card-bottons">
          <button className="card button">Blog</button>
          <button className="card button">Video</button>
        </div>
      </div>
    </>
  );
}
