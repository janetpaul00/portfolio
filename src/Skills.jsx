export default function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        <li>
          <p className="skill">Waddle</p>
          <progress
            value="98"
            max="100"
            style={{
              width: "60%",
              height: "25px",
            }}
          />
        </li>
        <li>
          <p className="skill">Diver</p>
          <progress
            value="80"
            max="100"
            style={{
              width: "60%",
              height: "25px",
            }}
          />
        </li>
        <li>
          <p className="skill">Navigation</p>
          <progress
            value="50"
            max="100"
            style={{
              width: "60%",
              height: "25px",
            }}
          />
        </li>
        <li>
          <p className="skill">Nest Building</p>
          <progress
            value="60"
            max="100"
            style={{
              width: "60%",
              height: "25px",
            }}
          />
        </li>
        <li>
          <p className="skill">Quacking</p>
          <progress
            value="80"
            max="100"
            style={{
              width: "60%",
              height: "25px",
            }}
          />
        </li>
        <li>
          <p className="skill">Duck Yoga</p>
          <progress
            value="90"
            max="100"
            style={{
              width: "60%",
              height: "25px",
            }}
          />
        </li>
      </ul>
    </div>
  );
}
