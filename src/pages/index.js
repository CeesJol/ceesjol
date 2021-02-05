import React from "react";
import Splash from "../components/index/Splash";
import Intro from "../components/index/Intro";
// import Skills from "../components/index/Skills";
import Portfolio from "../components/index/Portfolio";
// import Testimonials from "../components/index/Testimonials";
import CTA from "../components/index/CTA";

import "../styles/index.scss";

const index = () => {
  return (
    <div>
      <main>
        <Splash />
        <Intro />
        {/* <Skills /> */}
        <Portfolio />
        {/* <Testimonials /> */}
        <CTA />
      </main>
    </div>
  );
};

export default index;
