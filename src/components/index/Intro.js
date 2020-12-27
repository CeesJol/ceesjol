import React from "react";
import "../../styles/components/intro.scss";
import Skills from "./Skills";

const Intro = () => {
  return (
    <section>
      <div className="container container--primary-color intro">
        <div className="content-container">
          <h1>Hi, I'm Cees</h1>
          <div className="content-container--small">
            <p className="p-large">
              I am a student Computer Science and Engineering at Delft UT with a
              passion for learning and teaching. I am experienced in
              Webdevelopment and UI/UX.
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Intro;
