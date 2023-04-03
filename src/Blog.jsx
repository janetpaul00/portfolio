import waddle from "./assets/waddle.jpg";

export default function Blog() {
  return (
    <div className="blog">
      <h2 className="faded">Blog</h2>
      <div className="blog-container">
        <h3>How to perfect your waddle</h3>
        <img
          className="waddle"
          src={waddle}
          alt="duckling learning to walk"
          height="418"
          width="330"
        />
      </div>
      <p className="blog-intro">
        Hello fellow ducks, today I want to talk about something that's close to
        every duck's heart - our waddle.
      </p>
      <p className="blog-body">
        As ducks, we all know how important it is to have a good waddle. Not
        only is it an essential part of our movement and survival, but it's also
        a way for us to express our individuality and personality.
      </p>
      <a href="https://www.youtube.com/watch?v=MHhFVxJOecY" target="_blank">
        see more
      </a>
    </div>
  );
}
