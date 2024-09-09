import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="everything">
      <section className="wireframe1">
        <Navbar />
        <div className="name-portrait">
          <h1>Christian Angerer</h1>

          <img src="/pngs/portrait.png" alt="portrait" />
        </div>
        <div className="description-wrapper">
          <p className="description">
            I’m a full-stack web developer and I work remotely from Cologne
          </p>
        </div>
      </section>
      <section className="wireframe2">
        <div className="aboutme">
          <h2 id="about">
            About
            <br />
            me
          </h2>
          {/* <img src="/pngs/gg_arrow-left.png" alt="arrow left to right" /> */}
        </div>
        <p>
          Meet Christian, a talented web developer with a passion for crafting
          elegant and functional digital solutions. Armed with expertise in
          HTML, CSS, JavaScript, and more, Christian has a keen eye for detail
          and a commitment to staying abreast of industry trends. This ensures
          that every project undertaken is not only visually stunning but also
          optimized for peak performance.
        </p>
        <h2 id="skills">My Skills</h2>
        <div className="table">
          <ul>
            <div>
              <li>HTML</li>
              <img src="/pngs/5dots.png" alt="5 dots" />
            </div>
            <div>
              <li>CSS</li>
              <img src="/pngs/5dots.png" alt="5 dots" />
            </div>
            <div>
              <li>JAVASCRPT</li>
              <img src="/pngs/5dots.png" alt="5 dots" />
            </div>
            <div>
              <li>REACT</li>
              <img src="/pngs/4dots.png" alt="4 dots" />
            </div>
          </ul>
          <ul>
            <div>
              <li>NODE.JS</li>
              <img src="/pngs/4dots.png" alt="4 dots" />
            </div>
            <div>
              <li>EXPRESS</li>
              <img src="/pngs/4dots.png" alt="4 dots" />
            </div>
            <div>
              <li>GIT/GITHUB</li>
              <img src="/pngs/5dots.png" alt="5 dots" />
            </div>
            <div>
              <li>TAILWIND</li>
              <img src="/pngs/3dots.png" alt="3 dots" />
            </div>
          </ul>
        </div>
      </section>
      <section className="wireframe3">
        <h2 className="projects-headline" id="projects">
          Some Projects
        </h2>
        <h3>SILENT MOON</h3>
        <div className="projects">
          <a href="https://github.com/ChrissQAng/silentMoon">
            www.github.com/ChrissQAng/silentMoon
          </a>
          <a href="https://silentmoon.superprojekte.de/">
            <img src="/pngs/silentMoonPic.png" alt="screenshot" />
          </a>
        </div>
        <p>
          This Yoga App, created with React and Node.js, was developed in
          collaboration with two other students. I was responsible for almost
          the entire backend and also contributed to some frontend pages using
          Tailwind CSS.
        </p>
        <h3>FREE4GAME</h3>
        <div className="projects">
          <a href="https://github.com/ChrissQAng/FREE4GAME">
            www.github.com/ChrissQAng/FREE4GAME
          </a>
          <a href="https://free2-game-v2.vercel.app/">
            <img src="/pngs/free2GamePic.png" alt="screenshot" />
          </a>
        </div>
        <p>
          This FREE4GAME App, created with React and a Game API, was developed
          in collaboration with two other students. I was responsible for
          creating some main pages and establishing the connection to the API.
        </p>
      </section>
      <section className="wireframe4">
        <h2 id="contact">Contact Me</h2>
        <div className="contact-table">
          <a href="mailto:chrissangerer@web.de">chrissangerer@web.de</a>
          <a href="tel:01726691255">0172.6691255</a>
          <a href="https://www.linkedin.com/in/christian-angerer">
            www.linkedin.com/in/christian-angerer
          </a>
          <a href="https://github.com/ChrissQAng">www.github.com/ChrissQAng</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
