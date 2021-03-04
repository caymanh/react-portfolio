import React from "react";
import "./Section.css";

function SectionLeft(props) {
  return (
    <section className={props.ClassName}>
      <div className="container-md">
        <div className="row">
          <div className="col-md-5 my-3 my-sm-5 ">
            <p className="sub-title fs-5 my-3 my-sm-5 text-start">
              {props.header}
            </p>
            <p className="fs-1 fw-bold lh-sm mb-3 mb-sm-5 text-start">
              {props.title}
            </p>
            <p className="lh-md mb-3 mb-sm-5 text-start">{props.content}</p>
            <a
              href={props.buttonHref}
              target="_blank"
              className="btn btn-color text-white fw-bold mb-3 mb-sm-5 float-start"
              rel="noreferrer"
            >
              {props.buttonText}
            </a>
            <a
              href={props.sideButtonHref}
              target="_blank"
              className="btn sub-title fw-bold mb-3 mb-sm-5 float-start"
              rel="noreferrer"
            >
              {props.sideButtonText}
            </a>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5 my-3 my-sm-5">
            <img src={props.image} className="img-fluid my-3 my-sm-5" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionLeft;
