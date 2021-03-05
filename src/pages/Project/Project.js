import React from "react";
import Header from "../../components/Header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Footer from "../../components/Footer/Footer";

function Project() {
  return (
    <div className="yellow">
      <Header />
      <div className="container">
        <p className="fs-1 fw-bold mt-5">My Recent Projects</p>
        <p>Here are a few projects that I have worked on recently.</p>
        <ProjectCard />
      </div>

      <Footer />
    </div>
  );
}

export default Project;
