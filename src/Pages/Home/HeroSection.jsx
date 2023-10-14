import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const textArray = [
  "Full Stack Web Developer",
  "Graphics Designer",
  "Video Editor",
];

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
            I am a versatile professional skilled in graphic arts, web design,
            video editing, web development, software engineering, and social
            media management. In graphic arts, I emphasize aesthetic appeal and
            tailored designs. As a web designer, I create user-friendly and
            visually captivating websites. Video editing enables me to transform
            raw footage into engaging stories. My proficiency as a web developer
            and software engineer helps in building functional and scalable
            applications. In social media management, I excel in curating
            engaging content and utilizing strategic approaches for brand
            enhancement. My multidisciplinary expertise allows me to deliver
            comprehensive solutions, staying updated with the latest trends and
            technologies. My ultimate goal is to contribute my skills and
            knowledge to drive success in every project I undertake.
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
