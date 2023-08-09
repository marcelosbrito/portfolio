import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
    query {
      fixed: file(relativePath: {eq: "hero-img.png"}) {
        childImageSharp {
          gatsbyImageData(width: 400, height: 400)
        }
      }
    }
  `

const Hero = () => {
  const image = useStaticQuery(query)
  return (
    <GatsbyImage image={getImage(image.fixed)} alt="" />
  )
}

export default Hero
