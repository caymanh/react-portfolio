import React from "react";
import Header from "../../components/Header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Footer from "../../components/Footer/Footer";
import project from "../../project.json";

function Project() {
  return (
    <div className="yellow">
      <Header />
      <div className="container">
        <p className="fs-1 fw-bold 1h-sm mt-5">My Recent Projects</p>
        <p className="sub-title fs-5">
          Here are a few projects that I have worked on recently.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          <ProjectCard
            image={project[0].image}
            title={project[0].title}
            description={project[0].description}
            button={project[0].button}
            sideButton={project[0].sideButton}
            tech={project[0].tech}
          />
          <ProjectCard
            image={project[1].image}
            title={project[1].title}
            description={project[1].description}
            button={project[1].button}
            sideButton={project[1].sideButton}
            tech={project[1].tech}
          />
          <ProjectCard
            image={project[2].image}
            title={project[2].title}
            description={project[2].description}
            button={project[2].button}
            sideButton={project[2].sideButton}
            tech={project[2].tech}
          />
          <ProjectCard
            image={project[3].image}
            title={project[3].title}
            description={project[3].description}
            button={project[3].button}
            sideButton={project[3].sideButton}
            tech={project[3].tech}
          />
          <ProjectCard
            image={project[4].image}
            title={project[4].title}
            description={project[4].description}
            button={project[4].button}
            sideButton={project[4].sideButton}
            tech={project[4].tech}
          />
          <ProjectCard
            image={project[5].image}
            title={project[5].title}
            description={project[5].description}
            button={project[5].button}
            sideButton={project[5].sideButton}
            tech={project[5].tech}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project;
