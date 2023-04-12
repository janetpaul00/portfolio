export default function Skills() {
  let skills_data = [
    {
      skill_name: "Waddle",
      value: 98,
    },
    {
      skill_name: "Diver",
      value: 80,
    },
    {
      skill_name: "Navigation",
      value: 50,
    },
    {
      skill_name: "Nest Building",
      value: 60,
    },
    {
      skill_name: "Public Quacking",
      value: 85,
    },
    {
      skill_name: "Duck Yoga",
      value: 90,
    },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills_data.map((skill, index) => (
          <li key={index}>
            <p className="skill">{skill.skill_name}</p>
            <progress
              value={skill.value}
              max="100"
              style={{
                width: "60%",
                height: "25px",
              }}
            />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
