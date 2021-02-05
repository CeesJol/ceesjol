import React from "react";
import "../../styles/components/splash.scss";
import Img from "gatsby-image";
import { useTranslation } from "react-i18next";
import { useStaticQuery, graphql } from "gatsby";

const Splash = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cees_circular.png" }) {
        childImageSharp {
          fixed(width: 225, height: 225) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const { t } = useTranslation();
  return (
    <section>
      <div className="container splash">
        <div className="content-container content-container--extra-vertical-space">
          <h1>{t("splash.title")}</h1>
          <h2 className="p-large" style={{ marginTop: "2rem" }}>
            {t("splash.subtitle")}
          </h2>
          <Img
            className="splash--image"
            fixed={data.file.childImageSharp.fixed}
            alt="Cees Jol"
            title="Cees Jol"
          />
        </div>
      </div>
    </section>
  );
};

export default Splash;
