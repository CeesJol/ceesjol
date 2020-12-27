import React from "react";
import "../../styles/components/button.scss";

const Button = ({ fn, href, text, color }) => {
  const getClassName = () => {
    const className = "button";
    if (color) {
      return `${className} ${className}--${color}`;
    }
    return className;
  };
  const getButton = () => (
    // Disable eslint here, since the a-tag already gives tab support
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div onClick={fn} onKeyDown={fn} className={getClassName()} role="button">
      <p>{text}</p>
    </div>
  );
  if (fn) return getButton();
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {getButton()}
    </a>
  );
};

export default Button;
