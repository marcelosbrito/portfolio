import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import ReactMarkdown from "react-markdown"

const About = ({
  data: {
    bio: { nodes },
  },
}) => {
  const { title, content } = nodes[0]
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <Title title={title} />
            <ReactMarkdown children={content.data.content} />
          </article>
          <Link to="/contact" className="btn">
            contact me
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <SEO title="About" description="About me" />

export const query = graphql`
  query {
    bio: allStrapiBio {
      nodes {
        title
        content {
          data {
            content
          }
        }
      }
    }
  }
`

export default About
