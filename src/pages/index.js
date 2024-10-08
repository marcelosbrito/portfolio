import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
// import Services from "../components/Services"
import Skills from "../components/Skills"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default function Home({ data }) {
  const {
    allStrapiProject: { nodes: projects },
    allStrapiBlog: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Hero />
      {/* <Services /> In case I became a freelancer*/}
      <Skills />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="latest articles" showLink />
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Home" description="This is our Homepage" />
)

export const query = graphql`
  query {
    allStrapiProject(sort: { id: DESC }, filter: { feature: { eq: true } }) {
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
    allStrapiBlog(sort: { date: DESC }, limit: 3) {
      nodes {
        slug
        content {
          data {
            id
            content
          }
        }
        title
        date(formatString: "MMMM Do, YYYY")
        id
        desc
        category
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
