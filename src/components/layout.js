import React from "react";
import { Helmet } from "react-helmet";
import { withTrans } from "../i18n/withTrans";
import Header from "./index/Header";
import Footer from "./index/Footer";

const Layout = ({ children, t, i18n }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cees Jol</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Computer Science Student and Web Developer, based in Delft, the Netherlands"
        />
        <meta
          name="keywords"
          content="Cees Jol, Computer Science, Delft, developer, web developer, React, Vue, HTML, JavaScript"
        />
        <meta name="author" content="Cees Jol"></meta>
      </Helmet>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default withTrans(Layout);
