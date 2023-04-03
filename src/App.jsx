import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Blog from "./Blog";

import { useState } from "react";

import waddle from "./assets/waddle.jpg";
import baking from "./assets/baking.jpg";
import standup from "./assets/standup.jpg";
import skydiving from "./assets/skydiving.jpg";
import ISHOF from "./assets/ISHOF.png";
import WWF_logo from "./assets/WWF_logo.svg.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <main>
        <Header />
        <div id="main-grid">
          <Skills />
          <Blog />
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
                  Taught humans of all ages to swim for rehabilitation,
                  competitive sports and stress relief.
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

          <div className="projects">
            <h2>Projects(3)</h2>
            <ul className="project-type">
              <li className="nature">Nature</li>
              <li className="education">Education</li>
              <li className="research">Research</li>
            </ul>
          </div>
          <div className="project-cards">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
