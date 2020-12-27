import React from "react";

const NavItem = ({ contact }) => {
  const { name, link, download } = contact;
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
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
};

export default NavItem;
