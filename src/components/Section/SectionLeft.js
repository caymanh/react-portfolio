import React from "react";
import "./Section.css";

function SectionLeft() {
  return (
    <section className="gray">
    <div className="container-md">
      <div className="row">
        <div className="col-md-5 my-3 my-sm-5 ">
          <p className="sub-title fs-5 my-3 my-sm-5 text-start">
            Let's explore and create together.
          </p>
          <p className="fs-1 fw-bold lh-sm mb-3 mb-sm-5 text-start">
            Full Stack Web Developer
          </p>
          <p className="lh-md mb-3 mb-sm-5 text-start">
            My name is Cayman Heng.
            <strong
              > I am a developer with a background in Management
              Consulting.</strong
            >
            I help businesses develop human-centered design interfaces that
            are aligned with their strategy.
          </p>
          <a
            href="https://calendly.com/caymanh"
            target="_blank"
            className="btn btn-color text-white fw-bold mb-3 mb-sm-5 float-start"
            rel="noreferrer"
            >Book An Appointment</a
          >
          <a
            href="mailto:hengcayman@gmail.com"
            target="_blank"
            className="btn sub-title fw-bold mb-3 mb-sm-5 float-start"
            rel="noreferrer"
            >Email Me</a
          >
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5 my-3 my-sm-5">
          <img
            src="../../../image/build.svg"
            className="img-fluid my-3 my-sm-5"
            alt="Build"
          />
        </div>
      </div>
    </div>
  </section>
   
  );
}

export default SectionLeft;
