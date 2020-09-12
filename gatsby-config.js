module.exports = {
  pathPrefix: "/bugs-nyu.github.io",
  siteMetadata: {
    title: `BUGS NYU`,
    description: `Join BUGS! NYU's premier open source club!`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BUGS NYU`,
        short_name: `BUGS`,
        start_url: `/`,
        background_color: `#410092`,
        theme_color: `#410092`,
        display: `minimal-ui`,
        icon: `src/images/logo/bugs.gif`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://bugs-nyu.github.io/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
