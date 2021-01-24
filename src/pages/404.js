import * as React from "react";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

// markup
const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>{t("404.title")}</h1>
      <p style={paragraphStyles}>
        {t("404.subtitle")}
        <br />
        <br />
        <Link to="/">{t("404.link")}</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
