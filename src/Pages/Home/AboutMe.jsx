export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/mel.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            A hard-working programmer that has an aptitude for creating
            solutions in the least amount of time. And also looking forward to
            use my programming skills for the growth of the organization and
            myself.
          </p>
          {/* <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p> */}
        </div>
      </div>
    </section>
  );
}
