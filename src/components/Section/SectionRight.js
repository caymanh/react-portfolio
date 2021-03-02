import React from "react";
import "./Section.css";

function SectionRight() {
  return (
    <section className="yellow">
      <div className="container-md">
        <div className="row">
          <div className="col-md-5 my-3 my-sm-5">
            <img
              src="../../../image/server.svg"
              className="img-fluid mt-3 my-sm-5 my-3 my-sm-5"
              alt=""
            />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5 my-3 my-sm-5">
            <p className="sub-title fw-bold fs-5 my-3 my-sm-5 text-start">
              Content Management System
            </p>
            <p className="fs-1 fw-bold lh-sm mb-3 mb-sm-5 text-start">
              Create and manage content for your users easily
            </p>
            <p className="lh-md mb-3 mb-sm-5 text-start">
              <strong>
                I have experience developing applications for companies to allow
                their customers to manage data at their fingertips.
              </strong>
              I have worked on a fitness tracker for users to view, create, and
              track their daily workouts.
            </p>
            <a
              href="https://pacific-stream-43723.herokuapp.com/"
              target="_blank"
              className="btn btn-color text-white fw-bold mb-3 mb-sm-5 float-start"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              href="https://github.com/caymanh/workout-tracker"
              target="_blank"
              className="btn sub-title fw-bold mb-3 mb-sm-5 float-start"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionRight;
