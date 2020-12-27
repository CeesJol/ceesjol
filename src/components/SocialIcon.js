import React from "react";
import "../styles/components/social-icon.scss";

const SocialIcon = ({ social }) => {
  const { link, icon } = social;
  return (
    <a href={link} target="_blank" referrer="noreferrer">
      <div className="social-icon">
        <img src={`social/${icon}.svg`} alt={`Link to my ${icon}`} />
      </div>
    </a>
  );
};

export default SocialIcon;
