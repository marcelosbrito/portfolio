import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
// import Blogs from "../components/Blogs";

export default function Home({ data }) {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiProject(filter: { feature: { eq: true } }) {
      nodes {
        id
        description
        title
        url
        github
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
