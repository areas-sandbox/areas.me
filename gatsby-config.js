/**
  * gatsby config
  * to learn more, see: https://www.gatsbyjs.com/docs/gatsby-config/
 **/

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-portfolio-minimal`,
      options: {
        blogSettings: {
          path: '/thoughts',
          usePathPrefixForArticles: true,
        },
      },
    },
  ],
};
