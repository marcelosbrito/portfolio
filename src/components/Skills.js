import React from "react"
import Title from "./Title"
// import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import img from "../assets/code.png"
import { Link } from "gatsby"

const query = graphql`
  query {
    about: allStrapiAbout {
      nodes {
        title
        subtitle
        info
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

const Skills = () => {
  const data = useStaticQuery(query)

  const {
    about: { nodes: about },
  } = data

  const { title, subtitle, image, info, stack } = about[0]

  return (
    <section className="about-page">
      <div className="section-center about-center">
        {/* <img src={img} className="about-img" /> */}
        {image && (
          <GatsbyImage
            image={getImage(image.localFile)}
            className="about-img"
          />
        )}
        <article className="about-text">
          <Title title={title} />
          <div className="about-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
          <p className="about-subtitle">{subtitle}</p>
          <p>{info}</p>
          <div>
            <Link to="/about" className="about-link">
              Keep reading my bio
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills
