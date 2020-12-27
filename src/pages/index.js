import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Splash from "../components/Splash";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import "../styles/index.scss";

const index = ({ data }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cees Jol</title>
      </Helmet>
      <Header />
      <main>
        <Splash data={data} />
        <Intro />
        {/* <Skills /> */}
        <Portfolio />
        {/* <Testimonials /> */}
        <CTA />
      </main>
      <Footer />
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
