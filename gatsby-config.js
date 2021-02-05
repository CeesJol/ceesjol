module.exports = {
  siteMetadata: {
    title: "Cees Jol",
    siteUrl: "https://ceesjol.nl",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-json`,
      // Leave this commented out in recent versions of this plugin
      // options: {
      //   typeName: `Json`, // a fixed string
      // },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // add relative path to your layout component
        component: `${__dirname}/src/components/layout.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-X9MKDFE91K", // Google Analytics / GA
        ],
      },
    },
  ],
};
