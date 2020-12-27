import React from "react";
import "../styles/components/button.scss";

const Button = ({ fn, href, text, color }) => {
  const getClassName = () => {
    const className = "button";
    if (color) {
      return `${className} ${className}--${color}`;
    }
    return className;
  };
  const getButton = () => (
    <div onClick={fn} className={getClassName()}>
      <p>{text}</p>
    </div>
  );
  if (fn) return getButton();
  return (
    <a href={href} target="_blank" referrer="noreferrer">
      {getButton()}
    </a>
  );
};

export default Button;
