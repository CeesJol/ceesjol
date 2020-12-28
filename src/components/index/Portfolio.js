import React from "react";
import Project from "./Project";
import MY_PROJECTS from "../../constants/projects";
import "../../styles/components/portfolio.scss";

const Portfolio = () => {
  return (
    <section>
      <div className="container portfolio">
        <div className="content-container" style={{ paddingBottom: "0" }}>
          <h1>My recent work</h1>
          <p className="p-medium">
            Here is an overview of my most recent work in web development.
          </p>
        </div>
        {MY_PROJECTS.map((project) => (
          <Project project={project} key={`project-${project.name}`} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
