module.exports = {
  siteMetadata: {
    title: `Full Stack Dev`,
    description: `Dinesh Pandiyan is a Full Stack Engineer with amazing JavaScript skills. He is the author of popular open source projects like Typy, React Socks, React RenderInBrowser, Dev Landing Page and more.`,
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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
