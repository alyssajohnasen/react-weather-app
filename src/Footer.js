import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/alyssa-johnasen/"
          className="footer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alyssa Johnasen
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/alyssajohnasen/react-weather-app"
          className="footer"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
