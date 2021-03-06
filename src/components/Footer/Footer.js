import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="white">
      <div className="container-md my-3 my-sm-5">
        <div className="row">
          <div className="col-md-4 my-3 my-sm-5">
            <div className="container-md gray py-5">
              <a
                href="https://github.com/caymanh"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./image/github.svg"
                  className="img-fluid rounded mx-auto d-block"
                  alt=""
                  width="50"
                  height="50"
                />
              </a>
            </div>
          </div>
          <div className="col-md-4 my-3 my-sm-5">
            <div className="container-md gray py-5">
              <a
                href="https://www.linkedin.com/in/caymanheng/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./image/linkedin.svg"
                  className="img-fluid rounded mx-auto d-block"
                  alt=""
                  width="50"
                  height="50"
                />
              </a>
            </div>
          </div>
          <div className="col-md-4 my-3 my-sm-5">
            <div className="container-md gray py-5">
              <a href="mailto:hengcayman@gmail.com">
                <img
                  src="./image/email.svg"
                  className="img-fluid rounded mx-auto d-block"
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
