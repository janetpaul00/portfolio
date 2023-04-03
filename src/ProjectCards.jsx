export default function ProjectCards() {
  return (
    <div className="project-cards">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
