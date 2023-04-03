import ISHOF from "./assets/ISHOF.png";
import WWF_logo from "./assets/WWF_logo.svg.png";

export default function Experience() {
  return (
    <div className="experiences">
      <h2>Experience</h2>
      <div className="experience">
        <img
          className="logo"
          src={ISHOF}
          alt="logo of International Swimming Hall of Fame"
          height="399"
          width="436"
        />
        <div className="exp-container">
          <div className="period">
            <time dateTime="2022-02-01">Feb 2023</time> -
            <time dateTime="2023-03-31">Current</time>
          </div>
          <div className="role">Swim Coach</div>
          <div className="role-about">
            Taught humans of all ages to swim for rehabilitation, competitive
            sports and stress relief.
          </div>
        </div>
      </div>
      <div className="experience">
        <img
          className="logo"
          src={WWF_logo}
          alt="logo of WWF"
          height="177"
          width="120"
        />
        <div className="exp-container">
          <div className="period">
            <time dateTime="2022-02-01">Feb 2022</time> -
            <time dateTime="2020-03-31">March 2020</time>
          </div>
          <div className="role">Wildlife Conservationist</div>
          <div className="role-about">
            Used my knowledge of animal behavior and habitats to protect
            endangered species and promote conservation efforts.
          </div>
        </div>
      </div>
    </div>
  );
}
