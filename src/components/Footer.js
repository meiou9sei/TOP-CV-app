import React from "react";

export default function Footer() {
  return (
    <footer>
      <p class='footer-text'>
        Created by{" "}
        <a href='https://github.com/meiou9sei' class='links' target='_blank'>
          meiou9sei
        </a>{" "}
        as part of{" "}
        <a href='https://theodinproject.com' class='links' target='_blank'>
          The Odin Project
        </a>{" "}
        course curriculum.
      </p>
      <p>
        <small>
          <a
            href='https://github.com/meiou9sei/TOP-CV-app'
            class='links'
            target='_blank'
          >
            See the code for this page
          </a>
        </small>
      </p>
    </footer>
  );
}
