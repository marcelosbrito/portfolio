import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content } = data.blog
  const markdownContent = content?.data?.content ?? ''
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </article>
          <Link to="/blog" className="btn center-btn">
            back
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlog(slug: { eq: $slug }) {
      content {
      data {
        content
      }
    }
      title
      desc
    }
  }
`

export default ComponentName
