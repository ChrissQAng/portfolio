import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>Christian Angerer</p>
      <div className="navigation">
        {/* <a href="">HOME</a> */}
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
