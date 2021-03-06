import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img src={props.image} className="card-img-top h-100" alt="" />
        <div className="card-body">
          <h5 className="card-title my-2">{props.title}</h5>
          <p className="card-text text-align my-3">{props.description}</p>
          <a
            href={props.button}
            className="btn btn-color text-white fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
          <a
            href={props.sideButton}
            className="btn sub-title fw-bold"
            target="_blank"
            rel="noreferrer"
          >
            Github Repository
          </a>
        </div>
        <div className="card-footer text-muted fw-light">{props.tech}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
