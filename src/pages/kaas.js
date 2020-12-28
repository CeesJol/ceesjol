import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { useTranslation } from "react-i18next";

const KaasPage = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("home.title")}</h1>
      {t("home.content")
        .split("\n")
        .map(function (item, key) {
          return <p key={key}>{item}</p>;
        })}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <p>fuck</p>
      </div>
      <Link to="/page-2/">{t("home.link")}</Link>
    </div>
  );
};

export default KaasPage;
