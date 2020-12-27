import React from "react";
import Button from "../general/Button";
import "../../styles/components/project.scss";

const Project = ({ project }) => {
  const drawDesc = (desc) => {
    return (
      <div key={`desc-${project.name}-${desc.title}`}>
        <h2>{desc.title}</h2>
        <p>{desc.description}</p>
      </div>
    );
  };
  const drawFeatures = () => {
    if (!project.features) return;
    return (
      <>
        <h2>Notable Features</h2>
        <ul>{project.features.map((feature) => drawFeature(feature))}</ul>
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
        <h2>Technologies Used</h2>
        <ul>{project.technologies.map((tech) => drawTech(tech))}</ul>
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
          <h1>{project.name}</h1>
          <div className="buttons-container">
            <Button
              href={project.link}
              text="Visit site"
              color="primary-color"
            />
            {project.sourceLink && (
              <Button href={project.sourceLink} text="View code" />
            )}
          </div>
        </div>
        <div className="project__body">
          <div className="project__left">
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                className="project--image"
                src={`projects/${project.img}`}
                alt={project.name}
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
