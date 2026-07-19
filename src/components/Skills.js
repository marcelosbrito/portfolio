import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
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
          url
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

  const strapiURL = process.env.GATSBY_STRAPI_API_URL || "http://localhost:1337"
  const imageUrl = image?.url?.startsWith("http") ? image.url : `http://localhost:1337${image.url}`

  return (
    <section className="about-page">
      <div className="section-center about-center">
        {image?.url && (
          <img
            src={imageUrl}
            alt={image.alternativeText || title}
            className="about-img"
          />
        )}
        <article className="about-text">
          <Title title={title} />
          <div className="about-stack">
            {stack.map(item => (
              <span key={item.id}>{item.title}</span>
            ))}
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