module.exports = {
  siteMetadata: {
    title: 'PAAANN TECH - Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PAAANN TECH',
        short_name: 'PAAANN TECH',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};
