import React, { useState, useEffect } from "react";
import "./intro.css";
import image from "../assets/images/IMG_20240506_113151_661.jpg";

const texts = ["Software Engineer", "Developer", "Frontend Designer"];

const Intro = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];

      if (isDeleting) {
        setDisplayText(currentText.slice(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);

        if (letterIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before starting deletion
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, textIndex]);

  return (
    <section className="intro">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div className="intro-image">
          <div className="intro-image-container">
            <img
              className="header-image"
              src={image}
              alt="this is my intro image"
            />
          </div>
        </div>
        <div className="intro-text">
          <div className="header-title">Hi this is Hassen</div>
          <div className="header-subtitle gradient-text">
            I&#8217;m a <span id="typing-effect">{displayText}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
