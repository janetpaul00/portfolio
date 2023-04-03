import "./App.css";
import Footer from "./Footer";

import { useState } from "react";

import Muckba from "./assets/Muckba.jpg";
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
              Whether she's waddling her way through an obstacle course or
              engaging in a battle of wits with her feathered friends, Muckba
              proves that when you're born to be a duck, you're born to be a
              winner.
            </p>
            <br />
          </div>
        </header>
        <div id="main-grid">
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
              Hello fellow ducks, today I want to talk about something that's
              close to every duck's heart - our waddle.
            </p>
            <p className="blog-body">
              As ducks, we all know how important it is to have a good waddle.
              Not only is it an essential part of our movement and survival, but
              it's also a way for us to express our individuality and
              personality.
            </p>
            <a
              href="https://www.youtube.com/watch?v=MHhFVxJOecY"
              target="_blank"
            >
              see more
            </a>
          </div>
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
