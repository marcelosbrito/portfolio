import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
  data: {
    allStrapiBlog: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiBlog(sort: { date: DESC }) {
      nodes {
        slug
        title
        date(formatString: "MMMM Do, YYYY")
        id
        desc
        category
        image {
          url
          provider
          provider_metadata {
            public_id
            resource_type
          }
          formats {
            thumbnail {
              url
            }
            small {
              url
            }
          }
        }
      }
    }
  }
`

export default Blog
