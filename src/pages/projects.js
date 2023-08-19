import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="section projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Project" description="This is our Project page" />
)

export const query = graphql`
  query {
    allStrapiProject {
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

export default ProjectsPage
