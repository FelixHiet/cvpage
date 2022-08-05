import React from "react";
import githubpic from "../images/githubpic.png";
import gmailpic from "../images/gmailpic.png";
import linkedinpic from "../images/linkedin.png";

// refreshing web page = scroll back to the top.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function Contact() {
  return (
    <div className="container-fluid ">
      <div className="contact ContactMarginBottom">
        <div className="container text-center mt-4 mb-4 fontColorDarkBrown">
          <h3>How to find me:</h3>
        </div>

        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-lg-4">
              <a
                href="https://www.linkedin.com/in/felix-hietaranta-b37aa716b/"
                target="blank"
              >
                <img
                  className="rounded"
                  src={linkedinpic}
                  alt=""
                  width="230"
                  height="230"
                />
              </a>

              <p className="mt-2 contactColor contactImgFontSize">
                Link to my linkedin page
              </p>
            </div>

            <div className="col-lg-4">
              <a href="https://github.com/FelixHiet" target="blank">
                <img
                  className="rounded"
                  src={githubpic}
                  alt=""
                  width="230"
                  height="230"
                />
              </a>

              <p className="mt-2 contactColor contactImgFontSize">
                Link to my Github page
              </p>
            </div>

            <div className="col-lg-4">
              <a href="mailto:felixfab.hietaranta@gmail.com">
                <img src={gmailpic} alt="" width="230" height="230" />
              </a>

              <p className="mt-2 contactColor contactImgFontSize">
                Link to contact me via email
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
