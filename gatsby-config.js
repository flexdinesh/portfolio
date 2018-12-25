module.exports = {
  siteMetadata: {
    title: `Full Stack Dev`,
    description: `Dinesh Pandiyan is a Full Stack Engineer with amazing JavaScript skills. He is the author of open source projects like Typy, React Socks, React RenderInBrowser, Dev Landing Page and more.`,
    author: `@flexdinesh`,
    fullName: `Dinesh Pandiyan`,
    twitterHandle: `https://twitter.com/flexdinesh`,
    githubHandle: `https://github.com/flexdinesh`,
    stackOverflowHandle: `https://stackoverflow.com/story/flexdinesh`,
    devToHandle: `https://dev.to/flexdinesh`,
    mediumHandle: `https://medium.com/@flexdinesh`,
    linkedInHandle: `https://www.linkedin.com/in/dineshpandiyan/`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#5badf0`,
        theme_color: `#5badf0`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
