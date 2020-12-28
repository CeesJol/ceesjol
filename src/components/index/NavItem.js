import React from "react";
import { useTranslation } from "react-i18next";

const NavItem = ({ contact }) => {
  const { t } = useTranslation();
  const { name, link, download } = contact;
  if (download) {
    return (
      <div className="nav__item">
        <a href={link} download>
          {t(name)}
        </a>
      </div>
    );
  }
  return (
    <div className="nav__item">
      <a href={link} target="_blank" rel="noreferrer">
        {t(name)}
      </a>
    </div>
  );
};

export default NavItem;
