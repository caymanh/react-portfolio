import React from "react";
import "./Section.css";

function SectionAbout(props) {
  return (
    <section class={props.className}>
      <div class="container-md text-white">
        <div class="row">
          <div class="col-md-5 mt-3 my-sm-5">
            <p class="sub-title fw-bold fs-5 my-3 my-sm-5 text-start">{props.header}</p>
            <p class="fs-1 fw-bold lh-sm mb-3 mb-sm-5 text-start">{props.title}</p>
            <p class="lh-md text-start">{props.contentOne}</p>
            <p class="1h-md text-start">{props.contentTwo}</p>
            <p class="text-start">{props.contentThree}</p>
            <p class="mb-3 mb-sm-5"></p>
            <a
              href={props.buttonHref}
              target="_blank"
              class="btn btn-color text-white fw-bold mb-3 mb-sm-5 float-start"
              rel="noreferrer"
            >
              {props.buttonText}
            </a>
            <a
              href={props.sideButtonHref}
              target="_blank"
              class="btn sub-title fw-bold mb-3 mb-sm-5 float-start"
              rel="noreferrer"
            >
              {props.sideButtonText}
            </a>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-5 mt-sm-5">
            <img
              src={props.image}
              class="img-fluid my-3 my-sm-5 py-3 py-sm-5"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAbout;
