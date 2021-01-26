import React from "react";
import { useTranslation } from "react-i18next";

const NavItem = ({ contact }) => {
  const { t } = useTranslation();
  const { name, link, download, translateLink } = contact;
  const getLink = () => {
    if (translateLink) return t(link);
    return link;
  };
  if (download) {
    return (
      <div className="nav__item">
        <a href={getLink()} download>
          {t(name)}
        </a>
      </div>
    );
  }
  return (
    <div className="nav__item">
      <a href={getLink()} target="_blank" rel="noreferrer">
        {t(name)}
      </a>
    </div>
  );
};

export default NavItem;
