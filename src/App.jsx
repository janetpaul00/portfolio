import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Blog from "./Blog";
import Hobbies from "./Hobbies";
import Experience from "./Exp";
import Projects from "./Projects";
import ProjectCards from "./ProjectCards";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <main>
        <Header />
        <div id="main-grid">
          <Skills />
          <Blog />
          <Hobbies />
          <Experience />
          <Projects />
          <ProjectCards />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
