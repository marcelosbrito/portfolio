import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      {image.localFile && (
        <GatsbyImage
          image={getImage(image.localFile)}
          className="project-img"
        />
      )}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title || "default title"}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
