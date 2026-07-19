import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  const imageUrl = image?.localFile?.relativePath || ""

  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        {image?.localFile && (
          <img src={`/${imageUrl}`} className="blog-img" alt={title} />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Blog