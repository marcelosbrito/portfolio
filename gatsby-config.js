/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "job",
    },
    {
      singularName: "project",
    },
    {
      singularName: "blog",
    },
  ],
  singleTypes: ["about", "bio"],
  //remoteFileHeaders: {
  /**
   * Customized request headers
   * For http request with a image or other files need authorization
   * For expamle: Fetch a CDN file which has a security config when gatsby building needs
   */
  //  Referer: "https://your-site-domain/",
  // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  //},
}

module.exports = {
  siteMetadata: {
    title: "Marcelo Brito",
    description: "Marcelo Brito Portfolio Site",
    author: "@marcelobrito",
    twitterUsername: "@_marcelo_brito",
    image: "/twitter-img.png",
    siteUrl: "https://marcelobritodev.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
            { family: "Open Sans" },
          ],
        },
      },
    },
  ],
}
