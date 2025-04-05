import React from "react";
import "../styles/About.scss"


const About = () => {
  return (
    <section id = "about" className="hero_1 p-2  p-md-4">
      <div className="hero-container">
      <div className="hero-right">
          <div className="img_2">
            <img src="/akshat2.png" alt="" />
          </div>
        </div>
        <div className="hero-left">
          <div className="Name">
            <span>About Me </span>
          </div>
          <div className="Discription">
                <p>
                Hi, I'm Akshat Agrawal, a passionate and dedicated Full Stack Developer based in India. I specialize in creating web applications using the MERN stack — that's MongoDB, Express.js, React, and Node.js — along with a strong foundation in HTML, CSS, JavaScript, SQL, and Python.

I recently completed a 3-month internship at W3 Villa as a Software Developer, where I gained hands-on experience in real-world web development. I’m known for my positive attitude, strong problem-solving skills, and eagerness to learn new technologies. I never give up easily and take pride in my human skills, especially teamwork and communication.

Currently, I’m diving deeper into the MERN stack and aiming to grow into a successful and well-rounded software developer. When I’m not coding, you’ll probably find me vibing to some music — it’s my favorite way to recharge.
                </p>
          </div>
          {/* <div className="Contact-link">
            <a href="mailto:akshat160403@gmail.com">Contact Me</a>
          </div> */}
        </div>
       
      
      </div>
      <div className="second-blur"></div>
    </section>
  );
};

export default About;
