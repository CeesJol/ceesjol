import React from "react";
import { Helmet } from "react-helmet";
import { withTrans } from "../i18n/withTrans";
import Header from "./index/Header";
import Footer from "./index/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Cees Jol</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Computer Science Student and Web Developer, based in Delft, the Netherlands"
        />
        <meta
          name="keywords"
          content="Cees Jol, Computer Science, Delft, developer, web developer, React, Vue, HTML, JavaScript"
        />
        <meta name="author" content="Cees Jol"></meta>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X9MKDFE91K"
        ></script>
        <script type="application/ld+json">{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('config', 'G-X9MKDFE91K');
				`}</script>
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
