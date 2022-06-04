/**
 * Configure your Gatsby site with this file.
 *
 * To learn more, see: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* site configs */
  plugins: [
    {
      resolve: `gatsby-theme-portfolio-minimal`,
      options: {
        blogSettings: {
          path: '/blog',
          usePathPrefixForArticles: true,
        },
      },
    },
  ],
};
