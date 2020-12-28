module.exports = {
  siteMetadata: {
    title: "Cees Jol",
    siteUrl: "https://ceesjol.nl",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-X9MKDFE91K",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-lingui",
        short_name: "starter",
        start_url: "/gatsby-i18n/gatsby-starter-i18next/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    {
      resolve: "@wapps/gatsby-plugin-i18next",
      options: {
        availableLngs: ["en", "el"],
        fallbackLng: "el",
        i18nextOptions: {
          debug: false,
        },
      },
    },
  ],
};
