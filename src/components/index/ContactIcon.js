import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/components/contact-icon.scss";

const ContactIcon = ({ contact }) => {
  const { t } = useTranslation();
  const { name, link, icon, download, translateLink, translateName } = contact;
  const getLink = () => {
    if (translateLink) return t(link);
    return link;
  };
  const getTitle = () => {
    if (translateName) return t(name);
    return name;
  };
  if (download) {
    return (
      <a href={getLink()} download>
        <div className="contact-icon" title={getTitle()}>
          {icon()}
        </div>
      </a>
    );
  }
  return (
    <a href={getLink()} target="_blank" rel="noreferrer">
      <div className="contact-icon" title={getTitle()}>
        {/* <img src={`contact/${icon}.svg`} alt={`Link to my ${icon}`} /> */}
        {icon()}
      </div>
    </a>
  );
};

export default ContactIcon;
