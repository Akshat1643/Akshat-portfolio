import React from "react";
import "../styles/Experience.scss";
const Experience = () => {
  return (
    <section id="experience" className="hero_2 p-4">
      <div className="hero-container">
        <div className="hero-left">
          <div className="Name">
            <span>Experience </span>
          </div>
          <div className="Discription">
            <p>
              I worked as a <strong>Software Developer Intern</strong> at{" "}
              <strong>W3 Villa</strong> for 3 months, where I contributed to
              real-world web applications using <strong>React.js</strong> and{" "}
              <strong>Node.js</strong> under the mentorship of senior
              developers.
              <br />
              <br />
              During my internship, I actively collaborated on several modules,
              gaining hands-on experience with <strong>React.js</strong>,{" "}
              <strong>Express.js</strong>, and building{" "}
              <strong>RESTful APIs</strong>. This experience helped me
              strengthen my understanding of both frontend and backend
              development.
              <br />
              <br />I followed clean code practices, improved my debugging
              skills, and learned techniques for optimizing performance.
              Additionally, I participated in daily stand-ups, code reviews, and
              worked within an agile development environment, enhancing my
              teamwork and communication skills.
            </p>
          </div>
        </div>
        <div className="hero-right">
          <div className="img">
            <img src="/AKSHAT12.png" alt="" />
          </div>
        </div>
      </div>
      <div className="first-blur"></div>
    </section>
  );
};

export default Experience;
