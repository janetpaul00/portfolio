import Muckba from "./assets/Muckba.jpg";

export default function Header() {
  return (
    <header id="intro">
      <img
        className="photo"
        src={Muckba}
        alt="Muckba, the hardcore duck"
        height="300"
        width="200"
      />
      <div id="content">
        <div className="details">
          <div id="headings">
            <h1 className="name">Muckba Yanov</h1>
            <p className="role">The hardcore duck</p>
          </div>
          <div className="contact">
            <div className="email">
              <span className="material-symbols-outlined"> mail </span>
              <p>muckba@quackme.com</p>
            </div>
            <div className="phone">
              <span className="material-symbols-outlined"> call </span>
              <p>+(897) 50 1212 566</p>
            </div>
          </div>
        </div>

        <p className="about">
          Muckba is a no-nonsense duck who's always up for a challenge.
        </p>
        <p className="about">
          Whether she's waddling her way through an obstacle course or engaging
          in a battle of wits with her feathered friends, Muckba proves that
          when you're born to be a duck, you're born to be a winner.
        </p>
        <br />
      </div>
    </header>
  );
}
