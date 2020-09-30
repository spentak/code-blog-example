module.exports = {
  siteMetadata: {
    siteTitle: `Devslopes Tutorials`,
    defaultTitle: `Devslopes Tutorials`,
    siteTitleShort: `Devslopes Tutorials`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://devslopes.com/tutorials`,
    siteAuthor: `Devslopes`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: ``,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devslopes`,
        short_name: `Devslopes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
