import React from "react";
import "../../styles/components/splash.scss";
import Img from "gatsby-image";
import { useTranslation } from "react-i18next";

const Splash = ({ data }) => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container splash">
        <div className="content-container">
          <h1>{t("splash.title")}</h1>
          <h2 className="p-large" style={{ marginTop: "2rem" }}>
            {t("splash.subtitle")}
          </h2>
          <Img
            className="splash--image"
            fixed={data.file.childImageSharp.fixed}
            alt="Cees Jol"
          />
        </div>
      </div>
    </section>
  );
};

export default Splash;

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "cees.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;

// import React from "react";
// import { graphql } from "gatsby";
// import Img from "gatsby-image";
// // import Layout from "../components/layout"
// const HomePage = ({ data }) => {
//   return (
//     <div>
//       <Img
//         className="headshot"
//         fixed={data.file.childImageSharp.fixed}
//         alt=""
//       />
//     </div>
//   );
// };
// export const query = graphql`
//   query {
//     file(relativePath: { eq: "cees.png" }) {
//       childImageSharp {
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;
// export default HomePage;
