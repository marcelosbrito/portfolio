import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, stack, info, image } = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          {image && (
            <GatsbyImage
              image={getImage(image.localFile)}
              className="about-img"
            />
          )}
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: allStrapiAbout {
      nodes {
        title
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

export default About
