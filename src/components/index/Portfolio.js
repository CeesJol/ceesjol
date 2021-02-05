import React from "react";
import Project from "./Project";
import MY_PROJECTS from "../../constants/projects";
import "../../styles/components/portfolio.scss";
import { useTranslation } from "react-i18next";
import { useStaticQuery, graphql } from "gatsby";

const Portfolio = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        nodes {
          src {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <section>
      <div className="container portfolio">
        <div className="content-container" style={{ paddingBottom: "0" }}>
          <h1>{t("portfolio.title")}</h1>
          <p className="p-medium">{t("portfolio.subtitle")}</p>
        </div>
        {MY_PROJECTS.map((project, index) => (
          <Project
            project={project}
            img={data.allProjectsJson.nodes[index].src}
            key={`project-${project.name}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
