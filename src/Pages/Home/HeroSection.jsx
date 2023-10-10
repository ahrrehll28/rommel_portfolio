import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rommel bolongon</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I'm a full-stack web developer who loves to create Web Applications.
            I'm well-versed in HTML, CSS, TypeScript, JavaScript, ReactJs,
            ExpressJS, and MySQL. I am passionate about improving my programming
            skills. and I enjoy working and collaborating with people.
          </p>
        </div>
        <button className="btn btn-primary">
          <Link to="Contact">Get In Touch</Link>
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/mel.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
