import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <footer className="footer-container flex-column-center">
        <p className="footer-header">
          Made with <span className="keyword">{`</>`}</span> by Bhavin Patel.
        </p>
        <ul>
          <li className="footer-item">
            <a
              href="https://github.com/bhavinology"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="footer-icon-style"
              />
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://twitter.com/Bhavinology"
              target="_blank"
              rel="noreferrer"
              aria-label="twitter"
            >
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="footer-icon-style"
              />
            </a>
          </li>
          <li className="footer-item footer-icon-style">
            <a
              href="https://in.linkedin.com/in/bhavinology"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              {/* <i
                class="fa fa-linkedin footer-icon fa-lg"
                aria-hidden="true"
              ></i> */}
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="footer-icon-style"
              />
            </a>
          </li>
        </ul>
        <p className="copywright">© 2022 | GeoFlix</p>
      </footer>
    </>
  );
}

export default Footer;
