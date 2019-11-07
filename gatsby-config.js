module.exports = {
  siteMetadata: {
    title: `Web Dev`,
    description: `Dinesh Pandiyan is a JavaScript Engineer, international speaker, blogger and the author of a few popular open source projects.`,
    author: `@flexdinesh`,
    fullName: `Dinesh Pandiyan`,
    twitterHandle: `https://twitter.com/flexdinesh`,
    githubHandle: `https://github.com/flexdinesh`,
    stackOverflowHandle: `https://stackoverflow.com/story/flexdinesh`,
    devToHandle: `https://dev.to/flexdinesh`,
    mediumHandle: `https://medium.com/@flexdinesh`,
    linkedInHandle: `https://www.linkedin.com/in/dineshpandiyan/`,
    siteUrl: `https://dineshpandiyan.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#5badf0`,
        theme_color: `#5badf0`,
        display: `minimal-ui`,
        icon: `src/images/boy.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-115359405-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
