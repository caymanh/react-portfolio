import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section class="white">
      <div class="container-md my-3 my-sm-5">
        <div class="row">
          <div class="col-md-4 my-3 my-sm-5">
            <div class="container-md gray py-5">
              <a
                href="https://github.com/caymanh"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../../../image/github.svg"
                  class="img-fluid rounded mx-auto d-block"
                  alt=""
                  width="50"
                  height="50"
                />
              </a>
            </div>
          </div>
          <div class="col-md-4 my-3 my-sm-5">
            <div class="container-md gray py-5">
              <a
                href="https://www.linkedin.com/in/caymanheng/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../../../image/linkedin.svg"
                  class="img-fluid rounded mx-auto d-block"
                  alt=""
                  width="50"
                  height="50"
                />
              </a>
            </div>
          </div>
          <div class="col-md-4 my-3 my-sm-5">
            <div class="container-md gray py-5">
              <a href="mailto:hengcayman@gmail.com">
                <img
                  src="../../../image/email.svg"
                  class="img-fluid rounded mx-auto d-block"
                  alt=""
                  width="50"
                  height="50"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
