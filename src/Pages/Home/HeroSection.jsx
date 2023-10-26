import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const textArray = ["Full Stack Developer", "Graphics Designer", "Video Editor", "SMM"];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fading out
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setIsVisible(true); // Start fading in with the new text
      }, 500); // Adjust this duration as needed for the fade out period
    }, 5000); // Change text every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm ROMMEL BOLONGON</p>
          <h1 className="hero--section--title">
            <span
              className={`hero--section-title--color ${
                isVisible ? "visible" : "hidden"
              }`}
            >
              {textArray[currentTextIndex]}
            </span>
          </h1>
          <p className="hero--section-description">
            As a versatile professional, my skills span a broad spectrum. From
            aesthetic graphic designs to user-friendly websites and engaging
            video stories, my expertise spans a wide range. I'm committed to
            staying updated with the latest trends and technologies, ensuring
            comprehensive and successful project outcomes.
          </p>
        </div>
        <button className="btn btn-primary">
          <Link to="Contact">Get In Touch</Link>
        </button>
      </div>
      <div className="hero--section--img">
        <img
          // style={{ width: 500, height: 600 }}
          src="./img/mel.png"
          alt="Hero Section"
        />
      </div>
    </section>
  );
}
