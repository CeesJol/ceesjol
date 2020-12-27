import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/index/Header";
import Splash from "../components/index/Splash";
import Intro from "../components/index/Intro";
// import Skills from "../components/index/Skills";
import Portfolio from "../components/index/Portfolio";
// import Testimonials from "../components/index/Testimonials";
import CTA from "../components/index/CTA";
import Footer from "../components/index/Footer";
import "../styles/index.scss";

const index = ({ data }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cees Jol</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Computer Science Student and Web Developer, based in Delft, the Netherlands"
        />
        <meta
          name="keywords"
          content="Cees Jol, Computer Science, Delft, developer, web developer, React, Vue, HTML, JavaScript"
        />
        <meta name="author" content="Cees Jol"></meta>
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
