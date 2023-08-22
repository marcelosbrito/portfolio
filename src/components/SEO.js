import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle, siteUrl, image, twitterUsername } =
    site.siteMetadata
  return (
    <>
      <html lang="en-US" />
      <title>{`${title} | ${siteTitle}`}</title>
      <link id="icon" rel="icon" href="favico.png" />
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/*twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </>
  )
}

export default SEO
