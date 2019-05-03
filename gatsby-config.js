module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
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
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Desmond Lee's Website",
        short_name: "Desmond Lee",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#3DAEE3",
        display: "browser",
        icons: [
          {
            src: `/logo-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/logo-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      }
    },
    `gatsby-plugin-offline`
  ],
}
