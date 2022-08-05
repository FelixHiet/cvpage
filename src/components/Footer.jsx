import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer className="py-3 footerBackground footerBorder">
        <div className="container">
          <h5 className="text-center">Contact</h5>

          <hr className="hrWidth" />

          <p className="text-center">
            <a
              className="textColorFooter fontSizeFooter"
              href="https://www.linkedin.com/in/felix-hietaranta-b37aa716b/"
            >
              Linkedin: https://www.linkedin.com/in/felix-hietaranta-b37aa716b/
            </a>
          </p>

          <p className="text-center text-light">
            <a
              className="textColorFooter fontSizeFooter"
              href="https://github.com/FelixHiet"
            >
              Github: https://github.com/FelixHiet
            </a>
          </p>

          <p className="text-center">
            <a
              className="textColorFooter fontSizeFooter"
              href="mailto:felixfab.hietaranta@gmail.com"
            >
              Email: felixfab.hietaranta@gmail.com
            </a>
          </p>

          <p className="text-center textColorPhone fontSizeFooter">
            Phone: +358 400 165 908
          </p>

          <hr className="hrWidth" />

          <p className="m-3 text-center footerCopyrightTextColor fontSizeFooter">
            Copyright &copy; Felix Hietaranta 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

/*
fixed-bottom makes the footer stay in sight

https://www.linkedin.com/in/felix-hietaranta-b37aa716b/
*/
