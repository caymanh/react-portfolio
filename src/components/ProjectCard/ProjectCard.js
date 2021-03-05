import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
      <div className="col">
        <div className="card h-100">
          <img src={props.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.button} class="btn btn-primary">
              View Project
            </a>
            <a href={props.sideButton} class="btn btn-primary">
              Github Repository 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
