import React from "react";
import "../styles/components/contact-icon.scss";

const ContactIcon = ({ contact }) => {
  const { link, icon, download } = contact;
  if (download) {
    return (
      <a href={link} download>
        <div className="contact-icon">{icon()}</div>
      </a>
    );
  }
  return (
    <a href={link} target="_blank" referrer="noreferrer">
      <div className="contact-icon">
        {/* <img src={`contact/${icon}.svg`} alt={`Link to my ${icon}`} /> */}
        {icon()}
      </div>
    </a>
  );
};

export default ContactIcon;
