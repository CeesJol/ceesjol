// import * as React from "react";
// import { Link } from "gatsby";

// // styles
// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// };
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// };

// const paragraphStyles = {
//   marginBottom: 48,
// };

// // markup
// const NotFoundPage = () => {
//   return (
//     <main style={pageStyles}>
//       <title>Not found</title>
//       <h1 style={headingStyles}>Page not found</h1>
//       <p style={paragraphStyles}>
//         Sorry{" "}
//         <span role="img" aria-label="Pensive emoji">
//           😔
//         </span>{" "}
//         we couldn’t find what you were looking for.
//         <br />
//         <br />
//         <Link to="/">Go home</Link>.
//       </p>
//     </main>
//   );
// };

// export default NotFoundPage;

import React from "react";
import { graphql } from "gatsby";
import { withTranslation } from "react-i18next";
import { withI18next } from "@wapps/gatsby-plugin-i18next";
import Layout from "../components/layout";
const NotFoundPage = ({ t }) => (
  <Layout>
    <h1>{t("NOT FOUND")}</h1>
    <p>{t("You just hit a route that doesn't exist... the sadness.")}</p>
  </Layout>
);
export default withI18next()(withTranslation()(NotFoundPage));
export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
