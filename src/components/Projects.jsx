import React from "react";
import "../styles/Projects.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Projects = () => {
  const projectData = [
    {
      img: "p1.png",
      title: "RANG BAZAR- Holi Products Site",
      desc: "RANG BAZAR is a Holi product e-commerce site built with React.js and Context API, featuring a responsive design and add-to-cart functionality for a smooth and festive shopping experience.",
      live: "https://w3-holi.vercel.app/",
      github: "https://github.com/Akshat1643/W3-holi"
    },
    {
      img: "p2.png",
      title: "Villa - Villa booking site ",
      desc: "Made a full responsive landing page of villa site",
      live: "https://akshat1643.github.io/villa-ts/",
      github: "https://github.com/Akshat1643/villa-ts"
    },
    {
      img: "p3.png",
      title: "TRIPCO - Trip Planner",
      desc: "Made a full responsive landing page of tripco",
      live: "https://akshat1643.github.io/Tripco-final/",
      github: "https://github.com/Akshat1643/Tripco-final"
    },
    {
      img: "p4.png",
      title: "WATCHLY- The Movie Site",
      desc: "WATCHLY is a sleek and user-friendly movie search application that allows users to discover movies effortlessly. Built with React.js, it integrates the OMDb API to fetch real-time movie data. Users can search for movies, view details, and navigate through pages seamlessly. The app features a modern UI, authentication with Auth0, and a fixed navbar for easy navigation",
      live: "https://movie-verse-orpin.vercel.app",
      github: "https://github.com/Akshat1643/MovieVerse"
    },
    {
      img: "p5.png",
      title: "WAVE EMS - employee management system",
      desc: "This Employee Management System (EMS) is a web-based application built using React.js, Context API, and Local Storage. It allows administrators to assign tasks to employees, while employees can view their tasks, mark them as completed, and manage their work efficiently.",
      live: "https://ems-two-sooty.vercel.app/",
      github: "https://github.com/Akshat1643/EMS"
    },
    {
      img: "p6.png",
      title: "W3villa clone ",
      desc: "Make W3villa cloe using bootstrap",
      live: "https://w3-clone-2.vercel.app/",
      github: "https://github.com/Akshat1643/W3-clone"
    }
  ];

  return (
    <section id="projects" className="projects p-4">
      <div className="project-container">
        <div className="heading_1">
          <span>Projects</span>
        </div>
        <div className="mt-2">
          <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3 g-4">
            {projectData.map((project, index) => (
              <div className="col card_col" key={index}>
                <Card className="h-100 project_card">
                  <Card.Img variant="top" src={project.img} className="card_img" />
                  <Card.Body className="d-flex flex-column card_body">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{project.desc}</Card.Text>
                    <div className="d-flex gap-2 mt-2">
                      <Button variant="primary" href={project.live} target="_blank">Live Demo</Button>
                      <Button variant="secondary" href={project.github} target="_blank">GitHub</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
