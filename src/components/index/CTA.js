import React from "react";
import Button from "../general/Button";
import "../../styles/components/cta.scss";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  return (
    <div className="container container--font-color">
      <div className="content-container cta">
        <h1 className="cta--title">{t("cta.title")}</h1>
        <p className="p-medium">{t("cta.subtitle")}</p>
        <Button
          text={t("cta.email")}
          href="mailto:info@ceesjol.nl"
          color="font-color"
        />
      </div>
    </div>
  );
};

export default CTA;
