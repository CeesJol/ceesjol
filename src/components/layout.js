import React from "react";
import { withTrans } from "../i18n/withTrans";
import Header from "./header";

const Layout = ({ children, t, i18n }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, {t("home.footerText")}
      </footer>
    </>
  );
};

export default withTrans(Layout);
