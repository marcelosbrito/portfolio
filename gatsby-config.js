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
      queryParams: { populate: "*" },
    },
    {
      singularName: "project",
      queryParams: { populate: "*" },
    },
    {
      singularName: "blog",
      queryParams: { populate: "*" },
      // SEM markdownFields, SEM textFields
    },
  ],
  singleTypes: [
    {
      singularName: "about",
      queryParams: { populate: "*" },
    },
  ],
  skipFileDownloads: true,
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
    `gatsby-plugin-image`,
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
              family: "Montserrat",
              variants: ["400", "700"],
            },
            { family: "Open Sans" },
          ],
        },
      },
    },
  ],
}