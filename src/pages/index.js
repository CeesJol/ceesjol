import React from "react";
import Splash from "../components/index/Splash";
import Intro from "../components/index/Intro";
// import Skills from "../components/index/Skills";
import Portfolio from "../components/index/Portfolio";
// import Testimonials from "../components/index/Testimonials";
import CTA from "../components/index/CTA";

import "../styles/index.scss";

const index = ({ data }) => {
  return (
    <div>
      <main>
        <Splash data={data} />
        <Intro />
        {/* <Skills /> */}
        <Portfolio />
        {/* <Testimonials /> */}
        <CTA />
      </main>
    </div>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "cees_circular.png" }) {
      childImageSharp {
        fixed(width: 225, height: 225) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default index;
