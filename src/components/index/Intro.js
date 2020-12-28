import React from "react";
import "../../styles/components/intro.scss";
import Skills from "./Skills";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container container--primary-color intro">
        <div className="content-container">
          <h1>{t("intro.title")}</h1>
          <div className="content-container--small">
            <p className="p-large">{t("intro.subtitle")}</p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Intro;
