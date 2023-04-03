import baking from "./assets/baking.jpg";
import standup from "./assets/standup.jpg";
import skydiving from "./assets/skydiving.jpg";

export default function Hobbies() {
  return (
    <div className="hobbies">
      <h2>Hobbies</h2>
      {[
        {
          alt: "eggs and butter",
          image: baking,
          title: "Baking",
          description:
            "Check out my sourdough and other recipes that use duck eggs in creative ways!",
        },
        {
          alt: "close up of a mic",
          image: standup,
          title: "Stand-up comedy",
          description:
            "My take on the challenges of being a duck in this human centric world.",
        },
        {
          alt: "duck flying under the clear blue sky",
          image: skydiving,
          title: "Skydiving",
          description: "Come see my daring stunts during free-fall!",
        },
      ].map((hobby, index) => (
        <div className="hobby" key={index}>
          <img
            className="hobby-img"
            src={hobby.image}
            alt={hobby.alt}
            height="120"
            width="400"
          />
          <h3>{hobby.title}</h3>
          <p className="hobby-about">{hobby.description}</p>
        </div>
      ))}
    </div>
  );
}
