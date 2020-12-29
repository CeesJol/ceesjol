import React from "react";
import Project from "./Project";
import MY_PROJECTS from "../../constants/projects";
import "../../styles/components/portfolio.scss";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container portfolio">
        <div className="content-container" style={{ paddingBottom: "0" }}>
          <h1>{t("portfolio.title")}</h1>
          <p className="p-medium">{t("portfolio.subtitle")}</p>
        </div>
        {MY_PROJECTS.map((project) => (
          <Project project={project} key={`project-${project.name}`} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
