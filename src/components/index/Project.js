import React from "react";
import Img from "gatsby-image";
import Button from "../general/Button";
import "../../styles/components/project.scss";
import { useTranslation } from "react-i18next";

const Project = ({ project, img }) => {
  const { t } = useTranslation();
  const drawDesc = (desc) => {
    return (
      <div key={`desc-${project.name}-${desc.title}`}>
        <h2>{t(desc.title)}</h2>
        <p>{t(desc.description)}</p>
      </div>
    );
  };
  const drawFeatures = () => {
    if (!project.features) return;
    return (
      <>
        <h2>{t("projects.features")}</h2>
        <ul>{t(project.features).map((feature) => drawFeature(feature))}</ul>
      </>
    );
  };
  const drawFeature = (feature) => {
    return <li key={`desc-${project.name}-${feature}`}>{feature}</li>;
  };
  const drawTechnologies = () => {
    if (!project.technologies) return;
    return (
      <>
        <h2>{t("projects.technologies")}</h2>
        <ul>{t(project.technologies).map((tech) => drawTech(tech))}</ul>
      </>
    );
  };
  const drawTech = (tech) => {
    return <li key={`desc-${project.name}-${tech}`}>{tech}</li>;
  };
  return (
    <div className="project">
      <div className="content-container">
        <div className="project__header">
          <h1>{t(project.name)}</h1>
          <div className="buttons-container">
            <Button
              href={project.link}
              text={t("projects.buttons.visitSite")}
              color="primary-color"
            />
            {project.sourceLink && (
              <Button
                href={project.sourceLink}
                text={t("projects.buttons.viewCode")}
              />
            )}
          </div>
        </div>
        <div className="project__body">
          <div className="project__left">
            <a href={project.link} target="_blank" rel="noreferrer">
              <Img
                className="project--image"
                alt={t(project.name)}
                title={t(project.name)}
                fluid={img.childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="project__right">
            {project.description.map((desc) => drawDesc(desc))}
            {drawFeatures()}
            {drawTechnologies()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
