import React from "react";
import "./Section.css";

function SectionAbout(props) {
  return (
    <section className={props.className}>
      <div className="container-md text-white">
        <div className="row">
          <div className="col-md-5 mt-3 my-sm-5">
            <p className="sub-title fw-bold fs-5 my-3 my-sm-5 text-start">
              {props.header}
            </p>
            <p className="fs-1 fw-bold lh-sm mb-3 mb-sm-5 text-start">
              {props.title}
            </p>
            <p className="lh-md text-start">{props.contentOne}</p>
            <p className="1h-md text-start">{props.contentTwo}</p>
            <p className="text-start">{props.contentThree}</p>
            <p className="mb-3 mb-sm-5"></p>
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
          <div className="col-md-5 mt-sm-5">
            <img
              src={props.image}
              className="img-fluid my-3 my-sm-5 py-3 py-sm-5"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
