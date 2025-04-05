import React from "react";
import "../styles/Hero.scss";
const Hero = () => {
  return (
    <section className="hero p-2  p-md-4">
      <div className="hero-container">
        <div className="hero-left">
          <div className="Name">
            <span>Hi, I’m Akshat </span>
          </div>
          <div className="Discription p-2">
            <p>
            I'm a Full Stack Developer skilled in React and Node.js, with a passion for building responsive and user-friendly web applications. I enjoy working on both frontend and backend, and I'm always eager to learn new technologies and improve with every project.
            </p>
          </div>
          <div className="Contact-link">
            <a href="mailto:akshat160403@gmail.com">Contact Me</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="img">
            <img src="/akshat16.jpeg" alt="" />
          </div>
        </div>
      
      </div>
      <div className="first-blur"></div>
     
    </section>
  );
};

export default Hero;
