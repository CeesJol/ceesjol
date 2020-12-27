import React from "react";
import Button from "./Button";
import "../styles/components/cta.scss";

const CTA = () => {
  return (
    <div className="container container--font-color">
      <div className="content-container cta">
        <h1>Contact me</h1>
        <p className="p-medium">
          If you are interested in working with me, feel free to send me an
          email.
        </p>
        <Button
          text="Email me"
          href="mailto:info@ceesjol.nl"
          color="font-color"
        />
      </div>
    </div>
  );
};

export default CTA;
