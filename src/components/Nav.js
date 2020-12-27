import React from "react";
import CONTACT_INFO from "../constants/contact";
import "../styles/components/nav.scss";

const Nav = () => {
  const drawItem = ({ name, link, icon, download }) => {
    if (download) {
      return (
        <div className="nav__item">
          <a href={link} download>
            {name}
          </a>
        </div>
      );
    }
    return (
      <div className="nav__item">
        <a href={link} target="_blank" referrer="noreferrer">
          {name}
        </a>
      </div>
    );
  };
  return (
    <div className="nav">{CONTACT_INFO.map((item) => drawItem(item))}</div>
  );
};

export default Nav;
