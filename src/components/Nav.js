import React from "react";
import "../styles/components/nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__item">
        <a
          href="https://linkedin.com/in/CeesJol"
          target="_blank"
          referrer="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="nav__item">
        <a
          href="https://github.com/CeesJol/CeesJol"
          target="_blank"
          referrer="noreferrer"
        >
          Github
        </a>
      </div>
      <div className="nav__item">
        <a href="mailto:info@ceesjol.nl">Email</a>
      </div>
      <div className="nav__item">
        <a href={`cees_jol_cv.pdf`} download>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Nav;
