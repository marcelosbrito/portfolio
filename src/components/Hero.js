import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  query {
    heroimg: file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

const Hero = () => {
  const image = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>hi, i'm marcelo</h1>
            <h4>frontend web developer</h4>
            <SocialLinks />
            <p>
              I'm a lifelong learner and I love to build, explore, create
              products and digital experiences for the web.
            </p>
            <Link to="/contact" className="btn">
              contact me
            </Link>
          </div>
        </article>
        <GatsbyImage image={getImage(image.heroimg)} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
